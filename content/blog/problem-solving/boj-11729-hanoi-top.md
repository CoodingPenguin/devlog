---
title: 📝 BOJ - 하노이 탑 이동 순서
date: 2020-08-17 22:08:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

## 문제

BOJ 11729번 : [하노이 탑 이동 순서](https://www.acmicpc.net/problem/11729)

## 접근 방법

아마 <u>컴퓨터공학 전공생</u>이라면 절대 모를 수 없는 **하노이의 탑** 문제이다! 다만 오늘 컨디션이 안 좋은지 코드가 많이 더럽당.. 정리가 안 된 느낌. 일단 이 문제에서 구해야할 것은 **두 가지**이다.

- 탑의 높이가 $N$일 때의 **이동 횟수**
- 탑의 높이가 $N$일 때의 **이동 순서**

### 방법 1.

**이동 횟수**는 다음과 같은 규칙을 가진다. $N = 1$일 때 1회, $N = 2$일 때 3회, $N = 3$일 때 7회 그리고 $N = x$일 때 `2*그 전 횟수+1`이다. 잘 보면 2의 거듭제곱의 합들인데 *List Comprehension*으로 2의 거듭제곱들을 만들어 슬라이싱과 `sum()`을 이용해 구했다. (등비수열 식 구하면 되는데 똥멍청이💩)

**이동 순서**는 다음과 같이 구현하면 된다. 이걸 그대로 재귀함수로 만들면 끝이다! 만약 옮겨야 하는 블록의 개수가 $N$개이고 `1→3`으로 옮겨야한다고 가정해보자.

- 위의 $N-1$개의 블록을 `1→2`로 이동시킨다.
- 가장 아래에 있는 $1$개의 블록을 `1→3`으로 이동시킨다.
- 다시 $N-1$개의 블록을 `1→3`으로 이동시킨다.

시작과 끝은 임의로 정할 수 있고 중간은 남아 있는 공간이 중간이 된다.

### 방법 2.

[이 분](https://www.acmicpc.net/source/21819779)의 코드를 참고하였다! 전체적인 흐름은 나랑 비슷하지만 코드가 정말 깔끔해서 정리해봤다.

**이동 횟수**는 *등비수열*로 구할 수 있다. $N=x$일 때의 이동횟수는 $1 + ... + 2^{x-1}$이다. 이를 등비수열 식으로 나타내면 $2^x-1$이 된다.

**이동 순서**는 앞서 내가 짠 알고리즘은 나와 거의 같은데 나랑 다른 점은 두 가지이다.

- `mid`를 구하지 않고 `move` 함수 입력으로 받는다.
- `result` 함수를 두지 않고 `move`함수로 바로 실행했다.

## 교훈

무조건 `result()` 함수를 구현할 것이 아니라 **전체적인 알고리즘을 고려해서 함수를 구현**해야겠다. 오히려 `result()`라고 정해놓으니까 자유롭게 짜지를 못하는 것 같다.

## 소스 코드

### 방법 1.

```python
powerOfTwo = [2**x for x in range(0, 20)]

def move(n, start, end):
  if n == 1:
    print(start, end)
    return
  mid = 6-start-end
  move(n-1, start, mid)
  move(1, start, end)
  move(n-1, mid, end)


def result(N):
  print(sum(powerOfTwo[:N]))
  if N == 1:
    print(1, 3)
    return
  move(N-1, 1, 2)
  move(1, 1, 3)
  move(N-1, 2, 3)


N = int(input())
result(N)
```

### 방법 2.

```python
def move(n, start, mid, end):
    if n == 1:
        print(start, end)
    else:
        move(n-1, start, end, mid)
        print(start, end)
        move(n-1, mid, start, end)

N = int(input())
print((2**N)-1)
move(N, 1, 2, 3)
```
