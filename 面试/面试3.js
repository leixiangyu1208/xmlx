1.什么是BFC?怎么创建一个BFC?

答:BFC(Block formatting context)直译为“块级格式化上下文”。BFC它是一个独立的渲染区域，只有Block-level box（块元素）参与，它规定了内部的Block-level box如何布局，并且与这个区域外部毫不相关。
创建:
根元素
float属性不为none
position不为static和relative
overflow不为visible
display为inline-block, table-cell, table-caption, flex, inline-flex

2.link与@import 的区别

答:@import是CSS提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载CSS文件，还可以定义RSS，rel连接属性等；
加载页面时，link引入的CSS被同时加载，@import引入的CSS将在页面加载完毕后加载；
link标签作为HTML元素，不存在兼容性问题，而@import是CSS2.1才有的语法，故老版本浏览器（IE5之前）不能识别；
可以通过JS操作DOM，来插入link标签改变样式；由于DOM方法是基于文档的，无法使用@import方式插入样式

3. let, const, var有什么区别?

答:var：声明全局变量，换句话理解就是，声明在for循环中的变量，跳出for循环同样可以使用。,
let：声明块级变量，即局部变量。 在上面的例子中，跳出for循环，再使用sum变量就会报错 
const：用于声明常量，也具有块级作用域

4. Call， bind, apply这三者有什么区别，请详细说明。

答:call、apply、bind都是改变this指向的方法,
当前实例(函数fn)通过原型链的查找机制，找到function.prototype上的call方法，
apply把需要传递给fn的参数放到一个数组（或者类数组）中传递进去，虽然写的是一个数组，但是也相当于给fn一个个的传递
bind：语法和call一模一样，区别在于立即执行还是等待执行，

5. vue双向绑定 原理是什么，请详细说明。

答:你可以用v-model 指令在表单<input> 及<textarea> 元素上创建双向数据绑定。它会你可以用v-model 指令在表单<input> 及<textarea> 元素上创建双向数据绑定。它会语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理 。

6. vuex 是什么，有哪些属性?

答:Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
有 5 种，分别是 state、getter、mutation、action、module

7.Vue中常用的指令有哪些?

答:v-for v-if v-else v-else-if v-bind v-html v-text v-show v-model v-on v-once v-pre v-cloak

8. V-show和v-if区别?

答:v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。,
v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换

9、请用代码实现:创建10个<a>标签，点击的时候弹出对应的序号,

答:or(var i=0;i<10;i++){

            (function(i){

                var a=document.createElement('a');

                a.innerHTML=i+'<br>';

                document.body.appendChild(a);

                a.addEventListener('click',function(e){
                    e.preventDefault();
                    alert(i);
                });

            })(i);

        }

10. JS中获取变量类型的方法有哪几种7分别适用于什么样的情况?

答:Undefined 适用于Object类型、Array类型、Function类型,
Null适应于object
Boolean适用于
Number适用于数值
String 
Object

11.JS中的this在哪些情况下分别指向哪些对象?

答:全局作用域或者普通函数自执行中this指向全局对象window,
事件函数内部的this指向事件源：注意在事件函数中如果包含普通函数，普通函数自执行后，内部this还是指向window
对象方法调用时，this指向调用的对象

12.call()和.apply()的区别和作用? ECMAScripts中的bind()呢?

答:apply()函数有两个参数：第一个参数是上下文，第二个参数是参数组成的数组。如果上下文是null，则使用全局对象代替。
call()的第一个参数是上下文，后续是实例传入的参数序列。
bind()方法创建一个新的函数（称为绑定函数）, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。


13.使用new操作符时，JS内部具体执行了哪些步骤?

答:创建一个空对象obj var obj= {}
将构造函数的prototype赋给对象的__proto__obj.__proto__ = A.prototype
构造函数对象的this指针指向objA.call(obj)

14.写一个函数， 实现将"ABCD"转化成“A B C D"

答:function addSpace(inString){
    return inString.split('').join(' ');
}
 
addSpace("ABCD");

15.写一个对象的深拷贝函数

答:function deepCopy(obj,copy){
for(var i in obj){
if(typeOf obj[i] == ‘object’){ //判断是否为对象
deepCopy(obj[i],copy[i]);//回调深拷贝函数
}
else{
copy[i] = obj[i]; //不是对象直接复制
}
}
return copy;
},

16.以下代码alert出来的值是?
window.val= 1;
varjson= {
val: 10,
dbl: function (){ this.val*= 2; }
}
json.dbl();
var dbl = json.dbl;
dbl();
json.dbl.cal(window);
alert(window.val + json.val);


答:24