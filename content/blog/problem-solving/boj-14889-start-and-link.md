---
title: 📝 BOJ - 스타트와 링크
date: 2020-09-11 00:09:00
category: '📝 Problem Solving'
thumbnail: './img/thumbnail.png'
draft: false
---

## 문제

BOJ 14889번 : [스타트와 링크](https://www.acmicpc.net/problem/14889)

## 접근 방법

[연산자 끼워놓기](../boj-14888-push-operators/)와 거의 똑같은 문제이다. 여기서는 **가능한 팀의 조합**을 구하는 것이다. 이 문제도 비슷하게 *itertools*의 *combinations*를 사용하거나 DFS 코드를 구현하여 해결할 수 있다.

### 방법 1.

*combinations*를 사용하여 **모든 팀 조합**을 구했고 이를 `teams`에 저장하였다. 이 때 한 팀의 팀원을 정하면 다른 팀의 팀원은 알아서 정해지므로 한 팀의 조합만 구하였다. 이 경우의 수를 다 순회하며 다음과 같은 과정을 거친다.

- *set*과 집합 연산을 이용하여 다른 팀원을 구한다.
- `get_score`로 각 팀의 능력치의 합을 구한다.
- 두 팀의 능력치 차를 구해 `min_diff`와 비교하여 최소값을 갱신한다.

### 방법 2.

이번에는 **DFS를 이용한 풀이**이다. 저번처럼 <u>언제 분기하는지와 언제 리프노드가 되는지</u>를 살펴보자.

- `분기점` : 어떤 팀원을 팀에 넣을건지
- `리프노드의 조건` : 팀원의 수가 전체 인원의 절반일 때

<br>

그렇게 해서 리프노드에 도착하면 각 팀의 능력치의 합의 차이를 구해 최소값을 갱신해주면 된다. 하지만 여기서 끝내면 안 된다! 왜냐하면 **중복**을 고려하지 않아 더 많은 노드를 순회해야하기 때문이다.

그래서 DFS 코드에 `teams and teams[0]>1` 조건을 꼭 추가해줘야한다. `teams[0]`은 **첫 번째 선수**를 뜻한다. 이 선수는 <u>2개의 팀 중 하나에 있으</u>므로 `teams[0]`이 만들어내는 조합 후의 조합들은 사실 그 전에 구한 조합과 겹친다. 즉, teamA의 조합을 다 구했는데 teamB의 조합을 또 `teams[0]`을 써서 구하는 꼴이다. 그래서 이 조건을 꼭 추가해줘야한다!

## 교훈

이런 류의 문제는 **직접 트리를 그리면** 직관적으로 더 파악하기 쉬울 것 같다. 다음에 DFS나 백트래킹 문제를 만나면 직접 트리를 그려가면서 `분기점`과 `리프노드의 조건`을 따져봐야겠다.

## 소스 코드

### 방법 1

```python
from itertools import combinations
import sys

def get_score(team):
  score = 0
  for player in team:
    for others in (set(team)-set([player])):
      score += board[player][others]
  return score


N = int(sys.stdin.readline())
board = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]
teams = list(combinations(range(N), N//2))
teams = teams[:len(teams)//2]
min_diff = 1000

# 팀의 경우의 수를 다 루핑
for team in teams:
  # 팀A와 팀B를 구함
  teamA, teamB = team, tuple((set(range(N)) - set(team)))
  # 각 팀의 점수를 구함
  teamA_score, teamB_score = get_score(teamA),get_score(teamB)
  # 최소값 갱신
  min_diff = min(min_diff, abs(teamA_score - teamB_score))

print(min_diff)
```

### 방법 2.

```python
# 두 명 같은 팀일 때의 점수
def check(team):
  score = 0
  for i in team:
    for j in team:
      score += board[i-1][j-1]
  return score

team = []
def dfs(player):
  global minScore
  if team and team[0] > 1:
    return
  if len(team) == N//2:
    teamA = check(team)
    teamB = check(list(set(range(1, N+1))-set(team)))
    minScore = min(minScore, abs(teamA - teamB))
    return
  for i in range(player+1, N+1):
    team.append(i)
    dfs(i)
    team.pop()


N = int(input())
board = [list(map(int, input().split())) for _ in range(N)]
minScore = 1000
dfs(0)

print(minScore)
```
