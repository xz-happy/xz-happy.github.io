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
        element_content: '首页'
     });
     var button = document.getElementById('freeToUse');
     button.onclick = function () {
        sensors.track('LMwebsiteClick', {
            element_content: '免费试用'
         });
         window.open('https://wenjuan.feishu.cn/m?t=smQABItilPBi-m7n1');
     };
     var a1 = document.getElementById('jdjg');
     var a2 = document.getElementById('hlwpt');
     var a3 = document.getElementById('bxgs');
     var log = document.getElementById('login');
     a1.onclick = jdjg;
     a2.onclick = bxgs;
     a3.onclick = hlwpt;
     log.onclick = openLogin;
     function jdjg () {
        sensors.track('LMwebsiteClick', {
          element_content: '面向经代机构'
        });
      }
    function bxgs () {
        sensors.track('LMwebsiteClick', {
            element_content: '面向保险公司'
        });
    }
    function hlwpt () {
        sensors.track('LMwebsiteClick', {
            element_content: '面向互联网平台'
        });
    }
    function openLogin() {
        sensors.track('LMwebsiteClick', {
            element_content: '客户登录'
        });
        window.open('http://www.zhongbaounion.com/grainbuds/#/login');
      }
}