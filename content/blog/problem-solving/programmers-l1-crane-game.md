---
title: 📝 PROGRAMMERS - 크레인 인형뽑기 게임
date: 2020-08-15 02:26:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-programmers.png"
draft: false
---

![thumbnail](./img/thumbnail-programmers.png)

## 문제

PROGRAMMERS Level 1 - [크레인 인형뽑기 게임](https://programmers.co.kr/learn/courses/30/lessons/64061)

## 접근 방법

정말로 문제에 써있는 **지시사항**을 그대로 구현을 하면 끝난다. 그래서 Level1인 듯. 그 지시사항을 정리하면 다음과 같다. 단 `moves`로 부터 이번 크레인은 어느 위치에서 인형을 뽑는지 알고 있는 상태이다. 이번판의 위치를 특별히 `m`이라 하자.

1. **`board`의 `m`에 위치하는 인형을 뽑는다.**
   - `board[i][m]`에서 i를 점점 증가시키면서 크레인을 아래로 집어넣는다.
   - 만약 인형이 있을 경우 그 인형을 `doll`에 저장하고
   - `board[i][m]`를 비운다. (= 0으로 만든다)
2. **만약 인형이 있다면 `basket`에 뽑은 인형을 넣는다.**
   - 만약 `basket`에 인형이 2개 이상이고 마지막과 마지막에서 두번째로 들어간 인형이 같은 인형일 경우
   - 제거된 인형의 개수인 `result`를 2 증가시킨다.
   - `basket`의 위의 두 인형을 제거한다.
3. **1.과 2.을 더이상의 `m`이 없을 때까지 반복한다.**

## 소스 코드

```python
def pick_up(m, board):
    m = m-1
    doll = None
    for i in range(len(board)):
        if board[i][m]:
            doll = board[i][m]
            board[i][m] = 0
            break
    return doll

def solution(board, moves):
    result = 0
    basket = []
    for m in moves:
        pickUp = pick_up(m, board)
        if pickUp:
            basket.append(pickUp)
            if len(basket) > 1 and basket[-1] == basket[-2]:
                result += 2
                basket = basket[:-2]
    return result
```
