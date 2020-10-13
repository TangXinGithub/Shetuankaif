export default {
  htmltext: '<p><img src="https://my-wechat.mdnice.com/logo.svg" alt=""></p> ' +
    '<p>请使用 <strong>Chrome</strong> 浏览器。</p> ' +
    '<p>请阅读下方文本熟悉工具使用方法，本文可直接拷贝到微信中预览。</p> ' +
    '<h2 id="1-markdown-nice-">1 Markdown Nice 简介</h2> ' +
    '<ul> ' +
    '<li>支持自定义样式的 Markdown 编辑器</li> ' +
    '<li>支持微信公众号、知乎和稀土掘金</li> ' +
    '<li>欢迎扫码回复「排版」加入用户群</li> ' +
    '</ul> ' +
    '<p><img src="https://my-wechat.mdnice.com/wechat.jpg" alt=""></p> ' +
    '<h2 id="2-">2 主题</h2> ' +
    '<p><strong><a href="https://preview.mdnice.com/themes/">https://preview.mdnice.com/themes/</a></strong></p> ' +
    '<p>欢迎提交主题，提供更多文章示例~~</p> ' +
    '<h2 id="3-">3 通用语法</h2> ' +
    '<h3 id="3-1-">3.1 标题</h3> ' +
    '<p>在文字写书写不同数量的<code>#</code>可以完成不同的标题，如下：</p> ' +
    '<h1 id="-">一级标题</h1> ' +
    '<h2 id="-">二级标题</h2> ' +
    '<h3 id="-">三级标题</h3> ' +
    '<h3 id="3-2-">3.2 无序列表</h3> ' +
    '<p>无序列表的使用，在符号<code>-</code>后加空格使用。如下：</p> ' +
    '<ul> ' +
    '<li>无序列表 1</li> ' +
    '<li>无序列表 2</li> ' +
    '<li>无序列表 3</li> ' +
    '</ul> ' +
    '<p>如果要控制列表的层级，则需要在符号<code>-</code>前使用空格。如下：</p> ' +
    '<ul> ' +
    '<li>无序列表 1</li> ' +
    '<li>无序列表 2<ul> ' +
    '<li>无序列表 2.1</li> ' +
    '<li>无序列表 2.2</li> ' +
    '</ul> ' +
    '</li> ' +
    '</ul> ' +
    '<p><strong>由于微信原因，最多支持到二级列表</strong>。</p> ' +
    '<h3 id="3-3-">3.3 有序列表</h3> ' +
    '<p>有序列表的使用，在数字及符号<code>.</code>后加空格后输入内容，如下：</p> ' +
    '<ol> ' +
    '<li>有序列表 1</li> ' +
    '<li>有序列表 2</li> ' +
    '<li>有序列表 3</li> ' +
    '</ol> ' +
    '<h3 id="3-4-">3.4 粗体和斜体</h3> ' +
    '<p>粗体的使用是在需要加粗的文字前后各加两个<code>*</code>。</p> ' +
    '<p>而斜体的使用则是在需要斜体的文字前后各加一个<code>*</code>。</p> ' +
    '<p>如果要使用粗体和斜体，那么就是在需要操作的文字前后加三个<code>*</code>。如下：</p> ' +
    '<p><strong>这个是粗体</strong></p> ' +
    '<p><em>这个是斜体</em></p> ' +
    '<p><strong><em>这个是粗体加斜体</em></strong></p> ' +
    '<p>注：由于 commonmark 标准，可能会导致加粗与想象不一致，如下</p> ' +
    '<p><strong>今天天气好晴朗，</strong>处处好风光。</p> ' +
    '<p>这个是正常现象，请参考<a href="https://github.com/markdown-it/markdown-it/issues/410" title="加粗 Issue">加粗 Issue</a>。</p> ' +
    '<h3 id="3-5-">3.5 链接</h3> ' +
    '<p>微信公众号仅支持公众号文章链接，即域名为<code>https://mp.weixin.qq.com/</code>的合法链接。使用方法如下所示：</p> ' +
    '<p>对于该论述，欢迎读者查阅之前发过的文章，<a href="https://mp.weixin.qq.com/s/s5IhxV2ooX3JN_X416nidA">你是《未来世界的幸存者》么？</a></p> ' +
    '<h3 id="3-6-">3.6 引用</h3> ' +
    '<p>引用的格式是在符号 <code>&gt;</code> 后面书写文字，文字的内容可以包含标题、链接、图片、粗体和斜体等。</p> ' +
    '<p>一级引用如下：</p> ' +
    '<blockquote> ' +
    '<h3 id="-">一级引用示例</h3> ' +
    '<p>读一本好书，就是在和高尚的人谈话。 <strong>——歌德</strong></p> ' +
    '<p><a href="https://mp.weixin.qq.com/s/lM808MxUu6tp8zU8SBu3sg">Markdown Nice最全功能介绍</a></p> ' +
    '<p><img src="https://my-wechat.mdnice.com/wechat.jpg" alt="这里写图片描述"></p> ' +
    '</blockquote> ' +
    '<p>当使用多个 <code>&gt;</code> 符号时，就会变成多级引用</p> ' +
    '<p>二级引用如下：</p> ' +
    '<blockquote> ' +
    '<blockquote> ' +
    '<h3 id="-">二级引用示例</h3> ' +
    '<p>读一本好书，就是在和高尚的人谈话。 <strong>——歌德</strong></p> ' +
    '<p><a href="https://mp.weixin.qq.com/s/lM808MxUu6tp8zU8SBu3sg">Markdown Nice最全功能介绍</a></p> ' +
    '<p><img src="https://my-wechat.mdnice.com/wechat.jpg" alt="这里写图片描述"></p> ' +
    '</blockquote> ' +
    '</blockquote> ' +
    '<p>三级引用如下：</p> ' +
    '<blockquote> ' +
    '<blockquote> ' +
    '<blockquote> ' +
    '<h3 id="-">三级引用示例</h3> ' +
    '<p>读一本好书，就是在和高尚的人谈话。 <strong>——歌德</strong></p> ' +
    '<p><a href="https://mp.weixin.qq.com/s/lM808MxUu6tp8zU8SBu3sg">Markdown Nice最全功能介绍</a></p> ' +
    '<p><img src="https://my-wechat.mdnice.com/wechat.jpg" alt="这里写图片描述"></p> ' +
    '</blockquote> ' +
    '</blockquote> ' +
    '</blockquote> ' +
    '<h3 id="3-7-">3.7 分割线</h3> ' +
    '<p>可以在一行中用三个以上的减号来建立一个分隔线，同时需要在分隔线的上面空一行。如下：</p> ' +
    '<hr> ' +
    '<h3 id="3-8-">3.8 删除线</h3> ' +
    '<p>删除线的使用，在需要删除的文字前后各使用两个<code>~</code>，如下：</p> ' +
    '<p><del>这是要被删除的内容。</del></p> ' +
    '<h3 id="3-9-">3.9 表格</h3> ' +
    '<p>可以使用冒号来定义表格的对齐方式，如下：</p> ' +
    '<table> ' +
    '<thead> ' +
    '<tr> ' +
    '<th style="text-align:left">姓名</th> ' +
    '<th style="text-align:center">年龄</th> ' +
    '<th style="text-align:right">工作</th> ' +
    '</tr> ' +
    '</thead> ' +
    '<tbody> ' +
    '<tr> ' +
    '<td style="text-align:left">小可爱</td> ' +
    '<td style="text-align:center">18</td> ' +
    '<td style="text-align:right">吃可爱多</td> ' +
    '</tr> ' +
    '<tr> ' +
    '<td style="text-align:left">小小勇敢</td> ' +
    '<td style="text-align:center">20</td> ' +
    '<td style="text-align:right">爬棵勇敢树</td> ' +
    '</tr> ' +
    '<tr> ' +
    '<td style="text-align:left">小小小机智</td> ' +
    '<td style="text-align:center">22</td> ' +
    '<td style="text-align:right">看一本机智书</td> ' +
    '</tr> ' +
    '</tbody> ' +
    '</table> ' +
    '<p>宽度过长的表格可以滚动，可在自定义主题中调节宽度：</p> ' +
    '<table> ' +
    '<thead> ' +
    '<tr> ' +
    '<th style="text-align:left">姓名</th> ' +
    '<th style="text-align:center">年龄</th> ' +
    '<th style="text-align:right">工作</th> ' +
    '<th style="text-align:center">邮箱</th> ' +
    '<th style="text-align:center">手机</th> ' +
    '</tr> ' +
    '</thead> ' +
    '<tbody> ' +
    '<tr> ' +
    '<td style="text-align:left">小可爱</td> ' +
    '<td style="text-align:center">18</td> ' +
    '<td style="text-align:right">吃可爱多</td> ' +
    '<td style="text-align:center">lovely@test.com</td> ' +
    '<td style="text-align:center">18812345678</td> ' +
    '</tr> ' +
    '<tr> ' +
    '<td style="text-align:left">小小勇敢</td> ' +
    '<td style="text-align:center">20</td> ' +
    '<td style="text-align:right">爬棵勇敢树</td> ' +
    '<td style="text-align:center">brave@test.com</td> ' +
    '<td style="text-align:center">17712345678</td> ' +
    '</tr> ' +
    '<tr> ' +
    '<td style="text-align:left">小小小机智</td> ' +
    '<td style="text-align:center">22</td> ' +
    '<td style="text-align:right">看一本机智书</td> ' +
    '<td style="text-align:center">smart@test.com</td> ' +
    '<td style="text-align:center">16612345678</td> ' +
    '</tr> ' +
    '</tbody> ' +
    '</table> ' +
    '<h3 id="3-10-">3.10 图片</h3> ' +
    '<p>插入图片，如果是行内图片则无图例，否则有图例，格式如下：</p> ' +
    '<p><img src="https://my-wechat.mdnice.com/wechat.jpg" alt="这里写图片描述"></p> ' +
    '<p>可以通过在图片尾部添加宽度和高度控制图片大小，用法如下：</p> ' +
    '<p><img src="https://my-wechat.mdnice.com/logo.png =150x150" alt="同时设置宽度和高度"></p> ' +
    '<p><img src="https://my-wechat.mdnice.com/logo.png =40%x" alt="只设置宽度，推荐使用百分比"></p> ' +
    '<p>该语法比较特殊，其他 Markdown 编辑器不完全通用。</p> ' +
    '<p>支持 jpg、png、gif、svg 等图片格式，<strong>其中 svg 文件仅可在微信公众平台中使用</strong>，svg 文件示例如下：</p> ' +
    '<p><img src="https://my-wechat.mdnice.com/i-am-svg.svg" alt=""></p> ' +
    '<ul> ' +
    '<li>支持图片<strong>拖拽和截图粘贴</strong>到编辑器中上传，上传时使用当前选择的图床。</li> ' +
    '<li>可使用<strong>格式-&gt;图片</strong>上传本地图片，网站目前支持「图壳」图床，失败率低，但是只可保存一天用于排版</li> ' +
    '</ul> ' +
    '<p><strong>注：仅支持 https 的图片，图片粘贴到微信、知乎或掘金时会自动上传其服务器，不必担心使用上述图床会导致图片丢失</strong>。</p> ' +
    '<p>图片还可以和链接嵌套使用，能够实现推荐卡片的效果，用法如下：</p> ' +
    '<p><a href="https://mp.weixin.qq.com/s/lM808MxUu6tp8zU8SBu3sg"><img src="https://my-wechat.mdnice.com/dance.gif" alt="Markdown Nice 最全功能介绍"></a></p> ' +
    '<h2 id="4-">4. 特殊语法</h2> ' +
    '<h3 id="4-1-">4.1 脚注</h3> ' +
    '<blockquote> ' +
    '<p>支持平台：微信公众号、知乎。</p> ' +
    '</blockquote> ' +
    '<p>脚注与链接的区别如下所示：</p> ' +
    '<pre><code class="lang-markdown">链接：[<span class="hljs-string">文字</span>](<span class="hljs-link">链接</span>) ' +
    '脚注：[<span class="hljs-string">文字</span>](<span class="hljs-link">脚注解释 "脚注名字"</span>) ' +
    '</code></pre> ' +
    '<p>有人认为在<a href="https://en.wikipedia.org/wiki/Front-end_web_development" title="Front-end web development">大前端时代</a>的背景下，移动端开发（Android、IOS）将逐步退出历史舞台。</p> ' +
    '<p><a href="是指掌握多种技能，并能利用多种技能独立完成产品的人。" title="什么是全栈工程师">全栈工程师</a>在业务开发流程中起到了至关重要的作用。</p> ' +
    '<p>脚注内容请拉到最下面观看。</p> ' +
    '<h3 id="4-2-">4.2 代码块</h3> ' +
    '<blockquote> ' +
    '<p>支持平台：微信公众号、知乎。</p> ' +
    '</blockquote> ' +
    '<p>如果在一个行内需要引用代码，只要用反引号引起来就好，如下：</p> ' +
    '<p>Use the <code>printf()</code> function.</p> ' +
    '<p>在需要高亮的代码块的前一行及后一行使用三个反引号，同时<strong>第一行反引号后面表示代码块所使用的语言</strong>，如下：</p> ' +
    '<pre><code class="lang-java"><span class="hljs-comment">// FileName: HelloWorld.java</span> ' +
    '<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">HelloWorld</span> { ' +
    '  <span class="hljs-comment">// Java 入口程序，程序从此入口</span> ' +
    '  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span>(<span class="hljs-params">String[] args</span>) </span>{ ' +
    '    System.<span class="hljs-keyword">out</span>.println(<span class="hljs-string">"Hello,World!"</span>); <span class="hljs-comment">// 向控制台打印一条语句</span> ' +
    '  } ' +
    '} ' +
    '</code></pre> ' +
    '<p>支持以下语言种类：</p> ' +
    '<pre><code>bash ' +
    'clojure，cpp，<span class="hljs-keyword">cs</span>，css ' +
    'dart，dockerfile, diff ' +
    'erlang ' +
    '<span class="hljs-keyword">go</span>，gradle，groovy ' +
    'haskell ' +
    'java，javascript，json，julia ' +
    'kotlin ' +
    'lisp，<span class="hljs-keyword">lua</span> ' +
    'makefile，markdown，matlab ' +
    'objectivec ' +
    '<span class="hljs-keyword">perl</span>，php，<span class="hljs-keyword">python</span> ' +
    'r，<span class="hljs-keyword">ruby</span>，rust ' +
    'scala，<span class="hljs-keyword">shell</span>，sql，swift ' +
    'tex，typescript ' +
    'verilog，vhdl ' +
    'xml ' +
    'yaml ' +
    '</code></pre><p>如果想要更换代码主题，可在上方挑选，不支持代码主题自定义。</p> ' +
    '<p>其中<strong>微信代码主题与微信官方一致</strong>，有以下注意事项：</p> ' +
    '<ul> ' +
    '<li>带行号且不换行，代码大小与官方一致</li> ' +
    '<li>需要在代码块处标志语言，否则无法高亮</li> ' +
    '<li>粘贴到公众号后，用鼠标点代码块内外一次，完成高亮</li> ' +
    '</ul> ' +
    '<p>diff 不能同时和其他语言的高亮同时显示，且需要调整代码主题为微信代码主题以外的代码主题才能看到 diff 效果，使用效果如下:</p> ' +
    '<pre><code class="lang-diff"><span class="hljs-bullet">+ </span>新增项 ' +
    '<span class="hljs-bullet">- </span>删除项 ' +
    '</code></pre> ' +
    '<p><strong>其他主题不带行号，可自定义是否换行，代码大小与当前编辑器一致</strong></p> ' +
    '<h3 id="4-3-">4.3 数学公式</h3> ' +
    '<blockquote> ' +
    '<p>支持平台：微信公众号、知乎。</p> ' +
    '</blockquote> ' +
    '<p>行内公式使用方法，比如这个化学公式：$\\ce{Hg^2+ -&gt;[I-] HgI2 -&gt;[I-] [Hg^{II}I4]^2-}$</p> ' +
    '<p>块公式使用方法如下：</p> ' +
    '<p>$$H(D_2) = -\\left(\\frac{2}{4}\\log_2 \\frac{2}{4} + \\frac{2}{4}\\log_2 \\frac{2}{4}\\right) = 1$$</p> ' +
    '<p>矩阵：</p> ' +
    '<p>$$ ' +
    '  \\begin{pmatrix} ' +
    '  1 &amp; a_1 &amp; a_1^2 &amp; \\cdots &amp; a_1^n \\ ' +
    '  1 &amp; a_2 &amp; a_2^2 &amp; \\cdots &amp; a_2^n \\ ' +
    '  \\vdots &amp; \\vdots &amp; \\vdots &amp; \\ddots &amp; \\vdots \\ ' +
    '  1 &amp; a_m &amp; a_m^2 &amp; \\cdots &amp; a_m^n \\ ' +
    '  \\end{pmatrix} ' +
    '$$</p> ' +
    '<p>公式由于微信不支持，目前的解决方案是转成 svg 放到微信中，无需调整，矢量不失真。</p> ' +
    '<p>目前测试如果公式量过大，在 Chrome 下会存在粘贴后无响应，但是在 Firefox 中始终能够成功。</p> ' +
    '<h3 id="4-4-toc">4.4 TOC</h3> ' +
    '<blockquote> ' +
    '<p>支持平台：微信公众号、知乎。</p> ' +
    '</blockquote> ' +
    '<p>TOC 全称为 Table of Content，列出全部标题。由于示例标题过多，需要使用将下方代码段去除即可。</p> ' +
    '<pre><code>[TOC] ' +
    '</code></pre><p>由于微信只支持到二级列表，本工具仅支持二级标题和三级标题的显示。</p> ' +
    '<h3 id="4-5-">4.5 注音符号</h3> ' +
    '<blockquote> ' +
    '<p>支持平台：微信公众号。</p> ' +
    '</blockquote> ' +
    '<p>支持注音符号，用法如下：</p> ' +
    '<p>Markdown Nice 这么好用，简直是{喜大普奔|hē hē hē hē}呀！</p> ' +
    '<h3 id="4-6-">4.6 横屏滑动幻灯片</h3> ' +
    '<blockquote> ' +
    '<p>支持平台：微信公众号。</p> ' +
    '</blockquote> ' +
    '<p>通过<code>&lt;![](url),![](url)&gt;</code>这种语法设置横屏滑动滑动片，具体用法如下：</p> ' +
    '<p><a href="![蓝1](https://my-wechat.mdnice.com/blue.jpg),![绿2](https://my-wechat.mdnice.com/green.jpg),![红3](https://my-wechat.mdnice.com/red.jpg)">![蓝1](https://my-wechat.mdnice.com/blue.jpg),![绿2](https://my-wechat.mdnice.com/green.jpg),![红3](https://my-wechat.mdnice.com/red.jpg)</a></p> ' +
    '<h2 id="5-">5 其他语法</h2> ' +
    '<h3 id="5-1-html">5.1 HTML</h3> ' +
    '<p>支持原生 HTML 语法，请写内联样式，如下：</p> ' +
    '<p><span style="display:block;text-align:right;color:orangered;">橙色居右</span> ' +
    '<span style="display:block;text-align:center;color:orangered;">橙色居中</span></p> ' +
    '<h3 id="5-2-uml">5.2 UML</h3> ' +
    '<p>不支持，推荐使用开源工具<code>https://draw.io/</code>制作后再导入图片</p> ' +
    '<h3 id="5-3-">5.3 更多文档</h3> ' +
    '<p>更多文档请参考 <a href="https://preview.mdnice.com/articles/" title="更多文档">markdown-nice-docs</a></p> '
}
