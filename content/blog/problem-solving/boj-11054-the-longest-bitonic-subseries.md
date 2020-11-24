---
title: 📝 BOJ - 가장 긴 바이토닉 부분 수열
date: 2020-11-24 22:41:00
category: problem-solving
thumbnail: './img/thumbnail.png'
draft: false
---

## 문제

BOJ 11054번 : [가장 긴 바이토닉 부분 수열](https://www.acmicpc.net/problem/11054)

## 접근 방법
바이토닉 수열이란 계속 증가하다가 어떤 숫자를 기점으로 계속 감소하는 수열을 말한다. 처음 보는 수열 같지만 **가장 긴 증가하는 부분 수열**이 정방향, 역방향으로 **2개** 있다고 생각하면 된다.

참고로 가장 긴 증가하는 부분 수열에 대한 설명은 하지 않으므로 궁금하다면 [여기](../boj-11053-the-longest-increasing-subseries/)를 참고할 것!

### 설명

문제 예시인 `1, 5, 2, 1, 4, 3, 4, 5, 2, 1`을 가지고 생각해보자. 예를 들어, **다섯번 째 숫자인 4**의 바이토닉 부분 수열을 어떻게 구할까? 바로 4를 기준으로 가장 긴 증가하는 부분 수열 2개를 구해주면 된다.

- `1, 5, 2, 1, 4`까지의 가장 긴 증가하는 부분 수열은 `1, 2, 4`이다.
- `4, 3, 4, 5, 2, 1`을 거꾸로 뒤집으면 `1, 2, 5, 4, 3, 4`가 되고 이 때의 가장 긴 증가하는 부분 수열은 `1, 2, 3, 4`가 된다.
- 그러므로 다섯 번째 숫자의 가장 긴 바이토닉 부분 수열은 `1, 2, 4, 3, 2, 1`이므로 최장 길이는 6이 된다.

이 때, 앞부분과 뒷부분의 부분 수열을 구할 때 4가 중복되므로 -1을 해주거나 구현할 때 이를 고려해서 짜주면 된다. 나는 중복을 피하기 위해 <u>테이블의 값을 모두 0으로 초기화</u>시켰다. 그러면 원래 길이보다 -1씩 작게 계산된다.

### 결론

제약사항은 **수열의 길이**이고 테이블의 값은 **최장 바이토닉 수열의 길이**이므로 이를 점화식으로 나타내면 다음과 같다.

$$
table[i] = uptable[i] + downtable[i] + 1
$$

- $table[i]$ : $i$번째 숫자가 기점일 때의 가장 긴 바이토닉 수열의 최장 길이
- $uptable[i]$ : $0$번째부터 $i$번째 숫자까지의 가장 긴 증가하는 수열의 길이에 1을 뺀 값
- $downtable[i]$ : $n-1$번째 부터 $i$번째 숫자까지의 가장 긴 증가하는 수열의 길이에 1을 뺀 값 (이 때, $i ≤ n$)


## 소스코드

```python
def fill(n, nums, table, reversed=False):
  for i in range(1, n):
    # 0부터 i까지의 부분 테이블 생성
    sub = [table[j] for j in range(0, i) if nums[j] < nums[i] ]
    if sub:
      # 있다면 서브 테이블의 최대값+1로 갱신
      table[i] = max(sub) + 1

  if reversed:
    # reversed라면 다시 역정렬해서 반환
    return table[::-1]
  return table


def result(n, nums):
  down_table, up_table = [0]*n, [0]*n

  # 정방향으로의 가장 긴 부분 수열
  down_table = fill(n, nums, down_table)
  # 역방향으로의 가장 긴 부분 수열
  up_table = fill(n, nums[::-1], up_table, reversed=True)

  sum_lr = [x+y for x, y in zip(down_table, up_table)]
  return max(sum_lr) + 1


n = int(input())
nums = list(map(int, input().split()))
print(result(n, nums))
```