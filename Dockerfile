FROM ruby

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

ENV NODE_VERSION=8.6.0

RUN curl -sSL "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" | tar xfJ - -C /usr/local --strip-components=1
RUN gem update --system

WORKDIR /tmp
COPY Gemfile* /tmp/
RUN bundle install
