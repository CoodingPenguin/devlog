---
title: BOJ - 통계학
date: 2020-08-25 12:19:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

> 잘못된 부분이 있다면 친절히 말씀해주시면 감사하겠습니다🙏

## 문제

BOJ 2108번 : [통계학](https://www.acmicpc.net/problem/2108)

## 접근 방법

숫자들의 리스트가 주어지고 `평균`, `중간값`, `최빈값`, `범위`를 구하는 문제이다. 각각을 구하는 코드를 구현하거나 함수를 구현하면 된다. 나의 경우는 함수로 구현하였다.

- **평균** : 숫자들의 합을 리스트의 길이로 나눈다.
- **중간값** : 리스트를 정렬하고 리스트 길이의 절반(소수점은 버림)에 위치한 리스트 요소를 반환한다.
- **최빈값** : _Counter_ 객체를 이용하여 각 요소의 개수를 계산하고 *most_common*을 이용해 상위 2개의 요소를 구한다.
  - 만약 두 요소의 개수가 같다면 2위를 반환한다.
  - 같지 않다면 1위를 반환한다.
- **범위** : 리스트의 최대값에서 리스트의 최소값을 빼서 반환한다.

## 교훈

저번에 알게된 *Counter*가 이렇게 쓰일 줄 몰랐다. 특히 **컬렉션의 개수**를 구하는 데 정말 최적화된 도구인 것 같다. 빨리 _Counter_ 클래스를 정리를 해야겠다.

## 소스 코드

```python
import sys
from collections import Counter


# 평균
def _average(nums):
  return round(sum(nums)/len(nums))

# 중간값
def _median(nums):
  sortedNums = sorted(nums)
  return sortedNums[len(nums)//2]

# 최빈값
def _mode(nums):
  if len(nums) == 1:
    return nums[-1]
  counts = Counter(sorted(nums))
  mode = counts.most_common(2)
  if mode[0][1] == mode[1][1]:
    return mode[1][0]
  return mode[0][0]

# 범위
def _range(nums):
  return max(nums) - min(nums)


nums = []
for _ in range(int(sys.stdin.readline())):
  nums.append(int(sys.stdin.readline()))

print(_average(nums))
print(_median(nums))
print(_mode(nums))
print(_range(nums))
```
