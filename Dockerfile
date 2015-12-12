from node:4.2.2
MAINTAINER Eric Fortin
EXPOSE 8080

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json /usr/src/app
RUN npm install

ADD *.js /usr/src/app

CMD npm start
