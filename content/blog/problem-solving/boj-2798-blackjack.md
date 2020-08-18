---
title: 📝 BOJ - 블랙잭
date: 2020-08-18 14:48:00
category: problem-solving
thumbnail: './img/thumbnail.png'
draft: false
---

## 문제

BOJ 2798번 : [블랙잭](https://www.acmicpc.net/problem/2798)

## 접근 방법

**브루트포스(Brute Force)**의 `bronze🥉` 문제이다. 브루트포스 문제는 <u>모든 경우의 수를 한 번씩 다 돈다</u>고 생각하면 된다. 하지만 그만큼 시간이 많이 걸리므로 최대한 <u>그 범위를 줄이는 쪽</u>으로 생각해야 한다.

이번 블랙잭의 경우 ①입력으로 받은 `M`보다 작거나 같고, ②주어진 숫자 카드를 3장을 뽑아서 **가장 가까운 합**을 구하는 게 목적이다. 결국에는 3장의 조합을 다 돌아봐야한다. 하지만 중간에 **탈출 조건**이 존재한다! 바로 `M`과 합이 같을 때이다.

그 외에는 최대값을 저장하는 `maxNum`보다는 크고 `M`보다는 작은 모든 경우의 수를 다 구해봐야 한다. 그래서 `maxNum`보다 큰 경우 최대값을 다시 갱신한다. 다 순회한 뒤 `maxNum`을 반환하면 끝이다!

## 교훈

브루트포스 문제여도 <u>범위를 최대한 줄일 수 있는 방향</u>을 생각해보자.

## 소스 코드

```python
def blackjack(n, m, cards):
  maxNum = 0
  for i in range(n-2):
    for j in range(i+1, n-1):
      for k in range(j+1, n):
        sumOfCards = cards[i] + cards[j] + cards[k]
        if sumOfCards > maxNum and sumOfCards <= m:
          if sumOfCards == m:
            return m
          maxNum = sumOfCards
  return maxNum

N, M = map(int, input().split())
cards = list(map(int, input().split()))
print(blackjack(N, M, cards))
```
