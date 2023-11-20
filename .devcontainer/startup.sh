sed -i 's/codespaces/agnoster/' ~/.zshrc && \
sed -i'' -r -e "/prompt_hg/a\  prompt_newline" ~/.oh-my-zsh/themes/agnoster.zsh-theme && \
# cp .devcontainer/.ssh/id_rsa* ~/.ssh/ && \
echo $(pwd) && \
source ~/.bash_profile && \
npm install && \
echo DONE