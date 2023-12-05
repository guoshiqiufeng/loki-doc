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

