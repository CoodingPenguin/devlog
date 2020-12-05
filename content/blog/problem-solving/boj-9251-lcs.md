---
title: 📝 BOJ - LCS
date: 2020-11-28 23:51:00
category: problem-solving
thumbnail: './img/thumbnail.png'
draft: false
---

## 문제

BOJ 9251번 : [LCS](https://www.acmicpc.net/problem/9251)

## 접근 방법

영어 대문자로 이루어지고 같은 길이의 문자열 2개가 주어졌을 때, 두 문자열의 **최장 공통 부분 수열(Longest Increasing Subsequence, LCS)**을 구하는 문제이다.

### 예시

### 결론

## 교훈

## 소스코드

```python
seq1, seq2 = input(), input()
l1, l2 = len(seq1), len(seq2)
table = [[0]*(l2+1) for _ in range(l1+1)]

for i in range(1, l1+1):
  for j in range(1, l2+1):
    if seq1[i-1] == seq2[j-1]:
      table[i][j] = table[i-1][j-1] + 1
    else:
      table[i][j] = max(table[i-1][j], table[i][j-1])

print(table[l1][l2])
```
