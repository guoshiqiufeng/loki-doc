import{_ as r,i as k,r as p,o as v,c as g,b as a,w as t,a as n,e as s,d as l,t as i,u as c}from"./app-C7opU1tZ.js";const m=l('<h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting-started</span></a></h1><p>Let&#39;s go through a simple demo to introduce how to use LOKI&#39;s features.</p><h2 id="initialization" tabindex="-1"><a class="header-anchor" href="#initialization"><span>Initialization</span></a></h2><p>Create an empty Spring Boot project (2.x, 3.x are both supported) Here we are using version 3.2.0.</p><h2 id="adding-dependencies" tabindex="-1"><a class="header-anchor" href="#adding-dependencies"><span>Adding Dependencies</span></a></h2>',5),h={class:"language-xml","data-ext":"xml","data-title":"xml"},b={class:"language-xml"},y=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dependency")]),n("span",{class:"token punctuation"},">")],-1),_=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("groupId")]),n("span",{class:"token punctuation"},">")],-1),f=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("groupId")]),n("span",{class:"token punctuation"},">")],-1),w=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("artifactId")]),n("span",{class:"token punctuation"},">")],-1),q=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("artifactId")]),n("span",{class:"token punctuation"},">")],-1),x=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("version")]),n("span",{class:"token punctuation"},">")],-1),j=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("version")]),n("span",{class:"token punctuation"},">")],-1),T=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dependency")]),n("span",{class:"token punctuation"},">")],-1),M={class:"language-groovy","data-ext":"groovy","data-title":"groovy"},S={class:"language-groovy"},C={class:"token string"},I={class:"language-groovy","data-ext":"groovy","data-title":"groovy"},A={class:"language-groovy"},E=n("span",{class:"token punctuation"},":",-1),L=n("span",{class:"token string"},"'com.github.guoshiqiufeng'",-1),G=n("span",{class:"token punctuation"},",",-1),z=n("span",{class:"token punctuation"},":",-1),B=n("span",{class:"token string"},"'loki-spring-boot-starter'",-1),N=n("span",{class:"token punctuation"},",",-1),W=n("span",{class:"token punctuation"},":",-1),V={class:"token string"},D=l(`<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><p>Add the configuration to application.yml:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">loki</span><span class="token punctuation">:</span>
  <span class="token key atrule">global-config</span><span class="token punctuation">:</span>
    <span class="token key atrule">mq-config</span><span class="token punctuation">:</span>
      <span class="token key atrule">mq-type</span><span class="token punctuation">:</span> rocket_mq
      <span class="token key atrule">address</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8081</span>
      <span class="token key atrule">auth</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> un
      <span class="token key atrule">password</span><span class="token punctuation">:</span> ps
      <span class="token key atrule">connect-timeout</span><span class="token punctuation">:</span> <span class="token number">300</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Add the annotation <code>@LokiMapperScan</code> to the starter class and add the annotation <code>@Loki</code> to the required methods as follows:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@LokiMapperScan</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LokiTestApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">LokiTestApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="coding" tabindex="-1"><a class="header-anchor" href="#coding"><span>Coding</span></a></h2><p>Write the entity class <code>TestEntity.java</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@MessageName</span><span class="token punctuation">(</span>topic <span class="token operator">=</span> <span class="token string">&quot;loki&quot;</span><span class="token punctuation">,</span> tag <span class="token operator">=</span> <span class="token string">&quot;create&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestEntity</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@MessageKey</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> message<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Write the Mapper class <code>TestMapper.java</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TestMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TestEntity</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Write the Listener class <code>TestListener.java</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestListener</span> <span class="token keyword">implements</span> <span class="token class-name">Listener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TestEntity</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token class-name">MessageContent</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TestEntity</span><span class="token punctuation">&gt;</span></span> entity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;entity:{}&quot;</span><span class="token punctuation">,</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="start-using" tabindex="-1"><a class="header-anchor" href="#start-using"><span>Start using</span></a></h2><p>Add a test Controller class for functional testing:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">TestMapper</span> testMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;send&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TestEntity</span> entity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        entity<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;9521&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        entity<span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> messageId <span class="token operator">=</span> testMapper<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;send messageId:{}&quot;</span><span class="token punctuation">,</span> messageId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;sendAsync&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sendAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TestEntity</span> entity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        entity<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;9521&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        entity<span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token string">&quot;sendAsync&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        testMapper<span class="token punctuation">.</span><span class="token function">sendAsync</span><span class="token punctuation">(</span>entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),O={href:"https://github.com/guoshiqiufeng/loki-test",target:"_blank",rel:"noopener noreferrer"},R=n("h2",{id:"wrap-up",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#wrap-up"},[n("span",null,"Wrap-up")])],-1),K=n("p",null,"With these few simple steps, we have implemented the sending and consuming of TestEntity.",-1),F={__name:"getting-started.html",setup(H){const e=k("version");return(J,P)=>{const o=p("CodeGroupItem"),u=p("CodeGroup"),d=p("ExternalLinkIcon");return v(),g("div",null,[m,a(u,null,{default:t(()=>[a(o,{title:"Maven",active:""},{default:t(()=>[n("div",h,[n("pre",b,[n("code",null,[y,s(`
    `),_,s("com.github.guoshiqiufeng"),f,s(`
    `),w,s("loki-spring-boot-starter"),q,s(`
    `),x,s(i(c(e)),1),j,s(`
`),T,s(`
`)])])])]),_:1}),a(o,{title:"Gradle (Short)",active:""},{default:t(()=>[n("div",M,[n("pre",S,[n("code",null,[s("implementation "),n("span",C,"'com.github.guoshiqiufeng:loki-spring-boot-starter:"+i(c(e))+"'",1),s(`
`)])])])]),_:1}),a(o,{title:"Gradle"},{default:t(()=>[n("div",I,[n("pre",A,[n("code",null,[s("implementation group"),E,s(),L,G,s(" name"),z,s(),B,N,s(" version"),W,s(),n("span",V,"'"+i(c(e))+"'",1),s(`
`)])])])]),_:1})]),_:1}),D,n("p",null,[s("Full code example View "),n("a",O,[s("loki-test"),a(d)])]),R,K])}}},U=r(F,[["__file","getting-started.html.vue"]]),X=JSON.parse('{"path":"/en/guide/getting-started.html","title":"Getting-started","lang":"en","frontmatter":{"lang":"en","title":"Getting-started","description":"Getting-started"},"headers":[{"level":2,"title":"Initialization","slug":"initialization","link":"#initialization","children":[]},{"level":2,"title":"Adding Dependencies","slug":"adding-dependencies","link":"#adding-dependencies","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"Coding","slug":"coding","link":"#coding","children":[]},{"level":2,"title":"Start using","slug":"start-using","link":"#start-using","children":[]},{"level":2,"title":"Wrap-up","slug":"wrap-up","link":"#wrap-up","children":[]}],"git":{"updatedTime":1707096601000,"contributors":[{"name":"yanghq","email":"1040926235@qq.com","commits":6},{"name":"過世秋風","email":"1040926235@qq.com","commits":1}]},"filePathRelative":"en/guide/getting-started.md"}');export{U as comp,X as data};