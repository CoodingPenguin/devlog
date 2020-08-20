---
title: 📝 BOJ - 체스판 다시 칠하기
date: 2020-08-20 19:34:00
category: problem-solving
thumbnail: './img/thumbnail.png'
draft: false
---

## 문제

BOJ 1018번 : [체스판 다시 칠하기](https://www.acmicpc.net/problem/1018)

## 접근 방법

일단 알아둬야할 것! **백준에서는 `numpy`와 같은 라이브러리를 지원하지 않는다!** 오직 표준 라이브러리만 지원한다. 이걸 몰르고 `numpy`로 구현을 해서 *런타임 에러*가 났는데 애꿎은 *인덱스 에러*만 찾아보고 있었다..ㅠㅠ

문제에서 가능한 체스판은 맨 왼쪽 위 칸이 <u>흰색인 경우</u>와 <u>검은색인 경우</u>이다. 그래서 두 가지 경우를 모두 검사를 해야한다. 이를 고려하고 알고리즘을 짜면 다음과 같다.

- 8x8 크기의 window가 있다고 생각하고 주어진 판을 순회한다.
- 잘못 색칠된 개수를 `count`라고 할 때, 흰색일 경우 `count1`을, 검은색인 경우 `count2`를 증가시킨다.
- 잘못 색칠된 개수를 저장하는 리스트 `min_nums`에 매 순회때 마다 `count1`과 `count2`를 추가한다.
- `min_nums`의 가장 최소값을 반환한다.

<br>

이렇게 하면 되는데 **슬라이딩하면서 잘못 색칠된 개수를 구하는 방식**도 여러가지가 있다. 나의 경우는 <u>행과 열의 index 합이 짝수인지 홀수인지를 계산해 파악</u>했고 여기서는 쓰지 않았지만 <u>직접 8x8의 체스판 리스트 2개를 만들어 마스킹</u>을 하는 방법도 있다. 후자는 메모리를 조금 잡아먹을 수 있지만 그래봤자 얼마 안되서 둘 중 어느 방식을 쓰든 상관없다!

## 교훈

**개발환경**도 잘 고려하자. 그리고 웬만하면 **표준 라이브러리**만 사용해서 구현해보자!

## 소스 코드

```python
def min_paint(n, m, board):
  min_nums = []
  for i in range(n-7):
    for j in range(m-7):
      count1, count2 = 0, 0
      for row in range(i, i+8):
        for col in range(j, j+8):
          if (row+col)%2 == 0:
            if board[row][col] != 'W':
              count1 += 1
            if board[row][col] != 'B':
              count2 += 1
          else:
            if board[row][col] != 'B':
              count1 += 1
            if board[row][col] != 'W':
              count2 += 1
      min_nums.extend([count1, count2])
  return min(min_nums)


N, M = map(int, input().split())
board = list()
for _ in range(N):
  board.append(list(input()))
print(min_paint(N, M, board))
```
