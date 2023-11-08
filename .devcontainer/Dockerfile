# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.217.4/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bookworm

# 시간 및 날짜 설정
ENV TZ Asia/Seoul

RUN apt-get update

# 테마 적용
RUN sed -i 's/codespaces/agnoster/' /home/node/.zshrc
RUN sed -i'' -r -e "/prompt_hg/a\  prompt_newline" /home/node/.oh-my-zsh/themes/agnoster.zsh-theme
