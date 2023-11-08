FROM node:20-alpine

COPY . /front/

WORKDIR /front

RUN npm install
RUN npm run build

CMD [ "npm" , "run" , "dev"]
