from ubuntu

env NODE_VERSION 4.4.7

workdir /app

run sed -i "/deb-src/d" /etc/apt/sources.list && apt-get update && \
  apt-get install --yes --no-install-recommends curl ca-certificates xz-utils \
  bzip2 libfontconfig net-tools

run curl -sSL "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" | tar xfJ - -C /usr/local --strip-components=1 && \
  npm install yarn npm -g
