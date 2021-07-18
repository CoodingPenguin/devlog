---
title: BOJ - 수 정렬하기 3
date: 2020-08-24 19:44:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

## 문제

BOJ 10989번 : [수 정렬하기 3](https://www.acmicpc.net/problem/10989)

## 접근 방법

백준에는 3개의 수 정렬하기 시리즈 문제가 있다. 첫 번째와 두 번째 문제는 파이썬 내 정렬 함수를 사용하면 간단히 풀 수 있다. 다만 정렬해야할 리스트의 크기가 큰 경우 `PyPy`로 바꾸고 다시 돌려보자. 파이썬의 정렬 함수는 가장 빠른 **퀵소트 (Quick Sort)**로 구현되어 있기 때문에 굳이 퀵소트를 구현할 필요는 없다.

- [수 정렬하기](https://www.acmicpc.net/problem/2750) : $O(n^2)$인 정렬 알고리즘
- [수 정렬하기 2](https://www.acmicpc.net/problem/2751) : $O(n\log{n})$인 정렬 알고리즘
- [수 정렬하기 3](https://www.acmicpc.net/problem/10989) : 적은 수의 범위에서 카운팅 정렬 알고리즘

<br>

이 문제는 세 번째에 해당하는 문제이다. (다시 살펴보니 문제에 힌트가 있었네?) 이 문제의 특징은 바로 **메모리 제한**이다. 메모리를 _8MB_ 밖에 사용을 못한다. 그래서 첫 번째, 두 번째 문제의 알고리즘을 그대로 넣으면 100% 메모리 초과가 난다.

이를 해결할 수 있는 방법은 **카운팅**하는 것이다. 입력 범위를 보면 **10,000이하의 자연수**만 입력값으로 들어온다. 그러므로 10,000정도의 길이의 리스트를 선언하여 해당 수를 카운팅 하는 것이다. (하지만 나는 index 그대로 쓰고 싶어서 10001개의 리스트를 만들었다) 그러고 1부터 개수만큼 출력을 하면 끝난다.

이렇게 구현을 했는데 이번에는 **시간 초과**가 나왔다. 이유는 `input()` 때문이었다. [백준 QnA](https://www.acmicpc.net/board/view/855)와 [stackoverflow의 질문답변](https://stackoverflow.com/questions/22623528/sys-stdin-readline-and-input-which-one-is-faster-when-reading-lines-of-inpu)에 따르면 <u>input 메소드 내에서 변수를 저장하기 위해 여러 가공을 하면서 시간이 걸린다</u>고 한다. 어쨌든 이 부분만 바꿔주면 **성공😆**할 수 있다.

<br>

> *input()*과 _sys.stdin.readline()_ 의 차이점 중 구현 시 중요한 것이 *input()*의 경우 개행을 앞뒤로 없애주는 반면 *sys.stdin.readline()*의 경우 내가 `strip()`함수를 이용해 직접 없애줘야 한다.

## 교훈

이제는 `input()`이 아니라 `sys.stdin.readline()`을 사용하자.

## 소스 코드

```python
import sys

nums = [0]*10001
for i in range(int(sys.stdin.readline())):
  nums[int(sys.stdin.readline())] += 1
for num, count in enumerate(nums):
  if count:
    for _ in range(count):
      print(num)
```
