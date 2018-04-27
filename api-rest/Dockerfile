FROM node:alpine
COPY . /var/www/api
WORKDIR /var/www/api
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm", "start"]