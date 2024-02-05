---
lang: en
title: Using the BaseMapper
description: 
---
# Using the BaseMapper
> The custom Mapper interface extends `BaseMapper`

## Default method usage

### Direct Messages

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
### Publish Messages Asynchronously
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
## Using Custom Annotations

### Direct Messages

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
### Publish Messages Asynchronously
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
