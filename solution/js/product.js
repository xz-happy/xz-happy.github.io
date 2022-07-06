// 产品与解决方案
// 登录跳转
window.onload = function () {
  var sensors = window['sensorsDataAnalytic201505'];
  sensors.init({
       server_url: 'https://baobaochudan03.datasink.sensorsdata.cn/sa?token=ec0cb16d45945e05&project=default',
   });
   sensors.registerPage({
       platform_type: 'PC',
       AppName: 'LMwebsite'
   });
   sensors.track('LMwebsiteView', {
      element_content: '产品与解决方案'
   });
   // banner跳转
var banner = document.querySelector('.center');
var button = banner.querySelector('button');
let log = document.querySelector('#login');
log.onclick = function () {
  sensors.track('LMwebsiteClick', {
      element_content: '客户登录'
  });
  window.open('http://www.zhongbaounion.com/grainbuds/#/login');
}
button.onclick = function() {
  sensors.track('LMwebsiteClick', {
    element_content: '免费试用'
  });
  window.open('https://wenjuan.feishu.cn/m?t=smQABItilPBi-m7n1');
}
//切换tab
var tab_list = document.querySelector('.tab_list');
var ul = tab_list.querySelector('ul');
var lis = tab_list.querySelectorAll('li');
var tab_cons = document.querySelectorAll('.tab_con_one');
var oldImgUrl = ['https://lima-cdn.oss-cn-beijing.aliyuncs.com/lima-website/pc/solution/img/firR.png', 'https://lima-cdn.oss-cn-beijing.aliyuncs.com/lima-website/pc/solution/img/secR.png', 'https://lima-cdn.oss-cn-beijing.aliyuncs.com/lima-website/pc/solution/img/thrR.png'];
var imgUrl = ['https://lima-cdn.oss-cn-beijing.aliyuncs.com/lima-website/pc/solution/img/firW.png', 'https://lima-cdn.oss-cn-beijing.aliyuncs.com/lima-website/pc/solution/img/secW.png', 'https://lima-cdn.oss-cn-beijing.aliyuncs.com/lima-website/pc/solution/img/thrW.png'];
// // 默认样式
// defaultSpan.style.background = `url(${imgUrl[0]})`;
// defaultSpan.style.backgroundSize = 'cover';
// 遍历注册事件
for(var i = 0; i < lis.length; i++) {
  lis[i].setAttribute('index', i);
  lis[i].onclick = (function(currentIndex) {
    return function () {
      for(var j = 0; j < lis.length; j++) {
        lis[j].classList.remove('currentTab');
        var span = lis[j].querySelector('span');
        span.style.background = `url(${oldImgUrl[j]})`;
        span.style.backgroundSize = 'cover';
      };
      lis[currentIndex].classList.add('currentTab');
      var span = lis[currentIndex].querySelector('span');
      span.style.background = `url(${imgUrl[currentIndex]})`;
      span.style.backgroundSize = 'cover';
        // 显示对应的tab_con
      var index = lis[currentIndex].getAttribute('index');
      for(var m = 0; m < tab_cons.length; m++) {
        tab_cons[m].style.display = 'none';
      }
      tab_cons[index].style.display = 'block';
    }
    // this.style.backgroundImage = 'url()';
  })(i);
}
// 初始化
created();
function created(){
  let hash = window.location.hash;
  console.log(hash);
  if (hash) {
    document.documentElement.scrollTop = 466;
  } else {
    return;
  }
  if (hash === '#1') {
    //console.log(document.documentElement.scrollTop);
    //document.documentElement.scrollTop = '114px';
    //window.pageYOffset = '114px';
    //window.scrollTo(114);
    lis[0].click();
  } else if(hash === '#2') {
    console.log('dier');
    tab_list.style.marginTop = '114px';
    lis[1].click();
  } else if(hash === '#3') {
    tab_list.style.marginTop = '114px';
    lis[2].click();
  }
}
}
