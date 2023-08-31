//nav-one
//#region 导航栏功能
// #region 地区菜单栏
var area_ps = document.querySelectorAll('.navigator-left .main .area .content .choose p');
var province = document.querySelector('.navigator-left .main .area .content .province');
var city = document.querySelector('.navigator-left .main .area .content .city');
area_ps[0].onclick = function () {
  area_ps[1].style.backgroundColor = 'rgb(243, 241, 241)';
  area_ps[1].style.borderBottom = '1px solid lightgray';
  area_ps[1].style.borderTop = '1px solid lightgray';
  area_ps[0].style.backgroundColor = 'white';
  area_ps[0].style.borderTop = '2px solid rgb(247, 0, 119)';
  area_ps[0].style.borderBottom = 'none';
  province.style.display = 'none';
  city.style.display = 'none';
  province.style.display = 'block';
}
area_ps[1].onclick = function () {
  area_ps[0].style.backgroundColor = 'rgb(243, 241, 241)';
  area_ps[0].style.borderBottom = '1px solid lightgray';
  area_ps[0].style.borderTop = '1px solid lightgray';
  area_ps[1].style.backgroundColor = 'white';
  area_ps[1].style.borderTop = '2px solid rgb(247, 0, 119)';
  area_ps[1].style.borderBottom = 'none';
  province.style.display = 'none';
  city.style.display = 'none';
  city.style.display = 'block';
}
// 关闭菜单栏
var area_i = document.querySelector('.navigator-left .main .area i');
var area = document.querySelector('.navigator-left .main .area');
area_i.onclick = function (ev) {
  area.style.display = 'none';
  aaa.classList.remove('change');
  ev.stopPropagation();
}
document.addEventListener('click', function (ev) {
  if (!area.contains(ev.target)) {
    area.style.display = 'none';
    aaa.classList.remove('change');
  }
});

// 开启
var area = document.querySelector('.navigator-left .main .area');
var aaa = document.querySelector('.navigator-left .main .aaa');
aaa.onclick = function (ev) {
  area.style.display = 'block';
  aaa.style.boxSizing = 'content-box';
  aaa.classList.add('change');
  ev.stopPropagation();
}

//更改地区
var main_p = document.querySelector('.navigator-left .main .aaa p');
var area_lis = document.querySelectorAll('.area ul li');
for (var i = 0; i < area_lis.length; i++) {
  var li = area_lis[i];
  li.onclick = function () {
    main_p.innerHTML = this.innerHTML;
    area.style.display = 'none';
    aaa.classList.remove('change');
  }
}
// #endregion
// #region 右侧登录
var de = document.querySelector('.navigator-right .one .nav-enter>p');
var one_p = document.querySelector('.navigator-right .one');
var nav_enter = document.querySelector('.navigator-right .one .nav-enter');
one_p.onmouseenter = function () {
  nav_enter.style.display = 'block';
}
one_p.onmouseleave = function () {
  nav_enter.style.display = 'none';
}
// #endregion
//#region 右侧签到
var scan = document.querySelector('.navigator-right .two .scan');
var two = document.querySelector('.navigator-right .two>p');
two.onmouseenter = function () {
  scan.style.display = 'block';
};
two.onmouseleave = function () {
  scan.style.display = 'none';
};
//#endregion
//#region 右侧特卖
var on_sale = document.querySelector('.navigator-right li:nth-child(5) .on-sale');
var temai = document.querySelector('.navigator-right .three');
temai.onmouseenter = function () {
  on_sale.style.display = 'block'
}
temai.onmouseleave = function () {
  on_sale.style.display = 'none'
}
//#endregion
//#region 右侧俱乐部
var club = document.querySelector('.navigator-right ul .four');
var clu = document.querySelector('.navigator-right li:nth-child(6) .club2');
club.onmouseenter = function () {
  clu.style.display = 'block';
}
club.onmouseleave = function () {
  clu.style.display = 'none';
}
//#endregion
//#region 右侧客户服务
var five = document.querySelector('.navigator-right ul .five');
var service = document.querySelector('.navigator-right ul .five .service');
five.onmouseenter = function () {
  service.style.display = 'block';
}
five.onmouseleave = function () {
  service.style.display = 'none';
}
//#endregion
//#region 右侧手机版
var six = document.querySelector('.navigator-right .six');
var phone = document.querySelector('.navigator-right .six .phone');

six.onmouseenter = function () {
  phone.style.display = 'block';
}
six.onmouseleave = function () {
  phone.style.display = 'none';
}
//#endregion
//#region 右侧更多
var seven = document.querySelector('.navigator-right .seven');
var more = document.querySelector('.navigator-right .seven .more');
seven.onmouseenter = function () {
  more.style.display = 'block';
}
seven.onmouseleave = function () {
  more.style.display = 'none';
}
//#endregion
//#endregion
//#region 搜索框弹出历史功能
var input = document.querySelector('.nav-two .search-box input');
var search_history = document.querySelector('.nav-two .search-box .search-content');
input.onclick = function (ev) {
  search_history.style.display = 'block';
  ev.stopPropagation();
}
document.addEventListener('click', function (ev) {
  if (!area.contains(ev.target)) {
    search_history.style.display = 'none';
  }
});
//#endregion
// #region 购物车
var gw_vessel = document.querySelector('.nav-two .gw-vessel');
var gw_car = document.querySelector('.nav-two .gw-vessel .gw-car')
gw_vessel.onclick = function (ev) {
  gw_car.style.display = 'block';
  ev.stopPropagation();
}
document.addEventListener('click', function (ev) {
  if (!area.contains(ev.target)) {
    gw_car.style.display = 'none';
  }
});
// #endregion
//#region 更多
var gengduo = document.querySelector('.nav-three>ul>li:last-child');
var added = document.querySelector('.nav-three>ul>li:last-child .added');
gengduo.onmouseenter = function () {
  added.style.height = '172px';
}
gengduo.onmouseleave = function () {
  added.style.height = '0px';
}
//#endregion
//#region 二级菜单栏
var li_first = document.querySelector('.nav-three>ul>li:first-child')
var second = document.querySelector('.nav-three>ul>li:first-child .second');
li_first.onmouseenter = function (ev) {
  second.style.height = '496px';
  ev.stopPropagation();
}
li_first.onmouseleave = function (ev) {
  second.style.height = '0px';
  ev.stopPropagation();
}
//#endregion
//#region 三级菜单栏
var lis = document.querySelectorAll('.nav-three>ul>li:first-child>.second>li');
var kuais = document.querySelectorAll('.nav-three>ul>li:first-child>.second>li>div')
for (var i = 0; i < lis.length; i++) {
  var li = lis[i];
  li.index = i;
  li.onmouseenter = function () {
    second.style.overflow = 'visible';
    kuais[this.index].removeAttribute('style');
    this.style.backgroundColor = 'white';
  }
  li.onmouseleave = function () {
    this.removeAttribute('style');
    kuais[this.index].style.display = 'none';
  }
}
second.onmouseleave = function () {
  second.removeAttribute('style');
}
//#endregion

//#region 轮播图
// 左右按钮
var slide_box = document.querySelector('.slideshow .slide-box .suspend');
var btn_lr = document.querySelectorAll('.slideshow .slide-box .suspend span')
var btn_i = document.querySelectorAll('.slideshow .slide-box .suspend span i')
slide_box.onmouseenter = function (ev) {
  clearInterval(slide_time);
  for (var i = 0; i < btn_lr.length; i++) {
    btn_lr[i].style.width = '33px';
  }
  for (var i = 0; i < btn_i.length; i++) {
    btn_i[i].style.display = 'block';
  }
  ev.stopPropagation();
}
slide_box.onmouseleave = function (ev) {
  clearInterval(slide_time);
  slide_time = setInterval(function () {
    index++;
    if (index > 3) {
      index = 1
    }
    slide_img.src = `./images/lun${index}.jpg`;
    for (var i = 0; i < slide_lis.length; i++) {
      slide_lis[i].style.borderBottom = '';
    }
    slide_lis[index - 1].style.borderBottom = '3px solid rgb(247, 0, 119)';
    if (index > 4) {
      index = 0;
    }
  }, 2000)
  for (var i = 0; i < btn_lr.length; i++) {
    btn_lr[i].style.width = '0px';
  }
  for (var i = 0; i < btn_i.length; i++) {
    btn_i[i].style.display = 'none';
  }
  ev.stopPropagation();
}
// 图片变换
var slide_img = document.querySelector('.slideshow .slide-box .suspend img');
var slide_lis = document.querySelectorAll('.slideshow .slide-box ul li');
var index = 1;
var slide_time = setInterval(function () {
  index++;
  slide_img.src = `./images/lun${index}.jpg`;
  for (var i = 0; i < slide_lis.length; i++) {
    slide_lis[i].style.borderBottom = '';
  }
  slide_lis[index - 1].style.borderBottom = '3px solid rgb(247, 0, 119)';
  if (index === 3) {
    index = 0;
  }
}, 2000)
//左右按钮实现图片变换
btn_lr[0].onclick = function () {
  clearInterval(slide_time);
  index--;
  index < 1 ? index = 3 : index;
  slide_time = setInterval(function () {
    index++;
    if (index === 4) {
      index = 1;
    }
    slide_img.src = `./images/lun${index}.jpg`;
    for (var i = 0; i < slide_lis.length; i++) {
      slide_lis[i].style.borderBottom = '';
    }
    slide_lis[index - 1].style.borderBottom = '3px solid rgb(247, 0, 119)';
  }, 2000)
  slide_img.src = `./images/lun${index}.jpg`;
  for (var i = 0; i < slide_lis.length; i++) {
    slide_lis[i].style.borderBottom = '';
  }
  slide_lis[index - 1].style.borderBottom = '3px solid rgb(247, 0, 119)';
}
btn_lr[1].onclick = function () {
  clearInterval(slide_time);
  index++;
  index > 3 ? index = 1 : index;
  slide_time = setInterval(function () {
    index++;
    if (index === 4) {
      index = 1;
    }
    slide_img.src = `./images/lun${index}.jpg`;
    for (var i = 0; i < slide_lis.length; i++) {
      slide_lis[i].style.borderBottom = '';
    }
    slide_lis[index - 1].style.borderBottom = '3px solid rgb(247, 0, 119)';
  }, 2000)
  slide_img.src = `./images/lun${index}.jpg`;
  for (var i = 0; i < slide_lis.length; i++) {
    slide_lis[i].style.borderBottom = '';
  }
  slide_lis[index - 1].style.borderBottom = '3px solid rgb(247, 0, 119)';
}
//下方的文字
for (var i = 0; i < slide_lis.length; i++) {
  var slide_li = slide_lis[i];
  slide_li.num = i;
  //移入
  slide_li.onmouseenter = function (ev) {
    clearInterval(slide_time);
    for (var i = 0; i < slide_lis.length; i++) {
      slide_lis[i].style.borderBottom = '';
    }
    slide_img.src = `./images/lun${this.num + 1}.jpg`;
    ev.stopPropagation();
    this.style.borderBottom = '3px solid rgb(247, 0, 119)';
  }
  //移出
  slide_li.onmouseleave = function (ev) {
    index = this.num + 1;
    slide_time = setInterval(function () {
      index++;
      if (index === 4) {
        index = 1;
      }
      for (var i = 0; i < slide_lis.length; i++) {
        slide_lis[i].style.borderBottom = '';
      }
      slide_lis[index - 1].style.borderBottom = '3px solid rgb(247, 0, 119)';
      slide_img.src = `./images/lun${index}.jpg`;
    }, 2000)
    ev.stopPropagation();
  }
}
//#endregion
// #region 侧边栏的收缩功能
var items = document.querySelectorAll('#aside-right ul li .item');
var tus = document.querySelectorAll('#aside-right ul .tu');
for (var i = 0; i < tus.length; i++) {
  var tu = tus[i];
  tu.index = i;
  tu.onmouseenter = function () {
    items[this.index].style.width = '110px';
    this.style.backgroundColor = 'rgb(247,0,119)';
  }
  tu.onmouseleave = function () {
    items[this.index].style.width = '0px';
    this.removeAttribute('style');
  }
}
// 登录
var account = document.querySelector('.account');
var first_li = document.querySelector('#aside-right li:first-child');
var account_i = document.querySelector('#aside-right ul li:first-child .account i');
first_li.onmouseenter = function () {
  account.style.width = '250px';
}
first_li.onmouseleave = function () {
  account.style.width = '0px';
}
account_i.onclick = function () {
  account.style.width = '0px';
}
//购物袋
var gw_account = document.querySelector('.gw-account');
var second_li = document.querySelector('#aside-right ul li:nth-child(2)')
var gw_account_i = document.querySelector('#aside-right ul li:nth-child(2) .gw-account i')
second_li.onclick = function (ev) {
  gw_account.style.width = '250px';
  ev.stopPropagation();
}
gw_account_i.onclick = function (ev) {
  gw_account.style.width = '0px';
  ev.stopPropagation();
}
document.onclick = function (ev) {
  gw_account.style.width = '0px';
  ev.stopPropagation();
}
// #endregion
