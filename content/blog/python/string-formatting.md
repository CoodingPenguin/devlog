---
title: 문자열 포맷팅
date: 2021-01-19 09:48:00
category: "🐍 Python"
thumbnail: "./img/thumbnail.png"
draft: false
---

![thumbnail](./img/thumbnail.png)

## 포맷팅 방식 3가지

```python
integer = 10; string = "Hi!"; real = 3.14

# 방법 1. % string (옛날 방법)
print("정수: %d, 문자열: %s, 실수: %.2f" % (integer, string, real))
# 방법 2. format 함수
print("정수: {0}, 문자열: {1}, 실수: {2:.2f}".format(integer, string, real))
# 방법 3. f-string (대세)
print(f"정수: {integer}, 문자열: {string}, 실수: {real:.2f}")
```

## 포맷팅 옵션

f-string 기준으로 다음과 같이 `:` 다음에 포맷팅 옵션을 넣어줄 수 있다.

![formatting-option](./img/formatting.png)

- ① 빈칸에 채울 문자열
- ② `<` 왼쪽 정렬(기본), `>` 오른쪽 정렬, `^` 가운데 정렬
- ③ 숫자를 넣은 칸의 수
- ④ 소수점 몇 자리까지 할건지
