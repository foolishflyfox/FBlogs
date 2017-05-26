
# CSS入门

## CSS概述

## 一个比喻

Html页面像一幅大画，这幅大画里面有很多的小画，为了让用户产生良好的用户体验，也就是说让这幅大画看起来赏心悦目，我们需要将大画里面的元素(小画)进行布局，再裱上优雅的边框，加上漂亮的背景就可以“出售”了，而每个小画所做的工作也像大画一样，把自己的布局、边框、背景搞定就可以了，如此，一幅佳作就此诞生；

从上述过程来看，无论是整体html页面的样式定义还是每个html元素的样式定义，都不过相同的3个步骤--布局、边框样式、背景；


css属性的一般命名规则：`被修饰对象[-位置]-具体属性`

解释：

- *“被修饰对象”* 比如border、background、font、margin等；

- *“位置”* 可以取top、right、bottom、left,"位置"可以被省略，例如background、font等就不能被指定位置，而border、margin也可以不指定位置，表示4个方向都适用；

- *"具体属性"* 有比如color、width、size等；

按照上述规则，可以举出以下一些属性的例子：padding-top、border-top-color、border-width、font-family、background-image等等；

还有很多草案版的css属性会添加浏览器属性，如-o、-webkit、-moz、-ms等，具体原因请看：[通俗讲css的浏览器前缀](http://www.jianshu.com/p/dcf63915f70d)
