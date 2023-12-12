---
lang: en
title: Annotation 
description: 
---
# Annotation

> Introducing LOKI annotation package related classes (for more detailed descriptions, click to view source code comments).

Annotation class package：<br/>

👉 [loki-annotation](https://github.com/guoshiqiufeng/loki/tree/master/loki-annotation/src/main/java/io/github/guoshiqiufeng/loki/annotation)


## [@MessageName](https://github.com/guoshiqiufeng/loki/blob/master/loki-annotation/src/main/java/io/github/guoshiqiufeng/loki/annotation/MessageName.java)
- Description: message name annotation

| Attributes | Type | Required | Default                | Description                       |
|----|----|----------|------------------------|-----------------------------------| 
|  topic   |  String  | YES      | none                   | Topic name                        |
|  tag   |  String  | NO       | ""                     | Tag                               |
|  producer   |  String  | NO        | "defaultProducer"      | Producer                          |
|  deliveryTimestamp   |  long  | NO        | 0                      | Delay time                        |
|  consumerGroup   |  String  | NO        | "defaultConsumerGroup" | Consumer group                    |
|  consumptionThreadCount   |  int  | NO        | 20                     | Number of threads consumed        |
|  maxCacheMessageCount   |  int  | NO        | 1024                   | Maximum number of cached messages |


## [@MessageKey](https://github.com/guoshiqiufeng/loki/blob/master/loki-annotation/src/main/java/io/github/guoshiqiufeng/loki/annotation/MessageKey.java)
- Description: message key annotation

| Attributes | Type | Required | Default | Description     |
|-------|----|------|------------------------|---------| 
| value |  String  | NO    | ""                      | Field name (the value can be none) |

## [@SendMessage](https://github.com/guoshiqiufeng/loki/blob/master/loki-annotation/src/main/java/io/github/guoshiqiufeng/loki/annotation/SendMessage.java)
- Description：Send message annotation

| Attributes | Type | Required | Default | Description    |
|----|----|----------|------------------------|----------------| 
|  topic   |  String  | YES        | none                      | Topic name        |
|  async   |  boolean  | NO        | false                    | Asynchronous send or not         |
|  message   |  String  | YES        | ""                     | Send a message, supporting SPEL expression |
|  messageKey   |  String  | NO        | ""                     | Message key, which supports SPEL expression             |
|  tag   |  String  | NO       | ""                     | Tag                               |
|  producer   |  String  | NO        | "defaultProducer"      | Producer                          |
|  deliveryTimestamp   |  long  | NO        | 0                      | Delay time                        |

## [@MessageListener](https://github.com/guoshiqiufeng/loki/blob/master/loki-annotation/src/main/java/io/github/guoshiqiufeng/loki/annotation/MessageListener.java)
- Description: Message receiving annotation

| Attributes | Type | Required | Default                | Description                       |
|----|----|----------|------------------------|-----------------------------------| 
|  topic   |  String  | YES      | none                   | Topic name                        |
|  tag   |  String  | NO        | ""                     | TAG                               |
|  consumerGroup   |  String  | NO        | "defaultConsumerGroup" | Consumer group                    |
|  consumptionThreadCount   |  int  | NO        | 20                     | Number of threads consumed        |
|  maxCacheMessageCount   |  int  | NO        | 1024                   | Maximum number of cached messages |
