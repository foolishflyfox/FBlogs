# JavaScript实现

一个完整的JavaScript实现应该由以下3个不同的部分组成；
- ECMAScript：核心，提供核心语言功能；
- 文档对象模型（DOM）：提供访问和操作网页内容的方法和接口；
- 浏览器对象模型（BOM）：提供与浏览器交互的方法和接口；

**注意：带有src属性的&lt;script&gt;元素不应该在其 &lt;script&gt; 和 &lt;/script&gt; 标签之间再包含额外的JavaScript代码；如果包含了嵌入的代码，则只会下载并执行外部脚本文件，嵌入的代码将会被忽略！**

按照惯例，所有的&lt;script&gt;元素都应该放在页面&lt;head&gt;元素中；这种做法的目的是把所有外部文件（包括CSS文件和JavaScript文件）的引用都放在相同的地方；

可是在文档的&lt;head&gt;元素中包含所有javascript文件，意味着必须等到全部的javascript代码都被下载、解析和执行完成后，才能开始出现页面的内容（*浏览器在遇到&lt;body&gt;标签时才开始呈现内容*），这将导致浏览器在呈现页面时出现明显的延迟，而延迟期间的浏览器窗口将是一片空白；

**为了避免这个问题，现代Web应用程序一般都把全部JavaScript引用放在&lt;body&gt;元素中页面内容的后面；**

## script标签的defer属性

这个属性的用途是表明脚本在执行时不会影响页面的构造，即*添加了defer属性后，script的代码将会被立即下载，但是会延迟执行*，如

```html
<script type="text/javascript" defer="defer" src="example.js"></script>
```

文件 *example.js* 中的代码将会被延迟到浏览器遇到&lt;/html&gt;后才执行；

**html5中规定，defer属性只使用于外部脚本文件；**

## script标签的async属性

这个属性与defer类似，都用于改变处理脚本的行为，只适用于外部脚本文件；

指定async属性的目的是不让页面等待两个脚本下载和执行，从而异步加载页面其他内容，为此，建议异步脚本不要在加载期间修改DOM；

使用外部文件引入javascript代码的优点：
1. 可维护性：开发人员可以在不触及HTML标记的情况下，集中精力编辑JavaScript代码；
2. 可缓存：浏览器能够根据具体的设置缓存链接的所有外部JavaScript文件，即如果有两个页面都使用同一个文件，那么这个文件只需要下载一次；
3. 适应未来

EcmaScript标识符推荐采用驼峰命名法，eg. firstStudent，getValue；

EcmaScript的注释：
1. // 单行注释
2. /\*<br>\* 这是一个多行<br>\*（块级）注释<br>\*/<br>
第2、3行的第一个星号不是必须的，仅仅是为了提高注释的可读性（这种格式在企业级应用程序中极为常见）；

要在整个脚本中启用严格模式，可以在顶部添加：
```javascript
"use strict"
```
这行代码本质上是一个编译指示(pragma)，用于告诉支持的JavaScript引擎切换到严格模式；

也可以在函数内部的上方包含这条编译指示，实现在指定函数中以严格模式执行：
```javascript
function foo(){
    "use strict"
    ... ...
}
```

javascript与C语言的差异：
1. js标识符的首字母可以是 `$` 符；其他字符也可以是 `$` 符；
2. js语句结尾的分号不是必需的，但建议不要省略它； 

我们可以修改变量所保存值的类型，但这种操作并不被推荐；

EcmaScript的5中基本数据类型：
1. Number
2. Boolean
3. String
4. Undefined
5. Null

## typeof操作符的返回值

和在c用于中的sizeof一样，typeof可以加括号，也可以不加括号，即 `typeof a` 等价于 `typeof(a)` ;

typeof的返回字符串可以为下列某个字符串：
- undefined : 表示变量值未定义；
- boolean : 表示变量值为布尔类型；
- string : 表示变量值为字符串；
- number : 表示变量值为数值；
- function : 表示变量值为一个函数；
- object : 表示变量值为对象或null；

### undefined

*在使用var声明变量但未对其加以初始化时，这个变量的值就是undefined；*

对于未初试化的变量和未声明的变量使用typeof都将返回‘undefined’ :
```javascript
var a;
console.log(typeof a); //显示undefined
console.log(typeof b); //显示undefined
```
当时使用时将会出现差别，如：
```javascript
var a;
console.log(a); //显示undefined
console.log(b); //弹出ReferenceError异常
```

### null

*特殊值null被认为是一个空的对象引用；*

null类型是第二个只有一个值的数据类型；如果定义的变量准备在将来用于保存对象，那么最好将该变量初始化为null而不是其他值；

**undefined值是派生自null的值，eg：**
```javascript
console.log(null==undefined); //显示true
```

### Boolean类型

Boolean类型是ECMAScript中 **使用最多** 的一种类型，该类型只有两个字面量： `true` 和 `false` ；

**虽然Boolean类型的字面量只有两个，但ECMAScript中所有类型的值都有与这两个Boolean等价的值；要将一个值转换为其对应的Boolean值，可以调用转型函数Boolean();**

|数据类型|转换为true的值|转换位false的值|
|-|-|-|
|Boolean|true|false|
|String|任何非空字符串|""(空字符串)|
|Number|任何非0值|0|
|Object|任何对象|null|
|Undefined|---|undefined|

### Number类型

```javascript
    var intNum = 55;    //定义十进制数值
    var octalNum = 067; //定义八进制数值
    var hexNum = 0x37;  //定义十六进制数值
```

在ECMAScript中，数值还是以二进制形式存在的：

```javascript
console.log(0.1+0.2==0.3); //返回false
```

上述比较所存在的问题是IEEE754编码的浮点数所存在的通病；

**永远通过 == 测试某个特定的浮点数值**

由于内存的限制，ECMAScript所能够表示的最小数值为 *Number.MIN_VALUE* ，所能表示的最大数值为 *Number.MAX_VALUE* ；

如果超出了最大值/最小值，则该数值将被自动转换成特殊的Infinity值，如大于Number.MAX_VALUE，则会被转换成Infinity(正无穷)，如果小于Number.MIN_VALUE，则会被转换成-Infinity; 

+Infinity等于Number.POSITIVE_INFINITY，

-Infinity等于Number.NEGATIVE_INFINITY；

如果某次计算返回了Infinity值，那么该值将无法继续参与下一次的计算；

可以通过函数 `isFinite()` 函数确定该函数是否有穷；

`NaN`：表示一个本来要返回数值的操作数未返回数值的情况；

NaN与任何值都不相等，所以 `NaN==NaN` 返回false；

可以通过isNaN函数测试数值是否为NaN；

有3个函数可以把非数值转换为数值：
- Number函数：可以用于任何数据类型；

|类型|Number()|
|-|-|
|Boolean|true=>1,false=>0|
|Number|不变|
|undefined|NaN|
|null|0|
|string|可以转换dec、hex字符串|

空字符串被转换为0；

Number函数在转换字符串时，比较复杂而且不够合理，因此，在处理整数时候，更常用的是parseInt;

- parseInt(字符串)

parseInt会忽略字符串前面的空格，直到找到第一个非空格字符；如果第一个字符不是数字字符或负号，它会返回NaN；解析过程中遇到非数字字符，将会停止解析，并返回解析成功的数值；eg.
|语句|结果|
|-|-|
|parseInt("123red")|123|
|parseInt("")|NaN|
|parseInt("0xA")|10|
|parseInt("22.5")|22|

ECMAScript5中parseInt已经默认不具有解析八进制的能力，因此前导的0会被认为无效；可以通过设置第二个参数设置所要解析的字符串基数；如 `parseInt("10",8)` 的结果为8；`parseInt("10010",2)` 的结果为18；

为了避免错误的解析，建议无论什么情况下都明确指定基数；

- parseFloat(字符串)

将字符串解析为一个小数，该函数值解析十进制数值，所以第二个参数对parseFloat无效；

将一个值转换为一个字符串的两种方式：

- toString() : 多数情况下，调用toString方法不需要传递参数，但是，在调用数值的toString方法时，可以传递一个参数，用以指定数值的基数；

- String() ：该函数遵循以下转换规则：

1、如果值有toString()方法，调用该方法的无参数形式，并返回相应的结果；

2、如果值是null，返回null；

3、如果值是undefined，返回undefined；

### object类型

Object类型是所有它的实例的基础；Object的每个实例都有下列属性和方法：

- Constructor : 保存这用于创建当前对象的函数；
- hasOwnProperty(propertyName) : 用于检查给定的属性在当前对象实例中(而不是实例的原型中)是否存在；
- isPrototypeOf(object) : 用于检查传入的对象是否是另一个对象的原型；
- propertyIsEnumberable(propertyName) : 用于检测指定的属性是否能够使用for-in语句进行枚举；
- toString() : 返回对象的字符串表示；
- valueOf() : 返回对象的字符串、数值或布尔值，通常与toString()方法的返回值相同；

### javascript的运算

- `>>>` : 无符号右移；
- `<<<` : 无符号左移；

### javascript的比较运算

`==` ： 相等，会在进行比较之前进行变量值转换，转换之后进行比较，例如 `"55"==55` 会先将 `"55"` 转换为 `55`,比较结果为true；

`===` : 全等，比较之间不进行类型转换，所以，如果两个类型不相同的变量进行比较，其返回必为false，故`"55"===55` 将返回false；

*由于相等和不相等操作符存在类型转换问题，而为了保持代码中数值类型的完整性，我们推荐使用全等和不全等操作符。*

### javascript的语句

#### for-in语句

`for-in`语句是一种精准的迭代语句，可以用来枚举对象的属性，*for-in* 的语法为：
```javascript
for (property in expression) statement
```
ECMAScript对象的属性没有顺序，因此，通过for-in循环输出的属性名的顺序是不可预测的；

#### label语句

label语句的语法为：
```
label:statement
```

通过设定label，可以在 `break` 或 `continue` 语句中引用该lable；

**加标签的语句一般都要与for语句等循环语句配合使用；**

两个例子

break lable demo：
```javascript
var num = 0;
outerloop:
for(let i=0;i<10;++i){
    for(let j=0;j<10;++j){
        if(i==5 && j==5){
            break outerloop;
        }   
        ++num;
    }   
}

console.log(num);
```
结果：55

continue lable demo:
```javascript
var num = 0;
outerloop:
for(let i=0;i<10;++i){
    for(let j=0;j<10;++j){
        if(i==5 && j==5){
            continue outerloop;
        }
        ++num;
    }   
}

console.log(num);
```
结果：95

#### with语句

`with`的作用是将代码的作用域设置到一个特定的对象中。with的语法为：
```javascript
with(expression)statement;
```

*严格模式下不允许使用with语句*

*由于大量使用with语句会导致性能下降，同时，也会给调试造成困难，所以，在开发大型应用时，不建议使用with语句；*


#### switch语句

ECMAScript中的switch语句与c语言中的switch语句非常类似，但是要注意两点：

1. ECMAScript中的case后可以跟变量或表达式；
2. ECMAScript中的switch执行的是全等比较(===)而非相等比较(==);
