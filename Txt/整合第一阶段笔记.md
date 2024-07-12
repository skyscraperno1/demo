# 1025D1笔记

## 列表标签

```html
<ul>
   <li></li>
   <li></li>    
   <li></li>    
</ul>
↑无序列表
<ol type='square'> | <ol type='none'>
    <li></li>
     <li></li>
</ol>
↑有序列表
```

```html
<img src='路径' alt='替代文字' width='宽度' height='高度' title='鼠标摸上去显示的文字'>
```

##### 绝对路径：从协议、盘符出发得到的路径。

##### 相对路径：从当前文件出发，得到的路径。

###### 同级 直呼其名

###### 上级 ../

###### 下级 /谁



#### 就业老师作业：

##### 通过理性思考——

##### 1.去招聘网站搜索前端工程师 有多少个岗位，目标点在哪

##### 2.准备一个PPT 15min 能够给别人带来什么帮助

# 1025D2笔记

### 网页中无非就是三种效果

#### 清水房子的三个部分：清水房，装修，通水通电

#### 前端：我们看到的界面（通过HTML搭建结构，CSS实现外观样式，JS实现交互效果的过程，就是前端）

#### 结构+外观样式+交互效果（动态效果）

### 

### 应用

*网页（企业站 商城）

*小程序

*APP MUI Hbuilder 10min可之内可以做好一个APP 其实1min就可以写完

*小游戏

*Flash（现在没有谁用这个东西）|数据可视化|3D（旋转相册等等）

 

只要你能看到界面的地方，都能用前端做



## 1.HTML：超文本标记语言 Hypertext Markup Language 在网页中显示结构的

##### 文本？除了文字之外 什么都不行

##### 超文本：比文本更厉害，能够做到文本不能做到的事情

##### 标记：是一种标记符，形如<b></b>



##### HTML5:代指所有前端的总称 & HTML的最近版本



## 2.web的组成

##### W3C制定了HTML和CSS的语法标准；ECMA制定了JS行为标准

###### W3C：万维网联盟 World Wide Web Consortium

###### 是一个中立的飞行理性的公益性组织（这个组织主要是制定）

###### ECMA：欧洲电脑厂商联合会（European Computer Manufacture Association）

###### WHATWG：网页超文本应用技术工作小组（Web Hypertext Application Technology Working Group）

###### XHTML：可扩展的HTML Extensible

###### 1999 HTML 4.01是最经典的版本



## 3.命名规则

###### 名字应该由数字、字母、下划线构成，不能数字开头！

###### 名字应该用对应内容的英文表示

###### 使用驼峰命名



## 4.HTML语法

###### HTML文件以 ---.HTML为后缀的文件

###### 英文输入法下 ! + Enter 快速生成基本结构

###### 语法：

###### <开始标签 属性='属性值' 属性='属性值' 属性='属性值' 属性='属性值'></结束标签>

###### 双标签

###### 单标签——自闭合标签（空标记、空标签）



## 5.常用的标签

##### 基础标签

###### 1.标题h1~h6文字逐渐变小，强调程度一次降低（自带加粗效果）

###### 2.段落<p></p>段落的段尾会有一个很大的空行。

###### 3.换行<br>

###### 4.加粗有<b></b>   <strong></strong> 我们推荐使用strong，因为朗读时会强调

###### 5.倾斜有<i></i> <em></em>推荐使用em

###### 6.变大有<big> 变小有<small> 注意：不能小于浏览器所支持的最小字体模型 12px

###### <sup>上标 superscript text

###### <sub>下标 subscript text

###### &emsp； 大空格 两个字符大小

###### &nbsp； 小空格 3分之1个字符大小

###### &copy； 版权

###### &reg；  商标

# 10.27D2笔记

## 1.超链接：从一个位置跳转到另一个位置 a=Anchor 锚

#### 外部链接

#### 内部链接

#### 锚点链接

#### 链接的语法 

```html
<a href="https://www.jd.com" target="_self">当前页面打开</a>  （默认）
<a href="https://www.jd.com" target="_blank">新的标签页打开</a>
```

## 2.div标签：布局标签（排版）

### 标签本身不会让元素有任何特殊样式，只是为了后期做样式而存在的标签

```html
<div>内容</div>   这个独占整行，要换行
<span>内容</span>   这个内容有多宽它就只占多宽
```

##### 只有一种情况用span标签——在一行文字中有某些文字有特殊效果的时候用span（想要组合行内标签）

##### 【面试题】区分块级标签（独占一整行）和行级标签（有多宽占多宽），块级标签可以设置宽高是一个<u>完整的盒子</u>，行级标签不行。

## 3.基础表格

#### 基础语法table 里面tr td如下：

```html
<table border='1' cellspacing='0' cellpadding='10'>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
 快捷方式：table>tr*行数>td{这个是什么}*列数 
```

#### 合并单元格

##### 一般合并会选择最左上的单元格合并单元格【colspan跨列 横起合并；rowspan跨行 竖起合并】

```html
<table>
    <tr>
        <td rowspan='*' colspan='*'>单元格</td>
    </tr>
</table>
```



## 4.表单和CSS基础(重要)

#### 什么是表单：网页中负责数据采集功能的部分

##### 表单标签：负责数据提交的地址和方式

```html
<form action='数据提交的地址' method='get|post'>

</form>
```

##### 表单域：数据填入的部分

```html
<input type='text|password|radio|checkbox' name='username' placeholder='这是提示文字'>
```

###### text 文本输入框

###### password 密码输入框

###### radio 单选 【同一单选的name属性值要一致】

###### checkbox 复选

###### name 对于单选而言，它是分组的标识/

###### placeholder 占位符

##### 表单按钮：提交按钮、重置按钮、普通按钮(除去提交、重置的所有按钮)。

```html
<button type='submit|reset|button'>点我</button>
```

###### submit 提交按钮：提交数据到后端

###### reset 重置按钮：刷新当前表单

###### button 普通按钮：什么都能干

##### 负责完成对应的事件的。【面试题】get和post的区别：如果没有特殊设置get能够传送2kb，post能够传送4M的数据。但是get追加到地址栏，小快不安全。

## 5.css：层叠样式表 Cascading Style Sheets——实现样式（css3）

 语法

​     选择器{(这里面也叫声明)

​                   属性：属性值；

​                   属性：属性值；

}

##### 优点：

###### 1.css样式可以实现页面的精确控制

###### 2.css样式实现了内容与样式的分离，利于团队开发

###### 3.提高加载速度

### a.css的三种引入方式

#### 1.内联式（行内样式）

  <元素 style='属性:属性值;属性:属性值;'>   内容</元素>

设置文字颜色的属性：color：颜色；

设置文字大小的属性 font-size：*px；

#### 2.内部式

 在head标签里面添加一个style标签，

在style标签里面写按照css基本语法写css代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>css内部式</title>
    <style>
         （选择器）div{
        font-size:40px;
        color:skyblue;
    }
    </style>
</head>
   <body>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
   </body>  
</html>
```

#### 3.外链式（最推荐使用）

##### 1.先建一个以.css为后缀的文件

##### 2.在html文件的head标签里面添加一个link标签，在link标签的href属性里面写上对应css的文件路径

##### 3.在css文件里面按照css基本语法写css

```html
<head>
     ...
     <link rel='stylesheet（关联样式表）' href='css文件路径'>
</head>
```

```css
选择器{
    属性:属性值;
    属性:属性值;
    属性:属性值;
}
```

# 10.28D3笔记

## 1.选择器（匹配模式）

##### 1.*表示选中所有人。通配符、通用选择器

##### 2.选中所有对应的标签。标签选择器 元素选择器

##### 3.选中所有有对应类名的标签。类选择器（类名是通过给元素设置class属性得到的）

##### 4.选中对应id名的标签。id选择器

##### 注意：id名是唯一的，不可替代的。类名是可以重复的，且一个元素可以有多个类名。id的优先级更高； 一般给页面中大盒子使用id名，盒子里面的元素使用类名。

```html
<head>
    ...
    <!-- 通配符 -->
     *{
    color:gold;
    }
   <!-- 标签选择器 -->
    p{
     font-size:40px;
    }
    <!-- 类选择器 -->
    .moumou{
    color:skyblue;
    }
    <!-- id择器 -->
    #p{
    font-size:80px;
    }
</head>
<body>
    <P>
        这是一个p
    </P>
   <div class='moumou'>
       这是一个div
    </div>
    <div id='p'> 
        这是另一个div
    </div>
</body>
```

## 2.css的盒子模型

##### 概念：是一种思维模型，主要用于布局。

##### 组成：尺寸、大小、内边距、外边距、边框。

### 1.尺寸

##### 设置宽度 width: 多少px |多少%; [%是父元素宽度的百分比]

##### 设置高度 height: 多少px |多少%; [%是父元素高度的百分比] (一般很少设置高度百分比)

### 2.内边距：盒子边框和它的内容之间的间隔

###### padding-top:*px;

###### padding-left:*px;

###### padding-bottom:*px;

###### padding-right:*px;

###### padding（复合属性）:上出发，顺时针旋转，有缺省，取对边。（设置四个方向的内边距。padding的值可以有1-4个）

###### 注意：padding会撑大外面的盒子。

### 3.外边距：盒子边框和之外的元素之间的间隔

###### margin  参见padding写法

##### <u>a.外边距的问题（bug） 父随子动，margin的粘连问题。</u>

###### 1.父子关系才会发生

###### 2.只在垂直方向会发生

##### 解决方案

###### 1.用padding替代 【记得修改高度】 所以可内可外一般用内边距

###### 2.给父亲触发一个overflow:hidden 触发一个bfc、给父亲或者孩子加float（两个在不同的平行世界）

###### 3.给父亲加边框（上边框） 引入知识点：transparent、

##### <u>b.margin的塌陷问题（同级兄弟关系出现）</u>

###### 在一个元素身上设置足够的间隔

##### <u>c.margin可以为负值，padding不可以</u>

##### <u>d.不同元素在不同的浏览器里面默认有不一样的内外边距。</u>

###### 处理方式

```css
*{
    margin:0;
    padding:0;
}
```



### 4.边框（三个方面）

#### 1.宽度

#### 2.实线虚线 solid实线 dashed虚线 dotted点线 double双线

#### 3.颜色

```css
box{
    border:10px solid skyblue;
}
或者
box{border-width：10px;
border-style:solid;
border-color:skyblue
}
```

##### <u>注意：单个和复合一起使用的，复合属性在前，单个在后。先做一般的，再做特殊的。</u>

### 5.盒子水平居中于父元素

```css
<style>
元素{
    margin:0 auto;
}
</style>
```

### 6.浮动：让元素横着排列

```html
float:left | right |
```

##### 补充【面试题】行级元素不是一个完整的盒子模型。垂直方向的内外边距，长宽高都不能设置。

# 1029D4笔记

## 1.【面试题】优先级判定规则：当样式冲突的时候，判定标准

##### 利用权重之和，和越大越优先。权重相同，后者覆盖前者（就近原则：谁离结构越近，就越优先）。

###### !important(无穷)

###### 行内样式 （1000）  内联样式

###### id标签        （100）

###### class           （10）

###### 标签               （1）也叫标记 元素

###### 全选              （0）

###### 理论值，请不要把10个加起来

## 2.文本属性

### 1.文字颜色 color:颜色;

####  英文单词|#16进制的值|rgb（R,G,B）;(color:red;|color:#e1251b;|rgba(225,37,27); )

### 2.文字大小

#### font-size: 10px|10em|10rem；

#### em和rem是相对大小，em是基于父元素的文字大小的倍数；rem是基于根元素文字大小的倍数（根就是HTML）

### 3.文字粗细

#### font-weight:normal； 400|bold 700|bolder 900| 100-900的整百数字；（目前为止学习到唯一没有单位的数值）

### 4.文字样式-是否倾斜

#### italic|oblique|normal 。 Italic是使用文字的斜体，Oblique是让没有斜体属性的文字倾斜！

### 5.字体类型（基本上只有这个用逗号隔开，一般都是空格）

#### font-family：‘字体类型1’,’字体类型2‘,'字体类型3'

#### 从前往后匹配，有就用，没有就下一个，都没有就用默认的

### 6.文本修饰线

#### text-decoration: underline; overline; line-through; none; blink;

### 7.行高

#### line-height:20px;  

#### 1.单行文本垂直居中

#### 2.多行文本调整行间距

### 8.首行缩进(行级标签无效)

#### text-indent:20px| 2em

### 9.文本水平对齐(行级无效)

#### text-align: center| left | right | justify（必须要多行才能实现效果）;

### 10.字间距（没哪个用）

#### letter-spacing

#### word-spacing

## 3.列表相关的属性

```css
li{
    list-style:none;   |默认属性值是 list-item
    list-style-image:url(images/list.bmp);
}
```

## 4.背景相关的属性

#### 1.单个的属性

#####    背景颜色  background-color:颜色;

#####    背景图片  background-image: url()

#####    背景平铺  background-repeat: no-repeat | repeat-x | repeat-y;

#####    背景位置  background-position: x的坐标 y的坐标； center top bottom left right

#### 2.复合属性：

#####    background：颜色 图片路径 平铺方式 图片位置 x轴坐标 y轴坐标|  中间只需要加空格就行了，没有先后顺序

###### css3 背景可以设置多个 

###### 渐变属于背景图的一种 css3 

###### 背景图可以设置显示区域

# 文本溢出

## 1.（<u>单行</u>文本，溢出显示省略号）【面试题】

### 1.先设置宽度 width: 20px;

### 2.设置强制不换行 white-space: nowrap;

### 3.不允许超出边框 overflow: hidden 内容会被修剪，并且其余内容是不可见的| scroll内容会被修剪，但是浏览器会显示滚动条，以便查看其余的内容

### 4.溢出的标识为省略号 text-overflow: ellipsis设置盒子中的文本溢出时显示省略号| clip设置盒子中的文本溢出时被裁剪掉（注意不是隐藏）;

## 2.换行的设置

### 1.white-space: nowrap 不换行

### 2.white-space: pre 保留空格和换行。大多数时候在网络上显示代码的时候，

### white-space: pre-line 保留换行，不保留空格

### 3.内容超出的设置overflow

###  1.overflow: hidden隐藏 |

###  2.auto超出就出滚动条（比如手机聊天框一定有）| 

###  3.scroll滚动条（一直都有）|

###  4.visible为默认值

#### 补充知识：border-radius 像头像一样的○

## 3.项目环境搭建

##### css- 文件夹 

######   reset.css（找NPM） | normalize.css:（找CDN） 重置样式表-解决浏览器差异，或者一些bug。引入重置样式表（要放在最前面）

######   *.css:  对应页面的css文件

##### img- 文件夹： 放图片

##### js-文件夹：放js

##### index.html

##### aboutUs.html



##### 补充：中间的盒子叫{版心盒子}

# 1102D7笔记

## 1.元素分类

### 1.常规分类（根据css的显示规则分类）

#####   块级标签：默认独占一行是完整的盒子，可以设置宽高等 div p form等

#####   行级标签（内联元素）：有多宽占据多宽，不是完整的盒子，不可以设置宽高、垂直方向的内外边距等-a -em -i -span

#####   行内块标签（块级内联元素 行内替换元素）：有多宽占多宽，可以设置宽高等。-img -input -button 等等

#####   可变元素：根据周围人的显示，来变化成块级还是行级标签（根本就找不出哪个是可变元素）

### 2.非常规分类

#####   置换元素（也叫替换元素）：元素本身拥有固有尺寸，宽度，高度，宽高比。浏览器根据元素的属性和属性值来决定显示什么内容 img input textarea select object iframe canvas

#####   非置换元素：不是置换元素的就是非置换。

###### 补充一个知识：元素具备最小高度并且高度自适应兼容ie6的正确写法是（）

###### min-height:80px; _height:80px

###### min-height:80px; height:auto !important; height:80px;

###### 再补充一个知识：IE6当中div元素会默认有3px的高

###### 如果想解决overflow：hidden；

###### 或者font-size:0px;

### 3.元素类型的转换

```css
<!-- display属性规定元素应该生成的框类型-->
display: block | inline | inline-block | none;
block-转化为块元素，并显示
inline-转化为行级元素，并显示
inline-block-转化为行内块元素，并显示
none-隐藏
```

##### 伪类选择器

###### 鼠标悬停在div身上，给div的背景颜色变成天蓝色 div:hover

```css
div:hover{
    background:skyblue;
}
```

###### 鼠标悬停在div身上，里面的a设置文字颜色为红色

```css
div:hover a{
    color:red
}
```

### 4.元素的嵌套规则

<e><f></f></e>

##### 1.块级元素里面可以包括其他类型

##### 2.行级元素只能有行级或行内块元素

##### 3.ul、ol里面只能有li（li外面也只能被ul包裹）；li里面可以有任何元素

##### 4.p标签里面只能放行级元素，是一个例外

##### 5.a标签里面可以放块级元素（因为为了实现某种效果，是可以放的）

## 2.垂直对齐属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        img{
            vertical-align: middle;
        }
    </style>
</head>
<body>
    <div>
        <img src="https://bkimg.cdn.bcebos.com/pic/bd315c6034a85edf8db19ec3661f1e23dd54574edfb2?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto" alt="">
         这是一个世界首富
    </div>
</body>
</html>

```

##### vertical-align: top | middle | bottom;

##### 注意：该属性只支持行内块元素！！(img/ button / input / td)

##### 应用场景

##### 1.img的三像素问题【给图片设置vertical-align：属性值不是默认都可以解决】

```css
img{
            vertical-align: middle | top |;
        }
```

##### 2.表格内容垂直对齐的设置

##### 3.查错方式

##### html: 

######  结构错误。【画图-格式化-写注释】

######  类型错误    

######  没有保存、刷新、文件不对应

######  id属性值不能有空格

##### css：

######  选择器   去检查找

######  属性错误【做效果a，写了效果b的代码】

######  该标签不支持该属性

######  属性相关的属性没有 【单行溢出显示省略号】

######  属性值错误  【没有单位、值错了、单词错误】

###### css文件路径错误

###### 选择器的优先级

###### css文件没有引入、引入错了文件



# 1103D8笔记

## 1.定位

#####  概念：讲一个元素放在指定的位置上。position.

#####  语法：

######   position：定位方式；

######   left| right：20px;

######   top| bottom：20px;



#### 1.定位方式

###### 补充：包含块是绝对定位的基础，包含块就是为绝对定位元素提供坐标，偏移和显示范围的参照物

#####  1.static静态定位，元素默认的定位方式；（它不讨论包含块）

#####  2.fixed固定定位，：是基于浏览器当前屏(浏览器窗口)进行定位。

######  应用：小广告、返回顶部、在线客服、顶部导航

#####     1.实现盒子完全居中与位置大小盒子

######     position：fixed;（包含块就是浏览器当前屏）|absolute

###### top:50%

###### left:50%

###### margin-top:-盒子高度的一半;

###### margin-left:-盒子宽度的一半;

```css
第二种方式
.box1{
    position:fixed;| absolute
        top:0;
        left:0;
        right:0;
        bottom:0;
    margin:auto;
}
```

#### ↑【面试题】考试也会考，面试会问

##### 3.相对定位：是基于元素本身所在的位置。并且不会是元素脱离正常文档流

######  position：relative；（包含块是自己）

##### 4.绝对定位：是基于被设置非静态定位的最近上级进行定位，如果没有就基于浏览器第一屏进行定位。

###### 三个定位：上级 

######                      基于被设置的

######                      最近

###### position：absolute;（包含块是最近的非静态定位上级或者第一屏）

#### 包含块简单说就是定位参考框或者定位坐标参考系

## 2.锚点链接

### 实现点击a标签时在同一页面的不同位置进行跳转（其实也可以不同页面）

```html
<div id='id名’>要跳转到的区域</div>
<a href='#要跳转到的区域的id名'></a>
  
如果想跳转到同一目录下的名为res.html文件的名为show的锚点
 <a href="res.html#show">跳转</a>                     
```

## 3.z轴上的堆叠层次

####    z-index：数字；

####    元素默认为auto，越大越上面，可以为负数

####    属性要生效，必须配合非静态的定位才可以！

## 4.透明属性（但是有兼容性问题）

##### opacity:0~1 0是完全透明，数字越大越不透明，直到完全不透明

##### filter：alpha（opacity=0~100的数字）；兼容低版本

#### 【面试考试题都可能遇到上↑】

## 5.其他（太老了）

### 1.内联框架

```html
<iframe src="http://www.baidu.com" scrolling="no" frameborder="0"></iframe>

```

###### src URL 规定在 iframe 中显示的文档的 URL。

###### scrolling  yes或者no  规定是否在 iframe 中显示滚动条。

###### frameborder  0或者1  规定是否显示框架的边框。

### 2.滚动字幕

```html
 <marquee   behavior（行为）="scroll(滚动)/alternate（晃动）"direction（方向）="up(从下向上)/down（从上向下）/left（从右向左）/right（从左向右）" 
scrollamount（滚动速度）="value"height="value(上下滚动范围)"width=""(左右滚动范围)>
内容
</marquee>

```



# 1104D9笔记 宽高自适应

#### 自适应 响应式（微软）

## 1.宽高自适应

####    自适应概念：根据内容自动调整显示的效果|根据屏幕尺寸、设备类型、分辨率等不同，有相应的合适的效果

###  1.宽度自适应

#####     1.不设置宽度

#####     2.使用百分比

#####     3.使用最大最小宽度 **

######       min-width：20px；最小宽度（外面的大盒子设置最小宽度是版心的值）

######       max-width：40px；最大宽度 （广泛应用于聊天框）

###  2.高度自适应

####     1.不设置高度

##### 注意：如果元素浮动，会脱离文档流，所以要解决该问题

##### 浮动：实现多列布局效果

###### flat: left | right | none;

###### 注意：浮动会让元素脱离文档流！

###### 应用：实现多个元素横着排列-多列布局

######      实现文字环绕

##### 清除浮动（解决浮动所带来的问题）：——高度塌陷之一

###### 方案1：给浮动的父亲，添加overflow：hidden

###### 方案2：

######    1.给浮动元素最后面添加一个空的div元素（其实可以是p也可以是h，但是不能用span，只能用块级元素），并加类名clear

######    2.给clear设置样式  .clear{ clear: both; | left | right | none}

###### 注意：该元素不能有其他的任何样式！！

###### 方案3： 这是最常用的

######               1.给浮动元素的父亲添加一个类名clearfix

######                2.设置样式

```css
clearfix: after{
    display:block;    //是一个块元素
    content:' ';      //该元素内容为空
    clear:both;       //清楚该元素前面的兄弟的浮动
    height:0;         //低版本浏览器可能有高度
    visibility:hidden; //（这句可以不加）主要是显示隐藏
}
clearfix{
    zoom:1;           //兼容IE6
}
```

###### 纯享版

```css
clearfix: after{
    display:block;    
    content:' ';      
    clear:both;       
    height:0;        
}
clearfix{
    zoom:1;          
}
```

####  2.使用百分比

#####    注意：如果要实现全屏效果。必须给html和body设置宽高都是100%

```css
html,body,div{
    width:100%;
    height:100%;
}
body{
    width:100%;
    height:100%;
}
div{
    width:100%;
    height:100%;
}
```

#### 3.使用最大最小高度(一般做响应式才会使用)

######    min-height: 400px;

######    max-height:600px;

####   扩展知识点：最小高度的兼容（扩展）

##### hack1:

###### min-height: value_

######              height: value;

##### hack2: 

###### min-height: value; 

######               height: auto !important;

######              _height: value

## 2.伪元素

####    伪元素和伪类的区别：【面试题】

#####  概念上：伪类是一种临时状态，只有状态被触发的时候才会生效  ：hover

#####  伪元素是一个家的元素，是一个虚拟的dom节点

##### 写法上：伪类使用单冒号。 伪元素使用双冒号。

##### 单冒号和双冒号的after都是伪元素，只是版本不同写法不同

#### UI元素状态伪类选择器

###### 在e元素的内容之后添加内容 e:: after{content:' '}

###### 在e元素的内容之前添加内容 e:: before{content:' '}

###### 给e元素中鼠标选中的文字设置样式 e::selection{ } 可以改color background-color

###### 给输入框的提示文字设置样式 input::placeholder{ }

###### 给e元素中文本的首行添加特殊样式。e::first-line {}

## 3.继承

####    概念：上下级关系的元素之间，上级元素的被样式下级元素拥有，这就是继承。外层元素被内层元素所拥有。

#####     文本相关的属性和列表相关的属性会被继承。

#####     注意：a标签默认的样式比继承优先级高！

###### color font-size font-style font-family  ... list-style text-align

###### 权重 !important > 行内 > id > class > 标签 > * > 继承 > 默认

###### 除了a标签这个hmp



# 1105D10笔记 表格表单

##  1.表格

###  1.属性

####  border-spacing：设置内容和边框之间的间隔

####  border-collapse: collapse  设置表格细边框【必须给td给加边框，才能实现真正的单线边框】

####  table-layout：fixed ； 设置表格单元格等分宽度【必须给表格tr设置宽度才有效】

#### empty-cells 空的单元格

### 2.表格结构化的标签

#### <thead></thead> 表格头

#### <tbody></tbody>表格身体

#### <tfoot></tfoot>表格脚

##### table>tr 选中table的儿子tr是没有效果的。因为浏览器会自动将tr放在tbody里面！！



### 3.表单：负责数据采集功能的

#### 1.表单域+表单标签+表单按钮

#### 2.单字段集 fieldset

#### 字段集的标题legend

<fieldset>

<legend>hhh</legend>

</fieldset>

#### 3.input的type属性值

 <input type='file | hidden | submit | reset | button'>

file是提交文件

hidden是隐藏域【提交不想被用户看看到的数据！value=‘填要被提交的数据'】

##### input实现的按钮

```html
<form>
    <input type='submit' name:'提交' >
    <input type='reset' >
    <input type='button' value='按钮上的字'>
</form>
```

#### 4.label标签（改变用户的鼠标体验）

```html
<form>
    <input type='checkbox' id='id名'>
    <label for='要关联的选项的id'>要关联的文字</label>
    或者
    <label><input type='radio'>这个里面是关联的文字</label>
</form>
```

#### 5.下拉列表

```html
<form>
    下拉列表<select name='city' id=''>
         <option value='1'>选项1</option>
         <option value='2'>选项2</option>
         <option value='3'>选项3</option>
         <option value='4'>选项4</option>
    </select>
</form>
```

#### 6.多行文本域

```html
<textarea name='msg' id='' col='30' row='10'></textarea>一般不要col row都设置宽高
<textarea name='msg' height='20px' width='50px'></textarea>
```

注意：标签之前不能有任何空格和换行

## 2.BFC（Block Formatting Content）块级格式化上下文【非常重要的面试题】

#### 概念：BFC是块格式化上下文。是一个独立的渲染区域，区域与区域之间不会互相影响。

#####  1.元素设置浮动 float:left|right;

#####  2.元素被设置固定和绝对定位

#####  3.元素被设置overflow属性：且不为默认值(visible)的时候 (auto | scroll | hidden)

#####  4.元素被设置display：inline-block|flex|inline-flex |table-caption的时候。

##### 题：

###### 1.子元素不会影响到外面的元素

###### 2.BFC计算高度时，浮动元素也参与计算

###### 3.Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠

###### 4.BFC的区域与浮动区域<u>不</u>重合

###### 5.BFC会重新定义元素渲染规则

#### 应用

#####  1.解决margin的塌陷问题

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .box {
            border: 1px solid black;
            width: 100px;
            height: 100px;
        }

        .box1 {
            margin-bottom: 40px;
        }

        .box2 {
            margin-top: 50px;
        }

        .wrap {
            overflow: hidden;
        }
    </style>
</head>

<body>
    <div class="box box1">1</div>
    <div class="wrap">
        <div class="box box2">1</div>
    </div>
</body>

</html>
```

##### 2.解决margin粘连问题 overflow: hidden; 就不写了 之前做过很多了

##### 3.左边固定，右边自适应

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .left {
            background: skyblue;
            width: 200px;
            height: 400px;
            float: left;
        }

        .right {
            background: pink;
            height: 600px;
            overflow: hidden;
        }
    </style>
</head>

<body>
    <div class="left">1</div>
    <div class="right">2</div>
</body>

</html>
```

##### 4.清除浮动

# 1108D11笔记 表格表单

## 1.精灵图sprite雪碧图

###  概念：由多张图组合而成的一张图。CSS Sprites是图片整合技术

### 实现步骤

####  1.实现一个制定大小的盒子

####  2.将精灵图设置为该合资的背景图

####  3.通过background-position

### 优点：

####  减少访问次数，提升性能， 占用内存少

####  文件数量少，命名难度小

#### 减少图片的体积

### 缺点：

####  增删图标麻烦，步骤繁琐。

## 2.兼容性问题

###  概念：通一个页面，在不同的浏览器或者版本上，看到的效果不一致。

#### 处理浏览器兼容问题：【添加私有前缀】

​                

| 带表浏览器       | 浏览器内核     | 前缀     |
| :--------------- | -------------- | -------- |
| 欧朋             | presto         | -o-      |
| IE               | trident 不开源 | -ms-     |
| 火狐             | gecko          | -moz-    |
| 谷歌             | webkit         | -webkit- |
| 谷歌和欧朋联发的 | blink          |          |



#### CSS Bug、Css Hack、Filter

##### CSS Hack补充

###### css hack是为了解决css在不同浏览器中正确显示的一种方法

###### css hack是一种个人对css代码的非官方修改

###### css hack会增加代码负担，降低代码的可读性

| 个数 | CSS的bug                                                     | hack                                                         |
| :--- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 1    | 在任何标签中插入图片时，图片会讲元素下方成大三像素（可能是>3像素） | A.给<img>添加声明：diplay:block;<br>**B**.给img添加声明vertical-align:top/middle;<br>C.设置浮动float:left/.. |
| 2    | 行级或者行内块元素水平方向上会有间隔                         | **A**.给元素设置浮动**(所有设置的浮动必须clearfix)**<br>B.给元素之间的空格和换行全部去掉 |
| 3    | 表单元素垂直方向上对不齐                                     | **A**.给元素设置浮动（跟上面一样的推荐浮动，记得清浮动！）<br>B.给元素设置vertical-align: top |
| 4    | 图片外面有超链接标签，在低版本浏览器会有边框                 | 给图片设置边框为0  border: none; \| border: none;            |
| 5    | 图片如果是png24格式，在低版本浏览器会显示成不透明的效果      | A.将图片保存成png-8格式<br>B.保存成gif图                     |
| 6    | 设置鼠标形状为手型的时候，hand这个值只在低版本浏览器生效     | cursor： hand在新的高版本浏览器会不生效，所以以后就用**cursor ：pointer；**\|<br>cursor: wait\|crosshair\|help \|弄一个图片的话cursor: url (  .ico) |
| 7    | margin在垂直方向上的粘连问题                                 | 1.用内边距实现【注意修改高度】<br>2.给父元素添加上边框 <br>3.给父元素设置overlow: hidden; |
| 8    | margin的外边距重叠                                           | 给一个元素设置足够的间隔<br>或者给一个元素添加父元素，给父元素设置overflow: hidden; |

#### 

# 1109D12笔记

## 1.结构上的语义化标签【面试题】（这些也是html5新增的）

##### 页头<header></header>

##### 导航<nav></nav>

##### 主体<main></main>

##### 独立的区域<section></section>

##### 文章<article></article>

##### 侧栏<aside></aside>

##### 页脚<footer></footer>

#### 优点

##### 1.代码具有可读性，结构清晰

##### 2.方便SEO

##### 3.方便更新和维护



## 2.其他标签

##### 图文组合标签

```html
<figure>
    <figure>
    <img src=''>
   <figcaption></figcaption>
</figure>
```



##### 高亮<mark></mark>

##### 标题组<hgroup></hgroup>

##### 对话框<dialog open></dialog> 自动居中

##### 定义图形<canvas></canvas> 里面的内容没有显示出来？

##### 媒体文件引入<embed scr=''></embed>【图片、音频、视频】到底是单标签还是双标签？



## 3.媒体标签

### 1.音频

<audio src='' controls autoplay loop>不能支持该标签的时候的提示信息</audio>

##### controls 控件

##### autoplay 自动播放

##### loop循环播放

### 2.视频

<video src="resource/videos/3theA.mp4" controls poster='resource/demo.png'>不能支持该标签的时候的提示信息</video>

### 3.source标签（也是一个新标签）

<video controls poster='封面的路径'>
    <source src='视频的路径'>
    <source src='视频的路径'>
    <source src='视频的路径'>
</video>
#### 4.在页面中通过哪些标签可以添加flash文件（）

```html
<embed src="flash路径及扩展名"></embed>
<object>  <param name="movie"  value="flash路径及扩展名"> </object>
```



## 3.html5新增的type属性

novalidate代表不验证该表单中数据的正确性（孤儿属性）

```html
<form novalidate代表不验证该表单中数据的正确性（孤儿属性） autocompelete='off|on'代表自动补全>
    <input required（规定该元素内容不能为空）placeholder='占位符' autofocus(设置自动获取焦点) minlength=minimal number maxlength=max number readonly是只读，用于做权限
           <button disabled设置按钮不可用 enabled设置按钮可用>提交按钮</button>
<input type='radio' name='sex' value='man' checked默认选中的值>男
<input type='radio' name='sex' value='woman'>女
<select name='city' multiple代表该列表可以多选>
    <option>成都</option>
    <option selected代表默认选择该选项>北京</option>
    <option>上海</option>
    <option>南京</option>
</form>
```

## 4.H5新增的表单标签

### 1.数据列表

##### <input list='对应数据列表的id名'>

#####  <datalist id=''>

#####     <option value='值'>内容</option>

#####  </datalist>

##### value和内容都有的时候，就会显示，但是如果没有value属性，就会显示内容。

##### 如果value是空的，就什么都不会显示

### 2.输出标签

```html
<form action='#' oninput=' c.value=parseInt(a.value)+parseInt(b.value)'>
    <input type='text' name='' id='a'>+
    <input type='text' name='' id='b'>=
    <output name='c'></output>
</form>
```

**email**：提交表单的时候验证输入值是否满足email的格式

 <input type="email" name="email"/>

**url**：提交表单的时候验证输入值是否满足url的格式

<input type="url" name="url"/>

**number**：根据你的设置提供选择数字的功能，其中min为最小值，max为最大值，value为默认值，step为点击箭头时数字的变化量，max、min、step、value均可不写，目前某些浏览器还不支持。

<input type="number" name="number" min=2 max=100 step=5 value="15"/>
**range**：会以一个滑块的形式表现包含一定范围内数字值的输入域，max为最大值，min为最小值，value为默认值，如果没有设置max和min，默认值是1-100

<input type="range" name="range" min=20 max=200 value="60"/>

链接：https://blog.csdn.net/u010556394/article/details/50769853



# 1110D13笔记

## 1.开发的思想

#### 优雅降级：先完成所有的功能，然后根据每个浏览器的支持读不同，去掉不重要的部分，以确保有基本功能——向下兼容

#### 渐进增强：先完成基本功能，后面针对高版本的浏览器再去添加各种选取的效果或交互——向上兼容

## 2.CSS3新增的属性

#### 1.文字阴影

text-shadow：x轴 y轴 模糊程度 阴影的大小 阴影的颜色；

模糊程度只能为正！ ——多少px（三个值一般都给一样的）

#### 2.盒子阴影

box-shadow：x轴 y轴 模糊程度  阴影的大小 阴影的颜色 inset（内阴影）；

#### 3.圆角边框

border-radius 20px|50% 是以设置值为半径画圆，然后将圆分成四份，给对应的角上。

如果是50%使代表以宽的50%为a半径，高的50%为b半径，画圆。如果a=b就是正圆，否则是椭圆

#### 4.英文单词大小写转换

text-transform: capitalize|uppercase |lowercase;

font-variant: small-caps;

#### 5.单词超出是否换号

word-wrap: break-word;

## 3.字体图标

 百度搜素iconfont，进入阿里巴巴矢量图表扣

 选择喜欢的图标，假如购物车-- 下载代码



##### 1.使用unicode的方式

@font-face{

font-family:'自己定义的字体名字'

}

url：src（’字体文件的路径---.ttf‘）

span{

font-family:'自己等你故意的字体名字'

}

结构上<span>对应的unicode的值</span>

##### 2.使用类名的方式

###### 1.引入iconfont.css

###### 2.设置类名<span class='iconfont icon-对应的类名'></span>

## 4.CSS3的选择器

##### 1.属性选择器

选中具有title属性的元素a                      a[attr]{ }

选择有title属性值且为value的元素a             a[attr='value']{ }

选择有title属性值带有value的元素a             a[attr*='value']{ }

选择有title属性值且为value开头的元素a     a[attr^='value']{ }

选择有title属性值且为value结尾的元素e     a[attr$=value']{ }



##### 2.结构伪类选择器

选中第一个子元素e                      e:first-child{ }

选中最后一个子元素e                  e:last-child{ }

选中第n个子元素e                        e:nth-child(n){ }

选中倒数第n个子元素e                e:nth-last-child(n){ }

选中唯一的子元素e                      e:only-child{ } （适用于场景判定）

###### 说明：n可以是数字，可以是英文，可以是带n的数学表达式 【乘法因子】

###### 注意：child系列强调的是怪元素在父元素的所有孩子中的排序！！与种类无关

######   type系列强调的是该元素在所有同类型的兄弟元素之间的排序！

###### nth-of-type

##### 3.UI状态伪类选择器

 e:enabled {  } 可用元素e设置样式

 e:disabled {  } 不可用元素e设置样式

 e:checked{  } 选中元素e设置样式

##### 4.否定伪类选择器

e:not(f) 选中e元素中不满足条件f的所有圆度。

e和f都是选择器

##### 5.目标伪类选择器

e:target{   } 选中成为目标的元素e （这个案例是什么来着？）

# 1111D14笔记

## 1.背景渐变

####  1.线性渐变

 基础渐变： background: linear-gradient(color1, color2)

设置渐变方向： background: linear-gradient(to left, color1, color2)

设置渐变比例： background: linear-gradient( color1 20%, color2 10%)

【如果希望实现两个明确颜色的背景，可以将对应的百分比设置成一样的即可】

设置对角渐变：background: linear-gradient(to left top, color1, color2)

设置对角角度：background: linear-gradient(90deg, color1, color2)

###### 例：处理兼容性问题的写法 background-image：-webkit-linear-gradient（ top，red，yellow）

#### 2.径向渐变

基础渐变                   background: radial-gradient(color1, color2)

设置渐变比例           background: radial-gradient(color1 20%,color2 20%)

设置渐变图案           background: radial-gradient(circle，color1 20%,color2 20%)圆形

​                                  background: radial-gradient(ellipse，color1 20%,color2 20%)椭圆形

#### 3.重复渐变

重复线性渐变       background: repeating-linear-gradient(color1 10%, color2 10%);

重复径向渐变       background: repeating-radial-gradient(color1 10%, color2 10%);

###### 

#### 4.背景图的大小

background-size: 图的宽度 图的高度;

它也可以直接写在background属性里面，在position后面加一个/隔开

background: url()10px 0px/50px 50px no-repeat;

​                                  position/宽 高

一定是复合属性在前，单独属性在后

## 2.过渡

 transition:过渡属性1 执行时间 延迟时间  渐变的曲线, 过渡的属性2 执行时间 延迟的时间 渐变的曲线

渐变的曲线——linear是线性-匀速！

transition-property 过渡属性（名字）

transition-duration 过渡的执行时间

transition-delay 过渡的延迟时间

transition-timing-function:linear; 过渡执行的曲线

##### 如果要设置两个过渡属性，中间加逗号

##### 注意：过渡只适用于属性值可以数字化的，比如display就不可以过渡

#####             过渡不能循环执行动画 

#####             并且需要鼠标触发

#####              过渡只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态

## 3.动画

### 注意：animation动画的兼容写法，声明调用都需要加前缀

### 例如@-webkit-keyframes myMove{ }

#####  1.定义动画

 @keyframes 动画名{

0%{

初始状态的样式}

… *%{

中间状态的样式

}

100%{

结束状态

}

  }

语法2：

@keyframes 动画名{

from{开始状态

}

to{结束状态

}

}

##### 2.通用、执行动画

animation:动画名 动画执行时间 动画执行次数（infinite代表无穷） 动画执行的方向 动画延迟的时间（这个和执行时间不能反的哈）

动画变化的曲线: linear 匀速

动画执行的方向：默认是起点到终点不停执行，如果是alternate就代表从起点到终点，再从终点到起点。往复动画

animation-play-state：paused；|running；

| animation-name: run; |                                    |
| -------------------- | ---------------------------------- |
|                      | animation-duration: 4s;            |
|                      | animation-fill-mode: both;         |
|                      | animation-timing-function: linear; |

##### 过渡动画函数timing-function属性中，可以实现先加速再减速效果的属性值是：ease-in-out

# 1112D15笔记

## 1.弹性盒子

#####  概念：是一种新的布局模式，主要是让元素有能力控制子元素的排列方式，常用于移动端

##### 专业术语：

 容器：被设置成弹性盒子的元素【display: flex|inline-flex】

项目：容器的子元素（也叫灵活元素）

主轴：项目排列的周，默认为x方向

侧轴：与主轴垂直的轴

### 1.容器上的属性

#### 1.设置成容器

display: flex|inline-flex 【flex是弹性盒子，inline-flex是行内弹性盒子宽度有内容撑大】

###### 子元素上的float clear vertical-align都会失效

#### 2.设置主轴的方向（没有设置侧轴方向这种操作哈）

 flex-direction: row |column|row-reverse|column-reverse；

row 行 column列

#### 3.设置项目在主轴上的排列方式

justify-content: flex-start|center|flex-end |space-between|space-around|space-evenly;

flex-start 主轴起点

center 中间点

flex-end 主轴重点

space-between 间隔在之间

space-around 间隔在周围

space-evenly 间隔均分



#### 4.设置项目在侧轴上的排列方式

align-items: stretch(默认) |flex-start |flex-end |center |baseline;

#### 5.设置是否换行 缩小

flex-wrap: nowrap |wrap |wrap-reverse;

nowrap: 不换行，项目超出容器宽度成自动缩小

wrap：项目超出容器宽度就换行。

#### 6.多跟轴上的排列方式 各行之间对齐

align-content；stretch| flex-start |center|flex-end|space-between|space-around|space-evenly

##### 注意：单根轴无效！



#### 7.主轴方向和是否换行的符合属性

 flex-flow； 主轴方向的值 是否换行的值；

### 2.项目上的属性

#### 1.项目的排序

 order：数字

  默认为0，排序是从小到大，课正可负

#### 2.项目是否缩小

flex-shrink: 数字；

默认为1，代表会缩小，如果为0代表不缩小。

如果值为其他数字，代表要缩小的份数。

【具体缩小的值=（需要缩小的宽度/所有项目的shrink的总和）*当前项目shrink的值】



#### 3.项目是否放大

flex-grow: 数字

默认为0，不放大

如果值为1代表会放大

值为其他数字，代表放大的份数

#### 4、flex-basis=width属性 完全没有用哈，就是宽。分配多余空间之前，项目占据的主轴空间

#### 5、flex属性  flex:1;

 flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。

常用的就是flex:1; 代表1 1 auto

#### 6.align-self属性：定义该项目的排列方式

align-self: auto|flex-start|flex-end|center|baseline|stretch;

# 1115D16笔记

## 1.响应式

####  概念：一套代码，能够适应多个终端。【页面能够根据屏幕尺寸、设备类型等，实现不一样的页面效果】

####  原理：利用媒体查询。

####  关键字@media

 

### 术语说明：

####  设备像素：屏幕的物理像素

####  逻辑像素：css像素

####  dpr=  物理像素与逻辑像素的比值 |屏幕分辨率与设备实际像素的比值



####  理想视口：可视视口/布局视口 =1

####  理想视口的设置

```html
  <meta name='(用户网页的可视区域)viewport' content='width=device-width, initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'>
```

## 2.移动端适配方案

###  1.使用百分比布局

#### 优点：大屏幕可以显示更多

###  2.使用rem单位布局

####  rem是基于html的文字大小的倍数的单位。 1rem=html文字大小，默认为16px约定好了，750的设计稿里面，给Html设置的文字大小为100px

####  1rem=100px

####  其他尺寸的设计稿，应该设置html的文字大小为多少？？

####  750/100=设计稿的宽度/x  x=设计稿的宽度*100/750

##### 注：使用rem布局时，border、box-shadow、border-radius等一些效果应该使用px作为单位。

### 步骤：

#### 安装插件-px to rem

#### 量取设计稿的宽度，通过alt+s快速设置html的文字大小。 x=设计稿的宽度*100/750

#### 验证单位是否转换成功

#### 引入rem.js文件 <script src='js文件的路径'></script> --放在head里面

#### 直接设置量取的尺寸宽度，任何alt+z转换单位



## 3.使用vw和vh单位 都是视口的百分比单位

#### 1vw就是屏幕宽度的1%

#### 1vh就是屏幕高度的1%



#### 量取圆度尺寸应该设置成多少vw

#### 设计稿宽度 750/100 = 量取的元素的宽度 /x

#### x = 量取的元素的宽度*100/ 设计稿的宽度750

# 1116D17笔记

## 1、转换（或者叫变形） 对任何元素都可以生效

### 1.位移、平移：设置元素位置的移动

 transform: translate (x,y)

 transform: translateX(x)

 transform: translateY(y)

 transform: translateZ(z)

 transform: translate3d(x,y,z)

### 2.放缩：放大或者缩小元素整体

transform: scale(宽的倍数x，高的倍数y)

transform: scaleX(x)

transform: scaleY(y)

transform: scaleZ(z)

transform: scale3d(x,y,z)

### 3.旋转

 transform: rotate(10deg);

 transform: rotateX(10deg);

 transform: rotateY(10deg);

 transform: rotateZ(10deg);

 transform: rotate3d(x,y,z,10deg); 【前面3个是0或者1,0代表不转，1代表该方向要转第四个指定的角度】

##### 注：一个元素可以声明多个变形，不过之间需要空格隔开

### 4.其他的属性

transform-origin :x的坐标, y的坐标 top | left | right |bottom; 【设置转换的基点】

backface-visibility: visible | hidden; 【设置元素背面是否可见】定义当元素不面向屏幕时隐藏

```css
  text-overflow: -o-ellipsis-lastline;

  overflow: hidden;

  display: -webkit-box;

  -webkit-line-clamp: 2;

  -webkit-box-orient: vertical;
实现第二排隐藏
```

```css
e::after {
    content: "";
    background: url(../img/quality.png);
    opacity: 0.1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
}
实现透明背景图
```



transform-style: preserve-3d |flat flat是平面2d，preserve-3d是将空间设置成3d的

perspective：*px设置景深【观察者和被观察物理之间的间隔】用来设置动画3D效果的强度。有的浏览器这个属性值写成0

transform:prespective:*px 【这个是老版本的写法了】



## 2.多列布局

###  1.设置列数 column-count：*；

###  2.设置列宽 column-width：*px；

###  3.设置列间隔 column-gap：*px

###  4.设置列边框：column-rule：*px 线形 颜色



# 1117D18笔记

## 1.实现三角形

### 1.实现一个宽高为0的盒子

### 2.给边框设置成you粗度的透明色 透明transparent

 border: *px solid transparent;

### 3.给想要的方向的边框设置成对应的颜色

## 2.实现好看的复选框

### 1.实现框和勾勾【勾勾由设置相邻两个变边框旋转能得到】

### 2.设置定位和浮动-让框和文字横着排列，让勾勾显示在框上面

### 3.让勾勾隐藏

### 4.选中对应的选项的时候，里面的勾勾显示出来



e+f 选中e同级元素下最近的兄弟f

e~f 选中e同级元素下所有的兄弟f

e：checked 被选中的选项e

#### 层级选择器有哪些

#####  e f

##### e>f

##### e,f

#### 兄弟选择器有哪些

##### e+f

##### e~f

##### e,f

## 3.盒子模型的两种模式-标准模式和怪异模式

##### 概念：他们都是盒子模型，只是是不同的模式而已

在默认情况下，有文档声明的元素，都是标准模式，没有文档声明在低版本浏览器-IE678里面会触发怪异模式。

##### 设置模式： 

 box-sizing: border-box 怪异模式|content-box 标准模式

区别：元素实际占用的宽高的计算方式不一致

标准模式：占用的宽度 =width +margin + padding + border；

怪异模式：占用宽度 = width+margin；

###### 补充CSS calc函数

###### width： clac(25% - 2px);

## 4.粘性定位

  position: sticky;

## 5.考试说明

早上9.10-10.40 系统考试

20单选--40分

10不定项 20分

5填空 10分

2 解答 高度塌陷（清浮动）20分

1编程题  10不用写结构 

12点-17点 5个小时  —— 在vscode上完成页面

项目1：pc端首页一张

项目2：移动端页面3张



先建项目再写css！！

实现一个盒子完全居中 margin 的粘连问题

页面：不能大面积使用图片

要换文字和素材

pc 使用浮动+版心

移动 弹性盒子 +rem +js

