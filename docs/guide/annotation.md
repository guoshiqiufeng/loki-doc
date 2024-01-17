---
lang: zh-cn
title: 注解
description: 
---
# 注解

> 介绍 LOKI 注解包相关类详解(更多详细描述可点击查看源码注释)

注解类包：<br/>

👉 [loki-annotation](https://github.com/guoshiqiufeng/loki/tree/master/loki-annotation/src/main/java/io/github/guoshiqiufeng/loki/annotation)


## [@MessageName](https://github.com/guoshiqiufeng/loki/blob/master/loki-annotation/src/main/java/io/github/guoshiqiufeng/loki/annotation/MessageName.java)
- 描述：消息名注解

| 属性 | 类型 | 是否必须 | 默认值                    | 描述      |
|----|----|------|------------------------|---------| 
|  topic   |  String  | 是    | 无                      | topic名称 |
|  tag   |  String  | 否    | ""                     | 标签      |
|  producer   |  String  | 否    | "defaultProducer"      | 生产者     |
|  deliveryTimestamp   |  long  | 否    | 0                      | 延时时间    |
|  consumerGroup   |  String  | 否    | "defaultConsumerGroup" | 消费者组    |
|  consumptionThreadCount   |  int  | 否    | 20                     | 消费线程数   |
|  maxCacheMessageCount   |  int  | 否    | 1024                   | 最大缓存信息数 |


## [@MessageKey](https://github.com/guoshiqiufeng/loki/blob/master/loki-annotation/src/main/java/io/github/guoshiqiufeng/loki/annotation/MessageKey.java)
- 描述：消息key注解

| 属性    | 类型 | 是否必须 | 默认值                    | 描述      |
|-------|----|------|------------------------|---------| 
| value |  String  | 否    | ""                      | 字段名（该值可无） |

## [@SendMessage](https://github.com/guoshiqiufeng/loki/blob/master/loki-annotation/src/main/java/io/github/guoshiqiufeng/loki/annotation/SendMessage.java)
- 描述：发送消息注解

| Attributes | Type | Required | Default | Description    |
|----|----|----------|------------------------|----------------| 
|  topic   |  String  | 是        | 无                      | topic名称        |
|  async   |  boolean  | 否        | false                    | 是否异步发送         |
|  message   |  String  | 是        | ""                     | 发送消息，支持SPEL表达式 |
|  messageKey   |  String  | 否        | ""                     | 消息key，支持SPEL表达式             |
|  tag   |  String  | 否        | ""                     | 标签             |
|  producer   |  String  | 否        | "defaultProducer"      | 生产者            |
|  deliveryTimestamp   |  long  | 否        | 0                      | 延时时间           |

## [@MessageListener](https://github.com/guoshiqiufeng/loki/blob/master/loki-annotation/src/main/java/io/github/guoshiqiufeng/loki/annotation/MessageListener.java)
- 描述: 消息接收注解

| Attributes | Type | Required | Default | Description                                     |
|----|----|----------|------------------------|-------------------------------------------------| 
|  topic   |  String  | 否      | 无                      | topic名称（与topicPattern必须有一个有值，topicPattern优先级更高） |
|  topicPattern   |  String  | 否      | 无                      | topic正则名称 （与topicPattern必须有一个有值，topicPattern优先级更高）                |
|  tag   |  String  | 否        | ""                     | 标签                                              |
|  consumerGroup   |  String  | 否    | "defaultConsumerGroup" | 消费者组                                            |
|  consumptionThreadCount   |  int  | 否    | 20                     | 消费线程数                                           |
|  maxCacheMessageCount   |  int  | 否    | 1024                   | 最大缓存信息数                                         |
