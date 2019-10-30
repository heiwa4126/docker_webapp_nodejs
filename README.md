# docker_webapp_nodejs

[Node.js Web アプリケーションを Docker 化する | Node.js](https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/)
をもとに作ったコンテナ。DockerとDocker Hubの練習。

Node 10.xとexpressjs。

# Docker Hub

[Docker Hub](https://cloud.docker.com/repository/docker/heiwa4126/webapp_nodejs)で
`heiwa4126/webapp_nodejs`
として公開。


``` bash
docker pull heiwa4126/webapp_nodejs
docker run --init -p 8080:8080 -d heiwa4126/webapp_nodejs
curl http://localhost:8080
```
のように実行。

# 開発

``` bash
./server.js
```
でNode.jsレベルで実行

``` bash
util/docker-build
```
でイメージ作成

``` bash
util/docker-run
util/simple-test
```
でDockerレベルで実行

``` bash
util/docker-push
```
でDocker Hubにpush (事前に`docker login`必要)

