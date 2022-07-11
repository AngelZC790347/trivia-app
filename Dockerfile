FROM node:14.15-alpine
WORKDIR /app
COPY build .
RUN npm install -g serve
CMD [ "serve","-s","."]
