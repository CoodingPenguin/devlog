---
title: 📝 BOJ - 단어 공부
date: 2020-02-29 23:43:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

## 문제

BOJ 1157번 : [단어 공부](https://www.acmicpc.net/problem/1157)

## 접근 방법

우선 입력과 출력을 보면 출력값이 `?` 아니면 `알파벳 대문자`이므로 우선 입력 받은 단어를 대문자로 바꿔준다. 알파벳 26자리를 카운팅할 리스트를 생성해 0으로 초기화한다. 그리고 단어의 한 글자씩 접근하여 카운팅을 한다. 그리고 무조건 **정렬을 한 리스트**를 따로 생성해준다! 나중에 이게 유용하게 쓰인다.

출력의 경우의 수는 2가지이다.

- 같은 개수를 가진 알파벳이 2개 이상인 경우 → `?`를 출력
- 같은 개수를 가진 알파벳이 1개인 경우 → `해당 알파벳을 대문자`로 출력

<br>

첫 번째 경우는 **정렬한 알파벳 카운팅 리스트의 마지막 요소와 마지막에서 두 번째 요소가 같을 경우**랑 같다. 두 번째 경우는 **원본 알파벳 카운팅 리스트에서 가장 큰 정수를 가진 요소의 인덱스를 뽑아**내 구할 수 있다.

<br>

> C랑 Java 등 다른 언어 써본지가 오래되서 가물가물한데 파이썬에도 아스키코드와 정수를 상호변환해주는 함수가 존재한다. **정수→아스키코드**일 경우 `chr(정수)`를 쓰면 되고, **아스키코드→정수**일 경우 `ord(아스키코드)`를 쓰면 된다. 이 때의 아스키코드는 하나의 문자로 이루어진 문자열이다.

## 소스 코드

```python
W = input().upper()

alphas = [0]*26
for w in W:
    alphas[ord(w) - ord('A')] += 1

countSorted = sorted(alphas)
if countSorted[-1] == countSorted[-2]:
    print("?")
else:
    print(f"{chr(alphas.index(countSorted[-1])+ord('A'))}")
```
