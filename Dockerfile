FROM node:latest

RUN apt-get update -qq && apt-get install -qy libelf1
