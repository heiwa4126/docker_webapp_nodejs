# docker_webapp_nodejs

[Node.js Web アプリケーションを Docker 化する | Node.js](https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/)
をもとに作ったコンテナ。Docker と Docker Hub の練習。

Node 20.x と [express](https://www.npmjs.com/package/express)。

## Docker Hub

[Docker Hub で heiwa4126/webapp_nodejs](https://cloud.docker.com/repository/docker/heiwa4126/webapp_nodejs)
として公開。

```bash
docker pull heiwa4126/webapp_nodejs
docker run --init -p 8080:8080 -d heiwa4126/webapp_nodejs
curl http://localhost:8080
```

のように実行。

## 開発

```bash
npm start
```

で Node.js レベルで実行
`npm stop`で停止。`npm restart`で再起動。

## Docker イメージ

```bash
npm run build
```

でイメージ作成

```bash
npm run docker
# またはWSLの場合
npm run docker:wsl
```

で起動。テストは

```sh
curl -i http://127.0.0.1:18080
```

のように。

`npm run docker:wsl` の場合は `npm run docker:log` で log が表示できます。

```bash
npm run docker:stop
```

で終了。

## Docker Hub へ発行

```bash
util/docker-push
```

で Docker Hub に push (事前に`docker login`必要)

## トラブルシューティング

WSL だと syslogd が無いので `docker run` すると

```
docker: Error response from daemon: failed to create task for container: failed to initialize logging driver: Unix syslog delivery error.
```

というエラーになります。JSON ドライバを使った `npm run docker:wsl` の方を試してください。

ログは `/var/lib/docker/containers/{container-id}/{container-id}-json.log` に出ますが、 `docker logs -f {container-id}` で参照したほうが楽。
