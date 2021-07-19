---
title: BOJ - 전깃줄
date: 2020-10-05 15:35:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

> 잘못된 부분이 있다면 친절히 말씀해주시면 감사하겠습니다🙏

## 문제

BOJ 2565번 : [전깃줄](https://www.acmicpc.net/problem/2565)

## 접근 방법

조합을 구해야하는 문제처럼 보이지만 **증가하는 가장 긴 수열**을 구하는 문제이다!

### 설명

문제의 예시를 가지고 생각해보자. 서로 연결되어 있는 전봇대A와 전봇대B의 위치 쌍은 `[(1, 8), (3, 9), ... ]`으로 나타낼 수 있다. 하지만 입력된 위치 쌍이 정렬되어 있지 않으므로 *sort()*를 사용해 정렬해준다. 참고로 튜플 정렬의 경우 가장 앞의 요소를 기준으로 정렬한다.

이 때의 전봇대B의 위치를 나열하면 `[8, 2, 9, 1, 4, 6, 7, 10]`이다. 이 리스트에서 **증가하는 가장 긴 부분 수열(Longest Increasing Subsequence)**을 구하면 전깃줄이 서로 겹치지 않고 연결되게 된다. 예를 들면 전봇대 쌍 `(1, 8)`과 `(2, 2)`의 경우 증가하지 않는데 이 경우 전깃줄이 겹치게 된다. 반면 `(2, 2)`, `(6, 4)`, `(10, 10)`의 경우 증가하는 수열이므로 전깃줄이 겹치지 않는다.

### 결론

전봇대 쌍을 정렬한 다음 전봇대B의 위치 리스트를 가지고 **증가하는 가장 긴 부분 수열**을 구하여, <u>겹치지 않고 연결할 수 있는 최대 전깃줄 수</u>를 구한다. 이렇게 구한 최대값을 $N$에서 빼주면 전깃줄의 최소 개수를 구할 수 있다.

## 교훈

가장 긴 증가하는 부분 수열, 가장 긴 바이토닉 부분 수열 등 **수열 문제**를 모두 모아서 정리해야겠다.

## 소스 코드

```python
n = int(input())
lines = [(0, 0)]
for _ in range(n):
  a, b = map(int, input().split())
  lines.append((a, b))
lines.sort()

table = [0] + [1]*n
for i in range(1, n+1):
  for j in range(i):
    if lines[i][1] > lines[j][1]:
        # 아래 2개의 수 중 최대값으로 table[i]를 갱신한다.
        # 1. 그 전 숫자 j로 인해 갱신된 table[i]
        # 2. 현재 숫자 j로 인해 갱신될 table[j]+1
        table[i] = max(table[i], table[j]+1)

print(n - max(table))
```
