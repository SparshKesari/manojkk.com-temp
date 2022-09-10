FROM alpine:3.14
WORKDIR /manojkk
RUN apk update && apk upgrade && \
    apk add --no-cache bash npm
COPY ./* ./
RUN npm installs

EXPOSE 3000
CMD npm run dev