---
lang: en
title: Working with LokiClient
description: 
---

> Detailed usage examples can be found in [loki-test](https://github.com/guoshiqiufeng/loki-test) in `ClientController.java`

Request Parameters

| Parameter name    | Required |      Remarks       |   
|-------------------|:--------:|:------------------:|
| topic             |    Y     |       topic        |    
| tag               |    N     |        tag         |    
| message           |    Y     |  Message Content   |    
| deliveryTimestamp |    N     | delivery timestamp |    
| keys              |    N     |        key         |

## Full dependency injection

### RocketMQ

Dependency Injection

```java
@Resource
private RocketClient rocketClient;
```

Use

```java
ProducerRecord record = new ProducerRecord();
record.setTopic("loki");
record.setMessage(IdUtil.getSnowflakeNextIdStr());
ProducerResult result = rocketClient.sendAsync(record).get();
```

### RocketMQ Remoting

Dependency Injection

```java
@Resource
private RocketRemotingClient rocketRemotingClient;
```

Use

```java
ProducerRecord record = new ProducerRecord();
record.setTopic("loki");
record.setMessage(IdUtil.getSnowflakeNextIdStr());
ProducerResult result = rocketRemotingClient.sendAsync(record).get();
```


### Kafka

Dependency Injection

```java
@Resource
private KafkaClient kafkaClient;
```

Use

```java
ProducerRecord record = new ProducerRecord();
record.setTopic("loki");
record.setMessage(IdUtil.getSnowflakeNextIdStr());
ProducerResult result = kafkaClient.sendAsync(record).get();
```

### Redis

Dependency Injection

```java
@Resource
private RedisClient redisClient;
```

Use

```java
ProducerRecord record = new ProducerRecord();
record.setTopic("loki");
record.setMessage(IdUtil.getSnowflakeNextIdStr());
ProducerResult result = redisClient.sendAsync(record).get();
```

## Single dependency injection
Dependency Injection
```java
@Resource
private LokiClient lokiClient;
```

Use

```java
ProducerRecord record = new ProducerRecord();
record.setTopic("loki");
record.setMessage(IdUtil.getSnowflakeNextIdStr());
ProducerResult result = lokiClient.sendAsync(record).get();
```
