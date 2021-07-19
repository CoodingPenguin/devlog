---
title: PROGRAMMERS - K번째 수
date: 2020-08-18 17:38:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-programmers.png"
draft: false
---

![thumbnail](./img/thumbnail-programmers.png)

> 잘못된 부분이 있다면 친절히 말씀해주시면 감사하겠습니다🙏

## 문제

PROGRAMMERS Level 1 - [K번째 수](https://programmers.co.kr/learn/courses/30/lessons/42748)

## 접근 방법

쉬운 문제이다! **슬라이싱**, **정렬**, **인덱싱** 이 3가지를 적절히 사용하면 된다. 이 때 한 `command`가 _i_, _j_, *k*로 이루어져 있다고 생각하자.

1. `array`를 *i-1*부터 *j-1*까지 슬라이싱한다.
2. 슬라이싱한 배열을 `sorted()`로 정렬한다. 그리고 *k-1*번째 요소를 `answer` 리스트에 추가한다.
3. 모든 `command`를 다 돌 때까지 1, 2을 반복한다.

## 소스 코드

```python
def solution(array, commands):
    answer = []
    for command in commands:
        i, j, k = command
        arr = array[i-1:j]
        answer.append(sorted(arr)[k-1])
    return answer
```
