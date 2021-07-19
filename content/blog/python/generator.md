---
title: 제너레이터 (Generator)
date: 2021-01-20 05:44:00
category: "🐍 Python"
thumbnail: "./img/thumbnail.png"
draft: false
---

![thumbnail](./img/thumbnail.png)

> 잘못된 부분이 있다면 친절히 말씀해주시면 감사하겠습니다🙏

## Iterable vs Iterator

- `Iterable 객체`: iter 함수에 인자로 전달 가능한, 반복 가능한 객체
  - 예를 들면, 리스트, 딕셔너리, 집합, 문자열 등이 있다.
- `Iterator 객체`: iter 함수가 생성해서 반환하는 객체
  - next 함수로 Iterable 객체의 요소의 값을 차례대로 반환한다.
  - 만약 Iterable 객체를 모두 돌면 **StopIteration** 예외를 발생시킨다.
  - 다시 돌고 싶다면 iter 함수르 Iterator 객체를 다시 생성해야 한다.

## Generator가 뭘까?

Iterator 객체를 간단히 만들 수 있는 함수를 말한다. 제너레이터는 다음과 같이 **① yield문과 함수, ② 표현식 형태**로 만들 수 있다.

### 방법 1. yield문과 함수

제너레이터에 `next()`가 호출될 때마다 제너레이터는 멈추기 전 어디를 실행했는지를 기억해 거기서부터 실행을 다시 시작한다. `yield`를 써서 **무엇을 반환하고 어디서 멈출 것인지** 표시를 해준다.

- 제너레이터 함수 정의

```python
def generator_list(value):
    for i in range(value):
        # 값을 반환하고 여기를 기억
        yield i
```

- 제너레이터 객체 생성 및 next 함수로 호출

```python
gen = generator_list(2)
print(next(gen))    # 0
print(next(gen))    # 1
print(next(gen))    # StopIteration 에러 발생
```

### 방법 2. 표현문

`()`를 써서 리스트 컴프리헨션처럼 작성해주면 된다.

```python
value = 2
gen = (i for i in range(value))
print(next(gen))    # 0
print(next(gen))    # 1
print(next(gen))    # StopIteration 에러 발생
```

## 리스트보다는 제너레이터!

리스트를 사용하면 리스트의 크기만큼 메모리에 공간이 할당된다. 반면 제너레이터는 말그대로 **next 함수로 호출될 때 값을 생성하고 해당 값만 메모리에 올린다!** 즉, 메모리를 절약할 수 있다.

작은 데이터라면 상관없지만 큰 데이터에서는 **제너레이터 사용이 필수**이다. 몇 GB 데이터를 메모리에 올릴 수 없지 않은가? 그러므로 단순 리스트를 반환하기보다는 제너레이터를 써보는 건 어떨까?

부캠 질문게시판의 질문 중에 데이터전처리 과정에서 `apply` 함수를 사용했는데 데이터의 크기가 너무 커서 **Out-of-Memory**가 났는데 이에 대한 해결책을 묻는 질문이 있었다. 튜터님의 답변에 따르면 <u>제너레이터를 사용하여 매 Iteration마다 전치리 결과를 뱉어주는 함수를 만들고 그 결과를 바로 문서로 저장</u>한다고 한다. 나중에 데이터가공할 때 데이터가 크면 한 번 고려해봐야겠다! 참고로 Pytorch의 `dataloader`도 제너레이터로 구현되어 있다고 한다.

## References

- [Iterable과 Iterator](https://wikidocs.net/16068)
- [Generator (제너레이터)](https://wikidocs.net/16069)
- [윤성우의 열혈 파이썬 중급편](http://www.yes24.com/Product/Goods/81519650)
- [파이썬 코딩의 기술](http://www.yes24.com/Product/Goods/94197582)
- [Python Documentation - 제너레이터](https://docs.python.org/ko/3/tutorial/classes.html?highlight=%EC%A0%9C%EB%84%88%EB%A0%88%EC%9D%B4%ED%84%B0#generators)
