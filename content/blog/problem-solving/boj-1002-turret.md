---
title: BOJ - ํฐ๋ 
date: 2020-08-15 02:09:00
category: "๐ Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

> ์๋ชป๋ ๋ถ๋ถ์ด ์๋ค๋ฉด ์น์ ํ ๋ง์ํด์ฃผ์๋ฉด ๊ฐ์ฌํ๊ฒ ์ต๋๋ค๐

## ๋ฌธ์ 

BOJ 1002๋ฒ : [ํฐ๋ ](https://www.acmicpc.net/problem/1002)

## ์ ๊ทผ ๋ฐฉ๋ฒ

**๋ ์์ ์์น๊ด๊ณ**๋ฅผ ๋ชจ๋ ๊ณ ๋ คํ๋ฉด ๋๋ค. ๊ณ ๋ฑํ๊ต ๋ ์๋ง ๊ณ ๋ฑ์ํ1์ ๋์๋ ๋ด์ฉ์ผ๋ก ๊ธฐ์ตํ๋ค. ์ ๊ธฐ์ต์ด ์ ๋๋ค๋ฉด [์ฌ๊ธฐ](https://mathbang.net/101)๋ฅผ ์ฐธ๊ณ !

๊ทธ๋๋ ์งง๊ฒ ์์ฝํ๋ฉด ๋ค์๊ณผ ๊ฐ๋ค. ์ด ๋ ๋ ์ ์ฌ์ด์ ๊ฑฐ๋ฆฌ๋ `cenDist`, ๋ ์์ ๊ฐ ๋ฐ์ง๋ฆ์ `r1`, `r2`๋ผ๊ณ  ํ์.

- **๊ต์ฐจ์  0๊ฐ** : cenDist > r1+r2 , cenDist < |r1-r2|
- **๊ต์ฐจ์  2๊ฐ** : |r1-r2| < cenDist < r1+r2
- **๊ต์ฐจ์  ๋ฌดํ๊ฐ** : cenDist == 0 && r1 == r2
- **๊ต์ฐจ์  1๊ฐ** : cenDist == r1+r2, cenDist == |r1-r2|
  - ํ์ง๋ง float์ **== ๋น๊ต**๋ ๋ถ๊ฐ๋ฅํ๋ฏ๋ก else๋ก ์ฒ๋ฆฌํ๋ค.

## ์์ค ์ฝ๋

```python
import math

def cal_dist(x1, y1, x2, y2):
  return math.sqrt((x1-x2)**2+(y1-y2)**2)

def cal_pos(x1, y1, r1, x2, y2, r2):
  cenDist = cal_dist(x1, y1, x2, y2)
  if cenDist > r1+r2 or cenDist < abs(r1-r2):
    return 0
  elif cenDist < r1+r2 and cenDist > abs(r1-r2):
    return 2
  elif cenDist == 0 and r1==r2:
    return -1
  else:
    return 1


for _ in range(int(input())):
  x1, y1, r1, x2, y2, r2= map(int, input().split())
  print(cal_pos(x1, y1, r1, x2, y2, r2))

```
