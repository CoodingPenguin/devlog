---
title: PROGRAMMERS - 소수 찾기
date: 2020-08-26 13:34:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-programmers.png"
draft: false
---

![thumbnail](./img/thumbnail-programmers.png)

> 잘못된 부분이 있다면 친절히 말씀해주시면 감사하겠습니다🙏

## 문제

PROGRAMMERS Level 1 - [소수 찾기](https://programmers.co.kr/learn/courses/30/lessons/12921)

## 접근 방법

[BOJ 1929번 - 소수 찾기](..//boj-1929-calculate-prime) 문제와 거의 비슷한 문제이다.

### 방법 1.

위의 문제를 풀었던 방식처럼 **에라토스테네스의 체**를 사용해서 풀었다! 다시 한 번 그 때의 풀이를 상기시켜보면 다음과 같다.

- 인덱스 값이 소수인지를 나타내는 `isPrime` 리스트를 생성한다. 편의를 위해서 0을 *False*로 하여 추가한다.
- 2부터 입력값 `n`의 절반만큼의 범위를 돈다.
- 만약 해당 위치 i의 `isPrime` 값이 *True*라면, i\*2, i\*3, ..., `n`보다 작거나 같은 i\*x까지 `isPrime`의 값을 *False*로 만든다.
- `isPrime`에서 `True`인 요소들의 개수를 반환한다.

### 방법 2.

이 풀이는 다른 사람의 풀이이다. *set*을 이용해서 풀었는데 풀이 방법이 신기해서 정리해보았다!

*set*은 집합과 관련된 연산은 지원하는데 교집합은 `&`, 합집합은 `|`, 차집합은 `-`이다. 풀이를 보면 결국 똑같은 **에라토스테네스의 체**이지만 <u>집합 연산을 사용하여 이중 for문을 돌릴 필요 없이 깔끔하게 소수가 아닌 수들을 제거</u>하였다. 풀이를 정리하면 다음과 같다.

- 2부터 `n+1`까지의 집합 `num`을 생성한다.
- 2부터 `n+1`까지의 범위를 돈다.
- 이 때 `num` 안에 i가 있다면, i\*2, i\*3, ..., `n`보다 작거나 같은 i\*x까지의 집합을 `num`에서 제거한다.
- 다 돌고 `num`의 길이를 반환한다.

## 교훈

집합 연산을 **어떤 수를 걸러내는 채**로 생각하면 다양한 문제에서 쓰일 수 있을 것 같다. `방법 2`의 방식을 꼭꼭 기억하자!

## 소스 코드

### 방법 1.

```python
def solution(n):
    isPrime = [False]*2 + [True]*(n-1)
    for i in range(2, n//2+1):
        if isPrime[i]:
            for j in range(i*2, n+1, i):
                isPrime[j] = False

    return sum(isPrime)
```

### 방법 2.

```python
def solution(n):
    num = set(range(2,n+1))

    for i in range(2,n+1):
        if i in num:
            num -= set(range(2*i,n+1,i))
    return len(num)
```
