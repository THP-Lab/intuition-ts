FROM docker.io/node:lts-alpine as base

WORKDIR /app

COPY package.json \
    project.json \
	tsconfig* \
	nx.json \
	pnpm*.yaml \
    .eslintrc.base.cjs \
    .verdaccio \
	./
COPY apps/portal ./apps/portal
COPY packages ./packages

RUN apk add --no-cache \
	python3 \
	make \
	gcc \
	g++

RUN npm install -g pnpm@9.0.6

FROM base as build
RUN npm add --global nx@latest
RUN pnpm i
RUN pnpm run portal:build

FROM base
COPY --from=build /app /app
ENV NX_REJECT_UNKNOWN_LOCAL_CACHE=0
ENV PORT=8080
ENV HOST=0.0.0.0

EXPOSE 8080
CMD [ "pnpm", "run", "portal:start" ]
