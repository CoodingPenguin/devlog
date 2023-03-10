---
title: BOJ - ν΅κ³ν
date: 2020-08-25 12:19:00
category: "π Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

> μλͺ»λ λΆλΆμ΄ μλ€λ©΄ μΉμ ν λ§μν΄μ£Όμλ©΄ κ°μ¬νκ² μ΅λλ€π

## λ¬Έμ 

BOJ 2108λ² : [ν΅κ³ν](https://www.acmicpc.net/problem/2108)

## μ κ·Ό λ°©λ²

μ«μλ€μ λ¦¬μ€νΈκ° μ£Όμ΄μ§κ³  `νκ· `, `μ€κ°κ°`, `μ΅λΉκ°`, `λ²μ`λ₯Ό κ΅¬νλ λ¬Έμ μ΄λ€. κ°κ°μ κ΅¬νλ μ½λλ₯Ό κ΅¬ννκ±°λ ν¨μλ₯Ό κ΅¬ννλ©΄ λλ€. λμ κ²½μ°λ ν¨μλ‘ κ΅¬ννμλ€.

- **νκ· ** : μ«μλ€μ ν©μ λ¦¬μ€νΈμ κΈΈμ΄λ‘ λλλ€.
- **μ€κ°κ°** : λ¦¬μ€νΈλ₯Ό μ λ ¬νκ³  λ¦¬μ€νΈ κΈΈμ΄μ μ λ°(μμμ μ λ²λ¦Ό)μ μμΉν λ¦¬μ€νΈ μμλ₯Ό λ°ννλ€.
- **μ΅λΉκ°** : _Counter_ κ°μ²΄λ₯Ό μ΄μ©νμ¬ κ° μμμ κ°μλ₯Ό κ³μ°νκ³  *most_common*μ μ΄μ©ν΄ μμ 2κ°μ μμλ₯Ό κ΅¬νλ€.
  - λ§μ½ λ μμμ κ°μκ° κ°λ€λ©΄ 2μλ₯Ό λ°ννλ€.
  - κ°μ§ μλ€λ©΄ 1μλ₯Ό λ°ννλ€.
- **λ²μ** : λ¦¬μ€νΈμ μ΅λκ°μμ λ¦¬μ€νΈμ μ΅μκ°μ λΉΌμ λ°ννλ€.

## κ΅ν

μ λ²μ μκ²λ *Counter*κ° μ΄λ κ² μ°μΌ μ€ λͺ°λλ€. νΉν **μ»¬λ μμ κ°μ**λ₯Ό κ΅¬νλ λ° μ λ§ μ΅μ νλ λκ΅¬μΈ κ² κ°λ€. λΉ¨λ¦¬ _Counter_ ν΄λμ€λ₯Ό μ λ¦¬λ₯Ό ν΄μΌκ² λ€.

## μμ€ μ½λ

```python
import sys
from collections import Counter


# νκ· 
def _average(nums):
  return round(sum(nums)/len(nums))

# μ€κ°κ°
def _median(nums):
  sortedNums = sorted(nums)
  return sortedNums[len(nums)//2]

# μ΅λΉκ°
def _mode(nums):
  if len(nums) == 1:
    return nums[-1]
  counts = Counter(sorted(nums))
  mode = counts.most_common(2)
  if mode[0][1] == mode[1][1]:
    return mode[1][0]
  return mode[0][0]

# λ²μ
def _range(nums):
  return max(nums) - min(nums)


nums = []
for _ in range(int(sys.stdin.readline())):
  nums.append(int(sys.stdin.readline()))

print(_average(nums))
print(_median(nums))
print(_mode(nums))
print(_range(nums))
```
