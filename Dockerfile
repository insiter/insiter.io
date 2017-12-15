FROM ruby:2.4.2-alpine3.7

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

WORKDIR /app
COPY Gemfile Gemfile.lock package.json yarn.lock /app/

RUN apk add --no-cache g++ make nodejs yarn \
    && gem update --system \
    && bundle install \
    && yarn install \
    && apk del g++ make

COPY . /app/
EXPOSE 4567

CMD ["bundle", "exec", "middleman", "serve"]
