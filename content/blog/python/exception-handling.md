---
title: 🐍 예외 처리
date: 2021-01-22 00:00:00
category: "🐍 Python"
thumbnail: "./img/thumbnail.png"
draft: false
---

![thumbnail](./img/thumbnail.png)

> [부스트캠프 AI Tech](https://boostcamp.connect.or.kr/program.html)의 강의를 참고하여 작성한 포스트입니다.

## Table of Contents

- [예외처리: try, except, finally](#예외처리-try-except-finally)
- [예외 발생: raise](#예외-발생-raise)
- [예외 종류](#예외-종류)
- [References](#references)

## 예외처리: try, except, finally

인터프리터의 실행 과정에서 발생하는 예외를 처리할 수 있는 방법이다.

### try ~ except

```python
try:
  # 예외 발생이 가능한 코드
except:
  # 예외 발생시 대응하는 코드
```

### try ~ except ~ else

`if ~ else` 구문과 겹쳐보여서 그렇게 추천하지는 않는다.

```python
try:
  # 예외 발생이 가능한 코드
except:
  # 예외 발생시 대응하는 코드
else:
  # 예외가 발생하지 않았을 때 동작하는 코드
```

### try ~ except ~ finally

```python
try:
  # 예외 발생이 가능한 코드
except:
  # 예외 발생시 대응하는 코드
finally:
  # 예외 발생 여부와 상관 없이 실행되는 코드
```

## 예외 발생: raise

`raise` 키워드를 사용해 `raise` 뒤에 명시된 예외를 발생시킬 수 있다.

```python
for i in range(0, 10, -1):
  if i == 0:
    raise ZeroDivisionError("0으로 나누었습니다.")
  print(100/i)
```

## 예외 종류

아래는 **필자가 만나본 예외(Exception)**만 정리한 것이다. 자세한 예외의 종류는 [여기](https://python.bakyeono.net/chapter-9-4.html)를 참고!

|        예외         | 내용                                         |
| :-----------------: | :------------------------------------------- |
| `ZeroDivisionError` | 0으로 나누려 할 떄                           |
|  `AssertionError`   | assert문에 의해 발생                         |
|     `EOFError`      | 파일에서 더이상 읽어들일 데이터가 없을 때    |
|    `IndexError`     | 잘못된 인덱스로 접근할 때                    |
|     `KeyError`      | 잘못된 Key값으로 접근할 떄                   |
|     `NameError`     | 잘못된 변수를 가리킬 때                      |
|  `FileExistsError`  | 이미 존재하는 파일/디렉터리를 새로 생성할 때 |
| `FileNotFoundError` | 존재하지 않는 파일/디렉터리에 접근하려 할 때 |
|  `RecursionError`   | 재귀 호출 단계가 허용 한계를 넘었을 때       |
|     `TypeError`     | 데이터의 유형이 잘못되었을 때                |
|    `ValueError`     | 데이터의 값이 잘못되었을 때                  |

## References

- [연오의 파이썬 - 예외의 분류·정의·발생](https://python.bakyeono.net/chapter-9-4.html)
