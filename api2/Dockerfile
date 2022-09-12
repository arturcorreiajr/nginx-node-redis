FROM node:6-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

RUN npm install

COPY package*.json ./

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3002

CMD [ "node", "src/index.js" ]