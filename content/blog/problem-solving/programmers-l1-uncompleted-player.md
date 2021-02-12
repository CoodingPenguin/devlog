---
title: 📝 PROGRAMMERS - 완주하지 못한 선수
date: 2020-08-16 21:54:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-programmers.png"
draft: false
---

![thumbnail](./img/thumbnail-programmers.png)

## 문제

PROGRAMMERS Level 1 - [완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576)

## 접근 방법

이 문제는 정확도 뿐만 아니라 **시간 복잡도(time complexity)**도 고려해야하는 문제이다. 정확하게 풀더라도 <u>시간이 오래걸리면 효율성 점수가 0점</u>이다. `방법1`은 내가 풀었던 방식이고 `방법2`는 다른 사람들이 푼 방식인데 처음 보는 객체가 있어서 정리해봤다!

### 방법 1.

일단 최종 제출한 알고리즘을 설명하기 앞서서 가장 처음 썼던 방법은 **단순히 중복되는 element를 삭제하는 것**이었다. completion 리스트를 순회하면서 participant에서 중복된 element를 삭제하였다. 하지만 이 방법의 경우 <u>completion 리스트의 element만큼 돌아야</u> 하므로 시간복잡도가 $O(n)$이 된다. 그래서 시간초과가 났다.

그래서 최종 알고리즘은 최악의 경우 $n$이지만 운이 좋으면 $1$이 걸리도록 하였다.

- `participant`와 `completion`을 **sorting**한다.
- 첫 번째 element부터 **순회**를 시작한다.
  - 만약 중복되는 element(선수)일 경우 계속해서 일치할 것이다.
  - 중복된 선수가 아닐 경우 일치하지 않을 것이다.
- 그 뒤로 계속 비교해도 일치하지 않기에 **`participant`의 일치하지 않는 선수를 반환**한다.

### 방법 2.

python 내 내장 모듈인 `collections`를 사용한 방법이다! 이 모듈은 *dict, list, set, tuple*과 같은 collections에 대한 **도구(tool)들**을 제공한다.

그 중 `Counter`라는 객체가 있는 데 [Python Documentation](https://docs.python.org/ko/3.7/library/collections.html?highlight=collections#collections.Counter)에 따르면 hashable object를 카운팅하기 위한 *dict의 서브클래스*라고 한다. 완전히 이해하지는 못했지만, **element는 key값으로, element의 개수는 value값으로 이루어진 딕셔너리**라고 보면 된다. 이것을 이용하면 이번 문제를 정말 쉽게 풀 수 있다!

예를 들면, `['apple', 'banana', 'apple']`라는 리스트가 있다고 하자. 이것을 인수로 Counter 인스턴스를 만들면 `{'apple': 2, 'banana': 1}`으로 저장된다. 이렇게 만든 Counter 인스턴스는 사칙연산이 가능하데 `-` 연산을 하면 **중복되는 element들의 value는 다 0이 되어 없어지고 남은 element는 1이 될 것**이다.

## 교훈

Python 문법을 처음부터 살펴보면서 _built-in module과 method_ 모두 한 번씩 정리해봐야겠다.

## 소스 코드

### 방법 1.

```python
def solution(participant, completion):
    participant, completion = sorted(participant), sorted(completion)   # 정렬
    lenPart = len(participant)

    # 첫 요소부터 순회하면서 중복여부 검사
    for i in range(lenPart):
        # 일치하지 않는다 == 중복 요소가 아니다
        # 일치하지 않는 요소를 반환
        if i == lenPart-1 or (participant[i] != completion[i]):
            return participant[i]
```

### 방법 2.

```python
import collections

def solution(participant, completion):
    answer = collections.Counter(participant) - collections.Counter(completion)
    # 남은 key-value 요소의 가장 첫번째 것만 반환
    # 중복되는 요소는 다 0이 되서 하나만 남을 것임
    return list(answer.keys())[0]
```
