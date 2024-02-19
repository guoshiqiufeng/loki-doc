---
lang: zh-CN
title: 介绍
description: 
---
# 简介

[LOKI](https://github.com/guoshiqiufeng/loki) 是一个 [MQ] 的简化增强工具，提高开发效率。

## 特性

- **无侵入**: 通过注解的方式，无侵入式的使用MQ消息。
- **简化开发**：通过简化开发流程，提高开发效率。
- **统一规范**：一次开发适配多种MQ消息。

## 支持的MQ消息中间件

- RocketMq 5.x
- Kafka 2.x 以上
- Redis 5.x 以上

## 功能

* 可用 - ✅
* 进行中 - 🚧

| 功能                                             | Rocketmq-gRPC | Rocketmq-Remoting | Kafka | Redis |   
|------------------------------------------------|:-------------:|:-----------------:|-------|-------| 
| 【BaseMapper】Send standard messages             |       ✅       |         ✅         | ✅     | ✅     |    
| 【BaseMapper】Send async messages                |       ✅       |         ✅         | ✅     | ✅     |    
| 【BaseMapper】Send timed/delay messages          |       ✅       |        ✅         | 🚧    | 🚧    |    
| 【LokiClient】Send standard messages             |       ✅       |         ✅         | ✅     | ✅     |    
| 【LokiClient】Send async messages                |       ✅       |         ✅         | ✅     | ✅     |    
| 【LokiClient】Send timed/delay messages          |       ✅       |        ✅         | 🚧    | 🚧    |    
| Producer with transactional messages           |      🚧       |        🚧         | 🚧    | 🚧    |
| 【Topic】 consumer with message listener         |       ✅       |        ✅         | ✅     | ✅     |    
| 【Topic-Pattern】 consumer with message listener |      🚧       |        🚧         | ✅     | ✅     |  

> 注：Rocketmq-Remoting `Send timed/delay messages` 仅支持 `rocketmq 5.0` 以上版本

## 代码托管

> **[GitHub](https://github.com/guoshiqiufeng/loki)**
