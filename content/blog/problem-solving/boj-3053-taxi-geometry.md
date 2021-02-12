---
title: 📝 BOJ - 택시 기하학
date: 2020-08-15 01:59:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

## 문제

BOJ 3053번 : [택시 기하학](https://www.acmicpc.net/problem/3053)

## 접근 방법

유클리드 기하학과 택시 기하학을 이해만 하면 끝이다! 그리고 문제에 써있는 **택시 기하학에서 원의 정의와 유클리드 기하학에서 원의 정의는 같다**는 말을 명심하면 된다!

- `택시 기하학` : 두 점 사이의 거리가 좌표의 절대값 차이의 합 (**1-Norm**)
- `유클리드 기하학` : 두 점 사이의 거리가 좌표의 차이 제곱의 합의 제곱근 (**2-Norm**)

입력값이 $x$라고 할 때, `유클리드 기하학`에 따르면 원의 넓이는 우리가 아는 $x^2 \pi$ 이고 `택시 기하학`에 따르면 원의 넓이는 마름모(정사각형)의 넓이인 $\frac{1}{2}(2x)^2$이다. 왠 갑자기 마름모인가 싶지만 원점을 기준으로 마름모의 모든 경계점과의 거리는 `택시 기하학`에 의해 거리가 항상 같다. 결국 원의 정의를 따른다는 것.

## 소스 코드

```python
import math

def circle_area(r):
  print("{:.6f}".format(math.pi*(r**2)))
  print("{:.6f}".format(2*(r**2)))


circle_area(int(input()))
```
