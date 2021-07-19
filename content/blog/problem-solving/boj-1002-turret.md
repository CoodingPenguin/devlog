---
title: BOJ - 터렛
date: 2020-08-15 02:09:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

> 잘못된 부분이 있다면 친절히 말씀해주시면 감사하겠습니다🙏

## 문제

BOJ 1002번 : [터렛](https://www.acmicpc.net/problem/1002)

## 접근 방법

**두 원의 위치관계**를 모두 고려하면 된다. 고등학교 때 아마 고등수학1에 나왔던 내용으로 기억한다. 잘 기억이 안 난다면 [여기](https://mathbang.net/101)를 참고!

그래도 짧게 요약하면 다음과 같다. 이 때 두 원 사이의 거리는 `cenDist`, 두 원의 각 반지름은 `r1`, `r2`라고 하자.

- **교차점 0개** : cenDist > r1+r2 , cenDist < |r1-r2|
- **교차점 2개** : |r1-r2| < cenDist < r1+r2
- **교차점 무한개** : cenDist == 0 && r1 == r2
- **교차점 1개** : cenDist == r1+r2, cenDist == |r1-r2|
  - 하지만 float의 **== 비교**는 불가능하므로 else로 처리했다.

## 소스 코드

```python
import math

def cal_dist(x1, y1, x2, y2):
  return math.sqrt((x1-x2)**2+(y1-y2)**2)

def cal_pos(x1, y1, r1, x2, y2, r2):
  cenDist = cal_dist(x1, y1, x2, y2)
  if cenDist > r1+r2 or cenDist < abs(r1-r2):
    return 0
  elif cenDist < r1+r2 and cenDist > abs(r1-r2):
    return 2
  elif cenDist == 0 and r1==r2:
    return -1
  else:
    return 1


for _ in range(int(input())):
  x1, y1, r1, x2, y2, r2= map(int, input().split())
  print(cal_pos(x1, y1, r1, x2, y2, r2))

```
