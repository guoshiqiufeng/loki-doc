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
    <version>0.4.1</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter:0.4.1'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter', version: '0.4.1'
```

  </CodeGroupItem>
</CodeGroup>

### RocketMQ依赖安装


<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-rocketmq</artifactId>
    <version>0.4.1</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-rocketmq:0.4.1'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter-rocketmq', version: '0.4.1'
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
    <version>0.4.1</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-kafka:0.4.1'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter-kafka', version: '0.4.1'
```

  </CodeGroupItem>
</CodeGroup>

### Redis依赖安装


<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-redis</artifactId>
    <version>0.4.1</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-redis:0.4.1'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter-redis', version: '0.4.1'
```

  </CodeGroupItem>
</CodeGroup>