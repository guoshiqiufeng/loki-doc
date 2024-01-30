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

<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter</artifactId>
    <version>0.8.0</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter:0.8.0'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter', version: '0.8.0'
```

  </CodeGroupItem>
</CodeGroup>

### RocketMQ(gRPC)依赖安装

> 支持 RocketMQ 5.X

<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-rocketmq</artifactId>
    <version>0.8.0</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-rocketmq:0.8.0'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter-rocketmq', version: '0.8.0'
```

  </CodeGroupItem>
</CodeGroup>

### RocketMQ(Remoting)依赖安装

> 支持 RocketMQ 4.X、5.X

<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-rocketmq-remoting</artifactId>
    <version>0.8.0</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-rocketmq-remoting:0.8.0'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter-rocketmq-remoting', version: '0.8.0'
```

  </CodeGroupItem>
</CodeGroup>

### Kafka依赖安装


<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-kafka</artifactId>
    <version>0.8.0</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-kafka:0.8.0'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter-kafka', version: '0.8.0'
```

  </CodeGroupItem>
</CodeGroup>

### Redis依赖安装

> 支持Redis 5.x以上 

<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-redis</artifactId>
    <version>0.8.0</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-redis:0.8.0'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter-redis', version: '0.8.0'
```

  </CodeGroupItem>
</CodeGroup>
