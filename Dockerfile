FROM node:16
WORKDIR /app
COPY package.json /app/
COPY yarn.lock /app/
RUN npm install --global yarn
RUN yarn install
COPY . ./app/
CMD ["yarn", "start"]