---
title: 📝 BOJ - 소수 구하기
date: 2020-08-11 18:56:00
category: problem-solving
thumbnail: './img/thumbnail.png'
draft: false
---

## 문제

BOJ 1929번 : [소수 구하기](https://www.acmicpc.net/problem/1929)

## 접근 방법

사실 각 잡고 푼 문제는 아니고 대충 알고 있는 소수구하기 방법인 `아라토스테네스의 체`를 사용해서 풀려했다. 근데! <u>시간초과나고 자꾸 틀렸다</u>해서 결국에는 구글링을 할 수 밖에 없었다.

[원인을 아는 지혜 블로그](https://wlstyql.tistory.com/73)를 참고하였고 풀이 방식은 **에라토스테네스의 체 + 제곱근 범위**를 혼합한 방식이었다. 확실히 에라토스테네스의 체 자체도 효율적이지만 범위를 줄이면 시간이 더 줄어들테니. 어쨌든 알고리즘은 다음과 같다.

- 두 번째 입력값인 N의 +1만큼의 **리스트 primeNumber**를 생성한다. 이 때 모든 요소는 `True`이다.
- **2부터 $\sqrt{N}$**까지의 범위에서 **에라토스테네스의 체**를 적용한다.
  - 만약 해당 값이 `True`이면 그 값의 배수를 모두 `False`로 만든다.
  - `False`라면 그냥 넘어간다.
- M부터 N까지를 다시 돌면서 해당 숫자가 primeNumber에서 `True`면 출력한다. 아니면 패스!

## 교훈

아마 내가 했던 방식도 가능은 했을텐데 아마 시간초과가 났을 것이다. 무식하게 입력 범위 내의 모든 소수를 찾아버렸으니. 결국의 내 편의때문에 그런 거지만은 효율성을 위해 **범위를 최대한 줄이는 쪽**으로 생각해보는 습관을 가지는 게 좋을 것 같다.

## 소스 코드

```python
def result(m, n):
    n += 1
    primeNumber = [True]*n
    for i in range(2, int(n**0.5)+1):
        if primeNumber[i]:
            for j in range(2*i, n, i):
                primeNumber[j] = False

    for i in range(m, n):
        if i > 1:
            if primeNumber[i]:
                print(i)


M, N = map(int, input().split())
result(M, N)
```
