---
title: 🐍 파이썬은 어떤 언어?
date: 2021-01-18 00:00:00
category: "🐍 Python"
thumbnail: "./img/thumbnail.png"
draft: false
---

![thumbnail](./img/thumbnail.png)

> [부스트캠프 AI Tech](https://boostcamp.connect.or.kr/program.html)의 강의를 참고하여 작성한 포스트입니다.

## Table of Contents

- [파이썬은 어떤 언어?](#파이썬은-어떤-언어)
- [파이썬의 철학](#파이썬의-철학)
- [더 나아가 - 파이썬 GIL](#더-나아가---파이썬-gil)
- [References](#references)

## 파이썬은 어떤 언어?

- 플랫폼에 독립적인 언어
- 인터프리터 언어
- 객체 지향 언어
- 동적 타이핑 언어

### 플랫폼 독립적인 언어

`운영체제에 상관 없이` 그에 맞는 인터프리터만 있다면 프로그램을 작성할 수 있는 언어를 말한다.

<div class="quote-block">
<div class="quote-block__emoji">💡</div>
<div class="quote-block__content" markdown=1>

컴파일러 vs 인터프리터

- **컴파일러**: 소스코드를 기계어로 먼저 번역 → 실행 속도↑, 메모리↑
- **인터프리터**: 별도의 번역과정 없이 소스코드를 실행시점에 해석하여 컴퓨터가 처리 → 실행 속도↓, 메모리↓

</div>
</div>

### 객체 지향 언어

실행 순서가 아닌 `단위 모듈(객체) 중심`으로 프로그램을 작성하는 언어이다.

- 객체는 행동(method)과 속성(attribute)로 구성된다.
- 파이썬은 모든 것이 객체로 이루어져있으며, 데이터 타입도 객체이다.

### 동적 타이핑 언어

`프로그램이 실행하는 시점`에 프로그램이 사용해야할 데이터에 대한 타입을 결정하는 언어를 말한다.

- 파이썬의 자료형은 할당되는 값에 따라 결정된다.
- 비슷한 언어로는 Scala, JavaScript 등이 있다.

## 파이썬의 철학

> Life is short. You need Python.

```python
import this
```

<details markdown="1">
<summary><strong>👀 실행 결과</strong></summary>

<br/>

**The Zen of Python, by Tim Peters**

Beautiful is better than ugly.  
Explicit is better than implicit.  
Simple is better than complex.  
Complex is better than complicated.  
Flat is better than nested.  
Sparse is better than dense.  
Readability counts.  
Special cases aren't special enough to break the rules.  
Although practicality beats purity.  
Errors should never pass silently.  
Unless explicitly silenced.  
In the face of ambiguity, refuse the temptation to guess.  
There should be one-- and preferably only one --obvious way to do it.  
Although that way may not be obvious at first unless you're Dutch.  
Now is better than never.  
Although never is often better than _right_ now.  
If the implementation is hard to explain, it's a bad idea.  
If the implementation is easy to explain, it may be a good idea.  
Namespaces are one honking great idea -- let's do more of those!

</details>

## 더 나아가 - 파이썬 GIL

> The mechanism used by the CPython interpreter to assure that only one thread executes Python bytecode at a time.

인터프리터가 **한 쓰레드만 한 번에 파이썬 바이트코드(=명령어)를 실행할 수 있도록 보장하는 것**을 말한다.

- 파이썬에서는 싱글 쓰레드만 가능하다.
- 코드 단위가 아니므로 프로그래밍으로 따로 mutex를 구현해야 코드 단위의 상호 배제가 보장된다.

## References

- [Understanding the Python GIL](http://www.dabeaz.com/python/UnderstandingGIL.pdf)
- [왜 Python에는 GIL이 있는가](https://dgkim5360.tistory.com/entry/understanding-the-global-interpreter-lock-of-cpython)
- [[Python] 파이썬 멀티 쓰레드(thread)와 멀티 프로세스(process)](https://monkey3199.github.io/develop/python/2018/12/04/python-pararrel.html)
- [What Is the Python Global Interpreter Lock(GIL)?](https://realpython.com/python-gil/#the-impact-on-multi-threaded-python-programs)
- [Global interpreter lock](https://en.wikipedia.org/wiki/Global_interpreter_lock)
