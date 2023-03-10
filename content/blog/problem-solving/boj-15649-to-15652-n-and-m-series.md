---
title: BOJ - Nκ³Ό M μλ¦¬μ¦
date: 2020-08-31 23:05:00
category: "π Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

> μλͺ»λ λΆλΆμ΄ μλ€λ©΄ μΉμ ν λ§μν΄μ£Όμλ©΄ κ°μ¬νκ² μ΅λλ€π

## λ¬Έμ 

- BOJ 15649λ² : [Nκ³Ό M (1)](https://www.acmicpc.net/problem/15649)
- BOJ 15650λ² : [Nκ³Ό M (2)](https://www.acmicpc.net/problem/15650)
- BOJ 15651λ² : [Nκ³Ό M (3)](https://www.acmicpc.net/problem/15651)
- BOJ 15652λ² : [Nκ³Ό M (4)](https://www.acmicpc.net/problem/15652)

## μ κ·Ό λ°©λ²

Nκ³Ό M μλ¦¬μ¦λ <u>μ΄λ€ μ‘°κ±΄</u> λ΄μμ μμ΄μ κ΅¬νλ λ¬Έμ λ€μ΄λ€. [Nκ³Ό M (1)](https://www.acmicpc.net/problem/15649)μ **μμ΄**, [Nκ³Ό M (2)](https://www.acmicpc.net/problem/15650)μ **μ‘°ν©**, [Nκ³Ό M (3)](https://www.acmicpc.net/problem/15651)μ **μ€λ³΅ μμ΄**, [Nκ³Ό M (4)](https://www.acmicpc.net/problem/15652)μ **μ€λ³΅ μ‘°ν©**μ κ΅¬νλ λ¬Έμ μ΄λ€. νμ΄μ¬μ μμ μ μ‘°ν©μ κ΅¬νλ λΌμ΄λΈλ¬λ¦¬λ₯Ό μ κ³΅νκ³  μλ€! *itertools λͺ¨λ*μλ κ° μμ΄ μ‘°ν©μ κ΅¬νλ ν¨μλ₯Ό μ κ³΅νλλ° μ λ¦¬νλ©΄ λ€μκ³Ό κ°λ€.

- `permutations(iterable, r)` : *iterable*μμ μμμ μ°μλ κΈΈμ΄ _r_ μμ΄μ λ°ν
- `combinations(iterable, r)` : *iterable*μμ μμμ κΈΈμ΄ _r_ μλΈ μνμ€λ€μ λ°ν
- `product(*iterables, repeat=1)` :μλ ₯ *iterables*λ€μ λ°μΉ΄λ₯΄νΈ κ³± or *iterable*μ μμ κ³Όμ κ³±κ³Ό λ°λ³΅ νμ *repeat*μ μ§μ νμ¬ μ€λ³΅ μμ΄ λ°ν
- `combinations_with_replacement(iterable, r)` : *iterable*μμ μμμ κΈΈμ΄ _r_ μλΈ μνμ€λ€μ λ°ννλλ°, κ°λ³ μμλ€ λ λ² μ΄μ λ°λ³΅ κ°λ₯

<br>

μμΈν ν¨μ κ΅¬νμ [Python Reference](https://docs.python.org/ko/3/library/itertools.html)λ₯Ό μ°Έκ³ νμ. μμ ν¨μλ₯Ό μ¬μ©νλ©΄ ν΄λΉ μ‘°κ±΄μ ν΄λΉνλ μμ΄ ννλ€μ ννμ λ°ννλ€. μ΄ ννμ μ μ ν λ³νν΄μ μΆλ ₯νλ©΄ λλ€.

## κ΅ν

*itertools λͺ¨λ*μ **iterableμ λ€λ£¨λ λ° μ μ©ν ν¨μμ ν΄λμ€λ€μ΄ λ§λ€.** κ΅³μ΄ μΈλ±μ±κ³Ό %μ°μ°μ μ‘°ν©μ μ°μ§ μμλ `cycle()`μ μ¬μ©νλ©΄ μ½κ² λ μ μλ€. μ λ²κ³Ό λ§μ°¬κ°μ§λ‘ νμ΄μ¬μ λΌμ΄λΈλ¬λ¦¬λ€μ λ§μ΄ μ΄ν΄λ³΄μμΌκ² λ€.

## μμ€ μ½λ

### Nκ³Ό M (1)

```python
import sys
from itertools import permutations


n, m = map(int, sys.stdin.readline().split())
nums = range(1, n+1)
permute = list(permutations(nums, m))

for i in permute:
  i = map(str, i)
  print(' '.join(i))
```

### Nκ³Ό M (2)

```python
import sys
from itertools import combinations


n, m = map(int, sys.stdin.readline().split())
nums = range(1, n+1)
combine = list(combinations(nums, m))

for i in combine:
  i = map(str, i)
  print(' '.join(i))
```

### Nκ³Ό M (3)

```python
import sys
from itertools import product


n, m = map(int, sys.stdin.readline().split())
nums = range(1, n+1)
results = list(product(nums, repeat=m))

for i in results:
  i = map(str, i)
  print(' '.join(i))
```

### Nκ³Ό M (4)

```python
import sys
from itertools import combinations_with_replacement


n, m = map(int, sys.stdin.readline().split())
nums = range(1, n+1)
results = list(combinations_with_replacement(nums, m))

for i in results:
  i = map(str, i)
  print(' '.join(i))
```
