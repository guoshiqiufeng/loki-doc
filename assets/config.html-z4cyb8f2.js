import{_ as u,r as o,o as k,c as r,a as n,d as a,b as s,w as t,e as c}from"./app-aEXqOFAp.js";const d={},m=n("h1",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),a(" 配置")],-1),v={href:"https://github.com/guoshiqiufeng/loki",target:"_blank",rel:"noopener noreferrer"},b=c(`<h2 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a> RocketMQ</h2><h3 id="配置-lokimapperscan-注解" tabindex="-1"><a class="header-anchor" href="#配置-lokimapperscan-注解" aria-hidden="true">#</a> 配置 <code>LokiMapperScan</code> 注解</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@LokiMapperScan</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LokiTestApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">LokiTestApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml-配置-mq-连接参数" tabindex="-1"><a class="header-anchor" href="#application-yml-配置-mq-连接参数" aria-hidden="true">#</a> <code>application.yml</code> 配置 <code>mq</code> 连接参数</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">loki</span><span class="token punctuation">:</span>
  <span class="token key atrule">global-config</span><span class="token punctuation">:</span>
    <span class="token key atrule">mq-config</span><span class="token punctuation">:</span>
      <span class="token key atrule">mq-type</span><span class="token punctuation">:</span> rocket_mq
      <span class="token key atrule">address</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8081</span>
      <span class="token key atrule">auth</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> un
      <span class="token key atrule">password</span><span class="token punctuation">:</span> ps
      <span class="token key atrule">connect-timeout</span><span class="token punctuation">:</span> <span class="token number">300</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),h={href:"https://github.com/guoshiqiufeng/loki",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/guoshiqiufeng/loki-test/tree/master/loki-rocketmq-test",target:"_blank",rel:"noopener noreferrer"},g=c(`<h2 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka" aria-hidden="true">#</a> Kafka</h2><h3 id="配置-lokimapperscan-注解-1" tabindex="-1"><a class="header-anchor" href="#配置-lokimapperscan-注解-1" aria-hidden="true">#</a> 配置 <code>LokiMapperScan</code> 注解</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@LokiMapperScan</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LokiTestApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">LokiTestApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml-配置-mq-连接参数-1" tabindex="-1"><a class="header-anchor" href="#application-yml-配置-mq-连接参数-1" aria-hidden="true">#</a> <code>application.yml</code> 配置 <code>mq</code> 连接参数</h3><blockquote><p>支持<code>spring.kafka</code>下的所有配置</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">kafka</span><span class="token punctuation">:</span>
    <span class="token key atrule">bootstrap-servers</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9092</span>
    <span class="token key atrule">consumer</span><span class="token punctuation">:</span>
      <span class="token key atrule">auto</span><span class="token punctuation">:</span>
        <span class="token key atrule">offset</span><span class="token punctuation">:</span>
          <span class="token key atrule">reset</span><span class="token punctuation">:</span> earliest
      <span class="token key atrule">auto-commit-interval</span><span class="token punctuation">:</span> <span class="token number">1000</span>
      <span class="token key atrule">enable-auto-commit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">loki</span><span class="token punctuation">:</span>
  <span class="token key atrule">global-config</span><span class="token punctuation">:</span>
    <span class="token key atrule">mq-config</span><span class="token punctuation">:</span>
      <span class="token key atrule">mq-type</span><span class="token punctuation">:</span> kafka
      <span class="token key atrule">address</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9092</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),f={href:"https://github.com/guoshiqiufeng/loki",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/guoshiqiufeng/loki-test/tree/master/loki-kafka-test",target:"_blank",rel:"noopener noreferrer"},q=c(`<h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h2><h3 id="配置-lokimapperscan-注解-2" tabindex="-1"><a class="header-anchor" href="#配置-lokimapperscan-注解-2" aria-hidden="true">#</a> 配置 <code>LokiMapperScan</code> 注解</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@LokiMapperScan</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LokiTestApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">LokiTestApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml-配置-mq-连接参数-2" tabindex="-1"><a class="header-anchor" href="#application-yml-配置-mq-连接参数-2" aria-hidden="true">#</a> <code>application.yml</code> 配置 <code>mq</code> 连接参数</h3><blockquote><p>支持redis单机版、集群、哨兵模式 支持<code>spring.data.redis</code>下的所有配置 mq-config 下的配置会覆盖<code>spring.data.redis</code>下配置</p></blockquote>`,5),w=n("div",{class:"language-yaml","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"spring"),n("span",{class:"token punctuation"},":"),a(`
  `),n("span",{class:"token key atrule"},"data"),n("span",{class:"token punctuation"},":"),a(`
    `),n("span",{class:"token key atrule"},"redis"),n("span",{class:"token punctuation"},":"),a(`
      `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),a(` 127.0.0.1
      `),n("span",{class:"token key atrule"},"port"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token number"},"6379"),a(`
      `),n("span",{class:"token key atrule"},"database"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token number"},"12"),a(`
`),n("span",{class:"token key atrule"},"loki"),n("span",{class:"token punctuation"},":"),a(`
  `),n("span",{class:"token key atrule"},"global-config"),n("span",{class:"token punctuation"},":"),a(`
    `),n("span",{class:"token key atrule"},"mq-config"),n("span",{class:"token punctuation"},":"),a(`
      `),n("span",{class:"token key atrule"},"mq-type"),n("span",{class:"token punctuation"},":"),a(` redis 
      `),n("span",{class:"token key atrule"},"address"),n("span",{class:"token punctuation"},":"),a(" 127.0.0.1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"6379"),a(`
      `),n("span",{class:"token key atrule"},"auth"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token boolean important"},"true"),a(`
      `),n("span",{class:"token key atrule"},"password"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token number"},"123456"),a(`
`)])])],-1),x=n("div",{class:"language-yaml","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"spring"),n("span",{class:"token punctuation"},":"),a(`
  `),n("span",{class:"token key atrule"},"data"),n("span",{class:"token punctuation"},":"),a(`
    `),n("span",{class:"token key atrule"},"redis"),n("span",{class:"token punctuation"},":"),a(`
      `),n("span",{class:"token key atrule"},"cluster"),n("span",{class:"token punctuation"},":"),a(`
        `),n("span",{class:"token key atrule"},"nodes"),n("span",{class:"token punctuation"},":"),a(` 
        `),n("span",{class:"token punctuation"},"-"),a(" 127.0.0.1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"6380"),a(`
        `),n("span",{class:"token punctuation"},"-"),a(" 127.0.0.1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"6379"),a(`
        `),n("span",{class:"token punctuation"},"-"),a(" 127.0.0.1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"6381"),a(`
      `),n("span",{class:"token key atrule"},"password"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token number"},"123456"),a(`
      `),n("span",{class:"token key atrule"},"database"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token number"},"12"),a(`
`),n("span",{class:"token key atrule"},"loki"),n("span",{class:"token punctuation"},":"),a(`
  `),n("span",{class:"token key atrule"},"global-config"),n("span",{class:"token punctuation"},":"),a(`
    `),n("span",{class:"token key atrule"},"mq-config"),n("span",{class:"token punctuation"},":"),a(`
      `),n("span",{class:"token key atrule"},"mq-type"),n("span",{class:"token punctuation"},":"),a(` redis 
      `),n("span",{class:"token key atrule"},"address"),n("span",{class:"token punctuation"},":"),a(" 127.0.0.1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"6380"),n("span",{class:"token punctuation"},","),a("127.0.0.1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"6379"),n("span",{class:"token punctuation"},","),a("127.0.0.1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"6381"),a(`
      `),n("span",{class:"token key atrule"},"auth"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token boolean important"},"true"),a(`
      `),n("span",{class:"token key atrule"},"password"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token number"},"123456"),a(`
`)])])],-1),L=n("div",{class:"language-yaml","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"spring"),n("span",{class:"token punctuation"},":"),a(`
  `),n("span",{class:"token key atrule"},"data"),n("span",{class:"token punctuation"},":"),a(`
    `),n("span",{class:"token key atrule"},"redis"),n("span",{class:"token punctuation"},":"),a(`
      `),n("span",{class:"token key atrule"},"sentinel"),n("span",{class:"token punctuation"},":"),a(`
        `),n("span",{class:"token key atrule"},"master"),n("span",{class:"token punctuation"},":"),a(` mymaster
        `),n("span",{class:"token key atrule"},"nodes"),n("span",{class:"token punctuation"},":"),a(`
          `),n("span",{class:"token punctuation"},"-"),a(" 127.0.0.1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"26380"),a(`
          `),n("span",{class:"token punctuation"},"-"),a(" 127.0.0.1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"26379"),a(`
          `),n("span",{class:"token punctuation"},"-"),a(" 127.0.0.1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"26381"),a(`
        `),n("span",{class:"token key atrule"},"password"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token number"},"123456"),a(`
      `),n("span",{class:"token key atrule"},"password"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token number"},"123456"),a(`
      `),n("span",{class:"token key atrule"},"database"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token number"},"12"),a(`
`),n("span",{class:"token key atrule"},"loki"),n("span",{class:"token punctuation"},":"),a(`
  `),n("span",{class:"token key atrule"},"global-config"),n("span",{class:"token punctuation"},":"),a(`
    `),n("span",{class:"token key atrule"},"mq-config"),n("span",{class:"token punctuation"},":"),a(`
      `),n("span",{class:"token key atrule"},"mq-type"),n("span",{class:"token punctuation"},":"),a(` redis 
      `),n("span",{class:"token key atrule"},"address"),n("span",{class:"token punctuation"},":"),a(" mymaster"),n("span",{class:"token punctuation"},","),a("127.0.0.1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"26380"),n("span",{class:"token punctuation"},","),a("127.0.0.1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"26379"),n("span",{class:"token punctuation"},","),a("127.0.0.1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"26381"),a(`
      `),n("span",{class:"token key atrule"},"auth"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token boolean important"},"true"),a(`
      `),n("span",{class:"token key atrule"},"password"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token number"},"123456"),a(`
`)])])],-1),S={href:"https://github.com/guoshiqiufeng/loki",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/guoshiqiufeng/loki-test/tree/master/loki-redis-test",target:"_blank",rel:"noopener noreferrer"};function j(I,M){const e=o("ExternalLinkIcon"),l=o("RouterLink"),p=o("CodeGroupItem"),i=o("CodeGroup");return k(),r("div",null,[m,n("p",null,[n("a",v,[a("LOKI"),s(e)]),a(" 的配置异常的简单，我们仅需要一些简单的配置即可！")]),n("blockquote",null,[n("p",null,[a("请确保您已经安装了 LOKI，如果您尚未安装，请查看 "),s(l,{to:"/guide/install.html"},{default:t(()=>[a("安装")]),_:1}),a("。")])]),b,n("p",null,[a("通常来说，一般的简单工程，通过以上配置即可正常使用 "),n("a",h,[a("LOKI"),s(e)]),a("，具体可参考以下项目： "),n("a",y,[a("loki-test"),s(e)]),a("。")]),g,n("p",null,[a("通常来说，一般的简单工程，通过以上配置即可正常使用 "),n("a",f,[a("LOKI"),s(e)]),a("，具体可参考以下项目： "),n("a",_,[a("loki-test"),s(e)]),a("。")]),q,s(i,null,{default:t(()=>[s(p,{title:"单机版",active:""},{default:t(()=>[w]),_:1}),s(p,{title:"集群"},{default:t(()=>[x]),_:1}),s(p,{title:"哨兵"},{default:t(()=>[L]),_:1})]),_:1}),n("p",null,[a("通常来说，一般的简单工程，通过以上配置即可正常使用 "),n("a",S,[a("LOKI"),s(e)]),a("，具体可参考以下项目： "),n("a",A,[a("loki-test"),s(e)]),a("。")])])}const B=u(d,[["render",j],["__file","config.html.vue"]]);export{B as default};
