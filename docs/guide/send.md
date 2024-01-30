---
lang: zh-CN
title: 发送消息
description: 
---

# 发送消息

## 使用BaseMapper

> 自定义Mapper接口继承`BaseMapper`

### 使用默认方法

#### 直接发送消息

方法定义

```java
String send(T entity);
```

使用方式

```java
TestEntity entity = new TestEntity();
entity.setId("9521");
entity.setMessage("test");

String messageId = testMapper.send(entity);
```

#### 异步发送消息

方法定义

```java
CompletableFuture<String> sendAsync(T entity);
```

使用方式

```java
TestEntity entity = new TestEntity();
entity.setId("9521");
entity.setMessage("test");

CompletableFuture<String> stringCompletableFuture = testMapper.sendAsync(entity);
String messageId = stringCompletableFuture.get();
```

### 使用自定义注解

#### 直接发送消息

Mapper添加方法

```java

@SendMessage(topic = "loki", tag = "custom", message = "#entity.message", messageKey = "#entity.id")
void customSend(TestEntity entity);

@SendMessage(topic = "loki", tag = "custom", message = "#entity.message", messageKey = "#entity.id")
String customSend2(TestEntity entity);
```

使用方式

```java
TestEntity entity = new TestEntity();
entity.setId("9521");
entity.setMessage("test");
testMapper.customSend(entity);
```

#### 异步发送消息

Mapper添加方法

```java

@SendMessage(topic = "loki", tag = "custom", async = true, message = "#entity.message", messageKey = "#entity.id")
CompletableFuture<String> customAsyncSend(TestEntity entity);
```

使用方式

```java
TestEntity entity = new TestEntity();
entity.setId("9521");
entity.setMessage("test");

CompletableFuture<String> stringCompletableFuture = testMapper.customAsyncSend(entity);
String messageId = stringCompletableFuture.get();
```

## 使用LokiClient

> 详细使用实例可查看 [loki-test](https://github.com/guoshiqiufeng/loki-test) 下 `ClientController.java`

请求参数

| 参数名               | 是否必填 |  备注  |   
|-------------------|:----:|:----:|
| topic             |  是   |  主题  |    
| tag               |  否   |  标签  |    
| message           |  是   | 消息内容 |    
| deliveryTimestamp |  否   | 延迟时间 |    
| keys              |  否   | key  |

### 全依赖注入

#### RocketMQ

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

#### Kafka

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

#### Redis

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

### 单依赖注入
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
