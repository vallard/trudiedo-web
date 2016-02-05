# Dockerfile for trudiedo-web
FROM nginx
MAINTAINER Vallard Benincosa "vallard@benincosa.com"
COPY html/* /usr/share/nginx/html
RUN rm -rf /etc/nginx/* 
COPY nginx/* /etc/nginx/
