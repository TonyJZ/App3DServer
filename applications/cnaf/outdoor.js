$(function () {
  console.log('search=', location.search);
  var search = location.search;
  if (search.indexOf("?") != -1) {
    var str = search.substr(1);
    if (str.indexOf("&") != -1) {
      str = str.split('&');
      window.RootApi = str[1].split('=')[1]; //自动配置请求接口
      window.parentHost = str[0].split('=')[1]; //动态配置父窗口域名
    }
  }
  // window.RootApi = 'http://192.168.7.1:8085';
  window.companyId = ''; //公司id
  var isFullScreen = false;
  try {
    if (!!top.$) {
      $('.toggle-screen').hide();
    }
  } catch (e) {}

  //复位
  $('.reset').click(function () {
    //取消巡航高亮
    cancelRcurrent();

    mutualExclusion(myApp1, 'all');

    myApp1.flyToHomePosition();
  });

  // let parentHost = location.hash.replace(/^#/, '');
  //全屏切换
  $('.toggle-screen').click(function () {
    isFullScreen = !isFullScreen;
    if (isFullScreen) {
      $('.toggle-screen').attr('src', 'assets/icons/icon_mini.svg');
      top.postMessage('fullScreen', parentHost);
    } else {
      $('.toggle-screen').attr('src', 'assets/icons/icon_max.svg');
      top.postMessage('littleScreen', parentHost);
    }
  });
  //底部栏 展开、收起
  $('.icon-unfold').click(function () {
    if ($(this).attr('src') === 'assets/icons/icon_unfold.svg') {
      $(this).attr('src', 'assets/icons/icon_packup.svg');
      $('.bottom-tabs').animate({
        bottom: '0'
      }, 300);
    } else {
      $(this).attr('src', 'assets/icons/icon_unfold.svg');
      $('.bottom-tabs').animate({
        bottom: '-86px'
      }, 300);
    }
  });
  // 底部tab点击事件
  $('.bottom-tabs').on('click', 'div', function () {
    myApp1.onKeyDown(null, $(this).attr('name'), $(this));
    if ($(this).hasClass('current')) {
      $(this).removeClass('current');
      var src = $(this).children('img').attr('src');
      $(this).children('img').attr('src', src.replace(/_p\.svg/g, '.svg'));
    } else {
      $(this).addClass('current');
      var _src = $(this).children('img').attr('src');
      $(this).children('img').attr('src', _src.replace(/\.svg/g, '_p.svg'));
    }
    if ($(this).attr('name') !== 'KeyR' && $(this).attr('name') !== 'KeyE' && $(this).attr('name') !== 'KeyS') {
      cancelRcurrent(); //取消巡航高亮
    };
  });
  //详情
  $('.details').click(function () {
    var currentStructId = JSON.parse($(this).attr('name'));
    if (currentStructId && currentStructId.length > 0) {
      top.postMessage({
        structId: currentStructId
      }, parentHost);
    };
  });

  //建筑对应的成本中心Id 用于调用图表接口
  window.structIdMap = {
    'heat_treatment_plant': [], //热处理工厂
    'forge_factory': [], //锻造工厂
    'joint_factory': [], //联合工厂
    'dct_factory': [], //DCT工厂
    'business_building': [], //行政大楼
    'test_center': [] //检测中心
  };
  //子窗口监听父级传过来的消息
  window.addEventListener('message', function (e) {
    console.log('outdoor=', e.data);
    if (e.origin !== parentHost) return;
    window.companyId = e.data;
    $.ajax({ //获取当前公司6个建筑成本中心Id
      url: window.RootApi + '/systemMgnt/home/queryStructs/' + window.companyId,
      success: function success(res) {
        if (res.content.code === 0) {
          var data = res.content.data;
          for (var key in data) {
            if (key === '热处理工厂') {
              data[key].splice(0, 1);
              window.structIdMap['heat_treatment_plant'] = data[key];
            } else if (key === '锻造工厂') {
              data[key].splice(0, 1);
              window.structIdMap['forge_factory'] = data[key];
            } else if (key === '联合工厂') {
              data[key].splice(0, 1);
              window.structIdMap['joint_factory'] = data[key];
            } else if (key === 'DCT工厂') {
              data[key].splice(0, 1);
              window.structIdMap['dct_factory'] = data[key];
            } else if (key === '行政大楼') {
              data[key].splice(0, 1);
              window.structIdMap['business_building'] = data[key];
            } else if (key === '检测中心') {
              data[key].splice(0, 1);
              window.structIdMap['test_center'] = data[key];
            }
          }
          console.log('data=', window.structIdMap);
        }
      }
    });
  }, false);
});