---
title: PROGRAMMERS - K๋ฒ์งธ ์
date: 2020-08-18 17:38:00
category: "๐ Problem Solving"
thumbnail: "./img/thumbnail-programmers.png"
draft: false
---

![thumbnail](./img/thumbnail-programmers.png)

> ์๋ชป๋ ๋ถ๋ถ์ด ์๋ค๋ฉด ์น์ ํ ๋ง์ํด์ฃผ์๋ฉด ๊ฐ์ฌํ๊ฒ ์ต๋๋ค๐

## ๋ฌธ์ 

PROGRAMMERS Level 1 - [K๋ฒ์งธ ์](https://programmers.co.kr/learn/courses/30/lessons/42748)

## ์ ๊ทผ ๋ฐฉ๋ฒ

์ฌ์ด ๋ฌธ์ ์ด๋ค! **์ฌ๋ผ์ด์ฑ**, **์ ๋ ฌ**, **์ธ๋ฑ์ฑ** ์ด 3๊ฐ์ง๋ฅผ ์ ์ ํ ์ฌ์ฉํ๋ฉด ๋๋ค. ์ด ๋ ํ `command`๊ฐ _i_, _j_, *k*๋ก ์ด๋ฃจ์ด์ ธ ์๋ค๊ณ  ์๊ฐํ์.

1. `array`๋ฅผ *i-1*๋ถํฐ *j-1*๊น์ง ์ฌ๋ผ์ด์ฑํ๋ค.
2. ์ฌ๋ผ์ด์ฑํ ๋ฐฐ์ด์ `sorted()`๋ก ์ ๋ ฌํ๋ค. ๊ทธ๋ฆฌ๊ณ  *k-1*๋ฒ์งธ ์์๋ฅผ `answer` ๋ฆฌ์คํธ์ ์ถ๊ฐํ๋ค.
3. ๋ชจ๋  `command`๋ฅผ ๋ค ๋ ๋๊น์ง 1, 2์ ๋ฐ๋ณตํ๋ค.

## ์์ค ์ฝ๋

```python
def solution(array, commands):
    answer = []
    for command in commands:
        i, j, k = command
        arr = array[i-1:j]
        answer.append(sorted(arr)[k-1])
    return answer
```
