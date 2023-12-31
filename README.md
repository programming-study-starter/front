# Front Project

- Next.js 를 활용한 Front end project

## Skill

- Next.js
- swr

## Tool

- VS Code
- VS Code Plugin Dev Container
  - (Dev Container로 React JavaScript 개발환경 구성)[https://booiljung.github.io/technical_articles/vscode/node-dev-container-1.html]
  - (VS Code devcontainers Dockerfile)[https://doc.skill.or.kr/remote-containers-visual-studio-code-feat.dockerfile]

## What to do?

- 게시판 서비스로 시작하여 결재문서 상신까지 할 수 있도록한다
- 회원이 사용할 수 있는 게시판
- 회원의 등급 별로 할 수 있는 행위를 제한할 수 있도록

## Environments

- next 13.5.6
- cookies-next 4.0.0
- axios 1.5.1
- tailwindcss 3
- flowbite 1.8.1
- flowbite-react 0.6.4
- zustand 4.4.6
- @tanstack/react-query 5.7.2
- @tanstack/react-table 8.10.7
- typescript 5
- Dev Containers(VS Code)

## Dev Container 가이드

### Dev Conatiner 를 실행하기 전 Github 에 등록한 id_rsa, id_rsa.pub 파일을 .devcontainer/.ssh 폴더에 넣으세요

- Dev Conatiner 를 실행하기 전에 아래 명령어를 실행하세요

```bash
ssh-add $HOME/.ssh/{사용자가 github 에 등록한 ssh rsa key}
# 예제
ssh-add $HOME/.ssh/id_rsa
ssh-add $HOME/.ssh/github_rsa
```

## How to run

```bash
npm install

npm run dev # localhost:3000

npm run build

npm run start
```

## How to develop

- Pre Requirement
  - [javascript ES6](https://velog.io/@kim_unknown_/JavaScript-ES6)
  - [node.js](https://velog.io/@hanblueblue/Node.js-Basic)
  - [react 는 기본 개념만 알면 된다](https://velog.io/@kim-jaemin420/React-%EA%B8%B0%EB%B3%B8-%EA%B0%9C%EB%85%90)
- [Next.js](https://nextjs.org/docs)
