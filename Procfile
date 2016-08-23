web: bundle exec rails s
redis: redis-server start
client: sh -c 'rm app/assets/webpack/* || true && npm run build:dev:client'
server: sh -c 'npm run build:dev:server'
