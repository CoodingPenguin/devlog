---
title: BOJ - 골든바흐의 추측
date: 2020-08-12 12:51:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

> 잘못된 부분이 있다면 친절히 말씀해주시면 감사하겠습니다🙏

## 문제

BOJ 9020번 : [골든바흐의 추측](https://www.acmicpc.net/problem/9020)

## 접근 방법

문제에 써있다싶이 골든바흐의 추측이란 **2보다 큰 모든 짝수는 두 소수의 합으로 나타낼 수 있다**라는 것이다. $N$의 골든바흐의 파티션이 여러 개일 경우 두 소수의 차이가 가장 작은 것을 출력한다.

이 문제 또한 [BOJ1929 소수구하기](https://www.acmicpc.net/problem/1929)의 연장선이다. 알고리즘은 다음과 같다.

- $N$은 짝수이므로 $1$부터 $N-1$까지의 수 중 소수를 구한다.
- $2$부터 $N/2$까지의 수 $x$를 가지고 $x$와 $N-x$를 구해 소수인지 체크한다.
- 위의 단계에서 루프를 다 돌게 되면 어짜피 차이가 가장 작은 $x$와 $N-x$가 나오므로 그것을 그대로 출력한다.

<br>

다른 사람들의 풀이도 봤는데 공통적으로 **소수를 구한다**. 다만 약간 방식이 다른데 나의 경우는 **에라토스테네스의 체 + 절반 범위**를 사용하였고 어떤 사람은 아에 **소수 리스트를 10000의 범위까지 통**으로 만들었다. 나는 비효율적이라 생각해 그렇게 하지는 않았는데 곰곰히 생각해보니 범위가 10000 정도이면 저렇게 만드는 게 더 낫지 않을까 싶기도 하다. 그 뒤로는 모두 비슷했다.

## 교훈

- 다 풀고 나서 다른 사람의 코드를 보고 `다른 방식`을 훑어보자.
- 범위를 항상 확인하자. 어떤 범위내의 무언가를 구해야할 때 **범위가 십만, 백만**을 넘지 않는다면 통으로 구하는 게 더 빠를 수 있다. 시간-공간의 tradeoff라고 보면 된다.

## 소스코드

```python
def result(N):
    # 에라토스테네스의 체
    isPrime = [False] * 2 + [True] * (N-2)
    for i in range(2, int(N/2)):
        if isPrime[i]:
            for j in range(2*i, N, i):
                isPrime[j] = False

    # 최대 파티션 검사
    minPrime, maxPrime = 0, 0
    for i in range(2, int(N/2+1)):
        num1, num2 = i, N-i
        if isPrime[num1] and isPrime[num2]:
            minPrime, maxPrime = num1, num2

    return minPrime, maxPrime


for _ in range(int(input())):
    minPrime, maxPrime = result(int(input()))
    print(minPrime, maxPrime)
```
