#通俗讲css的浏览器前缀

### 为何对于有的css属性要加上-webkit、-o等前缀
例如：
```
div
{
  -webkit-border-image:url(border.png) 30 30 round; /* Safari 5 */
  -o-border-image:url(border.png) 30 30 round; /* Opera */
  border-image:url(border.png) 30 30 round;
}
```
解释：这些前缀称为浏览器引擎前缀(vendor prefix)，这些前缀是为了实现浏览器兼容；很抽象是吧，举个具体的栗子吧：</br></br>
w3c说css中要加个font-color属性，用于指定文本的边框颜色，**但是** ,这个font-color属性目前只是个草案噢，能不能成为标准还不一定;<br><br>
浏览器A老实巴交的在渲染器中实现了该功能，而浏览器B比较狡猾，不实现font-color属性，而实现了B-font-color属性，公司X通过了解后写了以下代码：
```
#mytext{
  B-font-color:red; /*在B浏览器中文字显示红色边框*/
  font-color:red; /*在A浏览器中文字显示红色边框*/  
}
```
写好以后，前端开发和浏览器厂商都很happy啊，不错，达到了预期目的；就这样平安无事的过了n年；<br><br>
n年后，w3c认为，在草案中将font-color设为文字的边框不合理，所以最终的标准将font-color设为了文字的颜色；既然成为标准了，那么，以后的前端程序员和浏览器都必须按标准来;<br><br>
浏览器B不紧不慢的在其渲染引擎中添加了font-color属性，而A就有点尴尬了，已经实现了了font-color功能，怎么办，只能改呗，A就对外宣布，以后font-color属性不再代表文字边框颜色，改为字体颜色；<br><br>
这一改，公司X不干了，说好的边框红色，怎么在A上运行时给我去掉了，严重影响了我界面的美观，谴责！从此，A浏览器渐渐衰弱下去；<br><br>
你也可能说，不对啊，由于w3c新标准的发布，B的字体颜色也变了啊，为啥不谴责它呢，这是因为B没有去掉X公司原来有的样式，只是按照标准增加了效果，而这由于新标准带来的影响，你X公司要谴责就谴责w3c去，谁叫他不一开始就出台标准，而弄个草案呢,B窃喜，反正没我责任；<br><br>
由此可见，浏览器前缀是浏览器厂商为了尽快实现草案中的内容，又为了以后的草案标准化而耍的“小聪明”；

### 为何要把不带前缀的属性写在最后
这是因为css属性具有后面属性覆盖前面属性的特性，例如：
```
  #mytext{
    background:red;
    background:green; /*mytext的绿色背景将覆盖红色背景*/
  }
```
用户在草案期编写的代码，在w3c确定标准后，就能以最后的不带前缀的属性覆盖所有前面冲突的属性，实现自动的向标准看齐的作用；

### 常用的前缀列表
|前缀名称|浏览器内核|浏览器|
|-|-|-|
|-webkit|Webkit|Chrome、Safari|
|-moz|Gecko|Firefox|
|-o|Presto|Opera|
|-ms|Trident|IE|

想了解浏览器内核的发展，请看--[全面了解浏览器内核发展史](http://www.jianshu.com/p/db1b230e3415)。
