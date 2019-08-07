FROM node:lts-alpine
MAINTAINER Lucas Morais lucasmorais.dev@gmail.com

RUN mkdir /code
WORKDIR /code
COPY ./code /code

USER node