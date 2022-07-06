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
      element_content: '新闻动态'
  });
  // 登录跳转
  let log = document.getElementById('login');
  log.onclick = openLogin;
  function openLogin() {
    sensors.track('LMwebsiteView', {
      element_content: '用户登录'
    });
    window.open('http://www.zhongbaounion.com/grainbuds/#/login');
  }
}

// 新闻列表
var newsItem = [
  [{
    monthTime: '4/21',
    yearTime: '2022',
    title:'金融精准服务新市民，力码科技：提升保险服务的感知度和敏捷性',
    word: '“相当一部分新市民群体对疾病或意外的风险抵御能力较弱，传统保险从投保到售后理赔，往往涉及多方主体参与，且存在较多人工干涉，降低了保险服务效率。保险公司通过推动保险产品和服务的线上化、智能化，增强对新市民群体的风险覆盖，能够提升保险服务的感知度和便捷性。”力码科技...',
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247487893&idx=1&sn=a291252122d98f04f6eb4c6fe729bce3&chksm=cea88216f9df0b0009ce45755a1dcca62d1a75fe0e768ddb48070532d5a54a5fe1d363025a42&token=379704648&lang=zh_CN#rd',
  }, {
    monthTime: '4/19',
    yearTime: '2022',
    title: '助推区域经济高质量发展，力码科技入选朝阳区首批“未来独角兽企业”榜单',
    word: '近日，为进一步激发独角兽企业活力，提升新经济产业能级，建立朝阳区独角兽企业库，中关村科技园区朝阳园管理委员会正式发布“2021年朝阳区未来独角兽企业榜单”，致力于让保险经营更简单的北京力码科技有限公司成功入选，同时入选榜单的还有蓝湖、石墨文档、唱吧、妙健康等48家朝阳...',
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247487884&idx=1&sn=c7795e8b397fc3de933545d17ccfc9f4&chksm=cea8820ff9df0b19d05a64951ec4f47fc615c1b5e0c54fe76c22e298dc365e75dbbdf0f46c23&token=379704648&lang=zh_CN#rd',
  }, {
    monthTime: '3/31',
    yearTime: '2022',
    title: '力码科技入选《数据智能下的金融数字化转型报告2022》',
    word: '3月26日，华夏时报金融研究院与算力智库共同发布了《数据智能下的金融数字化转型报告2022》。《报告》系统梳理了数据智能下金融场景的典型应用案例和代表厂商，对金融业的数字化转型路径和未来趋势做出了预判，力码科技入选【数据智能下主要金融场景和案例分析】。',
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247487095&idx=1&sn=7ff7e5e422dfa49b83dacd2e3a420005&chksm=cea89df4f9df14e2ed915128b028d368b9738b03a74a244b79099f7ce41d0eb5cc9c4cb53e62&token=379704648&lang=zh_CN#rd',
  }, {
    monthTime: '3/30',
    yearTime: '2022',
    title: '数据智能重塑实体，力码科技荣膺“年度数据智能应用创新企业奖”',
    word: '3月26日，由华夏时报社主办的“数据智能重塑实体：2022智能数据论坛”成功举办，本次论坛集结了数据智能相关领域的专家学者，深入探讨当前行业发展的新趋势，共同描绘数据智能未来蓝图。致力于“让保险经营更简单”的北京力码科技有限公司荣膺“2021年度数据智能应用创新企业奖”。',
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247487087&idx=1&sn=ba14771740703c8a0be0c45e12c80528&chksm=cea89decf9df14fae180e102153dfe6e4aa7ee85c6a7b9a3e39598fa6ff27d433b93a69c143e&token=379704648&lang=zh_CN#rd',
  }, {
    monthTime: '3/16',
    yearTime: '2022',
    title: '保险数字化转型已上“赛道”，力码科技李超：让保险服务可感、可及、可靠',
    word: '“保险的本源是保障，保险科技的根本目的是依靠信息技术的力量让保险更好地为用户服务，让保险产品和服务可感、可及、可靠。这才是我们进行一切科技创新的初衷和目标，也是我们构建保险全链条生态体系，促进保险行业高质量发展的源动力。”李超表示。',
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247487066&idx=1&sn=a08b303cb46b4bc5de4ca6abd9b72fbf&chksm=cea89dd9f9df14cf146414f47f44e862601966f27f62e2c4119a3106497616a8df6831984d3b&token=379704648&lang=zh_CN#rd',
  }, {
    monthTime: '3/14',
    yearTime: '2022',
    title: '力码科技马经纬：增强保险服务的可感知度和便捷性，助力保险经营者降本增效',
    word: '马经纬表示，保险业全链条数字化构建贯穿产品设计、销售及售后全业务流程所涉及的所有场景，优化产业链成本结构，通过逐步替代流程化业务线的人力、优化扩展销售渠道、全面强化风控等环节，优化企业成本结构，实现降本增效。',
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247487061&idx=1&sn=a964aaad1c6717e8c5ed34cf8f20f8d1&chksm=cea89dd6f9df14c086ecc4a0f16790f47c8368086494f53841b257d9ead834cbd94acf6b9a58&token=379704648&lang=zh_CN#rd',
  }, {
    monthTime: '2/28',
    yearTime: '2022',
    title: '充分释放数据要素价值，力码科技荣膺“最佳保险科技数据应用奖” ',
    word: '2月25日，2021数字经济科技创新应用颁奖盛典圆满落幕。本次大会由华东江苏大数据交易中心主办，大会以“金融科技推动在线金融服务创新发展”为主题，聚集了来自政府、监管层、行业协会、业内专家、企业领袖，共同解读“十四五”金融科技发展新机遇。北京力码科技有限公司荣膺最佳...',
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247487047&idx=1&sn=1dec7327819e02610bb0d32f6e594e80&chksm=cea89dc4f9df14d27b9da5216e24526fd9cbbd4393bc1071cf28b4b1fe3ec71d6db242da9d50&token=379704648&lang=zh_CN#rd',
  }], [{
    monthTime: '2/22',
    yearTime: '2022',
    title: '力码科技马经纬：加强保险科技标准供给，助推产业链基础设施建设',
    word: '“加强保险科技标准供给，不但有助于新的信息技术在保险⾏业的规范应⽤，预防和减少金融风险的发⽣，也能推动和建设具有产业链基础设施性质的数字化保险生态平台，缓解广大保险经营者“各自为政”的局面。”力码科技联合创始人兼晨跃科技CEO马经纬表示。',
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247487024&idx=1&sn=81574fe4bdbb131121a6758494379f1c&chksm=cea89db3f9df14a517e51fae8ef0d723991a85d7a4cef41d19b2277aed7ad36dbbdef7bd59b3&token=379704648&lang=zh_CN#rd',
  }, {
    monthTime: '2/08',
    yearTime: '2022',
    title: '力码科技入选2021《胡润中国猎豹企业》',
    word: '2022年1月，胡润研究院携手亚洲领先的联合家族办公室万方家族办公室，联合发布《2021万方家族办公室·胡润中国猎豹企业》（Raﬄes Family Oﬃce · Hurun China Cheetahs 2021），研究院共搜集了近1,500家新兴行业非上市企业数据，旨在“寻找五年内最有可能达到独角兽级十亿美金估值...',
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247487012&idx=1&sn=a759fa0b66def603a4344d0889b8c4a9&chksm=cea89da7f9df14b1e20734a433dbb7d755fb7ba80d20b5aef347ce90e125f5f26daf7557b1a2&token=379704648&lang=zh_CN#rd',
  }, {
    monthTime: '1/24',
    yearTime: '2022',
    title: '力码科技CEO：保险科技发展应以隐私安全计算为“根”',
    word: '“未来，科技平台与保险公司的合作将不再局限于简单的营销赋能和系统支持，借助于三方科技平台的专业技术能力，在监管允许的范围内，实现双方数据共享，深入挖掘并充分释放数据价值，提升保险公司风险控制能力，改善产品同质化等问题，从而给用户提供更易触达、更易使用、体验更佳...',
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247487001&idx=1&sn=eba5bd5ec4dd5b297e6fb404d9e4adc1&chksm=cea89d9af9df148ca147f14284bdcebea8f2bd4b1966468d9241aad0f0d9fbf4996ec02766f0&token=379704648&lang=zh_CN#rd',
  }, {
    monthTime: '1/14',
    yearTime: '2022',
    title: '力码科技入选“2021保险数字化应用 TOP20榜单”',
    word: '1月13日，以“数字发展：构建新格局、构筑新优势”为主题的2022零壹智库数字经济年会在上海隆重召开。会上，零壹财经·零壹智库联合中国零售金融智库、《陆家嘴》杂志、《价值线》杂志发布了“2021保险数字化应用TOP 20榜单”。力码科技凭借在数字化转型突破及保险科技的创...',
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247486994&idx=1&sn=52e06c8583c00c4e0eca922da16d8f7c&chksm=cea89d91f9df14878c843930a174ea057c718a0d35af797fd1797d379d5118ecc566910955a8&token=379704648&lang=zh_CN#rd',
  }, {
    monthTime: '1/04',
    yearTime: '2022',
    title: '力码科技入选『2021全球金融科技创新TOP30榜单』',
    word: '近日，由亿欧EqualOcean 主办的 World Innovators Meetting (以下简称“WIM”) 2021世界创新者年会在国际金融中心上海、纽约同步举办。通过对全球3000多起金融科技投融资事件的分析，亿欧EqualOcean评选出了“2021全球金融科技创新TOP30”，力码科技跻身行列。',
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247486956&idx=1&sn=638ed44fc0fc8180a28df1542770cf3a&chksm=cea89e6ff9df1779f640ed1800932d41b82ae2f789e8489c1fea8aaa63a7016413a7d1573940&token=379704648&lang=zh_CN#rd',
  }, {
    monthTime: '12/22',
    yearTime: '2021',
    title: '2022中国企业服务年会，力码科技荣获“2021中国保险行业数智化优秀企业”',
    word: '由工信部指导，中国软件网、海比研究院、中国软件行业协会云计算分会联合主办，被称为企业服务领域的“达沃斯”——洞见2022中国企业服务年会，于北京召开。致力于“让保险经营更简单”的北京力码科技有限公司因在保险科技领域的卓越成果，荣获“2021中国保险行业数智化优秀企业”。',
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247486889&idx=1&sn=12e7245053d201933cf14f2424ac96e3&chksm=cea89e2af9df173c33851a644657b1532d997e12c3ecb685252fcdbcf5b5ae852eef72758c2b&token=379704648&lang=zh_CN#rd',
  }, {
    monthTime: '12/22',
    yearTime: '2021',
    title: '金融时报：助推行业健康发展 保险科技前景广阔',
    word: '力码科技联合创始人兼CEO李超在接受《金融时报》记者采访时表示，保险科技领域吸引资本加入已成为业内共识，互联网起步早、发展水平较高，加上信息技术革新，使我国保险科技领域发展有较为优质的基础设施建设，同时，庞大的市场潜力进一步提升了行业吸引力。',
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247486889&idx=2&sn=e29940982c51074e2e927cd1e2572486&chksm=cea89e2af9df173c9c303e286a9731001c059df1ed755d5e4b9b04bcb24f3ceea7db7af9afde&token=379704648&lang=zh_CN#rd',
  }], [{
    monthTime: '12/21',
    yearTime: '2021',
    title: '华夏时报：保险科技创新迎“窗口期”，隐私计算或成为推动保险科技数智化的核心能力',
    word: '力码科技CEO李超在接受《华夏时报》记者采访时表示：“借助隐私计算，促进多方数据的协同计算和价值共享，充分提升数据质量、打通数据孤岛，实现大数据在保险差异化定价、精准营销、风险管理等方面的深度应用。隐私保护是保险科技行业甚至整个金融科技行业发展的必然趋势。保证国...',                     
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247486736&idx=1&sn=261a8b9b748bac3f62a8c56fe23d9c0f&chksm=cea89e93f9df17852f2e49df998fe0b01a8352a2638546e394fbff7c808097a03027859a0a8a&token=379704648&lang=zh_CN#rd',
  }, {
    monthTime: '12/10',
    yearTime: '2021',
    title: '数字时代的“她力量”，力码科技创始人马琳荣膺2021“年度最佳女性创业者TOP10”',
    word: '12月8日，为了发掘女性创业力量，为中国女创企业的未来发展提供可参考的依据，猎云网在“激荡年代、创新求变”为主题的2021年度创投奖项评选中公布了2021「年度最佳女性创业者TOP10」榜单，北京力码科技有限公司创始人马琳成功入选。',
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247486665&idx=1&sn=67de8e8b83dd3e760035e4a7c2665c65&chksm=cea89f4af9df165c26a5c9b30ace5398e0bbc9e34a97e8e36a4782457a40e0e801c5776819d6&token=379704648&lang=zh_CN#rd',
  }, {
    monthTime: '12/08',
    yearTime: '2021',
    title: '力码科技荣获STIF国际科创节“2021年度高成长性企业”奖项',
    word: '今日，由数央网、数央公益联合国内众多科技及财经媒体共同发起的“2021国际科创节暨DSC2021数字服务大会”在天津圆满闭幕，本届国际科创节主题为：数智引领未来。力码科技凭借本年度在保险科技领域取得的突出成绩荣获“2021年度高成 性企业”。',
    src: 'https://mp.weixin.qq.com/s?__biz=Mzg2ODU5OTUzMg==&mid=2247486660&idx=1&sn=f1ca3ea6b850d4d1efbaef4ff9d99e3f&chksm=cea89f47f9df1651273e4ba7812c605ad824e4d0000daad29baea96a877c2faa816ddc29ca42&token=379704648&lang=zh_CN#rd',
  }]
];
// 获取分页元素
var pageDiv = document.querySelector('#page');
var spans = pageDiv.querySelectorAll('span');
var ems = pageDiv.querySelectorAll('em');
var ul = document.querySelector('.newsList');
// 存放翻页index
var currentIndex = 0;
createList(newsItem[currentIndex]);
// 遍历页码
for(var i = 0; i < spans.length; i++) {
  // 注册点击事件
  spans[i].onclick = (function(index) {
    return function () {
      ul.innerHTML = '';
      currentIndex = index;
      createList(newsItem[index])
      for(var i = 0; i < spans.length; i++) {
        spans[i].className = '';
      }
      //只保留当前span样式
      this.className = 'changeRed';
    }
})(i);
}
// 上一页
function prev () {
  console.log(currentIndex);
  if (currentIndex === 0 || currentIndex >= spans.length) return;
  ul.innerHTML = '';
  currentIndex -= 1;
  createList(newsItem[currentIndex]);
  for(var i = 0; i < spans.length; i++) {
    spans[i].className = '';
  }
  spans[currentIndex].className = 'changeRed';
}
// 下一页
function next() {
  if(currentIndex === 2 || currentIndex >= spans.length) return;
  ul.innerHTML = '';
  currentIndex += 1;
  createList(newsItem[currentIndex]);
  for(var i = 0; i < spans.length; i++) {
    spans[i].className = '';
  }
  spans[currentIndex].className = 'changeRed';
}

function createList (dataArr) {
  for (var i = 0; i < dataArr.length; i++) {
    var listNew = createElement(dataArr[i]);
    console.log(listNew);
    ul.appendChild(listNew);
  }
  ul.children[ul.children.length - 1].style.border = 'none';
}
function createElement (data) {
  // ul.innerHTML = '';
  // 创建li
  var li = document.createElement('li');
  ul.appendChild(li);
  li.className = 'newsOne';
  li.onclick = function () {
    window.open(data.src);
  };
  // 时间盒子
  var divTime = document.createElement('div');
  li.appendChild(divTime);
  divTime.className = 'time';
  // 年月
  var monthSpan = document.createElement('span');
  var br = document.createElement('br');
  var yearSpan = document.createElement('span');
  divTime.appendChild(monthSpan);
  divTime.appendChild(br);
  divTime.appendChild(yearSpan);
  monthSpan.innerHTML = data.monthTime;
  yearSpan.innerHTML = data.yearTime;
  // 内容盒子
  var contentDiv = document.createElement('div');
  li.appendChild(contentDiv);
  contentDiv.className = 'content';
  var linkDiv = document.createElement('div');
  var wordDiv = document.createElement('div');
  contentDiv.appendChild(linkDiv);
  contentDiv.appendChild(wordDiv);
  linkDiv.className = 'link';
  wordDiv.className = 'word';
  wordDiv.innerHTML = data.word;
  var titleCol = document.createElement('h4');
  var seeMore = document.createElement('span');
  linkDiv.appendChild(titleCol);
  linkDiv.appendChild(seeMore);
  titleCol.innerHTML = data.title;
  seeMore.innerHTML = '查看更多>';
  return li;
}
// 列表注册点击事件
function click(src) {
  window.open(src);
}

