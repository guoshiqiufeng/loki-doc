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
> Support Redis Standalone, Cluster, and Sentinel modes

<CodeGroup>
  <CodeGroupItem title="Standalone" active>

```yaml:no-line-numbers
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

  </CodeGroupItem>
  <CodeGroupItem title="Cluster">

```yaml:no-line-numbers
spring:
  data:
    redis:
      cluster:
        nodes: 
        - 192.168.1.10:6380
        - 192.168.1.11:6380
        - 192.168.1.12:6380
      password: 123456
      database: 12
loki:
  global-config:
    mq-config:
      mq-type: redis 
```

  </CodeGroupItem>
  <CodeGroupItem title="Sentinel">

```yaml:no-line-numbers
spring:
  data:
    redis:
      sentinel:
        master: mymaster
        nodes:
          - 192.168.1.10:26380
          - 192.168.1.11:26380
          - 192.168.1.12:26380
        password: 123456
      password: 123456
      database: 12
loki:
  global-config:
    mq-config:
      mq-type: redis 
```

  </CodeGroupItem>
</CodeGroup>

Generally speaking, a general simple project can be used normally with the above
configuration [LOKI](https://github.com/guoshiqiufeng/loki), please refer to the following project:
[loki-test](https://github.com/guoshiqiufeng/loki-test/tree/master/loki-kafka-test)。

