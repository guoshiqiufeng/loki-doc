---
lang: en
title: Using configurations
description: 
---

## Spring Boot 2/3

```yaml
loki:
  global-config:
    mq-config:
```

### GlobalConfig

#### banner

- Type: `boolean`
- Default: `true`

> Controls whether LOKI logo is output

#### mqConfig

- Type:`io.github.guoshiqiufeng.loki.support.core.config.MqConfig`
- Default: None

> Control link unified configuration, initializing default configuration when spring boot starts, please refer to the
> details [MqConfig](#mqconfig-1)。

#### redisHistoryDelayMessageSend

- Type: `boolean`
- Default：`false`
> Whether to enable the sending of delayed messages in Redis (resending expired undelivered delayed messages when the system starts), not enabled by default.

#### redisHistoryDelayMessageSendTime

- Type: `long`
- Default: `2000`
> Redis historical delayed message sends a delay time in milliseconds, defaulting to 2000 milliseconds.

### MqConfig

#### mqType

- Type:`io.github.guoshiqiufeng.loki.enums.MqType`
- Default:`ROCKET_MQ`

| Options            | Remark                              |
|--------------------|-------------------------------------|
| ROCKET_MQ          | rocketmq (support 5.x)              |
| ROCKET_MQ_REMOTING | rocketmq remoting (support 4.x,5.x) |
| KAFKA              | kafka                               |
| REDIS              | redis                               |

#### address

- Type:`java.lang.String`
- Default: None

> mq connect address

#### auth

- Type:`java.lang.Boolean`
- Default:`false`

> Enable authentication

#### username

- Type:`java.lang.String`
- Default: None

> User name, required when `auth` is `true`

#### password

- Type:`java.lang.String`
- Default: None

> Password, required if `auth` is `true`

#### connectTimeout

- Type:`int`
- Default:`180`

> Connection time out, in seconds

#### maxAttempts

- Type:`int`
- Default:`3`

> Maximum number of retries
