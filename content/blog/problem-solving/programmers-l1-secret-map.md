---
title: PROGRAMMERS - 비밀 지도
date: 2020-09-11 01:24:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-programmers.png"
draft: false
---

![thumbnail](./img/thumbnail-programmers.png)

## 문제

PROGRAMMERS Level 1 - [비밀 지도](https://programmers.co.kr/learn/courses/30/lessons/17681)

## 접근 방법

두 지도를 $N$개의 비트로 표현했을 때 두 지도를 겹쳐 1이 하나라도 있으면 1이 되도록 하여 새로운 지도를 만든다. 즉, **비트연산자 OR**를 사용하면 간단히 구할 수 있는 문제이다! 그래서 다음과 같은 과정을 거쳐서 `result` 리스트를 구하고 반환하면 된다!

- 2개의 지도의 각 행의 `|` 연산자의 결과로 된 새로운 지도 `arr`을 생성한다.
- 각 행을 돌면서 0과 1의 이진수 문자열로 바꿔준다.
  - *bin*을 사용하여 이진수를 구하고이진수 표시인 *0b*을 제거한다.
  - *str*으로 문자열로 바꾸고 문자열 메서드인 *zfill*을 사용하여 여백을 0으로 채워준다.
  - 비트의 수가 $N$보다 큰 경우를 위해 뒤에서 N만큼의 문자를 추출한다.
- *replace*를 사용해 `0 → 빈칸`, `1 → #`로 변환하고 `result`에 넣어준다.

## 교훈

처음에는 *format*함수의 형식지정자를 이용했다. 예를 들으면 `"{0:06b}".format(3)`이런 식으로 말이다. 하지만 비트의 수가 상수가 아니니 처리를 하는데 애를 먹었다. 찾아보니 역시나 이진수로 변환하는 _bin_ 함수가 있었다.

파이썬의 큰 장점은 **웬만한 것이 다 내장 함수나 라이브러리로 구현이 되어있다**는 것이다. 그래서 아는 만큼 더 쉽고 간편하게 구현할 수 있다! 파이썬을 아에 처음부터 차근차근 정리하려 했는데 그러지 말고 필요한 것들부터 정리해나가야겠다.

## 소스 코드

```python
def solution(n, arr1, arr2):
    arr = [i | j for i, j in zip(arr1, arr2)]
    result = []
    for target in arr:
        target = str(bin(target))[2:].zfill(n)[-n:]
        target = target.replace('1', '#').replace('0', ' ')
        result.append(target)
    return result
```
