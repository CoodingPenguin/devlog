---
title: 📝 BOJ - 직각삼각형
date: 2020-08-15 01:50:00
category: '📝 Problem Solving'
thumbnail: './img/thumbnail.png'
draft: false
---

## 문제

BOJ 4153번 : [직각삼각형](https://www.acmicpc.net/problem/4153)

## 접근 방법

피타고라스의 삼각형을 생각하면 된다. 일단 가장 긴 변이 빗변이므로 입력을 받고나서 빗변의 위치를 고정할 필요가 있다. 그래서 `sorted()`를 사용하여 **빗변의 위치가 항상 오른쪽에 있도록**한다. 그리고 <u>피타고라스의 삼각형 공식</u>으로 직각삼각형 여부를 판단한다.

이 때 나처럼 `is_right` 함수로 구현해도 되지만 단순히 판단만 하는 함수이므로 **lambda 식**으로 간단히 구현하는 것도 좋다.

## 소스 코드

```python
def is_right(x, y, z):
  if z**2 == (x**2+y**2):
    return 'right'
  return 'wrong'


while True:
  x, y, z = sorted(map(int, input().split()))
  if not x+y+z:
    break
  print(is_right(x, y, z))
```
