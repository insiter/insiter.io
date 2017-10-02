from ruby

env NODE_VERSION=8.6.0

run curl -sSL "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" | tar xfJ - -C /usr/local --strip-components=1 && \
  npm install npm -g && npm install yarn npm -g

run gem update --system

workdir /tmp
copy Gemfile* /tmp/
run bundle install
