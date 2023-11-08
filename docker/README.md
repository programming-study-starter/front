# Docker
- VS Code 의 Dev Container 사용해야함

## install
* Ubuntu

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

```bash
sudo chmod 777 /var/run/docker.sock
# Docker 관련 명령어들이 permission denied 일 때
sudo usermod -aG docker $USER
newgrp docker
```

## How to use

```bash
# Build
docker compose -f ./docker/docker-compose.yml --env-file ./docker/docker.env build --no-cache

# Build 이미지 확인
docker images
==>
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
front        v.0.0.0   cbdd1331e20a   5 minutes ago   1.03GB

# RUN
docker run -p 3000:3000 --name {container_name} {REPOSITORY}:{TAG}
docker run -p 3000:3000 --name front front:v.0.0.0

# 실행 상태 확인
docker ps -a
==> 
CONTAINER ID   IMAGE           COMMAND                  CREATED         STATUS         PORTS                                       NAMES
e8b64c5a5cae   front:v.0.0.0   "docker-entrypoint.s…"   5 minutes ago   Up 5 minutes   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp   front

# 중지
docker stop {CONTAINER_ID}

# 컨테이너 삭제
docker rm {CONTAINER_ID}

# 이미지 삭제
docker rmi {REPOSITORY}:{TAG}
docker image prune -f # REPOSITORY, TAG 가 <none> 상태의 모든 이미지 삭제

lsof -i:3000 # 3000 번 포트 사용하는 프로그램 확인
kill $(lsof -t -i:3000)

sudo kill $(sudo lsof -t -i:3000)
```

## Tips
* 아래와 같은 에러가 발생했을 경우
```sh
Container server: Remote to local stream terminated with error: {
  message: 'connect ENOENT \\\\.\\pipe\\openssh-ssh-agent',
  name: 'Error',
  stack: 'Error: connect ENOENT \\\\.\\pipe\\openssh-ssh-agent\n' +
    '\tat PipeConnectWrap.afterConnect [as oncomplete] (node:net:1247:16)'
}
```
* ssh key 를 만들지 않았다면 만들어야합니다
```bash
ssh-keygen
```
* ssh-agent 를 한번도 실행하지 않아서 발생하는 이슈
```bash
eval $(ssh-agent)
ssh-add ~/.ssh/id_rsa
```