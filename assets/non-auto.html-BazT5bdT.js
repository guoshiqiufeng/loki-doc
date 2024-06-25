import{_ as s,r as a,o as e,c as t,a as o,b as p,w as i,d as c,e as l}from"./app-C7opU1tZ.js";const u={},r=c(`<h1 id="non-auto-decoding" tabindex="-1"><a class="header-anchor" href="#non-auto-decoding"><span>Non-auto decoding</span></a></h1><p>Spring scan sample, implement the Listener interface, add @MessageListener annotations. The subscription information is in the @MessageListener annotation.</p><h2 id="topic" tabindex="-1"><a class="header-anchor" href="#topic"><span>topic</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@MessageListener</span><span class="token punctuation">(</span>topic <span class="token operator">=</span> <span class="token string">&quot;loki&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestMessageListener</span> <span class="token keyword">implements</span> <span class="token class-name">Listener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token class-name">MessageContent</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> entity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;entity:{}&quot;</span><span class="token punctuation">,</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="topic-pattern" tabindex="-1"><a class="header-anchor" href="#topic-pattern"><span>topic-pattern</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@MessageListener</span><span class="token punctuation">(</span>topicPattern <span class="token operator">=</span> <span class="token string">&quot;lo*&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestMessageListener</span> <span class="token keyword">implements</span> <span class="token class-name">Listener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token class-name">MessageContent</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> entity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;entity:{}&quot;</span><span class="token punctuation">,</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="messagelistener" tabindex="-1"><a class="header-anchor" href="#messagelistener"><span>@MessageListener</span></a></h2>`,7);function d(k,m){const n=a("RouteLink");return e(),t("div",null,[r,o("p",null,[p(n,{to:"/en/guide/annotation.html#messagelistener"},{default:i(()=>[l("Refer to annotation for explanation")]),_:1})])])}const g=s(u,[["render",d],["__file","non-auto.html.vue"]]),h=JSON.parse('{"path":"/en/guide/listener/non-auto.html","title":"Non-auto decoding","lang":"en","frontmatter":{"lang":"en","title":"Non-auto decoding","description":null},"headers":[{"level":2,"title":"topic","slug":"topic","link":"#topic","children":[]},{"level":2,"title":"topic-pattern","slug":"topic-pattern","link":"#topic-pattern","children":[]},{"level":2,"title":"@MessageListener","slug":"messagelistener","link":"#messagelistener","children":[]}],"git":{"updatedTime":1707096601000,"contributors":[{"name":"yanghq","email":"1040926235@qq.com","commits":1},{"name":"過世秋風","email":"1040926235@qq.com","commits":1}]},"filePathRelative":"en/guide/listener/non-auto.md"}');export{g as comp,h as data};
