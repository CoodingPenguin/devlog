---
title: BOJ - 좌표 정렬하기 시리즈
date: 2020-08-25 12:28:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

> 잘못된 부분이 있다면 친절히 말씀해주시면 감사하겠습니다🙏

## 문제

- BOJ 11650번 : [좌표 정렬하기](https://www.acmicpc.net/problem/11650)
- BOJ 11651번 : [좌표 정렬하기 2](https://www.acmicpc.net/problem/11651)

## 접근 방법

**좌표 정렬하기 시리즈** 문제이다. 첫 번째랑 두 번째 문제 모두 코드가 99% 일치하고 딱 한 부분만 다르다. 따로 나눠놓고 포스팅하기는 그래서 한 포스트에 몰아 넣었다!

일단 입력을 어떻게 했는지 부터 설명하자면 주어진 개수 `N`만큼의 좌표값을 받는다. 이 때 좌표값을 *튜플 (tuple)*로 저장하였다.

이제 좌표들을 정렬을 해야하는데 [좌표 정렬하기](https://www.acmicpc.net/problem/11650)는 x값을 기준으로 정렬하고 만약 같다면 y값을 기준으로 정렬을 한다. [좌표 정렬하기 2](https://www.acmicpc.net/problem/11651)는 반대로 y값을 기준으로 정렬하고 같다면 x값을 기준으로 정렬한다. 이제 <u>어떤 방식으로 정렬을 하느냐</u>가 정말 중요한데, 다음과 같이 정렬하면 된다.

- [좌표 정렬하기](https://www.acmicpc.net/problem/11650) : _sorted()_ 함수를 이용해서 정렬한다. _sorted()_ 함수는 튜플의 요소들을 기준으로 순서대로 알아서 정렬시켜준다.
- [좌표 정렬하기 2](https://www.acmicpc.net/problem/11651) : 반대로 정렬해야 하므로 *sorted()*의 key값으로 반전된 튜플인 `x[::-1]`을 기준으로 정렬시킨다.

## 소스 코드

### 좌표 정렬하기

```python
import sys

coords = []
for _ in range(int(sys.stdin.readline())):
  x, y = map(int, sys.stdin.readline().split())
  coords.append((x, y))

coords = sorted(coords)
for x, y in coords:
  print(x, y)
```

### 좌표 정렬하기 2

```python
import sys

coords = []
for _ in range(int(sys.stdin.readline())):
  x, y = map(int, sys.stdin.readline().split())
  coords.append((x, y))

coords = sorted(coords, key=lambda x:x[::-1])
for x, y in coords:
  print(x, y)
```
