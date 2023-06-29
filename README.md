## json-server

* npm i -D json-server

* .envにNEXT_PUBLIC_API_DOMAIN='http://localhost:3001'

* db.jsonとroutes.jsonとmiddleware.jsを追加

* axios導入
```
export const JsonApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
});
```

* npm-run-allの導入  
複数のnpm-scriptを実行できるコマンドラインツール  
`npm install npm-run-all --save-dev`
```
"start:local": "npm-run-all --parallel mock dev",
"mock": "json-server --watch _mock/db.json --port 3001 --routes _mock/routes.json --middlewares _mock/middleware.js",
```

## gitmessage設定
`git config commit.template .gitmessage`