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
- Kafka 3.x
- Redis 6.x

### 功能

| 中间件        | 发送                | 接收        |
|-----------|-------------------|-----------|
| RocketMQ    | 普通消息、定时/延时消息、顺序消息 | push      |
| Kafka | 普通消息              | poll      |
| Redis      | publish           | subscribe |

## 代码托管

> **[GitHub](https://github.com/guoshiqiufeng/loki)**