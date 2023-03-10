---
title: BOJ - 파도반 수열
date: 2020-09-17 17:10:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

> 잘못된 부분이 있다면 친절히 말씀해주시면 감사하겠습니다🙏

## 문제

BOJ 9461번 : [파도반 수열](https://www.acmicpc.net/problem/9461)

## 접근 방법

$N$일 때의 파도반 수열 즉, $N$번째 정사각형의 변의 길이를 구하는 문제이다. 이 문제도 [01타일](../boj-1904-01tile)의 접근 방법과 동일하다.

### 설명

$P(N)$ 수열을 죽 나열해보자. 문제에는 $1$부터 $10$까지의 결과가 써져있다. 그 이후 $15$까지의 결과를 나열하면 다음과 같다. 수열을 보니 어떤 규칙이 보이지 않는가? 바로 **세 번째 전의 수와 두 번째 전의 수를 합한 값**이 $P(N)$이다!

$$
1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16, 23, 28, 39
$$

### 결론

그럼 $P(3)$은 어떻게 나오는 건지 의문을 가질 수 있는데 바로 앞에 $0$을 추가해주면 된다. 즉, 1부터 세는 것이 아닌 **0부터 세면 가능**하다.

초기값을 $0, 1, 1$으로 하고 그 이후의 수열은 다음의 점화식으로 구해주면 된다.

$$
P(N) = P(N-2) + P(N-3)
$$

## 소스 코드

```python
pados = [0, 1, 1]
for i in range(3, 101):
  pados.append(pados[i-3]+pados[i-2])

for _ in range(int(input())):
  print(pados[int(input())])
```
