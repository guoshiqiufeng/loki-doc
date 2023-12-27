---
lang: en
title: Install
description: 
---
# Install

[LOKI](https://github.com/guoshiqiufeng/loki) Based on JDK8, support SpringBoot 2.x, 3.x.


## SpringBoot 2.x/3.x

### All-dependent installation
> All-dependent inclusion RocketMQ、Kafka、Redis
#### Maven

```xml
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter</artifactId>
    <version>latest-version</version>
</dependency>
```

#### Gradle

```groovy
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter:latest-version'
```


### RocketMQ dependency installation

#### Maven

```xml
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-rocketmq</artifactId>
    <version>latest-version</version>
</dependency>
```

#### Gradle

```groovy
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-rocketmq:latest-version'
```


### Kafka dependency installation

#### Maven

```xml
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-kafka</artifactId>
    <version>latest-version</version>
</dependency>
```

#### Gradle

```groovy
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-kafka:latest-version'
```

### Redis dependency installation

#### Maven

```xml
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-redis</artifactId>
    <version>latest-version</version>
</dependency>
```

#### Gradle

```groovy
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-redis:latest-version'
```