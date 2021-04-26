---
title: 🐍 객체지향 프로그래밍
date: 2021-01-21 00:00:00
category: "🐍 Python"
thumbnail: "./img/thumbnail.png"
draft: false
---

![thumbnail](./img/thumbnail.png)

> [부스트캠프 AI Tech](https://boostcamp.connect.or.kr/program.html)의 강의를 참고하여 작성한 포스트입니다.

## Table of Contents

- [객체지향 프로그래밍이란?](#객체지향-프로그래밍이란)
- [객체 지향 언어의 특징](#객체-지향-언어의-특징)
- [References](#references)

## 객체지향 프로그래밍이란?

객체는 **속성(attribute)**와 **행동(action)**으로 나타낼 수 있다. 이 개념을 프로그래밍에 적용한 것이 객체지향 프로그래밍이며, 속성은 **변수(variable)**로 행동은 **함수(method)**로 표현된다.

파이썬에서 객체는 **클래스(class)**를 이용해서 구현할 수 있다.

- 클래스는 객체의 청사진과 같은 역할을 한다.

```python
class Animal():
  def __init__(self, species, age):
    self.species = species
    self.age = age

  def run(self):
    print(f"{self.species} is running...")
```

- 클래스를 선언하면 인스턴스(객체)를 생성한다.

```python
dog = Animal("Dog", 3)
dog.run()   # Dog is running...
```

## 객체 지향 언어의 특징

### 상속 (Inheritance)

부모클래스로부터 **속성과 메서드를 물려 받은 자식 클래스**를 생성하는 것

- 자식 클래스는 부모클래스에 정의된 속성과 메서드를 사용할 수 있다.
- 함수 재정의로 자식 클래스에 맞게 함수를 변형할 수 있다.
- `super()`로 부모클래스를 불러오거나 부모클래스의 함수를 사용할 수 있다.

```python
class Dog(Animal):
  def __init__(self, species, age, breed):
    super().__init__(species, age)
    self.breed = breed

  def run(self):
    super().run()
    print(f"The breed of {self.species} is {self.breed}.")
```

```python
siba = Dog("Dog", 3, "siba")
siba.run()
# Dog is running...
# The breed of Dog is siba.
```

### 다형성 (Polymorphism)

같은 이름 메서드의 내부 로직을 다르게 작성할 수 있는 것을 말한다. 주로 부모클래스의 상속받은 자식 클래스가 **함수를 재정의**하면서 발생한다.

<div class="quote-block">
<div class="quote-block__emoji">💡</div>
<div class="quote-block__content" markdown=1>

덕 타이핑

파이썬은 다형성을 느슨하게 구현했기 때문에 클래스에 상관 없이 같은 동작(=메서드)을 한다면 같은 타입으로 간주한다. "꽥꽥하면 오리이다"라는 말에서 유래해 이를 **덕 타이핑 (Duck Typing)**이라고 부른다.

</div>
</div>

### 가시성 (Visibility)

객체의 속성의 이름 바로 앞에 `__`을 붙이면 속성을 숨길 수 있다. 접근을 하면 에러가 발생한다.

속성에 직접 접근할 수 없지만 간접적으로 접근은 가능하다. **Getter-Setter 메서드**를 직접 정의하거나 `@property`나 `@함수이름.setter`같은 **데코레이터(decorator)**로 정의하여 접근할 수 있다.

- 직접 Getter-Setter 메서드 정의

```python
class Person():
  def __init__(self, name)
    self.name = name

  def get_name(self):
    return self.name

  def set_name(self, new_name):
    self.name = new_name
```

```python
groot = Person("Groot")
print(groot.get_name())   # Groot
groot.set_name("Groooot")
print(groot.get_name())   # Groooot
```

- 데코레이터로 Getter-Setter 구현

```python
class Person():
  def __init__(self, name)
    self.name = name

  @property
  def name(self):
    return self.name

  @name.setter
  def name(self, new_name):
    self.name = new_name
```

```python
groot = Person("Groot")
print(groot.name)   # Groot
groot.name = "Groooot"
print(groot.name)   # Groooot
```
