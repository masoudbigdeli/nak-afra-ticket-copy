FROM node:latest AS base



WORKDIR /app



COPY ./package.json .

COPY ./package-lock.json .

COPY ./.npmrc .



RUN npm i



#RUN rm package-lock.json



COPY . .

RUN npm run build



FROM nginx:latest



EXPOSE 80



COPY --from=base /app/dist /app/dist



COPY ./nginx/next.conf /etc/nginx/conf.d/default.conf
