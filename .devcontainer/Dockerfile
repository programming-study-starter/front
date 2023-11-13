# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.217.4/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bookworm

# 시간 및 날짜 설정
ENV TZ Asia/Seoul

RUN rm -rf /root/.ssh && \
    mkdir -p /root/.ssh && \
    chmod 700 /root/.ssh

COPY .ssh/config /root/.ssh/ 
COPY .ssh/id_rsa /root/.ssh/ 
COPY .ssh/id_rsa.pub /root/.ssh/ 

RUN apt-get update && \
    apt-get -y install openssh-client && \
    ssh-keygen -q -t rsa -N '' -f /id_rsa && \
    eval $(ssh-agent) && \
    chmod 600 /root/.ssh/id_rsa && \
    chmod 600 /root/.ssh/id_rsa.pub && \
    sed -i 's/codespaces/agnoster/' /home/node/.zshrc && \
    sed -i'' -r -e "/prompt_hg/a\  prompt_newline" /home/node/.oh-my-zsh/themes/agnoster.zsh-theme
