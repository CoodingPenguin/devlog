---
title: 📝 PROGRAMMERS - 체육복
date: 2020-08-20 19:46:00
category: '📝 Problem Solving'
thumbnail: './img/thumbnail.png'
draft: false
---

## 문제

PROGRAMMERS Level 1 - [체육복](https://programmers.co.kr/learn/courses/30/lessons/42862)

## 접근 방법

문제.. 문제를 잘 읽어야 한다! 이 문제도 어렵지 않지만 **문제를 제대로 읽지 않으면 복잡해질 수 있는 문제**이다. 프로그래머스는 정말 친절하게 `제한사항`을 문제에 써놓았다. 이 `제한사항`을 읽고 쓱 넘어가지 말고 무엇을 의미하는지 한 번 곱씹어봐야한다.

<br>

> 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다. 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.

> 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

<br>

위에는 `제한사항`에 있는 문장들이다. 이 말을 종합하면 <u>도난 당한 학생이 여벌 체육복을 가질 수 있다</u>는 것이다! 그러므로 체육복을 나눠가지기 전에 **`reserve`와 `lost`에 서로 중복되는 학생은 지워줘야 한다!** 어짜피 자기가 없으니까 여벌 체육복을 쓸테니까 말이다. 나머지는 체육복이 없다면 앞 뒤 학생이 여벌 체육복이 있는지 확인하고 나눠주면 된다.

추가로 중복된 학생을 제거하는 부분은 두 가지로 구현될 수 있다. `방법1`의 경우 *List Comprehension*으로 중복 검사를 하여 없는 것들만 뽑아내 **새로운 리스트**를 만들어내는 방법이다. `방법2`의 경우 중복을 제외시키는 *set*과 그의 연산을 사용하여 없애는 방법이다. 거기 댓글들 말로는 후자의 방법이 조금 더 빠르다고 한다!

## 교훈

문제를 똑바로 읽고 특히 **제약사항** 부분은 유심히 읽는 습관을 들이자.

## 소스 코드

### 방법 1.

```python
def solution(n, lost, reserve):
    _lost = [l for l in lost if l not in reserve]
    _reserve = [r for r in reserve if r not in lost]

    for i in _reserve:
        if i-1 in _lost:
            _lost.remove(i-1)
        elif i+1 in _lost:
            _lost.remove(i+1)

    return n - len(_lost)
```

### 방법 2.

```python
def solution(n, lost, reserve):
    reserved = 0
    _lost = sorted(list(set(lost) - set(reserve)))
    _reserve = list(set(reserve) - set(lost))

    for i in _reserve:
        if i-1 in _lost:
            _lost.remove(i-1)
        elif i+1 in _lost:
            _lost.remove(i+1)

    return n-len(_lost)
```
