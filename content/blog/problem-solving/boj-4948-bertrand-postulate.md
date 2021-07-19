---
title: BOJ - 베르트랑의 공준
date: 2020-08-11 18:40:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

> 잘못된 부분이 있다면 친절히 말씀해주시면 감사하겠습니다🙏

## 문제

BOJ 4948번 : [베르트랑의 공준](https://www.acmicpc.net/problem/4948)

## 접근 방법

[BOJ1929 소수구하기](https://www.acmicpc.net/problem/1929)의 연장선이라고 보면 된다. 소수구하기 문제에서는 어떤 두 수 사이의 소수를 구했다면 여기서는 어떤 수 N을 받아서 `N+1 ≤ x ≤ 2N`을 만족하는 소수 $x$를 구하는 것이 여기서 요구하는 것이다.

그래서 소수구하기 문제에서 사용한 알고리즘인 *에라토스테네스의 체*를 사용했으며 이제 개수를 구하는 것이어서 boolean으로 되어 있는 **리스트에 `sum()` 연산**을 하여서 소수의 개수를 반환했다. (Pandas에서 우연히 알게 된 기능이었는데 여기서 이렇게 사용할 줄은 몰랐다!) 참고로 boolean으로 되어 있는 리스트에 `sum()` 연산을 하면 **True인 요소만 count하여 반환**한다.

## 소스코드

```python
def result(N):
    # 범위 시작과 끝 지정
    start, end = N+1, 2*N+1
    # idx가 소수인지를 나타낸 리스트
    primeNum = [True] * end

    # 에라토스테네스의 체로 검사
    for i in range(2, end):
        if primeNum[i]:
            for j in range(2*i, end, i):
                primeNum[j] = False

    return sum(primeNum[start:])


while True:
    N = int(input())
    if N == 0:
        break
    print(result(N))
```
