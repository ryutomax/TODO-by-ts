# ベースイメージとしてNode.jsを使用
FROM node:22-alpine

# 作業ディレクトリを設定
WORKDIR /app

# ソースコードをコピー
COPY . .

RUN npx create vite@latest vite-react-app -- --template react-ts

# # 必要なファイルをコンテナにコピー
# COPY package*.json ./

WORKDIR /app/vite-react-app
# # 依存関係をインストール
RUN npm install

# Viteサーバーを起動するポートを公開
EXPOSE 5173

# 開発サーバーを起動
CMD ["npm", "run", "dev"]