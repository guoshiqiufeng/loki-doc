---
lang: zh-CN
title: 安装
description: 
---
# 安装

[LOKI](https://github.com/guoshiqiufeng/loki) 基于JDK8, 支持SpringBoot 2.x, 3.x.


## SpringBoot 2.x/3.x

### 全依赖安装
> 全依赖包含RocketMQ、Kafka、Redis
#### Maven

```xml
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter</artifactId>
    <version>最新版</version>
</dependency>
```

#### Gradle

```groovy
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter:最新版'
```

### RocketMQ依赖安装

#### Maven

```xml
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-rocketmq</artifactId>
    <version>最新版</version>
</dependency>
```

#### Gradle

```groovy
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-rocketmq:最新版'
```


### Kafka依赖安装

#### Maven

```xml
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-kafka</artifactId>
    <version>最新版</version>
</dependency>
```

#### Gradle

```groovy
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-kafka:最新版'
```

### Redis依赖安装

#### Maven

```xml
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-redis</artifactId>
    <version>最新版</version>
</dependency>
```

#### Gradle

```groovy
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-redis:最新版'
```