---
title: PROGRAMMERS - ๋ชจ์๊ณ ์ฌ
date: 2020-08-17 23:12:00
category: "๐ Problem Solving"
thumbnail: "./img/thumbnail-programmers.png"
draft: false
---

![thumbnail](./img/thumbnail-programmers.png)

> ์๋ชป๋ ๋ถ๋ถ์ด ์๋ค๋ฉด ์น์ ํ ๋ง์ํด์ฃผ์๋ฉด ๊ฐ์ฌํ๊ฒ ์ต๋๋ค๐

## ๋ฌธ์ 

PROGRAMMERS Level 1 - [๋ชจ์๊ณ ์ฌ](https://programmers.co.kr/learn/courses/30/lessons/42840)

## ์ ๊ทผ ๋ฐฉ๋ฒ

### ๋ฐฉ๋ฒ 1.

๋ด๊ฐ ์ ๊ทผํ ๋ฐฉ๋ฒ์ด๋ค. ํจ์๋ฅผ ํฌ๊ฒ **3๊ฐ์ง**๋ก ๊ตฌํํ์๋ค.

1. 3๋ช์ ์ํฌ์๋ค์ **์ ๋ต ํจํด**์ ๋ฆฌ์คํธ๋ก ๋ง๋ ๋ค.
2. *List Comprehension*์ผ๋ก ์ํฌ์์ ๋ต๊ณผ ์ค์  ๋ต์ ๋น๊ตํ์ฌ ๋ง์ผ๋ฉด `True`, ํ๋ฆฌ๋ฉด `False`๋ฅผ ๋ฐํํ๋๋ก ํ๋ค.
   - ๊ทธ๋ฆฌ๊ณ  `sum()`์ ์ด์ฉํด ๋ง์ ๊ฐ์๋ฅผ ์ ์ฅํ๋ค.
3. ๋ง์ ๊ฐ์๋ฅผ ๋ฆฌ์คํธ์ ๋ฃ๊ณ  **์ต๊ณ ์ **์ธ `maxScore`๋ฅผ ๊ตฌํ์ฌ **`maxScore`์ธ ํ์๋ค**์ ๋ฆฌ์คํธ์ ๋ฃ๊ณ  ๋ฐํํ๋ค.

### ๋ฐฉ๋ฒ 2.

๋ค๋ฅธ ์ฌ๋์ ํ์ด๋ฅผ ๋ณด๋ `cycle`์ ์ด์ฉํ์ฌ ๊ตฌํํ ๊ฒ์ด ์์ด์ ์ ๋ฆฌํด๋ดค๋ค. `cycle`์ *itertools ๋ชจ๋*์ ๊ฐ์ฒด ์ค ํ๋์ธ๋ฐ <u>element๋ค์ด ๋ค ์๋ชจ(=next)๋๋ฉด ๋ค์ ์ฒ์์ผ๋ก ๋์๊ฐ element๋ฅผ ๋ฐํ</u>ํ๋ค. ํนํ ์ด ๋ฌธ์ ์ฒ๋ผ **ํน์  ํจํด**์ ๋์์ผ ํ๋ ๊ฒฝ์ฐ๋ผ๋ฉด ์ข์ ๊ฒ ๊ฐ๋ค.

์๊ณ ๋ฆฌ์ฆ ์์ฒด๋ ํจํด์ `cycle`๋ก ๊ตฌํํ ๊ฒ๊ณผ `next`๋ก element๋ฅผ ํ๋์ฉ ์๋ชจํ๊ณ  ๋ค์ ๋๋์๊ฐ ์ ๊ทผํ ๊ฒ๋ง ๋นผ๊ณ ๋ ๋น์ทํ๋ค.

## ๊ตํ

์์ ๋๋ ์๊ฐ์ด [ํ์ด์ฌ ์์ต์](https://docs.python.org/ko/3/tutorial/index.html)๋ฅผ ๊ฐ์ง๊ณ  <u>ํ์ด์ฌ์ ์ ์ฒด์ ์ธ ๋ฌธ๋ฒ์ด๋ ์งํฅ์ ์ ํ ๋ฒ ์ง์ด๋ด์ผํ๋ค</u>๋ ์๊ฐ์ด ๋ ๋ค. ๊ทธ๋ฆฌ๊ณ  **๋ค๋ฅธ ์ฌ๋๋ค ํ์ด๋ฅผ ๊ผญ ๋ณด๋ ์ต๊ด**์ ๊ฐ์ ธ์ผ๊ฒ ๋ค. ๋ง์ฝ ์ด ๋ฌธ์ ์์ ์ ๋ดค๋ค๋ฉด `cycle`์ ํตํ ํ์ด๋ฅผ ์๊ฐ์ง๋ ๋ชปํ์ ํ๋ ๋ง์ด๋ค.

## ์์ค ์ฝ๋

### ๋ฐฉ๋ฒ 1.

```python
def solution(answers):
    # ์ํฌ์ ํจํด
    result = []
    n = len(answers)
    p1 = [1, 2, 3, 4, 5]
    p2 = [2, 1, 2, 3, 2, 4, 2, 5]
    p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    # ์ฑ์ 
    p1 = sum([True if p1[i%5] == answers[i] else False for i in range(n)])
    p2 = sum([True if p2[i%8] == answers[i] else False for i in range(n)])
    p3 = sum([True if p3[i%10] == answers[i] else False for i in range(n)])

    # ๋์ ์์ผ๋ก ์ ๋ ฌ
    total = [p1, p2, p3]
    maxScore = max(total)
    for p, s in enumerate(total):
        if total[p] == maxScore:
            result.append(p+1)
    return result
```

### ๋ฐฉ๋ฒ 2.

```python
from itertools import cycle

def solution(answers):
    # ์ํฌ์ ํจํด
    people = [
        cycle([1, 2, 3, 4, 5]),
        cycle([2, 1, 2, 3, 2, 4, 2, 5]),
        cycle([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]),
    ]
    totalScore = [0, 0, 0]    # ์ต์ข ์ ์
    # ์ฑ์ 
    for ans in answers:
        for idx, aList in enumerate(people):
            if next(aList) == ans:
                totalScore[idx] += 1
    maxScore = max(totalScore)  # ์ต๊ณ ์ 

    return [idx+1 for idx, score in enumerate(totalScore) if score == maxScore]
```
