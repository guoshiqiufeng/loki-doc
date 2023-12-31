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

<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter</artifactId>
    <version>0.5.0</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter:0.5.0'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter', version: '0.5.0'
```

  </CodeGroupItem>
</CodeGroup>

### RocketMQ dependency installation


<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-rocketmq</artifactId>
    <version>0.5.0</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-rocketmq:0.5.0'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter-rocketmq', version: '0.5.0'
```

  </CodeGroupItem>
</CodeGroup>


### Kafka dependency installation


<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-kafka</artifactId>
    <version>0.5.0</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-kafka:0.5.0'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter-kafka', version: '0.5.0'
```

  </CodeGroupItem>
</CodeGroup>

### Redis dependency installation


<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-redis</artifactId>
    <version>0.5.0</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-redis:0.5.0'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter-redis', version: '0.5.0'
```

  </CodeGroupItem>
</CodeGroup>