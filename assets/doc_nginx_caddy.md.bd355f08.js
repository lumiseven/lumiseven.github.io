import{_ as a,c as s,o as n,b as l}from"./app.8443043e.js";const h=JSON.parse('{"title":"Caddy","description":"","frontmatter":{},"headers":[],"relativePath":"doc/nginx/caddy.md","lastUpdated":1678419541000}'),e={name:"doc/nginx/caddy.md"},p=l(`<h1 id="caddy" tabindex="-1"><a href="https://github.com/caddyserver/caddy" target="_blank" rel="noreferrer">Caddy</a> <a class="header-anchor" href="#caddy" aria-hidden="true">#</a></h1><p>Caddy 是一款功能强大，扩展性高的 Web 服务器。它有以下几个特点：</p><ul><li>配置简单，使用 Caddyfile 文件来定义站点和服务。</li><li>支持自动化 HTTPS 配置，能自动申请和续期证书，并默认启用 HTTP/2 协议。</li><li>支持在线配置 API ，可以动态修改配置而无需重启。</li><li>支持插件架构，可以通过安装不同的模块来扩展功能。</li><li>采用 Go 语言编写，内存安全更有保证。</li></ul><h2 id="caddy-安装" tabindex="-1">caddy 安装 <a class="header-anchor" href="#caddy-安装" aria-hidden="true">#</a></h2><h2 id="配置域名ssl证书的方式" tabindex="-1">配置域名SSL证书的方式 <a class="header-anchor" href="#配置域名ssl证书的方式" aria-hidden="true">#</a></h2><ul><li>自动申请和配置 Let’s Encrypt 的免费证书。 这是 Caddy 的默认行为，只需要在 Caddyfile 中指定域名，Caddy 就会自动申请和配置 SSL 证书，并且自动续期。<div class="language-caddy"><button title="Copy Code" class="copy"></button><span class="lang">caddy</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">example.com {</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 其他指令</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li>手动从证书发行方申请证书，然后在 Caddy 配置中指定证书和秘钥文件路径。 这种方式适用于已经拥有了自己的 SSL 证书，或者想要使用其他的证书发行方。<div class="language-caddy"><button title="Copy Code" class="copy"></button><span class="lang">caddy</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">example.com {</span></span>
<span class="line"><span style="color:#A6ACCD;">    tls /path/example.com.crt /path/example.com.key</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 其他指令</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li>主机自动申请方式。 如果目标域名（例如: example.com）已经解析到了本机，那么 Caddy 启动后会尝试自动通过 ACME HTTP 申请证书。这种方式不需要在 Caddyfile 中写任何 tls 指令，但是需要保证域名解析正确，并且端口 80 和 443 没有被占用。<div class="language-caddy"><button title="Copy Code" class="copy"></button><span class="lang">caddy</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">example.com {</span></span>
<span class="line"><span style="color:#A6ACCD;">   # 其他指令</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><p>注意第一种和第三种的区别：</p><ul><li>第一种是在 Caddyfile 中<strong>指定了域名</strong>，而第三种是<strong>没有指定域名，而是使用主机名作为域名</strong>。这意味着，如果主机有多个域名解析到它，那么第三种方式会为每个域名申请证书，而不是只为想要的那个域名申请证书。所以，如果想要控制哪些域名使用 SSL 证书，最好还是在 Caddyfile 中明确指定。</li></ul><h2 id="http-重定向-https" tabindex="-1">HTTP 重定向 HTTPS <a class="header-anchor" href="#http-重定向-https" aria-hidden="true">#</a></h2><ul><li>如果是使用 Caddy 自动申请的 SSL 证书，那么 Caddy 会默认监听 80 端口和 443 端口，并且自动将 HTTP 请求重定向到 HTTPS。不需要做任何额外的配置。</li><li>如果是手动指定 SSL 证书和密钥来配置的话，Caddy 只会监听 443 端口，并不会自动设置 80 端口的重定向。如果要做重定向的话，可以在 Caddyfile 中添加一个 redir 指令，指定重定向的目标和状态码。例如：<div class="language-caddy"><button title="Copy Code" class="copy"></button><span class="lang">caddy</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">http://example.com {</span></span>
<span class="line"><span style="color:#A6ACCD;">    redir https://example.com{uri} 301</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">https://example.com {</span></span>
<span class="line"><span style="color:#A6ACCD;">    tls /path/example.com.crt /path/example.com.key</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 其他指令</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h2 id="示例-使用caddy配置web服务器托管静态页面" tabindex="-1">示例-使用caddy配置web服务器托管静态页面 <a class="header-anchor" href="#示例-使用caddy配置web服务器托管静态页面" aria-hidden="true">#</a></h2><p>假设域名是 <code>example.com</code></p><ol><li>将静态文件放在 /var/www/html 目录</li><li>配置Caddyfile<div class="language-caddy"><button title="Copy Code" class="copy"></button><span class="lang">caddy</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">example.com {</span></span>
<span class="line"><span style="color:#A6ACCD;">    root * /var/www/html</span></span>
<span class="line"><span style="color:#A6ACCD;">    file_server</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li>访问 <code>example.com</code>，Caddy 就会提供静态页面，并且自动申请和配置 HTTPS 证书</li></ol><h2 id="示例-使用caddy配置api网关反向代理多个后端并使用path路由区分不同的后端服务" tabindex="-1">示例-使用caddy配置api网关反向代理多个后端并使用path路由区分不同的后端服务 <a class="header-anchor" href="#示例-使用caddy配置api网关反向代理多个后端并使用path路由区分不同的后端服务" aria-hidden="true">#</a></h2><ul><li>使用 handle_path 指令，可以将请求的路径前缀去掉，然后将请求转发给指定的后端服务。例如：</li></ul><div class="language-caddy"><button title="Copy Code" class="copy"></button><span class="lang">caddy</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">example.com {</span></span>
<span class="line"><span style="color:#A6ACCD;">    handle_path /api/* {</span></span>
<span class="line"><span style="color:#A6ACCD;">        reverse_proxy 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    handle_path /web/* {</span></span>
<span class="line"><span style="color:#A6ACCD;">        reverse_proxy 127.0.0.1:9001</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>使用 uri 指令，可以修改请求的路径，然后使用 reverse_proxy 指令转发给指定的后端服务。例如：</li></ul><div class="language-caddy"><button title="Copy Code" class="copy"></button><span class="lang">caddy</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">example.com {</span></span>
<span class="line"><span style="color:#A6ACCD;">    uri /api/* strip_prefix /api</span></span>
<span class="line"><span style="color:#A6ACCD;">    reverse_proxy /api/* 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    uri /web/* strip_prefix /web</span></span>
<span class="line"><span style="color:#A6ACCD;">    reverse_proxy /web/* 127.0.0.1:9001</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="示例-caddy配置cors" tabindex="-1">示例-caddy配置cors <a class="header-anchor" href="#示例-caddy配置cors" aria-hidden="true">#</a></h2><ul><li>使用 cors 指令，可以简单地添加 CORS 授权到响应头中。例如：</li></ul><div class="language-caddy"><button title="Copy Code" class="copy"></button><span class="lang">caddy</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">example.com {</span></span>
<span class="line"><span style="color:#A6ACCD;">    cors</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 其他指令</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>使用 header 指令，可以手动地添加 CORS 相关的响应头。例如：</li></ul><div class="language-caddy"><button title="Copy Code" class="copy"></button><span class="lang">caddy</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">example.com {</span></span>
<span class="line"><span style="color:#A6ACCD;">    header Access-Control-Allow-Origin *</span></span>
<span class="line"><span style="color:#A6ACCD;">    header Access-Control-Allow-Methods &quot;GET, POST, OPTIONS&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    header Access-Control-Allow-Headers &quot;DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 其他指令</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,23),c=[p];function o(t,i,d,r,C,y){return n(),s("div",null,c)}const m=a(e,[["render",o]]);export{h as __pageData,m as default};
