---
title: 데코레이터 (Decorator)
date: 2021-01-21 20:08:00
category: "🐍 Python"
thumbnail: "./img/thumbnail.png"
draft: false
---

![thumbnail](./img/thumbnail.png)

## 알아야할 용어

### 일급 객체 (First-class Object)

파이썬은 함수를 `일급 객체`로 취급한다. 즉, 리스트, 딕셔너리처럼 함수를 함수의 인자로 넘기거나 함수 자체를 반환할 수 있다.

### 중첩 함수 (Inner Function)

파이썬은 **함수 내에 또 다른 함수를 정의**하는 것이 가능하다. 다만, 함수 외부에서 중첩 함수를 호출하는 것은 불가능하다. 중첩 함수는 다음과 같은 장점을 가진다:

- `장점 1` global scope로 부터 중첩 함수를 보호할 수 있다. (=encapsulation)
- `장점 2` 중첩 함수의 본 역할을 확실시하고 자잘한 에러 처리는 중첩 함수 밖에서 처리할 수 있다.
- `장점 3` 클로저(Closure) 혹은 팩토리(Factory) 함수의 구현이 가능하다.
  - 여기서 클로저란 함수가 선언 시의 상태(state)를 기억했다가 나중에 호출될 때 **해당 상태에 따라 수행하는 함수**를 말한다.

## 데코레이터는 뭐지?

데코레이터는 다른 함수를 가져와 해당 함수를 **변형하지 않고 기능 확장시킨 함수**를 반환한다. 이름 그대로 원 함수는 유지하고 기능을 추가하여 꾸미는 것이다!

- 한 함수에 여러 개의 데코레이터를 씌울 수 있다. 가장 바깥 Wrapper는 가장 위쪽에 있는 데코레이터이다.
- 데코레이터로 구현된 예시로 `globals()`이 있다.

## 데코레이터 구현

데코레이터 함수를 정의하고 꾸밀 함수 위에 `@데코레이터_함수_이름`을 써주면 된다. 자세한 내용은 [Real Python - Primer on Python Decorators](https://realpython.com/primer-on-python-decorators/#syntactic-sugar)을 참고하자!

### 가장 대표적인 구현

```python
# 데코레이터 함수 정의
import functools

def name(func):
    @functools.wraps(func)              # 꾸밀 함수의 정체성 확보
    def wrapper_name(*args, **kwargs):  # 꾸밀 함수의 인수 전달
        print("Before calling")
        value = func(*args, **kwargs)
        print("After calling")
        return value                    # 꾸밀 함수의 반환값
    return wrapper_name
```

```python
# say_hello 함수 꾸미기
@name
def say_hello(name):
  print(f"Hi, my name is {name}.")
  return f"{name}'s love"

gift = say_hello("Groot")
print(gift)

```

<details markdown="1">
<summary><strong>👀 실행 결과 보기</strong></summary>

```
# Before calling
# Hi, my name is Groot.
# After calling
# Groot's love
```

</details>

### 인수를 받는 데코레이터 구현

`say_hello("Groot")`를 호출하는 것은 `(name("==Introduction=="))(say_hello)("Groot")`와 같다.

```python
# 데커레이터 함수 꾸미기
import functools

def name(arg):
  def decorator_name(func):
    @functools.wraps(func)                # 꾸밀 함수의 정체성 확보
    def wrapper_name(*args, **kwargs):    # 꾸밀 함수의 인수 전달
        print(arg)                        # 데코레이터 인수 사용
        print("Before calling")
        value = func(*args, **kwargs)
        print("After calling")
        return value                      # 꾸밀 함수의 반환값
    return wrapper_name
  return decorator_name
```

```python
# say_hello 함수 꾸미기
@name("==Introduction==")
def say_hello(name):
  print(f"Hi, my name is {name}.")
  return f"{name}'s love"

gift = say_hello("Groot")
print(gift)
```

<details markdown="1">
<summary><strong>👀 실행 결과 보기</strong></summary>

```
# ==Introduction==
# Before calling
# Hi, my name is Groot.
# After calling
# Groot's love
```

</details>

## References

- [Primer on Python Decorators](https://realpython.com/primer-on-python-decorators/)
- [Python Inner Functions—What Are They Good For?](https://realpython.com/inner-functions-what-are-they-good-for/)
