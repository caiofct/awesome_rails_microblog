web: bundle exec rails s -p 3000 -b 0.0.0.0
#redis: redis-server /usr/local/etc/redis.conf
client: sh -c 'rm app/assets/webpack/* || true && npm run build:dev:client'
server: sh -c 'npm run build:dev:server'
