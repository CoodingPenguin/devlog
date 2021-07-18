---
title: PROGRAMMERS - 문자열 내 마음대로 정렬하기
date: 2020-08-25 11:39:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-programmers.png"
draft: false
---

![thumbnail](./img/thumbnail-programmers.png)

## 문제

PROGRAMMERS Level 1 - [문자열 내 마음대로 정렬하기](https://programmers.co.kr/learn/courses/30/lessons/12915)

## 접근 방법

이 문제는 **제한 조건**이 걸려있다. 그 중 다음의 조건이 가장 중요하다.

> 인덱스 1의 문자가 같은 문자열이 여럿일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

`n`에 위치한 문자를 기준으로 단어를 정렬하되, 만약 같다면 바로 그 다음의 문자를 기준으로 정렬을 해야한다. 만약 위의 조건이 없었다면 단순히 *sorted()*로 끝났을텐데 이 조건 때문에 하나를 더 고려해야 한다.

`n`이 아니라면 사전순으로 정렬하기에 `n`을 기준으로 정렬하기 전에 한 번 정렬을 해주면 된다. 알고리즘을 정리하면 다음과 같다.

- 문자열 리스트인 `strings`를 한 번 정렬을 해준다.
- *sorted()*의 *key*를 문자열의 n번째 문자로 지정하여 정렬한다.

## 교훈

**사실 이 알고리즘을 100% 이해는 하지 못했다.** 처음에 문자열 리스트를 정렬하지 않고 *key*값만 설정해서 돌렸는데 그럴 경우 `n`이 같을 때 사전순 정렬이 되지 않았다. 직감적으로는 한 번 정렬이 된 상태에서 `n`을 기준으로 정렬을 하니까 그 전에 정렬했던 것이 남아있는 것이 아닐까 추측 중이다. 후에 사전순 정렬을 하면서 이 문제를 곱씹어보며 이해를 해봐야겠다.

## 소스 코드

```python
def solution(strings, n):
    strings = sorted(sorted(strings), key=lambda x:x[n])
    return strings
```
