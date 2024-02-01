---
lang: zh-CN
title: 使用LokiClient
description: 
---

> 详细使用实例可查看 [loki-test](https://github.com/guoshiqiufeng/loki-test) 下 `ClientController.java`

请求参数

| 参数名               | 是否必填 |  备注  |   
|-------------------|:----:|:----:|
| topic             |  是   |  主题  |    
| tag               |  否   |  标签  |    
| message           |  是   | 消息内容 |    
| deliveryTimestamp |  否   | 延迟时间 |    
| keys              |  否   | key  |

## 全依赖注入

### RocketMQ

依赖注入

```java
@Resource
private RocketClient rocketClient;
```

使用

```java
ProducerRecord record = new ProducerRecord();
record.setTopic("loki");
record.setMessage(IdUtil.getSnowflakeNextIdStr());
ProducerResult result = rocketClient.sendAsync(record).get();
```

### RocketMQ Remoting

依赖注入

```java
@Resource
private RocketRemotingClient rocketRemotingClient;
```

使用

```java
ProducerRecord record = new ProducerRecord();
record.setTopic("loki");
record.setMessage(IdUtil.getSnowflakeNextIdStr());
ProducerResult result = rocketRemotingClient.sendAsync(record).get();
```

### Kafka

依赖注入

```java
@Resource
private KafkaClient kafkaClient;
```

使用

```java
ProducerRecord record = new ProducerRecord();
record.setTopic("loki");
record.setMessage(IdUtil.getSnowflakeNextIdStr());
ProducerResult result = kafkaClient.sendAsync(record).get();
```

### Redis

依赖注入

```java
@Resource
private RedisClient redisClient;
```

使用

```java
ProducerRecord record = new ProducerRecord();
record.setTopic("loki");
record.setMessage(IdUtil.getSnowflakeNextIdStr());
ProducerResult result = redisClient.sendAsync(record).get();
```

## 单依赖注入
依赖注入
```java
@Resource
private LokiClient lokiClient;
```

使用

```java
ProducerRecord record = new ProducerRecord();
record.setTopic("loki");
record.setMessage(IdUtil.getSnowflakeNextIdStr());
ProducerResult result = lokiClient.sendAsync(record).get();
```
