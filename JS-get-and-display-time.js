// 使用AJAX请求获取当前时间
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var currentTime = xhr.responseText;
    var currentTimeElement = document.getElementById("current-time");
    currentTimeElement.textContent = "Current time: " + currentTime;
  }
};
xhr.open("GET", "get_current_time.php", true);
xhr.send();
