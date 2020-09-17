---
title: 📝 PROGRAMMERS - 나누어 떨어지는 배열
date: 2020-08-25 12:06:00
category: problem-solving
thumbnail: './img/thumbnail.png'
draft: false
---

## 문제

PROGRAMMERS Level 1 - [나누어 떨어지는 배열](https://programmers.co.kr/learn/courses/30/lessons/12910)

## 접근 방법

**나누어 떨어지는 요소**를 추출해 반환하는 문제이다. 만약 어떤 요소도 해당되지 않는다면 `[-1]`을 반환한다.

### 방법 1.

나는 _filter_ 함수를 이용하여 추출한 `result`를 _sorted()_ 사용하여 정렬하였다. 이 때 `result`가 *None*이라면 `[-1]`을 반환한다.

### 방법 2.

이 풀이는 다른 사람의 풀이인데 *or*을 사용하여 깔끔하게 한 줄로 표현한 것이 신기해 정리해보았다. 일단 이 풀이는 ***List Comprehension*과 논리연산자 _or_**을 사용하여 풀었다. 해당 알고리즘을 정리하면 다음과 같다.

- 나누어떨어지는 요소만 모아 새로운 리스트를 생성한다.
- 생성된 리스트를 *sorted()*를 사용해 정렬한다.
- [-1]과 생성된 리스트 사이의 논리 연산자 *or*을 하여 반환한다.
  - 참고로 빈 리스트의 경우 `False`로 취급된다.

## 교훈

다른 것은 모르겠고 논리 연산자 *or*을 사용하여 저렇게 깔끔하게 표현할 수 있다는 것에 감탄했다. 한 번도 저렇게 써본 적이 없어서 정말 신기했다. **어떤 결과 혹은 결과가 나오지 않아 -1을 반환해야 하는 문제**에서 한 번씩 요긴하게 써봐야겠다.

## 소스 코드

### 방법 1.

```python
def solution(arr, divisor):
    result = list(filter(lambda x:x%divisor==0, arr))
    if not result:
        return [-1]
    return sorted(result)
```

### 방법 2.

```python
def solution(arr, divisor):
    return sorted([n for n in arr if n%divisor == 0]) or [-1]
```
