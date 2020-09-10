---
title: 📝 BOJ - 연산자 끼워넣기
date: 2020-09-10 18:30:00
category: problem-solving
thumbnail: './img/thumbnail.png'
draft: true
---

## 문제

BOJ 14888번 : [연산지 끼워넣기](https://www.acmicpc.net/problem/14888)

## 접근 방법

사칙연산자의 가능한 개수를 받아 이 연산자들로 만들 수 있는 수들 중 최대값과 최소값을 구하는 문제이다. 즉 가장 중요한 것은 **사칙연산자의 조합**이다. 이 조합은 다음과 같이 구할 수 있다.

- `방법 1` *itertools*의 *permutations()*를 사용하여 가능한 경우의 수를 구함.
- `방법 2` **DFS 코드**를 구현하여 가능한 모든 결과를 다 순회하여 구함.

### 방법 1.

내가 사용한 방법이다. *permutations()*로 가능한 연산자의 경우의 수를 다 구하였다. 하지만 한 연산자의 개수가 2개 이상인 경우 중복된 경우의 수가 존재한다. 중복 제거를 위해 *set()*을 씌워 없애주었다. 이렇게 데이터가 다 준비되면 다음과 같은 과정으로 연산자의 경우의 수인 `operatersList`를 순회한다. **최소값과 최대값**을 구하였다.

### 방법 2.

## 교훈

## 소스 코드

### 방법 1.

```python
from itertools import permutations

# 입력
n = int(input())
operands = list(map(int, input().split()))
raws = list(map(int, input().split()))
operators = list()
for operator, number in enumerate(raws):
  operators.extend([operator]*number)
operatorsList = list(set(permutations(operators)))

# 출력
MIN = MAX = 0
for i, operators in enumerate(operatorsList):
  result = operands[0]
  for operand, operator in zip(operands[1:], operators):
    if operator == 0:
      result += operand
    elif operator == 1:
      result -= operand
    elif operator == 2:
      result *= operand
    else:
      result /= operand
      result = int(result)
  if i == 0:
    MIN = MAX = result
  MIN = min(result, MIN)
  MAX = max(result, MAX)

print(MAX)
print(MIN)

```

### 방법 2.

```python
# 입력
n = int(input())
operands = list(map(int, input().split()))
add, minus, mul, div = map(int, input().split())

# 최소/최대값 초기화
MIN = 1e10
MAX = -1e10

def dfs(i, now):
    global MIN, MAX, add, minus, mul, div

    # 모든 operands를 다 돌았을 경우
    # 연산이 완료됐으므로 현재값과 최소/최대값 비교
    if i == n:
        MAX = max(MAX, now)
        MIN = min(MIN, now)
    # 다 돌지 않았을 경우
    # 즉 아직 연산할 게 남아있는 경우
    else:
        # 사칙연산이 가능한 경우
        # 1. 연산자를 소모했으므로 -1
        # 2. 그 다음 피연산자 위치와 계산 결과를 dfs로 넘김
        # 3. 2.가 끝났을 경우 다시 +1로 복구
        if add > 0:
            add -= 1
            dfs(i + 1, now + operands[i])
            add += 1
        if minus > 0:
            minus -= 1
            dfs(i + 1, now - operands[i])
            minus += 1
        if mul > 0:
            mul -= 1
            dfs(i + 1, now * operands[i])
            mul += 1
        if div > 0:
            div -= 1
            dfs(i + 1, int(now / operands[i]))
            div += 1


dfs(1, operands[0])

print(MAX)
print(MIN)
```
