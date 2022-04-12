FROM 936289044322.dkr.ecr.eu-west-1.amazonaws.com/insider_web_php:node
LABEL MAINTAINER="T <tugay@useinsider.com>"

ARG buildtime_NODE_ENV=development
ENV NODE_ENV=$buildtime_NODE_ENV
RUN apk add git g++ make python
WORKDIR /var/pioneer

COPY package*.json ./
# Install jq and curl dependencies
RUN apk add --no-cache jq curl
# Get major.minor version (that is v14.xx for node:14-alpine)
RUN export NODE_MAJOR_MINOR_VERSION=$(node --version | cut -d. -f1,2)
# Dynamically receive the newest version for the major version of this image
# Download the suitable tarball
RUN curl -fsSLO --compressed "https://unofficial-builds.nodejs.org/download/release/v14.16.1/node-v14.16.1-linux-x64-musl.tar.xz"
# Uncompress the tarball
RUN tar -xJf "node-v14.16.1-linux-x64-musl.tar.xz" -C /usr/local --strip-components=1 --no-same-owner
# Overwrite symlink node -> nodejs
RUN ln -sf /usr/local/bin/node /usr/local/bin/nodejs
RUN npm install -g npm@7.19.1
RUN npm install

COPY . .

VOLUME ["/var/pioneer"]

EXPOSE 23310

CMD ["npm", "run", "serve"]
