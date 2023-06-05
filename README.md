# PHP-get-and-display-time
PHP获取并显示当前时间的程序
<!DOCTYPE html>：这是HTML5的文档类型声明，指定文档使用HTML5规范进行解析。

<html>：定义HTML文档的根元素。

<body>：定义HTML文档的主体部分，包含页面上可见的内容。

<p id="current-time"></p>：创建一个段落元素，并通过id属性将其标识为"current-time"，用于显示当前时间。

<script src="script.js"></script>：使用<script>标签引入外部JavaScript文件，其中src属性指定了要引入的文件路径，这里是"script.js"。通过这个文件，我们将在页面中执行JavaScript代码。

script.js：

var xhr = new XMLHttpRequest();：创建一个新的XMLHttpRequest对象，用于发送AJAX请求。
xhr.onreadystatechange = function() { ... }：设置一个回调函数，用于处理AJAX请求的状态变化。
if (xhr.readyState === 4 && xhr.status === 200) { ... }：检查AJAX请求的状态是否为4（已完成）并且响应的HTTP状态码是否为200（成功）。
var currentTime = xhr.responseText;：从AJAX响应中获取当前时间。
var currentTimeElement = document.getElementById("current-time");：使用document.getElementById()方法获取具有id为"current-time"的元素，并将其赋值给currentTimeElement变量。
currentTimeElement.textContent = "Current time: " + currentTime;：将带有当前时间的字符串赋值给currentTimeElement元素的textContent属性，从而将当前时间显示在页面上。
  }：这是代码块的结束标记，表示前面定义的回调函数的结束。
xhr.open("GET", "get_current_time.php", true);：使用open()方法初始化一个AJAX请求。这里指定了请求的类型为GET，请求的URL为"get_current_time.p<?php 和 ?>：这是PHP的起始和结束标记，用于标识包含PHP代码的区域。
// 获取当前时间：这是一个注释，用于提供代码的说明，不会被解释器执行。
$currentTime = date("Y-m-d H:i:s");：使用date()函数获取当前的日期和时间，并将结果保存在$currentTime变量中。函数中的参数"Y-m-d H:i:s"指定了日期和时间的格式。
// 返回当前时间：这是另一个注释，用于提供代码的说明。
echo $currentTime;：使用echo语句将$currentTime变量的值输出到浏览器，作为响应的一部分。hp"，并且请求是异步的（第三个参数为true）。
xhr.send();：发送AJAX请求。
  
