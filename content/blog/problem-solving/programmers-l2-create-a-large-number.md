---
title: PROGRAMMERS - 큰 수 만들기
date: 2020-10-05 17:02:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-programmers.png"
draft: false
---

![thumbnail](./img/thumbnail-programmers.png)

## 문제

PROGRAMMERS Level 2 - [큰 수 만들기](https://programmers.co.kr/learn/courses/30/lessons/42883)

## 접근 방법

이 문제는 어떤 숫자 $N$이 주어졌을 때 $k$개 만큼의 숫자를 제거했을 때 **만들 수 있는 수 중 가장 큰 수**를 반환하는 문제이다.

### 잘못된 접근 - 숫자를 제거하자

처음에는 문제 있는 그대로 <u>어떤 수를 빼야 가장 큰 수가 될까</u>를 생각했다. 그래서 가장 처음에 있는 수와 그 다음 수들 중 가장 작은 수와 비교해 가장 작은 수를 제거했다. 하지만 `47712394`에서 3개를 제거한다고 할 때 가장 큰 수는 `77394`인데 위의 알고리즘으로 제거하면 `47794`가 된다.

### 올바른 접근 - 숫자를 넣자

결국 다른 분들의 풀이를 참고했는데 숫자를 제거하는 것이 아닌 **숫자를 하나씩 넣어보며 접근**했다. 주어진 숫자의 가장 앞 자리부터 순회하면서 최종 결과를 `stack`에 저장하는데 다음과 같은 규칙을 갖고 순회한다.

- **`stack`의 탑(top)에 있는 숫자 < 순회하고 있는 숫자**이고 **k를 다 소진하지 않았다**면
  - 순회하고 있는 숫자보다 큰 숫자가 나올 때까지 `stack`을 pop한다.
  - pop한 횟수만큼 k를 소진한다.
- 순회하고 있는 숫자를 `stack`에 넣는다.
- 다 순회하고도 k를 다 소진하지 못했다면 stack의 위에서 k만큼을 제거해준다.

## 교훈

그리디는 현재 상태에서 최선의 선택을 하는 알고리즘인데 <u>현재의 최선의 선택이 최고의 선택이 된다는 보장이 없다.</u> 그러므로 **최적해**를 보장하는지를 고려해야하는데.. 말은 이렇고 사실 아직 그리디를 모르겠다ㅠㅠ

동적계획법처럼 많이 풀어봐야 감을 익힐 수 있을 것 같다.

## 소스 코드

```python
def solution(number, k):
    stack = [number[0]]
    for num in number[1:]:
        # 넣으려는 num이 stack의 top보다 크다면
        # stack의 top이 num보다 클 때까지 stack을 pop한다.
        while len(stack) and stack[-1] < num and k > 0:
            k -= 1
            stack.pop()
        # 다 pop하고 난 뒤 num을 넣어준다.
        stack.append(num)
    # 다 순회하고 k가 다 소진되지 않았다면
    # stack의 위에서 k만큼을 제거해준다.
    if k != 0:
        stack = stack[:-k]
    return ''.join(stack)
```
