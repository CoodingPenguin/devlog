---
title: PROGRAMMERS - 예산
date: 2020-09-11 01:05:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-programmers.png"
draft: false
---

![thumbnail](./img/thumbnail-programmers.png)

## 문제

PROGRAMMERS Level 1 - [예산](https://programmers.co.kr/learn/courses/30/lessons/12982)

## 접근 방법

예산 내에 지원가능한 부서의 최대 개수를 구하는 문제이다. 예산은 정해져 있고 최대값을 구하는 것이기 때문에 **신청 금액이 가장 적은 순으로** 지원해주면 최대로 지원해줄 수 있다. 그래서 *sort*를 사용해 정렬을 하고 지원가능한 부서의 최대 개수를 구한다. `방법1`과 `방법2`는 이 최대값을 구하는 과정만 다르다.

### 방법 1.

- **i번째 부서까지**의 신청 금액의 합을 구한다.
- 예산을 넘으면 그 전 부서인 **i-1**을 반환한다.
- 루프를 다 돈 경우 모든 부서를 지원할 수 있으므로 **`d`의 길이**를 반환한다.

### 방법 2.

부서의 신청금액의 리스트 `d`의 합이 `budget`보다 클 때까지 가장 신청금액이 높은 부서를 *pop*시켜서 제거한다. 만약 `budget`보다 작아지면 예산 내에 든 것이므로 이 때의 **`d`의 길이**를 반환한다.

## 소스 코드

### 방법 1.

```python
def solution(d, budget):
    d = sorted(d)
    for i in range(1, len(d)+1):
        if sum(d[:i]) > budget:
            return i-1
    return len(d)
```

### 방법 2.

```python
def solution(d, budget):
    d.sort()
    while budget < sum(d):
        d.pop()
    return len(d)
```
