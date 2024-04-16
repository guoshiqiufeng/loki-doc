---
lang: zh-cn
title: 配置
description: 
---
# 配置

[LOKI](https://github.com/guoshiqiufeng/loki) 的配置异常的简单，我们仅需要一些简单的配置即可！

> 请确保您已经安装了 LOKI，如果您尚未安装，请查看 [安装](install.md)。


## RocketMQ


### 配置 `LokiMapperScan` 注解

```java
@LokiMapperScan
@SpringBootApplication
public class LokiTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(LokiTestApplication.class, args);
    }

}
```

### `application.yml` 配置 `mq` 连接参数

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

通常来说，一般的简单工程，通过以上配置即可正常使用 [LOKI](https://github.com/guoshiqiufeng/loki)，具体可参考以下项目：
[loki-test](https://github.com/guoshiqiufeng/loki-test/tree/master/loki-rocketmq-test)。

## Kafka 


### 配置 `LokiMapperScan` 注解

```java
@LokiMapperScan
@SpringBootApplication
public class LokiTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(LokiTestApplication.class, args);
    }

}
```

### `application.yml` 配置 `mq` 连接参数
> 支持`spring.kafka`下的所有配置 
```yaml
spring:
  kafka:
    bootstrap-servers: 127.0.0.1:9092
    consumer:
      auto:
        offset:
          reset: earliest
      auto-commit-interval: 1000
      enable-auto-commit: true

loki:
  global-config:
    mq-config:
      mq-type: kafka
      address: 127.0.0.1:9092 
```

通常来说，一般的简单工程，通过以上配置即可正常使用 [LOKI](https://github.com/guoshiqiufeng/loki)，具体可参考以下项目：
[loki-test](https://github.com/guoshiqiufeng/loki-test/tree/master/loki-kafka-test)。


## Redis 


### 配置 `LokiMapperScan` 注解

```java
@LokiMapperScan
@SpringBootApplication
public class LokiTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(LokiTestApplication.class, args);
    }

}
```

### `application.yml` 配置 `mq` 连接参数
> 支持redis单机版、集群、哨兵模式
> 
> 支持`spring.data.redis`下的所有配置
>
> mq-config 下的配置会覆盖`spring.data.redis`下配置

<CodeGroup>
  <CodeGroupItem title="单机版" active>

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
      address: 127.0.0.1:6379
      auth: true
      password: 123456
```

  </CodeGroupItem>
  <CodeGroupItem title="集群">

```yaml:no-line-numbers
spring:
  data:
    redis:
      cluster:
        nodes: 
        - 127.0.0.1:6380
        - 127.0.0.1:6379
        - 127.0.0.1:6381
      password: 123456
      database: 12
loki:
  global-config:
    mq-config:
      mq-type: redis 
      address: 127.0.0.1:6380,127.0.0.1:6379,127.0.0.1:6381
      auth: true
      password: 123456
```

  </CodeGroupItem>
  <CodeGroupItem title="哨兵">

```yaml:no-line-numbers
spring:
  data:
    redis:
      sentinel:
        master: mymaster
        nodes:
          - 127.0.0.1:26380
          - 127.0.0.1:26379
          - 127.0.0.1:26381
        password: 123456
      password: 123456
      database: 12
loki:
  global-config:
    mq-config:
      mq-type: redis 
      address: mymaster,127.0.0.1:26380,127.0.0.1:26379,127.0.0.1:26381
      auth: true
      password: 123456
```

  </CodeGroupItem>
</CodeGroup>

### 可选客户端

默认使用`jedis`客户端，v1.2.0以上版本，当引入`spring-data-redis`后默认使用`spring-data-redis`，可通过配置参数指定客户端。

- jedis默认实现
```yaml:no-line-numbers
loki:
  redis:
    support-type: default
```
- spring-data 实现
```yaml:no-line-numbers
loki:
  redis:
    support-type: spring-data
```


通常来说，一般的简单工程，通过以上配置即可正常使用 [LOKI](https://github.com/guoshiqiufeng/loki)，具体可参考以下项目：
[loki-test](https://github.com/guoshiqiufeng/loki-test/tree/master/loki-redis-test)。
