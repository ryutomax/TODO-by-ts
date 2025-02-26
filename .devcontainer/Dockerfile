FROM node:18

WORKDIR /workspace

RUN apt-get update && apt-get install -y \
    zsh postgresql-client \
    && rm -rf /var/lib/apt/lists/*

ENV PATH="/workspace/node_modules/.bin:$PATH"

SHELL ["/bin/zsh", "-c"]