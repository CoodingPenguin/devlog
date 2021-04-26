---
title: 🐍 Collections 모듈
date: 2021-01-20 00:00:01
category: "🐍 Python"
thumbnail: "./img/thumbnail.png"
draft: false
---

![thumbnail](./img/thumbnail.png)

> [부스트캠프 AI Tech](https://boostcamp.connect.or.kr/program.html)의 강의를 참고하여 작성한 포스트입니다.

## Table of Contents

- [deque](#deque)
- [OrderedDict와 DefaultDict](#ordereddict와-defaultdict)
- [Counter](#counter)
- [namedtuple](#namedtuple)
- [References](#references)

## deque

스택과 큐를 지원하는 모듈로, 메모리에 있어서 리스트에 비해 효율적이다. 예를 들면, 가장 앞의 요소를 `pop`을 할 때, 덱은 $O(1)$이지만 리스트는 요소의 인덱스를 다시 계산해야 하므로 $O(n)$이다.

### 인수 maxlen

`maxlen`을 지정하면 덱은 최대 길이를 초과하여 덱을 확장시키지 않는다. 새로운 요소가 들어오면 가장 오래된 요소를 버리고 새로운 요소를 받는다.

```python
from collections import deque
dq = deque(maxlen=3)    # 최대 크기를 3으로 지정
for i in range(50):
    dq.append(i)
print(dq)   # [47, 48, 49]
```

### 연결리스트의 특징 지원

- `rotate(n=1)`: $n$만큼 오른쪽으로 회전한다. $n$이 음수면, 왼쪽으로 회전한다.
- `reverse()`: 요소의 순서를 뒤집는다.

```python
from collections import deque
dq = deque([1, 2, 3, 4, 5])
dq.rotate(2)    # [4, 5, 1, 2, 3]
dq.rotate(-2)   # [1, 2, 3, 4, 5]
dq.reverse()    # [5, 4, 3, 2, 1]
```

## OrderedDict와 DefaultDict

- `OrderedDict`: PEP468가 인정되면서 딕셔너리의 순서가 보장되면서 잘 쓰이지 않게 되었다.
- `defaultDict`: 딕셔너리 요소 생성 시 초기값을 지정할 수 있다.

## Counter

시퀀스 데이터의 요소를 key, 요소의 개수를 value로 가진 딕셔너리 서브 크래스이다. `+`, `-`, `&`, `|` 연산으로 **더하기, 빼기, 교집합, 합집합 연산**을 할 수 있다.

```python
from collections import Counter
counter1 = Counter("abcdabcd")  # {'a':2, 'b':2, 'c':2, 'd':2}
counter2 = Counter("cddec")   # {'c':2, 'd':2, 'e':1}

counter1+counter2   # {'c': 4, 'd': 4, 'a': 2, 'b': 2, 'e': 1}
counter1-counter2   # {'a': 2, 'b': 2}
counter1&counter2   # {'c': 2, 'd': 2}
counter1|counter2   # {'a': 2, 'b': 2, 'c': 2, 'd': 2, 'e': 1}
```

## namedtuple

튜플 형태로 데이터 구조체를 저장하는 방식

```python
from collections import namedtuple
Point = namedtuple('Point', 'x y')
p = Point(x=10, y=20)
print(p[0], p[1])   # 인덱스로 접근
print(p.x, p.y)     # 데이터 변수로 접근
```

<div class="quote-block">
<div class="quote-block__emoji">💡</div>
<div class="quote-block__content" markdown=1>

namedtuple vs dataclass vs attrs

[이것](https://glyph.twistedmatrix.com/2016/08/attrs.html)을 보고 namedtuple, dataclass, attrs를 비교하면서 어떤 것이 더 좋을지 생각해보자

</div>
</div>

## References

- [The One Python Library Everyone Needs](https://glyph.twistedmatrix.com/2016/08/attrs.html)
- [Python Documentation - collections](https://docs.python.org/ko/3/library/collections.html?highlight=collections#module-collections)
