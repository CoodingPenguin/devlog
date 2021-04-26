---
title: 🐍 Asterisk(*)의 의미
date: 2021-01-20 00:00:03
category: "🐍 Python"
thumbnail: "./img/thumbnail.png"
draft: false
---

![thumbnail](./img/thumbnail.png)

> [부스트캠프 AI Tech](https://boostcamp.connect.or.kr/program.html)의 강의를 참고하여 작성한 포스트입니다.

## Table of Contents

- [가변인자와 키워드 가변인자](#가변인자와-키워드-가변인자)
- [언패킹](#언패킹)
- [References](#references)

## 가변인자와 키워드 가변인자

- `가변인자` **(\*args)**: 일반 인자 다음에 오는 인자로, 일반 인자 이후의 모든 인자를 **튜플**로 묶는다.
- `키워드 가변인자` **(\*\*kwargs)**: 가변인자 다음에 오는 인자로, 키워드 인자의 형태로 인자를 추가하면 **딕셔너리**로 묶는다.

<div class="quote-block">
<div class="quote-block__emoji">💡</div>
<div class="quote-block__content" markdown=1>

함수의 인자 순서

함수의 인자는 **일반 인자 - 가변 인자 - 키워드 가변 인자** 순서를 꼭 지켜야한다! 아니면 에러가 발생한다!

</div>
</div>

## 언패킹

튜플, 리스트, 문자열, 딕셔너리에 있는 값을 **함수 인자**나 **zip** 등에서 언패킹하는 데도 사용된다.

- 함수 일반 인자

```python
list_packed = [1, 2, 3, 4, 5]
print(*list_packed, sep="-")    # 1-2-3-4-5
tuple_packed = (1, 2, 3, 4, 5)
print(*tuple_packed, sep="-")   # 1-2-3-4-5
str_packed = "abcdef"
print(*str_packed, sep="-")     # a-b-c-d-e-f
```

- 함수 키워드 인자

> 💡 잘 모르겠다면 자바스크립트의 `...` 연산자를 떠올려보자!

```python
def print_info(name, year, is_adult):
    print(f"My name is {name} and {year} years old!", end=" ")
    if is_adult:
        print("I'm an adult!")
    else:
        print("I'm not an adult!")


my_info = {'name': 'Groot', 'year': 20, 'is_adult': False}
print_info(**my_info)
# My name is Groot and 20 years old! I'm not an adult!
```
