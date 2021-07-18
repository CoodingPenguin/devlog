---
title: PROGRAMMERS - 다리를 지나는 트럭
date: 2020-09-17 18:41:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-programmers.png"
draft: false
---

![thumbnail](./img/thumbnail-programmers.png)

## 문제

PROGRAMMERS Level 2 - [다리를 지나는 트럭](https://programmers.co.kr/learn/courses/30/lessons/42583)

## 접근 방법

다리(Bridge)의 길이와 다리가 버틸 수 있는 무게가 주어졌을 때, **특정 무게의 트럭들이 다리를 안전하게 지나갈 때 걸리는 시간**을 구하는 문제이다.

### 방법 1.

가장 직관적인 방법은 <u>모든 상황을 실제로 구현</u>하면 된다. 즉, 타이머로 시간을 카운팅하고 다리가 들 수 있는 하중만큼의 트럭이 다리를 지나갈 수 있도록 하면 된다. 알고리즘으로 구현하면 다음과 같다.

- 타이머 시간을 +1초 증가시킨다. 다리 `bridge`의 블록을 앞에 하나 제거한다.
- 대기하고 있는 트럭이 있다면 해당 트럭과 다리 위에 있는 트럭들의 무게 합을 구해 `weight`보다 적거나 같은지 체크한다.
- 만약 적거나 같다면 해당 트럭을 대기명단인 `truck_weights`에서 꺼내 다리 `bridge`에 추가한다.
- 만약 크다면 현재는 트럭을 다리 위에 올릴 수 없으므로 제거된 블록을 다시 원상복구시킨다.

여기서는 리스트를 사용하여 구현했는데 *collections*의 *deque*를 사용해도 된다. 그러면 리스트를 쓴 것보다 훨씬 직관적으로 구현할 수 있을 것이다.

### 방법 2.

이 방법은 다른 사람의 풀이이다. <u>*Bridge*라는 클래스를 직접 구현</u>하였는데 우선 클래스는 빼고 **solution 부분**만 살펴보자.

- `bridge_length`만큼의 길이와 `weight`만큼을 들 수 있는 다리 인스턴스 `bridge`를 생성한다.
- 대기 중인 트럭인 `trucks`를 *collections*의 *deque*로 생성한다.
- `bridge_length`만큼 *DUMMY_TRUCK*을 넣어준다. (여기서 실질적인 다리가 생성된다!)
- 대기 중인 트럭이 있다면 다리의 마지막 부분을 제거하고 앞에 해당 트럭을 넣을 수 있는지 검사한다.
  - 만약 넣을 수 있다면 대기 명단 `trucks`에서 해당 트럭을 제거한다.
  - 만약 넣을 수 없다면 제거한 부분을 채우기 위해 *DUMMY_TRUCK*을 넣어준다.
  - 시간을 재는 `count`를 +1 시켜준다.
- 다리에 남은 트럭이 있다면 pop으로 제거해준다. 이 때 제거한 `bridge`의 블록만큼 `count`를 +1 증가시킨다.

**방법 1**의 알고리즘과 매우 비슷하지 않은가? 사실 알고리즘은 비슷하다. 다만 `bridge`를 *deque*로 구현한 점, 다리를 `Bridge` 클래스로 구현한 점이 **방법 1**과 다르다. 또한 다리 위에 있는 트럭의 무게를 *sum*으로 매번 계산했던 **방법 1**과는 달리 **방법 2**는 `current_weight` 필드로 매번 다리 위의 트럭 무게를 갱신해주었다. 이러면 **방법 1**보다 시간 복잡도가 줄어들게 된다.

## 교훈

알고리즘 풀이 때 한 번도 클래스를 쓴 적이 없다. **방법 2**의 풀이를 보니 약간 실마리를 찾은 것 같다. 사실 *deque*를 만들어서 그 때마다 갱신시켜줘도 되지만 그것 하나로는 많은 정보를 담지 못한다. 이 때 정보를 담아 클래스로 구현하면 훨씬 더 쉽게 코드를 구현할 수 있다!

- 어떤 변수와 **관련된 변수가 2개 이상**일 때
- 기존에 구현된 메서드로는 **한 번에 구현하지 못**할 때

이럴 경우 `클래스`로 구현하면 좋은 것 같다! 다음에 비슷한 문제를 풀게 되면 클래스로 구현하는 걸 시도해봐야겠다.

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
