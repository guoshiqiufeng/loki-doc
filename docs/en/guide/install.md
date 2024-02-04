---
lang: en
title: Install
description: 
---
<script setup>
import {inject} from "vue";
const version = inject('version');
</script>
# Install

[LOKI](https://github.com/guoshiqiufeng/loki) Based on JDK8, support SpringBoot 2.x, 3.x.


## SpringBoot 2.x/3.x

### All-dependent installation
> All-dependent inclusion RocketMQ、Kafka、Redis

<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers:no-v-pre
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter</artifactId>
    <version>{{version}}</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers:no-v-pre
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter:{{version}}'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers:no-v-pre
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter', version: '{{version}}'
```

  </CodeGroupItem>
</CodeGroup>

### RocketMQ(gRPC) dependency installation

> Support RocketMQ 5.X

<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers:no-v-pre
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-rocketmq</artifactId>
    <version>{{version}}</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers:no-v-pre
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-rocketmq:{{version}}'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers:no-v-pre
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter-rocketmq', version: '{{version}}'
```

  </CodeGroupItem>
</CodeGroup>

### RocketMQ(Remoting) dependency installation

> Support RocketMQ 4.X、5.X

<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers:no-v-pre
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-rocketmq-remoting</artifactId>
    <version>{{version}}</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers:no-v-pre
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-rocketmq-remoting:{{version}}'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers:no-v-pre
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter-rocketmq-remoting', version: '{{version}}'
```

  </CodeGroupItem>
</CodeGroup>

### Kafka dependency installation


<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers:no-v-pre
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-kafka</artifactId>
    <version>{{version}}</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers:no-v-pre
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-kafka:{{version}}'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers:no-v-pre
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter-kafka', version: '{{version}}'
```

  </CodeGroupItem>
</CodeGroup>

### Redis dependency installation

> Support Redis 5.X UP

<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers:no-v-pre
<dependency>
    <groupId>com.github.guoshiqiufeng</groupId>
    <artifactId>loki-spring-boot-starter-redis</artifactId>
    <version>{{version}}</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle (Short)" active>

```groovy:no-line-numbers:no-v-pre
implementation 'com.github.guoshiqiufeng:loki-spring-boot-starter-redis:{{version}}'
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers:no-v-pre
implementation group: 'com.github.guoshiqiufeng', name: 'loki-spring-boot-starter-redis', version: '{{version}}'
```

  </CodeGroupItem>
</CodeGroup>

## Bom

<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml:no-line-numbers:no-v-pre
<dependencyManagement>
   <dependencies>
       <dependency>
            <groupId>io.github.guoshiqiufeng</groupId>
            <artifactId>loki-bom</artifactId>
            <version>{{version}}</version>
            <type>pom</type>
            <scope>import</scope>
       </dependency>
   </dependencies>
</dependencyManagement>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy:no-line-numbers:no-v-pre
dependencies {
    implementation platform("io.github.guoshiqiufeng:loki-bom:{{version}}")
}
```

  </CodeGroupItem>
</CodeGroup>
