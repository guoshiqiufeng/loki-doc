---
lang: en
title: Send message
description: 
---
# Send message

## Using the BaseMapper
> The custom Mapper interface extends `BaseMapper`

### Default method usage

#### Direct Messages

Method Definition
```java
String send(T entity);
```
How to Use
```java
TestEntity entity = new TestEntity();
entity.setId("9521");
entity.setMessage("test");
String messageId = testMapper.send(entity);
```
#### Publish Messages Asynchronously
Method Definition
```java
CompletableFuture<String> sendAsync(T entity);
```
How to Use
```java
TestEntity entity = new TestEntity();
entity.setId("9521");
entity.setMessage("test");
CompletableFuture<String> stringCompletableFuture = testMapper.sendAsync(entity);
String messageId = stringCompletableFuture.get();
```
### Using Custom Annotations

#### Direct Messages

Mapper add method
```java
@SendMessage(topic = "loki", tag = "custom", message = "#entity.message", messageKey = "#entity.id")
void customSend(TestEntity entity);

@SendMessage(topic = "loki", tag = "custom", message = "#entity.message", messageKey = "#entity.id")
String customSend2(TestEntity entity);
```
How to Use
```java
TestEntity entity = new TestEntity();
entity.setId("9521");
entity.setMessage("test");
testMapper.customSend(entity);
```
#### Publish Messages Asynchronously
Mapper add method
```java
@SendMessage(topic = "loki", tag = "custom", async = true, message = "#entity.message", messageKey = "#entity.id")
CompletableFuture<String> customAsyncSend(TestEntity entity);
```
How to Use
```java
TestEntity entity = new TestEntity();
entity.setId("9521");
entity.setMessage("test");
CompletableFuture<String> stringCompletableFuture = testMapper.customAsyncSend(entity);
String messageId = stringCompletableFuture.get();
```

## Working with LokiClient

> Detailed usage examples can be found in [loki-test](https://github.com/guoshiqiufeng/loki-test) in `ClientController.java`

Request Parameters

| Parameter name    | Required |      Remarks       |   
|-------------------|:--------:|:------------------:|
| topic             |    Y     |       topic        |    
| tag               |    N     |        tag         |    
| message           |    Y     |  Message Content   |    
| deliveryTimestamp |    N     | delivery timestamp |    
| keys              |    N     |        key         |

### Full dependency injection

#### RocketMQ

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

#### RocketMQ Remoting

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


#### Kafka

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

#### Redis

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

### 单依赖注入
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
