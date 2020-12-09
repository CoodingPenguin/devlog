---
title: 📝 BOJ - 분해합
date: 2020-08-18 16:27:00
category: '📝 Problem Solving'
thumbnail: './img/thumbnail.png'
draft: false
---

## 문제

BOJ 2231번 : [분해합](https://www.acmicpc.net/problem/2231)

## 접근 방법

브루트포스(Brute Force) 문제이다. [BOJ2798 블랙잭]() 문제 때 설명했듯이 브루트포스라도 **최대한 범위를 줄이는 것**이 중요하다. 블랙잭 문제의 경우 3번 순회를 하기 때문에 $O(n^3)$이므로 입력의 크기가 클수록 시간이 매우 오래 걸릴 것이다.

### 방법 1.

나는 **N의 자릿수**에 주목을 했다. 이 자릿수에 따라서 범위를 다르게 하였다. 생성자의 자릿수마다 만들 수 있는 분해합의 범위를 찾았는데 다음과 같다. 1자릿수의 경우 자기자신밖에 없으므로 분해합은 0이다.

- 2자릿수 : $11 - 117$
- 3자릿수 : $101 - 1026$
- 4자릿수 : $1001 - 10035$

이렇게 된다. 만약 N의 자릿수가 3일 경우 생성자는 2자릿수 혹은 3자릿수이다. 또한 <u>생성자는 분해합보다 클 수 없</u>다. 이를 바탕으로 N의 자릿수가 x일 경우, 대략적으로 **$9*10^{x-1}$에서 $N-1$까지** 순회를 돌면서 분해합이 $N$과 같은 생성자가 있는지 체크한다. 만약 있을 경우 그 생성자를 반환하고 다 순회하고도 없으면 0을 반환한다.

### 방법 2.

위의 범위의 최소값을 잡기가 참 힘들었고 다른 사람들은 어떻게 잡았는지 찾아보았고 [Think_why Think_why](https://wlstyql.tistory.com/77)님의 풀이를 참고하였다!

백준 문제에 있는 예시를 바탕으로 설명을 하자면 **256 = 245(생성자) + 2(첫째 자리) + 4(둘째 자리) + 5(셋째 자리)**로 이루어진다. 이제 생성자를 기준으로 생각해보면 **245 = 256(분해합) - 2(첫째 자리) - 4(둘째 자리) - 5(셋째 자리)**로이다. 근데 각 자리마다 최대로 가질 수 있는 수는 9이므로 이 경우 생각해볼 수 있는 범위의 최소값은 **229 = 256 - 9 - 9 - 9**이다.

요약하자면 분해합 $N$의 자릿수가 $x$일 때, 범위의 최소값은 $N - 3x$이다. 그렇게 해서 $N - 3x$부터 $N-1$까지 돌면 된다!

## 교훈

어떻게 보면 쉬운 문제였는데 너무 복잡하게 생각했나 보다. 결국 내가 구하고자 하는 것은 `생성자`인데 분해합에만 너무 신경을 썼다. **문제에서 원하는 값**에 집중하는 습관을 들여야겠다.

## 소스 코드

### 방법 1.

```python
def smallest_constructor(n):
  length = len(str(n))
  if length == 1:
    return 0
  for i in range(9*(10**(length-2)), n):
    decom = i + sum(map(int, list(str(i))))
    if decom == n:
      return i
  return 0

N = int(input())
print(smallest_constructor(N))
```

### 방법 2.

```python
def smallest_cons(n):
    minRange = n - len(str(n)) * 9
    minRange = 1 if minRange < 1 else minRange
    for i in range(minRange, n):
        decom = i + sum(map(int, list(str(i))))
        if decom == n:
            return i
    return 0

N = int(input())
print(smallest_cons(N))
```
