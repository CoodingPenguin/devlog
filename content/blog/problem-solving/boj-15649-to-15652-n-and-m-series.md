---
title: 📝 BOJ - N과 M 시리즈
date: 2020-08-31 23:05:00
category: '📝 Problem Solving'
thumbnail: './img/thumbnail.png'
draft: false
---

## 문제

- BOJ 15649번 : [N과 M (1)](https://www.acmicpc.net/problem/15649)
- BOJ 15650번 : [N과 M (2)](https://www.acmicpc.net/problem/15650)
- BOJ 15651번 : [N과 M (3)](https://www.acmicpc.net/problem/15651)
- BOJ 15652번 : [N과 M (4)](https://www.acmicpc.net/problem/15652)

## 접근 방법

N과 M 시리즈는 <u>어떤 조건</u> 내에서 수열을 구하는 문제들이다. [N과 M (1)](https://www.acmicpc.net/problem/15649)은 **순열**, [N과 M (2)](https://www.acmicpc.net/problem/15650)은 **조합**, [N과 M (3)](https://www.acmicpc.net/problem/15651)은 **중복 순열**, [N과 M (4)](https://www.acmicpc.net/problem/15652)은 **중복 조합**을 구하는 문제이다. 파이썬은 위의 수 조합을 구하는 라이브러리를 제공하고 있다! *itertools 모듈*에는 각 수열 조합을 구하는 함수를 제공하는데 정리하면 다음과 같다.

- `permutations(iterable, r)` : *iterable*에서 요소의 연속된 길이 _r_ 순열을 반환
- `combinations(iterable, r)` : *iterable*에서 요소의 길이 _r_ 서브 시퀀스들을 반환
- `product(*iterables, repeat=1)` :입력 *iterables*들의 데카르트 곱 or *iterable*의 자신과의 곱과 반복 횟수 *repeat*을 지정하여 중복 순열 반환
- `combinations_with_replacement(iterable, r)` : *iterable*에서 요소의 길이 _r_ 서브 시퀀스들을 반환하는데, 개별 요소들 두 번 이상 반복 가능

<br>

자세한 함수 구현은 [Python Reference](https://docs.python.org/ko/3/library/itertools.html)를 참고하자. 위의 함수를 사용하면 해당 조건에 해당하는 수열 튜플들의 튜플을 반환한다. 이 튜플을 적절히 변환해서 출력하면 된다.

## 교훈

*itertools 모듈*에 **iterable을 다루는 데 유용한 함수와 클래스들이 많다.** 굳이 인덱싱과 %연산자 조합을 쓰지 않아도 `cycle()`을 사용하면 쉽게 돌 수 있다. 저번과 마찬가지로 파이썬의 라이브러리들을 많이 살펴보아야겠다.

## 소스 코드

### N과 M (1)

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

### N과 M (2)

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

### N과 M (3)

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

### N과 M (4)

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
