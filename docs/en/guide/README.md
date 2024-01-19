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

- RocketMq 5.x
- Kafka 3.x
- Redis 5.x and above

### Features
* Available - ✅
* In progress - 🚧

| Features                                       | Rocketmq-gRPC | Rocketmq-Remoting | Kafka | Redis |   
|------------------------------------------------|:-------------:|:-----------------:|-------|-------| 
| Send standard messages                         |       ✅       |        🚧         | ✅     | ✅     |    
| Send async messages                            |       ✅       |        🚧         | ✅     | ✅     |    
| Send timed/delay messages                      |       ✅       |        🚧         | 🚧    | 🚧    |    
| Producer with transactional messages           |      🚧       |        🚧         | 🚧    | 🚧    |
| 【Topic】 consumer with message listener         |       ✅       |        🚧         | ✅     | ✅     |    
| 【Topic-Pattern】 consumer with message listener |      🚧       |        🚧         | ✅     | ✅     |    

## Code hosting

> **[GitHub](https://github.com/guoshiqiufeng/loki)**
