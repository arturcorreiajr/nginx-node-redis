FROM node:latest
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

COPY . .

COPY --chown=node:node . .

RUN apk add --update nodejs npm

RUN npm install

USER node

EXPOSE 3001

CMD [ "node", "src/index.js" ]