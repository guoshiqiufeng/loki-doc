---
lang: zh-CN
title: 发送消息
description: 
---
# 发送消息
> loki 所有发送消息操作都基于`BaseMapper`
> 自定义Mapper接口继承`BaseMapper`

## 使用默认方法

### 直接发送消息

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
### 异步发送消息
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
## 使用自定义注解

### 直接发送消息

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
### 异步发送消息
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