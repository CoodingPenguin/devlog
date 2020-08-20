---
title: 📝 BOJ - 덩치
date: 2020-08-20 19:24:00
category: problem-solving
thumbnail: './img/thumbnail.png'
draft: false
---

## 문제

BOJ 7568번 : [덩치](https://www.acmicpc.net/problem/7568)

## 접근 방법

문제에 있는 **명세 그대로** 코드로 구현하면 된다!

> 두 사람 A 와 B의 덩치가 각각 (x,y), (p,q)라고 할 때 x>p 그리고 y>q 이라면 우리는 A의 덩치가 B의 덩치보다 "더 크다"고 말한다.

- 순서대로 두 사람씩 비교를 하면서 `weight`와 `height`를 비교해 **덩치가 작은 사람의 `rank`를 하나 늘린다.**

> N명의 집단에서 각 사람의 덩치 등수는 자신보다 더 "큰 덩치"의 사람의 수로 정해진다. 만일 자신보다 더 큰 덩치의 사람이 k명이라면 그 사람의 덩치 등수는 k+1이 된다.

- 위의 방식대로 순회하면, 자신보다 <u>크지 않으면</u> 순위가 그대로 **유지**되고 <u>크다면</u> 자동적으로 순위가 **아래로 내려가니** 등수는 항상 `덩치가 큰 사람의 수+1`이 된다.

## 교훈

복잡한 문제아니고 문제에 써져있는 그대로를 구현하면 되는 문제였다. 괜히 복잡하게 생각했다가 힘만 빠졌다😥 **문제를 꼼꼼히 읽**고 **단순하게 생각**하는 습관을 들여야겠다.

## 소스 코드

```python
def weight_rank(pList):
  rank = [1] * len(pList)
  for i in range(len(pList)):
    for j in range(0, i):
      if pList[i]['weight'] > pList[j]['weight']  and pList[i]['height'] > pList[j]['height']:
        rank[j] += 1
      elif pList[i]['weight'] < pList[j]['weight'] and pList[i]['height'] < pList[j]['height']:
        rank[i] += 1
  return rank


pList = list()
for i in range(int(input())):
  x, y = map(int, input().split())
  pList.append({'weight':x, 'height':y})
rank = map(str, weight_rank(pList))
print(' '.join(rank))
```
