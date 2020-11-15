---
title: 🌏 [파이썬 웹프로그래밍] 웹 프로그래밍과 웹 클라이언트
date: 2020-11-16 00:28:00
category: django
thumbnail: './img/thumbnail'
draft: false
---

![thumbnail](./img/thumbnail_2.png)
> 이 글은 필자가 [파이썬 웹 프로그래밍](http://www.yes24.com/Product/Goods/63503495)으로 웹과 Django를 공부하며 정리한 글입니다. 혹시 잘못된 부분이 있다면 친절히 가르쳐주시면 감사하겠습니다:)

## 웹 프로그래밍이란?

웹 프로그래밍이란 **HTTP/HTTPS 프로토콜로 통신하는 클라이언트와 서버를 개발**하는 것. 예를 들면, 웹 브라우저(웹 클라이언트) / 네이버 서버(웹 서버)가 있다.


## 다양한 웹 클라이언트

웹 서버에 요청을 보내는 **웹 클라이언트**는 다양하게 만들 수 있다. 여기서 중요한 것은 **웹 클라이언트의 형태는 달라도 동일한 요청에 대해서는 동일한 응답을 받는다**는 것이다! 

- **웹 브라우저** : 주소창에 *www.example.com*을 입력하고 웹 브라우저에서 주소창에 적힌 문장을 해석해 웹 서버에게 HTTP 요청을 보낸다.
- **리눅스 curl 명령** : *HTTP/HTTPS/FTP* 등 여러 가지의 프로토콜을 사용하여 데이터를 송수신할 수 있는 명령어인 `curl`을 사용하여 보낸다.
    ```shell
    # 인자로 넘어온 URL로 HTTP 요청을 보냄
    curl www.example.com
    ```
- **Telnet** : Telnet은 터미널 창에서 입력하는 내용을 그대로 웹 서버에 전송한다. *HTTP* 프로토콜의 요청 메시지 규격에 정의된 규격에 따라 요청을 해야 한다.
    - `telnet www.example.com` → `GET / HTTP/1.1` → `Host: www.example.com` 
- **직접 만든 클라이언트** : 파이썬의 *urllib.request*을 사용하여 웹 서버에 HTTP 요청을 보낸다.
    ```python
    import urllib.request
    print(urllib.request.urlopen('http://example.com').read().decode('utf-8')
    ```