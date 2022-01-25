FROM node:14.18.0 as builder

RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .
RUN yarn build

FROM nginx:1.16.0

COPY --from=builder /app/build /app

WORKDIR /app

COPY nginx.conf /etc/nginx/conf.d/default.conf
