
# CSS 内容梳理

## CSS概述

### 一个比喻

Html页面像一幅大画，这幅大画里面有很多的小画，为了让用户产生良好的用户体验，也就是说让这幅大画看起来赏心悦目，我们需要将大画里面的元素(小画)进行布局，再裱上优雅的边框，加上漂亮的背景就可以“出售”了，而每个小画所做的工作也像大画一样，把自己的布局、边框、背景搞定就可以了，如此，一幅佳作就此诞生；

从上述过程来看，无论是整体html页面的样式定义还是每个html元素的样式定义，都不过相同的3个步骤--布局、边框样式、背景；

## CSS样式的3种引入方式

将CSS引入Html中有3种方式，分别是：

1. 在html标签元素中通过style属性嵌入css样式，该方式引入的css样式只作用于该标签及其子元素，eg.
```html
  <p style="color:blue;">
    This is a paragraph.
  </p>
```

2. 在html的head部分插入style标签，该方式引入的css样式作用于本html文件所有元素，eg.
```html
  <!DOCTYPE>
  <head>
    <style type="text/css">
      p {color:"blue";}
    </style>
  </head>
```

3. 在html的head部分通过link标签引入后缀为css的样式文件，该方式引入的css样式作用于本html文件所有元素，eg.
```html
<link rel="stylesheet" href="/css/master.css">
```

在3种引入css代码的方法中，第一种方法将css代码和html代码混在一起，如果需要修改某个元素的样式属性，不得不到html代码中去找，而如果html很多的话，将会严重影响工作效率，而且由于样式只作用于一个元素，对于多个元素需要设置相同的样式属性，将不得不写多遍相同的css样式，工作效率更低了，所以，第一种引入css样式的方式并不多见；

相对来说，第二和第三种方式引入css样式更为常见，但是，这就出现了一个问题，全局css作用于整个html文档，那么任何通过css指定作用于哪个元素呢？这就需要我们的CSS选择器上场了；

## CSS选择器

如果拿造房子做比喻的话，html就是定义一个个房间(毛坯房)，以及房间内的床、桌子等家具，而CSS就相当与对这些东西进行装饰，让它们变得更优雅美观；

而要对这些部件进行装饰，首先要选中它们，不然，如果“席梦思”的装饰用在桌子上就变得张冠李戴了，而CSS选择器就是用于对这些部件进行选择，具体的请看 [CSS选择器知识梳理](http://www.jianshu.com/p/273a2d233e91)；

## CSS内容结构图

## CSS属性的命名
css属性的一般命名规则：`被修饰对象[-位置]-具体属性`

解释：

- *“被修饰对象”* 比如border、background、font、margin等；

- *“位置”* 可以取top、right、bottom、left,"位置"可以被省略，例如background、font等就不能被指定位置，而border、margin也可以不指定位置，表示4个方向都适用；

- *"具体属性"* 有比如color、width、size等；

按照上述规则，可以举出以下一些属性的例子：padding-top、border-top-color、border-width、font-family、background-image等等；

还有很多草案版的css属性会添加浏览器属性，如-o、-webkit、-moz、-ms等，具体原因请看：[通俗讲css的浏览器前缀](http://www.jianshu.com/p/dcf63915f70d)
