---
lang: en
title: Configure
description: 
---

# Configure

[LOKI](https://github.com/guoshiqiufeng/loki) is very easy to configure, we just need some simple configuration！

> Make sure you have LOKI installed, if you haven't, check out the [Install](install.md)。

## RocketMQ

### Configure the `LokiMapperScan` annotation

```java

@LokiMapperScan
@SpringBootApplication
public class LokiTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(LokiTestApplication.class, args);
    }

}
```

### `application.yml` Configure `mq` connection parameters

```yaml
loki:
  global-config:
    mq-config:
      mq-type: rocket_mq
      address: 127.0.0.1:8081
      auth: false
      username: un
      password: ps
      connect-timeout: 300
```

Generally speaking, a general simple project can be used normally with the above
configuration [LOKI](https://github.com/guoshiqiufeng/loki), please refer to the following project:
[loki-test](https://github.com/guoshiqiufeng/loki-test/tree/master/loki-rocketmq-test)。

## Kafka

### Configure the `LokiMapperScan` annotation

```java

@LokiMapperScan
@SpringBootApplication
public class LokiTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(LokiTestApplication.class, args);
    }

}
```

### `application.yml` Configure `mq` connection parameters

```yaml
loki:
  global-config:
    mq-config:
      mq-type: kafka
      address: 127.0.0.1:9092 
```

Generally speaking, a general simple project can be used normally with the above
configuration [LOKI](https://github.com/guoshiqiufeng/loki), please refer to the following project:
[loki-test](https://github.com/guoshiqiufeng/loki-test/tree/master/loki-kafka-test)。

## Redis

### Configure the `LokiMapperScan` annotation

```java

@LokiMapperScan
@SpringBootApplication
public class LokiTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(LokiTestApplication.class, args);
    }

}
```

### `application.yml` Configure `mq` connection parameters
> 支持redis单机版、集群、哨兵模式
```yaml
spring:
  data:
    redis:
      host: 127.0.0.1
      port: 6379
      database: 12
loki:
  global-config:
    mq-config:
      mq-type: redis 
```

Generally speaking, a general simple project can be used normally with the above
configuration [LOKI](https://github.com/guoshiqiufeng/loki), please refer to the following project:
[loki-test](https://github.com/guoshiqiufeng/loki-test/tree/master/loki-kafka-test)。

