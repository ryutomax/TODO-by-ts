# Node.jsの公式イメージを使用
FROM node:18

# 作業ディレクトリを設定
WORKDIR /workspace

# 必要なツールをインストール
RUN apt-get update && apt-get install -y \
    zsh \
    && rm -rf /var/lib/apt/lists/*

# Node.jsのグローバルパスを設定
ENV PATH="/workspace/node_modules/.bin:$PATH"

# デフォルトのシェルをzshに変更
SHELL ["/bin/zsh", "-c"]