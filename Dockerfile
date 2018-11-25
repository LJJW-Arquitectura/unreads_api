FROM node:carbon-slim

# Create app directory
WORKDIR /git/unreads-api

# Install app dependencies
COPY package.json /git/unreads-api/
RUN npm install

# Bundle app source
COPY . /git/unreads-api/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]

EXPOSE 5000