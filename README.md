# DonReferro

Simple application which shows a list of jobs. Small features can be built on it, like create a job, delete or edit an existing job.

## Requirements

You should have installed:

- [Docker]
- Ruby > 2.3
- [foreman] (gem install foreman)
- [yarn] (npm install -g yarn)

[Docker]: https://www.docker.com/community-edition
[foreman]: https://ddollar.github.io/foreman/
[yarn]: https://yarnpkg.com/

## Setup

    ./setup

## Run the project

First you need to run _Postgres_ with Docker:

    docker-compose up

This will start _client_ and _server_ apps:

    foreman start

## Resources useful

- Github [fetch] javascript polyfill
- [Material UI] - a set of React components that implement Google's Material Design

[fetch]: https://github.com/github/fetch
[Material UI]: http://www.material-ui.com/#/
