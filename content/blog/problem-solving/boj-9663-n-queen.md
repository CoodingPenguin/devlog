---
title: BOJ - N-Queen
date: 2020-09-01 12:35:00
category: "๐ Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

> ์๋ชป๋ ๋ถ๋ถ์ด ์๋ค๋ฉด ์น์ ํ ๋ง์ํด์ฃผ์๋ฉด ๊ฐ์ฌํ๊ฒ ์ต๋๋ค๐

## ๋ฌธ์ 

BOJ 9663๋ฒ : [N-Queen](https://www.acmicpc.net/problem/9663)

## ์ ๊ทผ ๋ฐฉ๋ฒ

๋ฐฑํธ๋ํน์ ๊ฐ์ฅ ๋ํ์ ์ธ ๋ฌธ์ ์ธ N-Queen ๋ฌธ์ ์ด๋ค. ์๊ณ ๋ฆฌ์ฆ์ ์๋์ ์๊ฐํ๋๋ฐ ๊ธฐ์ต์ด ์ ์๋์ [์๊ณ ๋ฆฌ์ฆ ๊ธฐ์ด](http://www.yes24.com/Product/Goods/37582683) ์ฑ์ ์ฐพ์์ ๊ฐ๋์ ์ฝ๊ณ  ๊ตฌํํ๋ค. ๊ทผ๋ฐ ์ ์ ๋์๊ฐ์ ๋ค๋ฅธ ๋ถ๋ค์ ํ์ด๋ฅผ ์ฐธ๊ณ ํ์๋ค.

### ๋ฐฉ๋ฒ 1.

N-Queen์ ๊ฐ์ฅ ํํ ํ์ด์ด๋ค. ํ์ด๋ [ํ์ด๋ฆฌ์ฌ์ ํ์ด์ฌ Claude_U](https://claude-u.tistory.com/245)๋์ ํ์ด๋ฅผ ์ฐธ๊ณ ํ์๋ค!

- **0๋ถํฐ N-1 ์ด๊น์ง ํธ์ 1๊ฐ์ฉ ๋๋๋ค.** ๊ทธ๋์ผ N๊ฐ์ ํธ์ ๋ฐฐ์นํ  ์ ์๋ค.
- ์ฐจ๋ก๋ก ํธ์ ๋์ผ๋ฉด์ ์ด ํธ์ ์์น๊ฐ **์ ๋งํ์ง(promising)** ๊ฒ์ฌ๋ฅผ ํ๋ค.
  - ์ ๋งํ์ง ์๋ค๋ฉด ํด๋น ํธ์ ์์นธ์ผ๋ก ์ฎ๊ธด๋ค.
  - ์ ๋งํ๋ค๋ฉด ํด๋น ํธ์ ๊ณ ์ ์ํค๊ณ  ๋ค์ ์ด๋ก ๋์ด๊ฐ ๋ค๋ฅธ ํธ์ ๋ค์ 0๋ถํฐ ๊ฒ์ฌํ๋ค.

<br>

๊ธฐ๋ณธ์ ์ธ ๋ผ๋๋ ์ด๋ ๋ค. ๊ทธ๋ผ **์ ๋งํ๋ค**๋ ๊ฒ์ด ๋ฌด์จ ์๋ฏธ์ผ๊น? ์ ๋งํ๋ค๋ผ๋ ๊ฒ์ <u>์ด ๊ฒฝ์ฐ๊ฐ ์ฐ๋ฆฌ๊ฐ ์ํ๋ ๊ฒฝ์ฐ์ด๋</u>๋ฅผ ๋งํ๋ค. ์ฌ๊ธฐ์๋ <u>ํธ์ ์ด๋ ๊ฒ ๋ฐฐ์นํ์ ๋ ํธ์ด ์ํฅ๋ฐ์ง ์๋๋</u>์ด๋ค. ํธ์ ์ํ์ข์ฐ, ๋๊ฐ์  ๋ชจ๋  ๋ฐฉํฅ์ผ๋ก ์์ง์ด๋ฏ๋ก ๋ค์์ ์กฐ๊ฑด์ ๋ง์กฑํ๋ฉด **์ ๋งํ์ง ์๋ค**๋ผ๊ณ  ํ๋จํ๋ค.

- `์ํ` : ์ด์ด ๊ฐ์ ๋
- `๋๊ฐ์ ` : ํ์์์ ์ฐจ์ด๊ฐ ์ด์์์ ์ฐจ์ด์ ๊ฐ์ ๋

<br>

`๋๊ฐ์ `์ ๊ฒฝ์ฐ๋ฅผ ์ดํดํ๊ธฐ ์ํด ์์๋ฅผ ๋ค์ด๋ณด์. ๋ค์์ `4x4`์ ์ฒด์คํ์ด๋ค. ํ์ฌ 2๊ฐ์ ํธ์ด ๋์ฌ์ง ์ํ์ด๊ณ  ์ด ํธ์ ํ์ฌ ๊ฐ์ ๋๊ฐ์  ์์ ์์นํ๋ค. ํธ์๋ฅผ ์ํด 1๋ถํฐ๊ฐ ์๋ 0๋ถํฐ ์ผ๋ค.

![queens-diag](./img/queens-diag.png)

์์์ ๋ถํฐ ์์๋๋ก ๊ฐ ํธ์ ์์น๋ (1, 2)์ (3, 0)์ผ๋ก ํํ๋๋ค. ์ด ๋ ๋ ํธ์ ํ์์์ ์ฐจ์ด๋ 2์ด๊ณ , ์ด์์์ ์ฐจ์ด๋ ๋์ผํ๊ฒ 2์ด๋ค. **ํ๊ณผ ์ด์ ์ฐจ์ด๊ฐ ๊ฐ์์ง**๋ฅผ ์ด์ฉํ๋ฉด ๋ ํธ์ด ๊ฐ์ ๋๊ฐ์  ์์ ์๋์ง ์ ์ ์๋ค.

### ๋ฐฉ๋ฒ 2.

์ํ์ข์ฐ ๋๊ฐ์ ์ ๋ฃจํ๋ฅผ ๋๋ ค ํ์ธํ๋ ๊ฒ์ ๋งค์ฐ ๋นํจ์จ์ ์ด๋ค. ๊ทธ๋์ ์ด๋ฅผ ๋ณด์ํ ํ์ด๊ฐ ๋ค์์ ํ์ด์ด๋ค. ์ด ํ์ด๋ [๋ ๋ฐ์ค](https://rebas.kr/761)๋์ ํ์ด๋ฅผ ์ฐธ๊ณ ํ์๋ค.

์ํ์ข์ฐ ๋๊ฐ์ ์ ํ์ธํ๊ธฐ ์ํด ์ธ๋ก ์ค`|`, ์ค๋ฅธ์ชฝ ๋๊ฐ์  ์ค`\`, ์ผ์ชฝ ๋๊ฐ์  ์ค `/`์ ์ฒดํฌํ๊ธฐ ์ํ ๋ฐฐ์ด์ ์ ์ธํ๋ค. ์ด ๋ฐฐ์ด์ ํธ์ ์์น๊ฐ $(x, y)$์ผ ๋์ **๊ฐ์ ์ ์์ ์๋์ง๋ฅผ ํ์ธํด์ฃผ๋ ์งํ**์ด๋ค.

- ์ธ๋ก ์ค `|`: $y$
- ์ค๋ฅธ์ชฝ ๋๊ฐ์  ์ค `\`: $x+y$
- ์ผ์ชฝ ๋๊ฐ์  ์ค `/`: $x-y+N-1$

์๋ฅผ ๋ค์ด `4x4` ์ฒด์คํ์ ์์ ์์ ์ ์ฉํ๋ฉด ๋ค์๊ณผ ๊ฐ๋ค. ๋ง์ฝ ๊ฐ์ ์ ์์ ์์นํ๋ฉด ๊ฐ์ ๊ฐ์ ๊ฐ๊ฒ ๋๋ค.

![rebas-sol](./img/rebas-sol.png)

### ๋ฐฉ๋ฒ 3.

[๋ ๋ฐ์ค](https://rebas.kr/761)๋์ ํ์ด์ ์๊ฐ๋ ๋ ๋ค๋ฅธ ๋ฐฉ๋ฒ์ผ๋ก ์ผ๋งค๋ก ํธ๋ ๋ฐฉ๋ฒ์ด๋คใใใ ์ด ๋ฌธ์ ์ ์๋ ฅ ๋ฒ์๋ 1์์ 15๋ก, 15๊ฐ์ง ๊ฒฝ์ฐ์ ์๋ฅผ ๋ค ๊ตฌํด์ ์๋ ฅ์ ๋ฐ๋ผ ํด๋นํ๋ ๊ฐ์ ๋ฐํํ๋ฉด ๋๋ค.

## ์์ค ์ฝ๋

### ๋ฐฉ๋ฒ 1.

```python
import sys

def queens(i):
  global count
  # ๋ชจ๋  ํ์ ๋ค ๋์์ ๋
  if i == N:
    count += 1
  # ๋ค ๋์ง ๋ชปํ ๊ฒฝ์ฐ
  else:
    #ํด๋น ํ์ ์ด์ ํ์
    for j in range(N):
      col[i] = j
      if promising(i):
        queens(i+1)

def promising(i):
  for k in range(i):
    # ๊ฐ์ ์ด ํน์ ๊ฐ์ ๋๊ฐ์ ์ ์๋ ๊ฒฝ์ฐ
    if (col[i] == col[k]) or (abs(col[i]-col[k])==i-k):
      return False
  return True

N = int(sys.stdin.readline())
col = [0]*N
count = 0
queens(0)
print(count)
```

### ๋ฐฉ๋ฒ 2.

```python
import sys

n = int(sys.stdin.readline())
count = 0
vert, diag, rev_diag = [False]*n, [False]*(2*n-1), [False]*(2*n-1)


def queens(i):
  global count
  # ์ฒด์คํ ๋ชจ๋  ํ์ ๋ ๊ฒฝ์ฐ
  if i == n:
    count += 1
    return
  # ์๋ ๊ฒฝ์ฐ ํด๋น ํ์ ๋ชจ๋  ์ด ๋ฃจํ
  for j in range(n):
    # ์ํ, ์ผ์ชฝ/์ค๋ฅธ์ชฝ ๋๊ฐ์  ๋ชจ๋ ํธ์ด ์๋ ๊ฒฝ์ฐ
    if not(vert[j] or diag[i+j] or rev_diag[i-j+n-1]):
      # ํด๋น ํ์ ์ด์ ํธ ์์น ๊ณ ์ 
      vert[j] = diag[i+j] = rev_diag[i-j+n-1] = True
      # ๋ค์ ํ์ผ๋ก ์ด๋
      queens(i+1)
      # ๋ค์ ์ด๊ธฐํ
      vert[j] = diag[i+j] = rev_diag[i-j+n-1] = False


queens(0)
print(count)
```

### ๋ฐฉ๋ฒ 3.

```python
import sys

queens = [0, 1, 0, 0, 2, 10, 4, 40, 92, 352, 724, 2680, 14200, 73712, 365596]
print(queens[int(sys.stdin.readline())])
```
