---
title: VSCode에서 Colab 연결하기
date: 2021-02-01 18:22:00
category: "🍯 Tips"
thumbnail: "./img/thumbnail.png"
draft: false
---

![thumbnail](./img/thumbnail.png)

> [부스트캠프 AI Tech](https://boostcamp.connect.or.kr/program.html)의 학습 정리 일부입니다. 잘못된 부분이 있다면 친절히 말씀해주시면 감사하겠습니다🙏

## 터미널 개발의 장점

구글에서 제공하는 Colab도 하나의 컴퓨터이며, **ssh**를 통해 VSCode에서 Colab을 연결하여 VSCode에서도 Colab 환경을 사용할 수 있다. 이러한 개발환경이 좋은 이유는 다음과 같다.

- **터미널 환경**에서의 작업이 가능하다. 그래서 데이터를 받아올 때 `wget`이나 `git clone`으로 간단히 데이터셋을 받아올 수 있다.
- 실제 서비스 개발 시 터미널 환경에서 코드를 많이 작성하기 때문에 터미널 개발 이점이 있다.

## 설치 방법

### 필수 조건

<div class="quote-block-simple">
<div class="quote-block-simple__emoji">💻</div>
<div class="quote-block-simple__content" markdown=1>

`윈도우 10` 환경에서 진행했습니다.

</div>
</div>

- Google Colab 계정 생성
- Visual Studio Code 설치
- [ngrok 계정](https://ngrok.com/) 생성

### 연결 방법

#### Step 1. Google Drive 마운트

왼쪽 탭에 있는 📁 아이콘을 눌러 Google Colab과 Drive 연결을 한다.

![드라이브 마운트](./img/colab-drive-mount.png)

#### Step 2. 런타임 유형 GPU

`[런타임] - [런타임 유형]`에 들어가 하드웨어 가속기를 **GPU**로 바꿔준다.

#### Step 3. ngrok의 authtoken 복사

[ngrok 대시보드](https://dashboard.ngrok.com/get-started/setup)에 들어가 **authtoken** 값을 복사한다.

![authtoken](./img/authtoken.png)

#### Step 4. ssh 연결 준비

Google Colab에 들어가 다음의 코드를 적고, `NGROK_TOKEN`에 authtoken 값을 넣고, `PASSWORD`는 자신이 원하는 값으로 설정한다. (나중에 ssh 연결 후 확인을 위해 비밀번호를 입력하는 창이 뜬다.)

```python
!pip install colab-ssh  # colab-ssh 설치

NGROK_TOKEN = '[토큰값]'  # ngrok 토큰
PASSWORD = '[비밀번호]'   # 비밀번호 설정

from colab_ssh import launch_ssh
from colab_ssh import launch_ssh_cloudflared,init_git_cloudflared
launch_ssh(NGROK_TOKEN, PASSWORD)
launch_ssh_cloudflared(password=PASSWORD)
```

#### Step 5. cloudflared 설치 및 config 파일 생성

위의 코드를 실행하면 다음과 같은 창이 뜨는데 cloudflared를 설치하고 config 파일을 생성하여 호스트 정보를 붙여넣고 저장한다. 이 때 주의할 점은 절대경로는 `/cloudflared.exe`로 끝나야한다.

![cloudflared 설치 및 config 설정](./img/cloudflared.png)

#### Step 6. VSCode에 Remote - SSH 확장 프로그램 설치

Visual Studio Code로 들어가 **Remote - SSH**를 설치해준다.

![Remote - SSH](./img/remote-ssh.png)

#### Step 7. Remote - SSH로 Host랑 연결하기

`Ctrl+Shift+P`를 눌러서 **Remote - SSH: Connect to Host**를 실행시키고 Google Colab에 있는 Hostname을 복사해서 붙여넣는다.

![Hostname](./img/hostname.png)

#### Step 8. 운영체제 선택 및 비밀번호

ssh로 Colab과의 연결이 시작되면 몇 개의 팝업이 뜨는 데, 플랫폼 운영체제는 **Linux**를 선택하고 앞서 Google Colab에 설정한 비밀번호를 입력하면 Google Colab과 VScode가 연결된다!
