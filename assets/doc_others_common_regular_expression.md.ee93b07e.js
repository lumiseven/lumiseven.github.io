import{_ as d,c as e,o,b as c}from"./app.05abc48f.js";const f=JSON.parse('{"title":"常用正则表达式速查","description":"","frontmatter":{},"headers":[],"relativePath":"doc/others/common_regular_expression.md","lastUpdated":1720306783000}'),l={name:"doc/others/common_regular_expression.md"},i=c('<h1 id="常用正则表达式速查" tabindex="-1">常用正则表达式速查 <a class="header-anchor" href="#常用正则表达式速查" aria-hidden="true">#</a></h1><h2 id="校验数字的表达式" tabindex="-1">校验数字的表达式 <a class="header-anchor" href="#校验数字的表达式" aria-hidden="true">#</a></h2><ol><li>数字：<code>^[0-9]*$</code></li><li>n位的数字：<code>^\\d{n}$</code></li><li>至少n位的数字：<code>^\\d{n,}$</code></li><li>m-n位的数字：<code>^\\d{m,n}$</code></li><li>零和非零开头的数字：<code>^(0|[1-9][0-9]*)$</code></li><li>非零开头的最多带两位小数的数字：<code>^([1-9][0-9]*)+(.[0-9]{1,2})?$</code></li><li>带1-2位小数的正数或负数：<code>^(\\-)?\\d+(\\.\\d{1,2})?$</code></li><li>正数、负数、和小数：<code>^(\\-|\\+)?\\d+(\\.\\d+)?$</code></li><li>有两位小数的正实数：<code>^[0-9]+(.[0-9]{2})?$</code></li><li>有1~3位小数的正实数：<code>^[0-9]+(.[0-9]{1,3})?$</code></li><li>非零的正整数：<code>^[1-9]\\d*$ 或 ^([1-9][0-9]*){1,3}$ 或 ^\\+?[1-9][0-9]*$</code></li><li>非零的负整数：<code>^\\-[1-9][]0-9&quot;*$ 或 ^-[1-9]\\d*$</code></li><li>非负整数：<code>^\\d+$ 或 ^[1-9]\\d*|0$</code></li><li>非正整数：<code>^-[1-9]\\d*|0$ 或 ^((-\\d+)|(0+))$</code></li><li>非负浮点数：<code>^\\d+(\\.\\d+)?$ 或 ^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0$</code></li><li>非正浮点数：<code>^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$ 或 ^(-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*))|0?\\.0+|0$</code></li><li>正浮点数：<code>^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*$ 或 ^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$</code></li><li>负浮点数：<code>^-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*)$ 或 ^(-(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*)))$</code></li><li>浮点数：<code>^(-?\\d+)(\\.\\d+)?$ 或 ^-?([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0)$</code></li></ol><h2 id="校验字符的表达式" tabindex="-1">校验字符的表达式 <a class="header-anchor" href="#校验字符的表达式" aria-hidden="true">#</a></h2><ol><li>汉字：<code>^[\\u4e00-\\u9fa5]{0,}$</code></li><li>英文和数字：<code>^[A-Za-z0-9]+$</code> 或 <code>^[A-Za-z0-9]{4,40}$</code></li><li>长度为3-20的所有字符：<code>^.{3,20}$</code></li><li>由26个英文字母组成的字符串：<code>^[A-Za-z]+$</code></li><li>由26个大写英文字母组成的字符串：<code>^[A-Z]+$</code></li><li>由26个小写英文字母组成的字符串：<code>^[a-z]+$</code></li><li>由数字和26个英文字母组成的字符串：<code>^[A-Za-z0-9]+$</code></li><li>由数字、26个英文字母或者下划线组成的字符串：<code>^\\w+$</code> 或 <code>^\\w{3,20}</code></li><li>中文、英文、数字包括下划线：<code>^[\\u4E00-\\u9FA5A-Za-z0-9_]+$</code></li><li>中文、英文、数字但不包括下划线等符号：<code>^[\\u4E00-\\u9FA5A-Za-z0-9]+$ 或 ^[\\u4E00-\\u9FA5A-Za-z0-9]{2,20}$</code></li><li>可以输入含有<code>^%&amp;&#39;,;=?$\\&quot;</code>等字符：<code>[^%&amp;&#39;,;=?$\\x22]+</code></li><li>禁止输入含有<code>~</code>的字符<code>[^~\\x22]+</code></li></ol><h3 id="其它" tabindex="-1">其它： <a class="header-anchor" href="#其它" aria-hidden="true">#</a></h3><ol><li><code>.*</code>匹配除 <code>\\n</code> 以外的任何字符。</li><li><code>/[\\u4E00-\\u9FA5]</code>/ 汉字</li><li><code>/[\\uFF00-\\uFFFF]</code>/ 全角符号</li><li><code>/[\\u0000-\\u00FF]</code>/ 半角符号</li></ol><h2 id="特殊需求表达式" tabindex="-1">特殊需求表达式 <a class="header-anchor" href="#特殊需求表达式" aria-hidden="true">#</a></h2><ol><li>Email地址：<code>^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$</code></li><li>域名：<code>[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?</code></li><li>InternetURL：<code>[a-zA-z]+://[^\\s]* 或 ^http://([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&amp;=]*)?$</code></li><li>手机号码：<code>^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$</code></li><li>电话号码(&quot;XXX-XXXXXXX&quot;、&quot;XXXX-XXXXXXXX&quot;、&quot;XXX-XXXXXXX&quot;、&quot;XXX-XXXXXXXX&quot;、&quot;XXXXXXX&quot;和&quot;XXXXXXXX)：<code>^(\\(\\d{3,4}-)|\\d{3.4}-)?\\d{7,8}$</code></li><li>国内电话号码(0511-4405222、021-87888822)：<code>\\d{3}-\\d{8}|\\d{4}-\\d{7}</code></li><li>身份证号(15位、18位数字)：<code>^\\d{15}|\\d{18}$</code></li><li>短身份证号码(数字、字母x结尾)：<code>^([0-9]){7,18}(x|X)?$ 或 ^\\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$</code></li><li>帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：<code>^[a-zA-Z][a-zA-Z0-9_]{4,15}$</code></li><li>密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：<code>^[a-zA-Z]\\w{5,17}$</code></li><li>强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：<code>^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$</code></li><li>日期格式：<code>^\\d{4}-\\d{1,2}-\\d{1,2}</code></li><li>一年的12个月(01～09和1～12)：<code>^(0?[1-9]|1[0-2])$</code></li><li>一个月的31天(01～09和1～31)：<code>^((0?[1-9])|((1|2)[0-9])|30|31)$</code></li><li>xml文件：<code>^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\\\.[x|X][m|M][l|L]$</code></li><li>中文字符的正则表达式：<code>[\\u4e00-\\u9fa5]</code></li><li>双字节字符：<code>[^\\x00-\\xff]</code> (包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))</li><li>空白行的正则表达式：<code>\\n\\s*\\r</code> (可以用来删除空白行)</li><li>HTML标记的正则表达式：<code>&lt;(\\S*?)[^&gt;]*&gt;.*?&lt;/\\1&gt;|&lt;.*? /&gt;</code> (网上流传的版本太糟糕，上面这个也仅仅能部分，对于复杂的嵌套标记依旧无能为力)</li><li>首尾空白字符的正则表达式：<code>^\\s*|\\s*$</code>或<code>(^\\s*)|(\\s*$)</code> (可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式)</li><li>腾讯QQ号：<code>[1-9][0-9]{4,}</code> (腾讯QQ号从10000开始)</li><li>中国邮政编码：<code>[1-9]\\d{5}(?!\\d)</code> (中国邮政编码为6位数字)</li><li>IP地址：<code>\\d+\\.\\d+\\.\\d+\\.\\d+</code> (提取IP地址时有用)</li><li>IP地址：<code>((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))</code></li><li>IP-v4地址：<code>\\\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\b (提取IP地址时有用)</code></li><li>校验IP-v6地址:<code>(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))</code></li><li>子网掩码：<code>((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))</code></li><li>校验日期:<code>^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$</code>(“yyyy-mm-dd“ 格式的日期校验，已考虑平闰年。)</li><li>抽取注释：<code>&lt;!--(.*?)--&gt;</code></li><li>查找CSS属性:<code>^\\\\s*[a-zA-Z\\\\-]+\\\\s*[:]{1}\\\\s[a-zA-Z0-9\\\\s.#]+[;]{1}</code></li><li>提取页面超链接:<code>(&lt;a\\\\s*(?!.*\\\\brel=)[^&gt;]*)(href=&quot;https?:\\\\/\\\\/)((?!(?:(?:www\\\\.)?&#39;.implode(&#39;|(?:www\\\\.)?&#39;, $follow_list).&#39;))[^&quot; rel=&quot;external nofollow&quot; ]+)&quot;((?!.*\\\\brel=)[^&gt;]*)(?:[^&gt;]*)&gt;</code></li><li>提取网页图片:<code>\\\\&lt; *[img][^\\\\\\\\&gt;]*[src] *= *[\\\\&quot;\\\\&#39;]{0,1}([^\\\\&quot;\\\\&#39;\\\\ &gt;]*)</code></li><li>提取网页颜色代码:<code>^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$</code></li><li>文件扩展名效验:<code>^([a-zA-Z]\\\\:|\\\\\\\\)\\\\\\\\([^\\\\\\\\]+\\\\\\\\)*[^\\\\/:*?&quot;&lt;&gt;|]+\\\\.txt(l)?$</code></li><li>判断IE版本：<code>^.*MSIE [5-8](?:\\\\.[0-9]+)?(?!.*Trident\\\\/[5-9]\\\\.0).*$</code></li></ol>',9),a=[i];function t($,r,X,s,n,A){return o(),e("div",null,a)}const h=d(l,[["render",t]]);export{f as __pageData,h as default};