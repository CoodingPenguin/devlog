---
title: 🐍 모듈과 패키지
date: 2021-01-21 00:00:03
category: "🐍 Python"
thumbnail: "./img/thumbnail.png"
draft: false
---

![thumbnail](./img/thumbnail.png)

> [부스트캠프 AI Tech](https://boostcamp.connect.or.kr/program.html)의 강의를 참고하여 작성한 포스트입니다.

## Table of Contents

- [모듈](#모듈)
- [패키지](#패키지)
- [References](#references)

## 모듈

파이썬의 모듈은 `.py` 파일을 말한다. `import` 문을 사용해서 모듈을 호출할 수 있다.

<div class="quote-block">
<div class="quote-block__emoji">💡</div>
<div class="quote-block__content" markdown=1>

\_\_pycache\_\_

인터프리터가 파이썬 파일을 쉽게 호출할 수 있도록 기계어로 번역한 후의 파일이 저장되는 공간이다. 다음 실행 시 좀 더 빨리 파일을 불러올 수 있다.

</div>
</div>

### 다양한 import 예시

- `import module as m`: module을 m으로 별칭을 설정
- `from module import func[class]`: module의 특정 함수 혹은 클래스 호출
- `from module import *`: module 안에 있는 모든 함수와 클래스를 호출

### if \_\_name\_\_ == "\_\_main\_\_"

모듈도 결국 **파이썬 스크립트**이다. 그러므로 실행을 하면 다른 스크립트와 똑같이 실행될 것이다. 그런데 만약 모듈에 함수 테스트를 위해 여러 `print()` 문을 적었다고 생각해보자.

다른 파일에서 해당 모듈을 import하면 어떻게 될까? **모듈도 스크립트이기 때문에 테스트용으로 써놓은 코드가 import할 때 실행이 될 것이다.** 그럼 import 할 때마다 출력이 되서 참 곤란할 것이다. 이를 방지하기 위해 테스트용 코드를 `if __name__ == "__main__"` 안에 넣으면 모듈 import 시에는 모듈 파일을 실행하는 것이 아니므로 테스트용 코드를 실행하지 않는다.

## 패키지

여러 다양한 모듈들의 묶어 패키지로 만들 수 있다. 이 때 `__init__`, `__main__`과 같은 키워드 파일명이 사용된다. 대부분의 오픈소스가 패키지로 관리되고 있다.

### \_\_init\_\_.py

현재 폴더가 패키지임을 알리는 초기화 스크립트

- Python3.3부터는 이 파일이 없더라도 패키지로 간주한다.
- `__all__` 로 import할 수 있는 모듈을 정의하고 `import`로 해당 모듈들을 불러온다.

```python
__all__ = ["sound", "character", "manager"]

from . import sound
from . import character
from . import manager
```

### \_\_main\_\_.py

패키지를 실행시키는, 즉 **실행의 시작점**이 되는 파일

```python
from character import move_character()
from sound import play_bgm()
from manager import start_game()

if __name__ == '__main__':
  start_game()
  play_bgm()
  move_character()
```

## References

- [Python Modules and Packages – An Introduction](https://realpython.com/python-modules-packages/)
