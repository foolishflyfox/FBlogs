# HTML入门
前端技术近年来迅猛发展，各种框架、语言、工具层出不穷，让我等刚刚接触前端的小白深深的感觉到以自身有限的精力能否追赶上技术的发展。

使用C++好几年了，所使用的库无非是Qt库、STL等，编程IDE也不过是QtCreator、Visual Studio之类的，而语言更是只有C++一种；而Web开发则完全不同，需要学习的语言有html、css、javascript，库则多了去了，可以说和C++相比差了一个数量级，更别说有各种自动化工具了；

面对如此大体量的技能库，我不止一次地感到迷茫；但我相信，技术的初衷是简单的，所以，技术的核心也应该不会复杂，所以，记录下那些真正关键的、核心的内容，才能达到事半功倍的效果，如果刚开始，就被各种细节特性所牵绊，不仅学的痛苦，也许会学到怀疑人生。

比如刚刚看[makedown新手指南](http://www.jianshu.com/p/q81RER/),比我以前看的教程简单很多，总结来说就是以下几点：
>- \# &nbsp;用于标记标题<br><br>
>- \- &nbsp;用于标记无序列表；<br/>n.&nbsp;用于标记有序列表，n为1、2、... 的数字；<br><br>
>- \[文字说明\]\(超链接\) &nbsp;用于表示普通链接;<br>\!\[缺图时的说明\]\(图片\)用于链接图片；<br><br>
>- \>用于表示引用；<br><br>
>- \*XXX\* 使XXX斜体显示<br>
\*\*XXX\*\* 使XXX粗体显示；<br><br>
>- \`\`\`代码引用\`\`\` <br><br>
>-  所有以上所用到的符号如果希望原码显示，直接在其前面添加换行符 \\;

其实，掌握了上述语法，能够编写大多数的文档，根据二八法则，大概前端中80%的技能应该是不常用的，对我们构建整个Web开发技能树影响不大的，那为何要让自己纠结于80%的“鸡肋”功能之上呢，我们完全可以在完成技能树的构建之后，慢慢去消化那80%的知识体系；

## html的作用
在学一个技能之前，我们要明白为什么需要这个技能，它与其上下游技能之间的关系是什么，没有这个技能我们该使用这样的手段来替代该技能，该技能与其相似技能的关系等问题；

html用于页面界面的设计；

它与css、javascript用造房子进行比喻，相当于html是最基础的一个个房间，以及房间内的物品；css相当于这些房间、物品的装饰，通过涂上颜色、修改尺寸，让它们变得更加美观；javascript相当于为这些物品实现智能化，你通过按一个按钮，就能让房间的颜色改变，或者为您拉开窗帘；

## html文件的组成
html文件主要由两大块，head和body，head用于引入css、js文件，定义网页标签名，定义编码方式、语言、网页过期时间、刷新频率等等。

东西够多吧，其实对于初学者来说，很多都是现阶段不需要掌握的，其实需要记住的就两个。一个是<i>&lt;item&gt; title&lt;item&gt;</i>，用于设置网页名称，一个是<i>\<meta charset='utf-8'\></i>，用于保证你的页面不显示乱码，其他的内容，等以后真正用到再学也不迟；

鄙人认为，学习的知识是拿来用的，只用经常用的知识，才能深深地嵌入脑海中，也才是对你来说有用的知识，而有的知识，比如github的使用、linux命令行的各种命令等，如果你不用，或者一个月用个一次，感觉学习效果将大大大地打折扣；

## html标签的分类
出处：[HTML文档标签](https://segmentfault.com/a/1190000003826215)

> ###1. HTML文档标签
> - `<!DOCTYPE&gt> :` 定义文档类型；<br><br>
> - `html :` 定义HTML文档；<br><br>
> - `head :` 定义文档头部；主要包括以下内容：<br>
> 1). &nbsp; meta：定义页面的元信息，如关键字、描述、刷新频率、过期时间；<br>
> 2). &nbsp; base：定义基url，eg. &lt;base href="http://www.google.com"&gt;则网页中所有的相对url都以该base url为起始位置，#即表示该url；<br>
> 3). title：文档标题；<br>
> 4). link：外部资源链接；<br>
> 5). style：内部样式；<br><br>
> - `body : `定义文档主体<br>
> 1). script ： 定义客户端脚本；如Javascript；<br>
> 2). noscript : noscript填写的是普通文本，当script中的代码不起作用时，则noscript中的文本将被显示；<br>
*<font color="grey">其实script并不一定放置在body中，例如对外部js文件的引用就通常放在head中；</font>*
> ###2.布局标签&语义化
> - `div : `块级元素，作为容器，可通过css为其修饰；
> - `span : `行内元素；
> - `header : `页眉，语义化的div；
> - `hgroup : `定义标题组；
> - `nav : `定义导航，语义化的div；
> - `article : `文章，语义化的div；
> - `section : `区段，语义化的div；
> - `aside : `与article相关，但不属于article的内容，语义化的div；
> - `footer : `页脚，语义化的div；
> - `details : `其中包含summary，表示可见部分；其他元素在details中不可见；目前仅chrome、safari支持；
> - `summary : `作为details的可见子元素；
> - `dialog : `定义对话框或窗口；
<br><br>
> *<font color="grey">语义化的div是指，在html5中，为了使整个页面的逻辑更加清晰，而将div定义为多个类型，但对页面的表现形式没有影响；</font>*
> ###3. 表格标签
> - `table : `定义表格；
> - `thead : `定义表格头，在该标签内的元素将被放在表格首行；
> - `tbody : `定义主体；
> - `caption : `定义表格名，显示在表格上方正中间；
> - `tr : `定义一行；
> - `th : `定义表头，字体将被加粗；
> - `td : `定义单元格数据；
> - `tfoot : `定义页脚，在该标签内的元素将被放在表格最底行；
> ### 4.表单标签
> - `form : `表单定义;<br>
*<font color='grey'>对表单进行提交时，浏览器将收集对应表单中存在name的输入表单控件，name和value值形成name/value键值对提交给后端，其中没有name的控件将不被提交；若存在多个submit按钮，只有被按的name/value对会被提交；<br>如果是以GET方式提交，键值对将被放在URL中，如果以POST方式提交，键值对将被放在http数据包中；例如“中国科学”4个字对应的url为:<br>
**“%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6”<br>**
则其无论通过get或post传送，都需要传送的字节数为36byte，故通过表单提交汉字的效率非常低；
</font>*<br><br>
> - `input : `定义输入域；其type有以下几种：<br>
> 1. text: 普通的单行文本框；
> 1. password: 密码域；
> 1. button: 普通按钮；
> 1. checkbox: 多选框；
> 1. radio: 单选框；多个相同name的单元框为一组，一组中只有一个被选中；
> - `textarea : `多行文本框；
> - `label : `标签，其for属性指定label所绑定的控件id号，当点击该label时，相当于点击了指定id的控件；
> - `fieldset : `将多个元素组合在一个框中，框的名称通过legend标签指定；
> - `select : `下拉列表框，其中的option标签用于指定下拉列表的项；
> - `option : `下拉列表的项；
> - `optgroup : `用于对下拉列表框的选项进行归类；
> - `button : `按钮；
> - `keygen : `定义表单的密钥对生成器字段；
> - `output : `定义不同类型的输出；
> <br><br>
>
> *注：&lt;input type='button'&gt;与&lt;button&gt;的区别：*
> 1. input是个自闭合标签，而button是个闭合标签；闭合标签可以作为容器放置其他页面元素，而自闭合标签不可以；<br><br>
> 2. input类型的button，其value属性就是要显示的内容，而button实现了value属性和显示内容的分离；<br><br>
> 3. input的按钮可以有button和submit两种type，而button可以有的reset和submit两种type；
> 4. &lt;input type="submit" value="Key1" name="submit1" &gt;和&lt;button type="submit" value="Key1" name="submit1" &gt; Key1 &lt;/button&gt;是等效的；<br><br>
>
> *注：元素的id属性和name属性的区别*<br>
> 1. 通常来说name属性与后台相关，http协议封装的键值对信息中，键通常就是对应表单元素的name；id属性与前端相关，css通过id进行精确定位,javascript代码也可以通过id操作控件；
> 2. 多个控件的name属性可以相同，而id号不允许相同，经过测试，在chrome浏览器上，多个相同id的元素对css的渲染没有影响，对js代码不会报错，但只对第一个该id的控件进行操作；
> ###5. 列表标签
> - `ul :`无序列表，Unordered List；
> - `ol :`有序列表，Ordered List；
> - `li :`列表项，List Item；
> - `dl :`定义列表，Define List，其中每一条定义都由dt和dd组成；
> - `dt :`定义项名称，Define iTem；
> - `dd :`定义解释，Define Description；
> ### 6. 图像标签&连接标签
> - `img :`定义图片，alt属性为图片资源不存在时显示的文字内容；
> - `a :`定义超链接；
> - `map :`定义一幅图片的热区，使该热区变得可点击，img与map的绑定通过img的usemap属性完成，热区通过map中的area指定；
> - `area :`指定img中的热区及对应的点击动作；
> - `figure :`定义媒介内容的分组；
> - `figcaption :`定义figure元素的标题；
> ### 7. 音频&视频
> - `audio :`引入音频内容；
> - `video :`引入视频内容；
> - `source :`用于audio或video中，为音频/视频提供多种格式的源，浏览器工具source提供的type属性自动选择一个可以解析的源；
> - `track :`定义用在马蹄播放器中的文本轨道；
> ### 8. 框架标签



[查看转义字符表](http://tool.oschina.net/commons?type=2)
