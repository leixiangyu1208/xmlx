1、null和undefined有什么区别?

答:（1）null是一个表示”无”的对象，转我数值是为0，undefined是一个表示”无”的原始值，转为数值时为NaN。当声明的变量还未被初始化时，能量的默认值为undefined
（2）Null用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象
（3）Undefined表示”缺少值”,就是此处应该有一个值,但是还没有定义。典型用法是：
　　a、变量被声明了，但没有赋值时，就等于undefined
　　b、调用函数时，应该提供的参数没有提供，该参数等于undefined
　　c、对象没有赋值属性，该属性的值为undefined
　　d、函数没有返回值时，默认返回undefined
（4）null表示”没有对象”，即该处不应该有值。典型用法是：
　　a、作为函数的参数，表示该函数的参数不是对象
　　b、作为对象原型链的终点

2、对象与字符串的互相转换用哪些方法?

答:$.parseJSON( jsonstr );
eval('(' + jsonstr + ')');
JSON.parse(jsonstr);
JSON.stringify(jsonobj); 

3、javascript 对象深拷贝有哪些方法?

答:1.浅拷贝拷贝就是把父对像的属性，全部拷贝给子对象。此时子对象拷贝的是父对象的地址，子父对象相互影响。
2.深拷贝就是把父对象的属性中的值拷贝给子对象此时不论父对象如何改变都不会再影响到子对象。

4、Javascript 中==和===区别是什么?

答:==， 两边值类型不同的时候，要先进行类型转换，再比较。 
===，不做类型转换，类型不同的一定不等。

5、下面这段代码想要循环延时输出结果01234.请问输出结果是否正确，如果不正确说明为什么，并修改循平内的代码使其输出正确的结果，
for (vari=0;I< 5; ++){
setTimeout (function 0{
console.log(i+ ");
},100*0);
}

答:for（var i = 0; i < 5; i++）{
setTimeout(()=>{
console.log(i)
}, i*1000)
}

6、Javascript 实现Ajax的原理(实现过程)是什么?

答:(1) 创建XMLHttpRequest对象,也就是创建一个异步调用对象.
  (2) 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.
  (3)设置响应HTTP请求状态变化的函数.
  (4)发送HTTP请求.
  (5)获取异步调用返回的数据.
  (6)使用JavaScript和DOM实现局部刷新.

7、程序题，下面的程序输出结果是什么?
function doSomething(){
for(vari=0;4> i;i++){
vark= 100;
aMrg+='',+(k+i);
	}
}
var k= 1,aMrg=k;
doSomething();
aMrg +=k;
console.log(aMrg);

答:11

8、用reduce方法将多维数1.2[3, 4.15,6]扁平化(变一维)

答:var myarray1 = [[1,2],[3,4,15,6]]
    function flatten(arr) {
        return arr.join(',').split(',').map(function (item) {
            return parseInt(item);
        })
    }
    var b=flatten(myarray1);
    console.log(b);
