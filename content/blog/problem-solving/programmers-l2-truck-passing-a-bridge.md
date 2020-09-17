---
title: 📝 PROGRAMMERS - 다리를 지나는 트럭
date: 2020-09-17 18:41:00
category: problem-solving
thumbnail: './img/thumbnail.png'
draft: true
---

## 문제

PROGRAMMERS Level2 - [다리를 지나는 트럭](https://programmers.co.kr/learn/courses/30/lessons/42583)

## 접근 방법

다리(Bridge)의 길이와 다리가 버틸 수 있는 무게가 주어졌을 때, 특정 무게의 트럭들이 다리를 안전하게 지나갈 때 걸리는 시간을 구하는 문제이다.

### 방법 1.

가장 직관적인 방법은 다리와 시간을 재는 타이머를 구현하여 실제 상황처럼 돌아가게 하면 된다. 즉, 타이머를 구현하여 루프를 돌 때마다 `+1` 씩 증가시키고 상황에 따라 다음 트럭을 보낼지 말지 결정하면 된다. 이를 알고리즘으로 구현하면 다음과 같다.

- 보낼 수 있는 트럭이 있는 경우,

### 방법 2.

## 교훈

## 소스 코드

### 방법 1.

```python
def solution(bridge_length, weight, truck_weights):
    timer = 0
    bridge = [0] * bridge_length

    while bridge:
        timer += 1
        bridge.pop(0)
        if truck_weights:
            if sum(bridge) + truck_weights[0] <= weight:
                bridge.append(truck_weights.pop(0))
            else:
                bridge.append(0)
    return timer
```

### 방법 2.

```python
import collections

DUMMY_TRUCK = 0


class Bridge(object):

    def __init__(self, length, weight):
        self._max_length = length
        self._max_weight = weight
        self._queue = collections.deque()
        self._current_weight = 0

    def push(self, truck):
        next_weight = self._current_weight + truck
        if next_weight <= self._max_weight and len(self._queue) < self._max_length:
            self._queue.append(truck)
            self._current_weight = next_weight
            return True
        else:
            return False

    def pop(self):
        item = self._queue.popleft()
        self._current_weight -= item
        return item

    def __len__(self):
        return len(self._queue)

    def __repr__(self):
        return 'Bridge({}/{} : [{}])'.format(self._current_weight, self._max_weight, list(self._queue))


def solution(bridge_length, weight, truck_weights):
    bridge = Bridge(bridge_length, weight)
    trucks = collections.deque(w for w in truck_weights)

    for _ in range(bridge_length):
        bridge.push(DUMMY_TRUCK)

    count = 0
    while trucks:
        bridge.pop()

        if bridge.push(trucks[0]):
            trucks.popleft()
        else:
            bridge.push(DUMMY_TRUCK)

        count += 1

    while bridge:
        bridge.pop()
        count += 1

    return count
```
