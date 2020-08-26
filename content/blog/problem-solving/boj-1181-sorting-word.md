---
title: 📝 BOJ - 단어 정렬
date: 2020-08-26 13:39:00
category: problem-solving
thumbnail: './img/thumbnail.png'
draft: false
---

## 문제

BOJ 1181번 : [단어 정렬](https://www.acmicpc.net/problem/1181)

## 접근 방법

프로그래머스의 [문자열 내 마음대로 정렬하기](../programmers-l1-sorting-string-as-i-want) 문제와 비슷한 문제이다. (만약 이 문제를 안 푸셨다면 단어 정렬 문제에 이어서 푸는 것을 추천드립니다!) 정렬을 하되 <u>①단어의 길이를 기준으로 정렬하고, ②길이가 같다면 사전 순으로 정렬</u>하는 문제이다! [문자열 내 마음대로 정렬하기](../programmers-l1-sorting-string-as-i-want) 문제와 비교한다면 ①번 조건을 제외하고 비슷하지 않은가? **풀이도 해당 풀이와 정말 비슷하다.** 위의 조건을 명심하고 알고리즘을 짜면 다음과 같다.

- 입력으로 단어 문자열을 입력 받아 `words` 리스트에 저장한다.
- `words` 리스트를 집합 자료형으로 바꾸어 중복을 없애고 다시 리스트로 변환한다.
- 변환된 리스트를 *sorted()*로 정렬시킨다.
- `key`를 문자열의 길이로 지정해 길이 순으로 정렬시킨다.

## 소스 코드

```python
import sys

words = []
for _ in range(int(sys.stdin.readline())):
  words.append(sys.stdin.readline().strip())

words = sorted(list(set(words)))
words = sorted(words, key=lambda x:len(x))
for word in words:
  print(word)
```
