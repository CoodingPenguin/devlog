---
title: 📝 PROGRAMMERS - 다트 게임
date: 2020-09-11 14:40:00
category: problem-solving
thumbnail: './img/thumbnail.png'
draft: false
---

## 문제

PROGRAMMERS Level1 - [다트 게임](https://programmers.co.kr/learn/courses/30/lessons/17682)

## 접근 방법

**[점수][보너스][옵션]**로 이루어진 문자열 3세트를 분석하여 최종 점수를 계산하는 문제이다.

### 방법 1.

각 세트마다의 점수를 저장하는 `result` 리스트를 만들어 **각 세트의 점수를 계산**하였다. 각 세트는 숫자+문자로 되어있으므로 숫자를 기준으로 세트를 구분하였고 `dartResult`을 순회하며 점수를 계산하는 과정은 다음과 같다.

- `symbol`을 정수로 변환하여 `result`에 넣는다.
  - 앞의 숫자가 1이고 현재 숫자가 0인 경우 마지막 요소를 제거하고 **10**을 넣는다.
- 만약 Error가 발생했다면 `symbol`은 문자이므로 각 문자에 맞게 계산해준다.

  - `D` : 현재 세트의 점수를 **2배**로 바꾼다.
  - `T` : 현재 세트의 점수를 **3배**로 바꾼다.
  - `*` : 현재와 이전 세트의 점수를 **2배**로 바꾼다. 첫 세트부터 `*`가 있다면 이전 세트가 없으므로 고려하지 않는다.
  - `#` : 현재 세트의 점수에 **-1**을 곱해 반전시킨다.

- 모든 순회가 끝나면 각 세트마다의 점수가 저장된 **`result`의 합**을 반환한다.

### 방법 2.

정규식을 사용한 다른 사람의 풀이이다. 문제에 제시된 것처럼 각 세트는 **[점수][보너스][옵션]**로 이루어져있다. 이것을 정규식으로 나타내면 다음과 같다.

> [점수][보너스][옵션]의 정규식 → (\d+)([SDT])([*#]?)

*findall*을 사용하여 각 세트의 문자열이 **[점수][보너스][옵션]**로 이루어진 튜플을 `dart` 리스트에 저장한다. 예를 들면, `1S2D*3T`의 경우 `[('1', 'S', ''), ('2', 'D', '*'), ('3', 'T', '')]`로 저장된다. 이러면 <u>얻은 점수와 보너스 그리고 옵션을 깔끔하게 분리</u>시킬 수 있다. 또한 앞선 방법과 달리 정규식이 알아서 10을 추출해주기 때문에 0과 10을 구분할 필요도 없어진다.

그리고 `dart`를 순회하면서 각 세트의 점수를 계산해주면 된다. 이 때 `*`의 경우 이전 게임도 고려해야 하므로 현재 세트의 옵션이 `*`이고 두 번째 세트 이상이면 이전 게임의 점수도 2배로 바꿔준다.

## 교훈

문제를 다시 보니 **[점수][보너스][옵션]** 자체가 **정규식을 쓰세요!😆**라는 말이었다ㅋㅋ 이런 걸 주의깊게 봐야할 것 같다. 정규식은 컴파일러랑 오토마타 수업 때 배웠는데 파이썬을 기준으로 해서 한 번 싹 정리해야겠다.

## 소스 코드

### 방법 1.

```python
def solution(dartResult):
    result = []
    for symbol in dartResult:
        try:
            n = int(symbol)
            if result and n == 0 and result[-1] == 1:
                result.pop()
                n = 10
            result.append(n)
        except:
            if symbol == 'D':
                n = result.pop()
                result.append(n**2)
            elif symbol == 'T':
                n = result.pop()
                result.append(n**3)
            elif symbol == '*':
                result[-1] *= 2
                try:
                    result[-2] *=2
                except:
                    pass
            elif symbol == '#':
                n = result.pop()
                result.append(-n)
    return sum(result)
```

### 방법 2.

```python
import re


def solution(dartResult):
    bonus = {'S' : 1, 'D' : 2, 'T' : 3}
    option = {'' : 1, '*' : 2, '#' : -1}
    # 정규식 정의
    p = re.compile('(\d+)([SDT])([*#]?)')
    # 3세트로 나누기
    dart = p.findall(dartResult)
    for i in range(len(dart)):
        # *을 두 번 이상 쓰는 경우
        if dart[i][2] == '*' and i > 0:
            dart[i-1] *= 2
        # 한 세트 점수 계산
        dart[i] = int(dart[i][0]) ** bonus[dart[i][1]] * option[dart[i][2]]

    answer = sum(dart)
    return answer
```
