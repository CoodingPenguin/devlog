---
title: 🐍 파일 입출력
date: 2021-01-22 00:00:01
category: "🐍 Python"
thumbnail: "./img/thumbnail.png"
draft: false
---

![thumbnail](./img/thumbnail.png)

> [부스트캠프 AI Tech](https://boostcamp.connect.or.kr/program.html)의 강의를 참고하여 작성한 포스트입니다.

## Table of Contents

- [파일의 종류](#파일의-종류)
- [파이썬 파일 입출력](#파이썬-파일-입출력)
- [pathlib 모듈](#pathlib-모듈)
- [pickle](#pickle)
- [References](#references)

## 파일의 종류

기본적인 파일의 종류로 텍스트 파일(text)과 바이너리 파일(binary)이 존재한다.

- **바이너리 파일**: 이진 형식으로 저장된 파일
- **텍스트 파일**: 문자열 형식으로 저장된 파일

  - ASCII/Unicode 문자열 집합으로 실제로는 binary 형태이다.

## 파이썬 파일 입출력

### 파일 열기와 닫기

![file open mode](./img/5-file-io-mode.png)

파일은 `open("파일 이름", "접근 모드")`로 파일을 열 수 있다. 파일을 읽고 혹은 쓰고 난 뒤에는 항상 `close()`로 파일을 닫아줘야 한다.

```python
f = open('sample.txt', 'r)  # 읽기 모드로 파일 열기
text = f.read()             # 파일 전체 내용 읽기
print(text)
f.close()                   # 파일 닫기
```

만약 `close()`를 자주 까먹는다면 **with 구문**과 함께 사용하면 좋다. with 구문이 끝나면 종료 시 파일 객체에 있는 `__exit__()`를 호출하여 파일을 자동으로 닫아준다.

```python
with open('sample.txt) as f:  # 컨텍스트 진입 및 관련 객체 반환
  text = f.read()             # 파일 전체 내용 읽기
  print(text)
# with문이 끝나면 자동으로 파일을 닫아줌
```

### 파일 읽기

파일을 읽기 위해서는 접근 모드를 `r`로 설정해야 한다. 파일을 읽기 위한 메소드는 다음과 같이 3개가 있다.

- `read()`: 파일 전체 내용을 하나의 문자열로 읽어온다. (바이너리 파일도 가능)
- `readline()`: 한 번에 한 줄만 읽어온다.
- `readlines()`: 파일 전체를 읽어 한 줄이 요소인 리스트를 반환한다.

### 파일 쓰기

파일을 쓰기 위해서는 접근 모드를 `w`로 설정해야 한다. 파일을 쓰기 위한 메소드는 다음과 같이 2개가 있다.

- `write(data)`: 한 줄을 파일에 쓴다. (바이너리 파일도 가능)
- `writelines(data)`: 여러 개의 줄을 파일에 한 번에 쓴다.

## pathlib 모듈

Python3.4 전에는 `os`, `shutil`, `glob`로 파일 경로(Path)를 문자열로 나타냈지만, 이후로 `pathlib` 모듈이 생기면서 경로를 Path라는 객체로 나타낼 수 있다.

### Path 객체 생성

```python
import pathlib
# 현재 경로를 포함한 Path 객체 생성
current_path = pathlib.Path.cwd()
# 직접 경로 설정해서 Path 객체 생성
my_path = pathlib.Path(r'C:\Users\Penguin\workspace')
```

여러 Path를 하나로 붙이고 싶다면 `/` 연산자나 `joinpath()` 메서드를 사용하면 된다.

```python
# 방법 1. \ 연산자
new_path1 = my_path / 'python' / 'sample.py'
# 방법 2. joinpath()
new_path2 = my_path.joinpath('python', 'sample.py')
# C:\Users\Penguin\workspace\python\sample.py
```

### Path 객체로 파일 읽기/쓰기

- `open()`을 사용하는데 경로를 넣는 부분에 Path 객체를 넣는다.
- Path 객체의 읽기/쓰기 메서드를 사용한다.
  - 데이터 유형에 따라, 읽기/쓰기에 따라 4가지의 메서드를 제공한다.
  - `read_text()`(텍스트, 읽기), `read_bytes()`(바이너리, 읽기), `write_text()`(텍스트, 쓰기), `write_bytes()`(바이너리, 쓰기)

### Path의 장점: 속성

Path 객체의 가장 큰 장점은 **경로에 대한 속성**을 가진 객체라는 점이다. 보통 문자열로 표현된 경로는 해당 경로의 특징을 다 담지 못하는데 이런 점을 Path 객체로 보완할 수 있다.

```python
print(my_path.name)   # 디렉토리 표시가 없는 순수 파일명
print(my_path.stem)   # 확장자이 없는 순수 파일명
print(my_path.suffix) # 확장자
print(my_path.parent) # 부모 경로의 Path 객체
```

## pickle

파이썬의 객체를 **영속화(persistence)하는 built-in 객체**를 말한다. 파이썬으로 구현된 객체, 데이터, 모델 등을 저장하고 불러와 그대로 사용할 수 있다.

가끔 JSON으로 정보를 저장하는 경우가 있는데 JSON은 자바스크립트 기반으로 만들어지는 파일이라 파이썬에서 저장했다가 다시 불러왔을 때 깨질 수 있다. 그러니 저장이 필요하다면 되도록 pickle로 저장하자!

```python
import pickle

# pickle 파일 저장
with open('list.pickle', 'wb') as f:
  lst = [1, 2, 3, 4, 5]
  pickle.dump(lst, f)

# pickle 파일 불러오기
with open('list.pickle`, 'rb') as f:
  new_lst = pickle.load(f)
  print(new_lst)
```

## References

- [with 문 컨텍스트 관리자](https://docs.python.org/ko/3/reference/datamodel.html#context-managers)
- [파일 읽기, .read() 메소드](https://wikidocs.net/14130)
- [컨텍스트 관리자 형](https://docs.python.org/ko/3/library/stdtypes.html#typecontextmanager)
- [Python 3's pathlib Module: Taming the File System](https://realpython.com/python-pathlib/)
