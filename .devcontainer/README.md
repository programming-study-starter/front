# Dev Container

## Github 에 등록한 id_rsa, id_rsa.pub 파일을 .ssh 폴더에 넣으세요

- Dev Conatiner 를 실행하기 전에 아래 명령어를 실행하세요

```bash
# 예제
pwd
/home/wslUbuntu/workspace/front

cp ~/.ssh/id_rsa ./.devcontainer/.ssh/
cp ~/.ssh/id_rsa.pub ./.devcontainer/.ssh/
```
