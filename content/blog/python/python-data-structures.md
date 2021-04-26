---
title: 🐍 파이썬의 자료구조
date: 2021-01-20 00:00:00
category: "🐍 Python"
thumbnail: "./img/thumbnail.png"
draft: false
---

![thumbnail](./img/thumbnail.png)

> [부스트캠프 AI Tech](https://boostcamp.connect.or.kr/program.html)의 강의를 참고하여 작성한 포스트입니다.

## Table of Contents

- [기본 자료구조](#기본-자료구조)
- [리스트](#리스트)
- [References](#references)

## 기본 자료구조

- **리스트**: 리스트의 `append`와 `pop`을 사용해 스택과 큐 구현
- **튜플**: 값 변경이 불가능하므로 사용자 실수에 의한 에러를 사전에 방지
- **집합**: `union`, `intersection`, `difference`와 같은 메서드를 사용해 댜앙한 집합 연산이 가능
- **딕셔너리**: 특정 value를 key로 구분할 때 사용

## 리스트

시퀀스 자료형으로 여러 데이터들의 집합

<div class="quote-block-simple">
<div class="quote-block-simple__emoji">💡</div>
<div class="quote-block-simple__content" markdown=1>

리스트의 요소의 타입(=dtype)은 모두 같지 않아도 된다!

</div>
</div>

### 리스트로 할 수 있는 것

- `인덱싱`: 인덱스을 통해 해당 주소에 있는 값을 호출한다.
- `슬라이싱`: 인덱스를 기반으로 부분 값들을 반환한다.
  - 슬라이싱에서 인덱스의 범위를 벗어나도 괜찮다! 유효 범위에 있는 요소를 반환하는 것이 **슬라이싱**이다.
  - `[::-1]`로 리스트의 역을 만들 수 있다.
- 리스트의 메서드는 [여기](https://www.w3schools.com/python/python_ref_list.asp)를 참고!

### 리스트의 복사

#### 리스트의 요소가 모두 원시형인 경우

```python
original_list = [1, 2, 3, 4, 5]
temp_list = original_list[:]
```

#### 리스트의 요소에 참조형이 있는 경우

리스트의 요소가 참조형이면 **그 요소도 다른 객체를 참조**하기 때문에 얕은 복사시 참조하는 객체의 주소가 복사된다. 만약 참조된 객체가 변경된다면 복사된 리스트를 출력하면 값이 변경된 것을 확인할 수 있다.

```python
import copy
original_list = [1, 2, 3, [1, 2, 3, 4, 5], [10, 9, 8]]
temp_list = copy.deepcopy(original_list)
```

### List Comprehension

루프문을 쓰는 것보다 빠르므로 루프문보다는 **리스트 컨프리헨션을 애용**하자!

#### 조건이 삼항연산자라면?

리스트 컨프리헨션에서 조건으로 삼항 연산자를 쓴다면 이때는 조건문이 뒤가 아니라 앞으로 온다.

```python
nums = [1, 2, 3, 4, 5]
only_odd = [i for i in nums if nums%2]              # [1, 3, 5]
odd_mask= [True if nums%2 else False for i in nums] # [True, False, True, False, True]
```

#### 중첩 루프와 zip

리스트 컨프리헨션에서 2개의 for문을 쓰는 것은 중첩 루프(nested loop)를 쓰는 것과 같다. 앞에 위치아 for문이 가장 바깥쪽 루프가 된다.

`zip`은 2개의 리스트를 받아 병렬적으로 요소 1개씩 뽑아내는 것이다.

```python
nums = ['1', '2']
alphas = ['a', 'b']

nested_loop_list = [i+j for i in nums for j in alphas]  # ['1a', '1b', '2a', '2b']
zip_list = [i+j for i, j in zip(nums, alphas)]  # ['1a', '2b']
```

## References

- [List Methods](https://www.w3schools.com/python/python_ref_list.asp)
