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
- Redis 6.x

### 功能

| 中间件        | Send              | Listener  |
|-----------|-------------------|-----------|
| RocketMQ    | Normal message、Delay Message、Ordered Message | push      |
| Kafka | Normal message              | poll      |
| Redis      | publish           | subscribe |

## Code hosting

> **[GitHub](https://github.com/guoshiqiufeng/loki)**