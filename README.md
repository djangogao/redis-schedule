# redis-schedule
Based on Redis Keyspace notification feature (since 2.8.0)

## Requirements
- Redis 2.8.0 or higher.
- `redis-schedule`
- If `redis-schedule` failed to enable keyspace notification(s) automatic, then you have to enable them using `redis-cli`
```
$ redis-cli config set notify-keyspace-events Ex
```
