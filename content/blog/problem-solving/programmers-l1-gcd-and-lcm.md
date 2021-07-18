---
title: PROGRAMMERS - 최대공약수와 최소공배수
date: 2020-09-11 14:24:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-programmers.png"
draft: false
---

![thumbnail](./img/thumbnail-programmers.png)

## 문제

PROGRAMMERS Level 1 - [최대공약수와 최소공배수](https://programmers.co.kr/learn/courses/30/lessons/12940)

## 접근 방법

두 수의 최대공약수는 작은 수와 큰 수를 작은 수로 나누었을 때의 나머지의 최대공약수와 같다는 [유클리드 호제법](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)을 사용하여 풀었다.

두 수 $A$와 $B$에 대해 최대공약수 $gcd$와 최소공배수 $lcm$은 다음의 공식으로 구할 수 있다. 유클리드 호제법을 사용하여 최대공약수 $gcd$를 구하고 최소공배수 $lcm$은 두 수의 곱에 최대공약수를 나누어 구할 수 있다.

$$
gcd(A, B) = gcd(B, A\%B)
$$

$$
A*B = gcd(A, B) * lcm(A, B)
$$

<br>

`방법 1`은 내가 한 풀이로 유클리드 알고리즘을 그대로 구현한 것이다. 이산수학 책이나 정수론 기초 책을 본다면 금방 이해할 수 있다! `방법 2`는 다른 사람의 풀이인데 _lambda_ 식으로 간단히 구현되어 있어서 정리해봤다.

내 풀이의 경우 **% 연산자**를 사용하지 않고 몫을 구하고 원래 수에서 몫과 제수(divisor)의 곱을 빼서 나머지를 구하였다. 굳이 이럴 필요는 없고 `방법 2`처럼 % 연산자로 두 수가 나누어 떨어질 때까지 해주면 된다.

## 교훈

최대한 파이썬의 연산자, 모듈, 라이브러리를 활용하자! 이미 구현되어 있는 것을 내가 구현할 필요는 없다.

## 소스 코드

### 방법 1.

```python
def gcd(n, m):
    while m > 0:
        q = n//m
        r = n-q*m
        n, m = m, r
    return n


def solution(n, m):
    GCD = gcd(n, m)
    GCM = n*m//GCD
    return [GCD, GCM]
```

### 방법 2.

```python
def solution(n, m):
    def gcd(a, b): return b if not a % b else gcd(b, a % b)
    def lcm(a, b): return a*b//gcd(a, b)
    return [gcd(n, m), lcm(n, m)]
```
