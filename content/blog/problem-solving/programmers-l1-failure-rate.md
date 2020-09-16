---
title: 📝 PROGRAMMERS - 실패율
date: 2020-09-11 01:41:00
category: problem-solving
thumbnail: './img/thumbnail.png'
draft: false
---

## 문제

PROGRAMMERS Level1 - [실패율](https://programmers.co.kr/learn/courses/30/lessons/42889)

## 접근 방법

스테이지 별 실패율을 구해서 실패율을 기준으로 가장 높은 순으로 정렬하는 문제이다. 어떤 스테이지를 *i*라고 했을 때 **실패율**은 다음과 같다. 이렇게 각 스테이지마다 실패율을 구해주고 그 실패율을 기준으로 정렬해주면 된다.

> 실패율 = (i번째 스테이지를 플레이한 사용자수) / (i부터 N까지 플레이한 사용자 수)

<br>

다만 **주의할 점** 2가지가 있다. 하나는 <u>i번부터 N까지 플레이한 사용자 수가 0명인 경우</u> *try-except*를 사용하여 **Zero Division Error**가 발생하는 것을 방지해줘야한다. 이 경우는 문제에 따르면 실패율을 0으로 처리한다.

다른 하나는 <u>만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 한다</u>는 `제한사항`이다. 그래서 `stages`를 미리 한 번 정렬시키면 실패율을 기준으로 정렬을 하고 나서도 그 때의 정렬이 유지된다.

## 소스 코드

```python
def solution(N, stages):
    stages.sort()
    fails = []
    for stage in range(1, N+1):
        try:
            fail = stages.count(stage) / len([x for x in stages if x >= stage])
        except:
            fail = 0
        fails.append(fail)
    result = sorted(range(1, N+1), key=lambda x:fails[x-1], reverse=True)
    return result
```
