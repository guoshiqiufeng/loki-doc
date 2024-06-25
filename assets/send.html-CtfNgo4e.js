import{_ as n,o as s,c as a,d as e}from"./app-C7opU1tZ.js";const t={},o=e(`<h1 id="intercept-outgoing-messages" tabindex="-1"><a class="header-anchor" href="#intercept-outgoing-messages"><span>Intercept outgoing messages</span></a></h1><h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use"><span>How to Use</span></a></h2><blockquote><p>Scanning instance with spring, Implementing <code>PipelineProcess</code> interface, specifying generics as <code>ProducerRecordModel</code>.</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SendInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">PipelineProcess</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProducerRecordModel</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * process
     *
     * <span class="token keyword">@param</span> <span class="token parameter">context</span> context
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">PipelineContext</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProducerRecordModel</span><span class="token punctuation">&gt;</span></span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;SendInterceptor context:{}&quot;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="custom-filters" tabindex="-1"><a class="header-anchor" href="#custom-filters"><span>Custom Filters</span></a></h2><blockquote><p>Override the <code>support</code> method to implement custom filtering logic</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SendInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">PipelineProcess</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProducerRecordModel</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * Is supported
     *
     * <span class="token keyword">@param</span> <span class="token parameter">context</span> context
     * <span class="token keyword">@return</span> support true support false unsupported
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">support</span><span class="token punctuation">(</span><span class="token class-name">PipelineContext</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProducerRecordModel</span><span class="token punctuation">&gt;</span></span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;loki&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">getModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTopic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * process
     *
     * <span class="token keyword">@param</span> <span class="token parameter">context</span> context
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">PipelineContext</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProducerRecordModel</span><span class="token punctuation">&gt;</span></span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;SendInterceptor context:{}&quot;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="customize-the-execution-order" tabindex="-1"><a class="header-anchor" href="#customize-the-execution-order"><span>Customize the execution order</span></a></h2><blockquote><p>Override the <code>order</code> method, which returns a sort value. The smaller the value, the earlier it is executed.</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SendInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">PipelineProcess</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProducerRecordModel</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * order
     *
     * <span class="token keyword">@return</span> order
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">order</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">233L</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * Is supported
     *
     * <span class="token keyword">@param</span> <span class="token parameter">context</span> context
     * <span class="token keyword">@return</span> support true support false unsupported
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">support</span><span class="token punctuation">(</span><span class="token class-name">PipelineContext</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProducerRecordModel</span><span class="token punctuation">&gt;</span></span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;loki&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">getModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTopic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * process
     *
     * <span class="token keyword">@param</span> <span class="token parameter">context</span> context
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">PipelineContext</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProducerRecordModel</span><span class="token punctuation">&gt;</span></span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;SendInterceptor context:{}&quot;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[o];function p(i,l){return s(),a("div",null,c)}const d=n(t,[["render",p],["__file","send.html.vue"]]),r=JSON.parse('{"path":"/en/guide/interceptor/send.html","title":"Intercept outgoing messages","lang":"en","frontmatter":{"lang":"en","title":"Intercept outgoing messages","description":null},"headers":[{"level":2,"title":"How to Use","slug":"how-to-use","link":"#how-to-use","children":[]},{"level":2,"title":"Custom Filters","slug":"custom-filters","link":"#custom-filters","children":[]},{"level":2,"title":"Customize the execution order","slug":"customize-the-execution-order","link":"#customize-the-execution-order","children":[]}],"git":{"updatedTime":1707096601000,"contributors":[{"name":"過世秋風","email":"1040926235@qq.com","commits":1}]},"filePathRelative":"en/guide/interceptor/send.md"}');export{d as comp,r as data};
