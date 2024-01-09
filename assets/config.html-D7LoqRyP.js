import{_ as u,r as o,o as r,c as k,a as n,d as a,b as s,w as t,e as p}from"./app-aEXqOFAp.js";const d={},m=n("h1",{id:"configure",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#configure","aria-hidden":"true"},"#"),a(" Configure")],-1),v={href:"https://github.com/guoshiqiufeng/loki",target:"_blank",rel:"noopener noreferrer"},b=p(`<h2 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a> RocketMQ</h2><h3 id="configure-the-lokimapperscan-annotation" tabindex="-1"><a class="header-anchor" href="#configure-the-lokimapperscan-annotation" aria-hidden="true">#</a> Configure the <code>LokiMapperScan</code> annotation</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@LokiMapperScan</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LokiTestApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">LokiTestApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml-configure-mq-connection-parameters" tabindex="-1"><a class="header-anchor" href="#application-yml-configure-mq-connection-parameters" aria-hidden="true">#</a> <code>application.yml</code> Configure <code>mq</code> connection parameters</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">loki</span><span class="token punctuation">:</span>
  <span class="token key atrule">global-config</span><span class="token punctuation">:</span>
    <span class="token key atrule">mq-config</span><span class="token punctuation">:</span>
      <span class="token key atrule">mq-type</span><span class="token punctuation">:</span> rocket_mq
      <span class="token key atrule">address</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8081</span>
      <span class="token key atrule">auth</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> un
      <span class="token key atrule">password</span><span class="token punctuation">:</span> ps
      <span class="token key atrule">connect-timeout</span><span class="token punctuation">:</span> <span class="token number">300</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),g={href:"https://github.com/guoshiqiufeng/loki",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/guoshiqiufeng/loki-test/tree/master/loki-rocketmq-test",target:"_blank",rel:"noopener noreferrer"},y=p(`<h2 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka" aria-hidden="true">#</a> Kafka</h2><h3 id="configure-the-lokimapperscan-annotation-1" tabindex="-1"><a class="header-anchor" href="#configure-the-lokimapperscan-annotation-1" aria-hidden="true">#</a> Configure the <code>LokiMapperScan</code> annotation</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@LokiMapperScan</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LokiTestApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">LokiTestApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml-configure-mq-connection-parameters-1" tabindex="-1"><a class="header-anchor" href="#application-yml-configure-mq-connection-parameters-1" aria-hidden="true">#</a> <code>application.yml</code> Configure <code>mq</code> connection parameters</h3><blockquote><p>Supports all configurations under <code>spring.kafka</code></p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),f={href:"https://github.com/guoshiqiufeng/loki",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/guoshiqiufeng/loki-test/tree/master/loki-kafka-test",target:"_blank",rel:"noopener noreferrer"},q=p(`<h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h2><h3 id="configure-the-lokimapperscan-annotation-2" tabindex="-1"><a class="header-anchor" href="#configure-the-lokimapperscan-annotation-2" aria-hidden="true">#</a> Configure the <code>LokiMapperScan</code> annotation</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@LokiMapperScan</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LokiTestApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">LokiTestApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml-configure-mq-connection-parameters-2" tabindex="-1"><a class="header-anchor" href="#application-yml-configure-mq-connection-parameters-2" aria-hidden="true">#</a> <code>application.yml</code> Configure <code>mq</code> connection parameters</h3><blockquote><p>Support Redis Standalone, Cluster, and Sentinel modes Support all configurations under <code>spring.data.redis</code> The configuration under mq-config will overwrite the configuration under <code>spring.data.redis</code></p></blockquote>`,5),w=n("div",{class:"language-yaml","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"spring"),n("span",{class:"token punctuation"},":"),a(`
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
`)])])],-1),S=n("div",{class:"language-yaml","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"spring"),n("span",{class:"token punctuation"},":"),a(`
  `),n("span",{class:"token key atrule"},"data"),n("span",{class:"token punctuation"},":"),a(`
    `),n("span",{class:"token key atrule"},"redis"),n("span",{class:"token punctuation"},":"),a(`
      `),n("span",{class:"token key atrule"},"sentinel"),n("span",{class:"token punctuation"},":"),a(`
        `),n("span",{class:"token key atrule"},"master"),n("span",{class:"token punctuation"},":"),a(` mymaster
        `),n("span",{class:"token key atrule"},"nodes"),n("span",{class:"token punctuation"},":"),a(`
          `),n("span",{class:"token punctuation"},"-"),a(" 127.0.0.1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"26380"),a(`
          `),n("span",{class:"token punctuation"},"-"),a(" 127.0.0.1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"26329"),a(`
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
`)])])],-1),L={href:"https://github.com/guoshiqiufeng/loki",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/guoshiqiufeng/loki-test/tree/master/loki-kafka-test",target:"_blank",rel:"noopener noreferrer"};function C(A,I){const e=o("ExternalLinkIcon"),l=o("RouterLink"),c=o("CodeGroupItem"),i=o("CodeGroup");return r(),k("div",null,[m,n("p",null,[n("a",v,[a("LOKI"),s(e)]),a(" is very easy to configure, we just need some simple configuration！")]),n("blockquote",null,[n("p",null,[a("Make sure you have LOKI installed, if you haven't, check out the "),s(l,{to:"/en/guide/install.html"},{default:t(()=>[a("Install")]),_:1}),a("。")])]),b,n("p",null,[a("Generally speaking, a general simple project can be used normally with the above configuration "),n("a",g,[a("LOKI"),s(e)]),a(", please refer to the following project: "),n("a",h,[a("loki-test"),s(e)]),a("。")]),y,n("p",null,[a("Generally speaking, a general simple project can be used normally with the above configuration "),n("a",f,[a("LOKI"),s(e)]),a(", please refer to the following project: "),n("a",_,[a("loki-test"),s(e)]),a("。")]),q,s(i,null,{default:t(()=>[s(c,{title:"Standalone",active:""},{default:t(()=>[w]),_:1}),s(c,{title:"Cluster"},{default:t(()=>[x]),_:1}),s(c,{title:"Sentinel"},{default:t(()=>[S]),_:1})]),_:1}),n("p",null,[a("Generally speaking, a general simple project can be used normally with the above configuration "),n("a",L,[a("LOKI"),s(e)]),a(", please refer to the following project: "),n("a",j,[a("loki-test"),s(e)]),a("。")])])}const T=u(d,[["render",C],["__file","config.html.vue"]]);export{T as default};
