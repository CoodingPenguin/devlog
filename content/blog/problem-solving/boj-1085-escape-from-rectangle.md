---
title: BOJ - 직사각형에서 탈출
date: 2020-08-13 14:49:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

## 문제

BOJ 1085번 : [직사각형에서 탈출](https://www.acmicpc.net/problem/1085)

## 접근 방법

`브론즈Ⅲ🥉`에 해당하는 쉬운 문제이다. (0, 0)과 (w, h)로 그려지는 직사각형에서 내부의 점 (x, y)가 주어졌을 때 직사각형 경계와의 가장 짧은 거리를 구하는 문제이다. 간단히 생각하면 된다. 약간 그래픽스가 떠오르는 문제인데..ㅋㅋ 여기서 쓰이다니!

**(x, y)에서 수평 수직 방향으로 가장 짧은 거리를 반환**하면 끝이다. 처음에 대각선도 필요한가 싶었는데 우리는 꼭지점으로 가는 게 아니라 직사각형의 경계에만 도착하면 되므로 대각선은 고려할 필요가 없다. 간만에 쉬어가는 문제였다!

## 소스 코드

```python
def shortest_path(x, y, w, h):
  return min(x, y, w-x, h-y)


x, y, w, h = map(int, input().split())
print(shortest_path(x, y, w, h))
```
