
// 新闻跳转
function newsOne() {
  window.open('https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247487972&idx=1&sn=3a9d106c410c5a0feef5c212d5986535&chksm=cea88267f9df0b71a0b636c973cdbb112026737b889c2904511b0575a99815eb07a75092bc2e&token=152650911&lang=zh_CN#rd');
}
function newsTwo() {
  window.open('https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247487923&idx=1&sn=ca39e2ac040477a08072439dac3ab6a3&chksm=cea88230f9df0b2667d9785c77c4381b58e98c0a8bd94d4127a36c947235cd6f302e6555c134&token=152650911&lang=zh_CN#rd');
}
function newsThree() {
  window.open('https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247487884&idx=1&sn=c7795e8b397fc3de933545d17ccfc9f4&chksm=cea8820ff9df0b19d05a64951ec4f47fc615c1b5e0c54fe76c22e298dc365e75dbbdf0f46c23&token=152650911&lang=zh_CN#rd');
}

// 右边侧边栏
// 划出一屏时显示
var float = document.querySelector('.floatWinContent');
var lastli = document.querySelector('.last_li');
var banner =  document.querySelector('.productBanner');
document.addEventListener('scroll', function() {
  if (window.pageYOffset >= 600) {
    lastli.style.display = 'block';
  } else {
    lastli.style.display = 'none';
  };
});
var lis = document.querySelectorAll('.floatItem');
var divs = document.querySelectorAll('.showIcon');
for(var i = 0; i < lis.length; i++) {
  lis[i].onmouseover = (function(j) {
    return function() {
      console.log('-----', j);
      var divs = document.querySelectorAll('.showIcon');
      console.log(divs[j]);
      for(var m = 0; m < divs.length; m++) {
        divs[m].style.display = 'none';
      }
      divs[j].style.display = 'block';
    }
  })(i);
  lis[i].onmouseout = (function(j) {
    return function() {
      console.log('-----', j);
      var divs = document.querySelectorAll('.showIcon');
      divs[j].style.display = 'none';
    }
  })(i);
};
// 点击回到顶部
function back() {
  console.log(document.documentElement.scrollTop);
  document.documentElement.scrollTop = 0;
}

