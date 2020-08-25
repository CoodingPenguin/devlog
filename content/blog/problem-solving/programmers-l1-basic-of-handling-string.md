---
title: 📝 PROGRAMMERS - 문자열 다루기 기본
date: 2020-08-25 11:55:00
category: problem-solving
thumbnail: './img/thumbnail.png'
draft: false
---

## 문제

PROGRAMMERS Level1 - [문자열 다루기 기본](https://programmers.co.kr/learn/courses/30/lessons/12918)

## 접근 방법

### 방법 1.

**방법 1**은 내가 구현한 풀이방법이다. <u>문자열을 정수형으로 캐스팅(casting)할 때 에러가 나는 것</u>을 이용하여 구현하였다.

- 문자열은 정수형으로 캐스팅한다.
- 에러가 나지 않았다면 문자열의 길이가 4나 6인지 검사하고 그렇다면 `True`를 아니면 `False를 반환한다.
- 에러가 났다면 `False`를 반환한다.

### 방법 2.

**방법 2**는 다른 사람들의 풀이를 보고 감탄한 풀이이다. 나는 위에처럼 단순히 캐스팅 밖에 생각을 못했는데 문자열 객체 내에 <u>문자열 안에 숫자만 있는지 검사</u>하는 **`isdigit()` 메서드**가 있는 것을 깜박하고 있었다. 거기다가 4인지 6인지 검사하는 부분도 놀란 게 보통이었으면 `or`을 써서 나타냈을텐데 ***tuple*과 _in_ 연산자**를 사용해서 검사하였다. 정말 깔끔한 풀이이다.

## 교훈

문자열 클래스 메서드를 한 번 정리해야겠다. 아무래도 잘 안 쓰다 보니 생각을 하지 못했던 것 같다. 또한 *tuple*과 _in_ 연산자를 이용한 풀이도 자주 써먹어봐야겠다.

## 소스 코드

### 방법 1.

```python
def solution(s):
    try:
        temp = int(s)
        if len(s) == 4 or len(s) == 6:
            return True
        return False
    except:
        return False
```

### 방법 2.

```python
def solution(s):
    return s.isdigit() and len(s) in (4, 6)
```
