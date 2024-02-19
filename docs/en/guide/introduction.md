---
lang: en
title: Guide
description: Guide
---
# Guide

[LOKI](https://github.com/guoshiqiufeng/loki) 是一个 [MQ] 的简化增强工具，提高开发效率。

## Characterization

- **Non-intrusive**: Non-intrusive use of MQ messages via annotations.
- **Streamline development**：Improve development efficiency by streamlining the development process.
- **Standardize**：Adapt multiple MQ messages in one development.

## Supported MQ Message Middleware

- RocketMq 4.x and above
- Kafka 2.x and above
- Redis 5.x and above

## Features
* Available - ✅
* In progress - 🚧

| Features                                       | Rocketmq-gRPC | Rocketmq-Remoting | Kafka | Redis |   
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

> Note: Rocketmq-Remoting `Send timed/delay messages` is only supported in `rocketmq 5.0` and above

## Code hosting

> **[GitHub](https://github.com/guoshiqiufeng/loki)**
