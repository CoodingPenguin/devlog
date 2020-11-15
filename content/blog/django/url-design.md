---
title: 🌏 [파이썬 웹프로그래밍] URL 설계
date: 2020-11-16 01:49:00
category: django
thumbnail: './img/thumbnail'
draft: false
---

![thumbnail](./img/thumbnail_2.png)
> 이 글은 필자가 [파이썬 웹 프로그래밍](http://www.yes24.com/Product/Goods/63503495)으로 웹과 Django를 공부하며 정리한 글입니다. 혹시 잘못된 부분이 있다면 친절히 가르쳐주시면 감사하겠습니다:)

## URL 설계

URL 설계는 **웹 서버 로직 설계**에서 가장 중요한 단계로 사용자 또는 웹 클라이언트에게 웹 서버가 가지고 있는 기능을 명시해준다. 그래서  URL 변경은 최소화할 수 있도록 유연하게 설계하는 것이 중요하다.

![1-3](./img/1-3.png)

- `URL 스킴` : URL에 사용된 프로토콜. 여기서는 *HTTP 프로토콜*을 사용한다.
- `호스트명` : 웹 서버의 호스트명으로 *도메인명* 혹은 *IP주소*로 표현된다.
- `포트번호` : 웹 서버 내의 서비스 포트번호. 디폴트로 *HTTP*는 *80*을, *HTTPS*는 *443*을 사용한다.
- `경로` : 파일이나 어플리케이션 경로
- `쿼리스트링` : 앰퍼샌드(*&*)로 구분된 **이름=값** 쌍 형식으로 표현된다.
- `프라그먼트` : 문서 내의 앵커 등 조각을 지정한다.

## URL을 바라보는 측면

URL은 웹 크라이언트에서 호출한다는 시점에서 보면, 웹 서버에 존재하는 애플리케이션에 대한 **API(Application Programming Interface)**라고 볼 수 있다.

API의 명명 규칙을 정하는 방법은 두 가지인데 하나는 *RPC(Remote Procedure Call)* 방식이고 다른 하나는 *REST(Representational State Transfer)* 방식이다.

### RPC

클라이언트가 네트워크 상에서 **원격 서버가 제공하는 API 함수**를 호출하는 방식

```
http://blog.example.com/search?q=test&debug=true
```

- URL 설계와 API 설계를 동일하게 고려한다.
- URL의 경로를 **API 함수명**으로, 쿼리들을 **함수의 인자**로 간주한다. → 경로 대부분이 동사

### REST

웹 서버에 존재하는 요소들을 모두 **리소스**로 정의하고, URL로 웹 서버의 **특정 리소스를 표현**하는 방식

```
http://blog.example.com/search/test
```

- 서버 간에 데이터 교환은 정확히 엄밀히 말하면 **리소스 상태의 교환(Representational State Transfer)**이다. 왜냐하면 리소스는 시간이 지남에 따라 상태(State)가 변하기 때문.
- 리소스에 대한 조작을 *GET, POST, PUT, DELETE*와 같은 *HTTP 메소드*로 구분한다.

<br>

정리하면 `RPC` 방식에서 URL을 전송하는 것은 **웹 서버의 API 함수를 호출**하는 것이고, `REST` 방식에서는 **웹 서버에 있는 리소스 상태에 대한 데이터를 주고받는 것**이다.

## 간편 URL

간편 URL이란 **쿼리스트링 없이 경로만 가진 간단한 구조의 URL**을 말한다.

- 검색 엔진의 처리를 최적화할 수 있다. → 검색 엔진 친화적 URL
- 사람 입장에서도 기억하기 쉽다. → 사용자 친화적 URL

```
# 기존 URL
http://example.com/index.php?page=foo
# 간편 URL
http://example.com/foo 
```

## 파이썬의 우아한 URL

- 파이썬 프레임워크는 처음부터 **간편 URL 체계**를 도입했다.
- 파이썬에서는 간편 URL을 **우아한 URL**이라 부르기도 한다.
- 그 외에 URL을 정의하기 위해 **정규표현식**을 사용하여 조금 더 구체적으로 표현할 수 있다.
