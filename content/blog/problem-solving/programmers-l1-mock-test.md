---
title: PROGRAMMERS - 모의고사
date: 2020-08-17 23:12:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-programmers.png"
draft: false
---

![thumbnail](./img/thumbnail-programmers.png)

## 문제

PROGRAMMERS Level 1 - [모의고사](https://programmers.co.kr/learn/courses/30/lessons/42840)

## 접근 방법

### 방법 1.

내가 접근한 방법이다. 함수를 크게 **3가지**로 구현하였다.

1. 3명의 수포자들의 **정답 패턴**을 리스트로 만든다.
2. *List Comprehension*으로 수포자의 답과 실제 답을 비교하여 맞으면 `True`, 틀리면 `False`를 반환하도록 한다.
   - 그리고 `sum()`을 이용해 맞은 개수를 저장한다.
3. 맞은 개수를 리스트에 넣고 **최고점**인 `maxScore`를 구하여 **`maxScore`인 학생들**을 리스트에 넣고 반환한다.

### 방법 2.

다른 사람의 풀이를 보니 `cycle`을 이용하여 구현한 것이 있어서 정리해봤다. `cycle`은 *itertools 모듈*의 객체 중 하나인데 <u>element들이 다 소모(=next)되면 다시 처음으로 돌아가 element를 반환</u>한다. 특히 이 문제처럼 **특정 패턴**을 돌아야 하는 경우라면 좋을 것 같다.

알고리즘 자체는 패턴을 `cycle`로 구현한 것과 `next`로 element를 하나씩 소모하고 다시 되돌아가 접근한 것만 빼고는 비슷하다.

## 교훈

요새 드는 생각이 [파이썬 자습서](https://docs.python.org/ko/3/tutorial/index.html)를 가지고 <u>파이썬의 전체적인 문법이나 지향점을 한 번 짚어봐야한다</u>는 생각이 든다. 그리고 **다른 사람들 풀이를 꼭 보는 습관**을 가져야겠다. 만약 이 문제에서 안 봤다면 `cycle`을 통한 풀이를 생각지도 못했을 테니 말이다.

## 소스 코드

### 방법 1.

```python
def solution(answers):
    # 수포자 패턴
    result = []
    n = len(answers)
    p1 = [1, 2, 3, 4, 5]
    p2 = [2, 1, 2, 3, 2, 4, 2, 5]
    p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    # 채점
    p1 = sum([True if p1[i%5] == answers[i] else False for i in range(n)])
    p2 = sum([True if p2[i%8] == answers[i] else False for i in range(n)])
    p3 = sum([True if p3[i%10] == answers[i] else False for i in range(n)])

    # 높은 순으로 정렬
    total = [p1, p2, p3]
    maxScore = max(total)
    for p, s in enumerate(total):
        if total[p] == maxScore:
            result.append(p+1)
    return result
```

### 방법 2.

```python
from itertools import cycle

def solution(answers):
    # 수포자 패턴
    people = [
        cycle([1, 2, 3, 4, 5]),
        cycle([2, 1, 2, 3, 2, 4, 2, 5]),
        cycle([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]),
    ]
    totalScore = [0, 0, 0]    # 최종 점수
    # 채점
    for ans in answers:
        for idx, aList in enumerate(people):
            if next(aList) == ans:
                totalScore[idx] += 1
    maxScore = max(totalScore)  # 최고점

    return [idx+1 for idx, score in enumerate(totalScore) if score == maxScore]
```
