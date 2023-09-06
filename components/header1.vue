<template>
    <div class="header ">
    <header class="first-header h-15 bg-blue-500 bg-contain p-2">
       <nav class="inner h-bar-100 flex justify-between border-box">
        <div class="topLink" >
            <a href="/" class="flex align-center" data-v-d6c216a8="">
                <img src="https://static.aiscore.com/_nuxt/img/logo.948162c.png" alt="#" class="pcLogo p-content-box"></a>
                 <span class="line">|</span> 
                 <a href="https://www.thesports.com" target="_blank" class="theSports">
                    <i class="iconfont icon-thesports" >Sparrow</i> 
                    <i class="iconfont icon-data">jack</i></a>
                </div>
                <div class="flex align-center toolRightBox">
                    <img src="https://static.aiscore.com/_nuxt/img/appIcon.66614fb.png" alt="#" class="appIcon" >
                     <div class="searchBox">
                        <input placeholder="Search" type="text" value="" class="searchInput"  >
                         <span class="searchIcon">
                          <Icon name="material-symbols:search-rounded" class="iconfont" style="font-size: 1.60rem; margin-left: 5px; "  />
                        </span>
                    </div> 
                    <span class="signIn bh" >Sign in</span>
                     <div class="cur-pointer ml-24 color-w moreOptionBox relative">
                        <span class="moreOption" >
                            <Icon name="material-symbols:menu-rounded" class="iconfont" style="font-size: 1.90rem; margin-left: 5px;" />
                        </span>
                     </div>
                    </div>
       </nav>
    </header>
   <header class="sub-header h-[48px] bg-blue-500" >
    <nav class="inner h-bar-100 flex border-box justify-between">
        <div class="flex flex-1 opacity-100">
            <div id="ballTypeRef" class="flex">
                <a href="/" class="sub-tab active h-[48px] relative">
                    <span class="text-box flex whitespace-no-wrap">
                        <Icon name="ion:md-football"  class="activeBallIcon" />
                         <span class="text font-500" >Football</span>
                          <span class="livenum active" >13</span>
                        </span>
                    </a>
                    <a href="/basketball" class="sub-tab relative" >
                        <span class="text-box flex whitespace-no-wrap" >
                        <Icon name="solar:basketball-outline" class="iconfont" />
                            <span class="text font-500" >Basketball</span>
                             <span class="livenum" >4</span>
                            </span>
                        </a>
                        <a href="/tennis" class="sub-tab relative" >
                        <span class="text-box flex whitespace-no-wrap" >
                        <Icon name="emojione-monotone:tennis" class="iconfont" />
                            <span class="text font-500" >Tennis</span>
                             <span class="livenum" >14</span>
                            </span>
                        </a>
                        <a href="/cricket" class="sub-tab relative" >
                            <span class="text-box flex whitespace-no-wrap" >
                        <Icon name="material-symbols:sports-cricket-outline-rounded" class="iconfont" />
                            <span class="text font-500" >Cricket</span>
                             <span class="livenum" >14</span>
                            </span>
                        </a>
        
                        <a href="/baseball" class="sub-tab relative" >
                        <span class="text-box flex whitespace-no-wrap" >
                            <Icon name="mdi:baseball-bat" class="iconfont" />
                            <span class="text font-500" >Baseball</span>
                             <span class="livenum" >4</span>
                            </span>
                        </a>
                        <a href="/esports" class="sub-tab relative" >
                        <span class="text-box flex whitespace-no-wrap" >
                            <Icon name="material-symbols:sports-esports-outline" class="iconfont" />
                            <span class="text font-500" >Esports</span>
                             <span class="livenum" >4</span>
                            </span>
                        </a>
                        <a href="/volleyball" class="sub-tab relative" >
                        <span class="text-box flex whitespace-no-wrap" >
                            <Icon name="ph:volleyball" class="iconfont" />
                            <span class="text font-500" >Volleyball</span>
                             <span class="livenum" >4</span>
                            </span>
                        </a>
                                 
                                             <div class="flex align-center items-center" style="color: rgb(255, 255, 255); padding: 0px 24px;" >
                                                <div class="el-dropdown">
                                                    <span class="el-dropdown-link moreBox" aria-haspopup="list" aria-controls="dropdown-menu-9409" role="button" tabindex="0">
                                                        <span class="text font-500 moreText">More</span> <Icon class="iconfont" name="ion:md-arrow-dropdown"/></span> 



                                                      <ul class="el-dropdown-menu el-popper" style="display:none;"  id="dropdown-menu-9409">
                                                        <div class="moreItem pl-[8px] ">
                                                            <li tabindex="-1" class="el-dropdown-menu__item">
                                                            <a  href="/ice-hockey" class="flex align-center justify-between">
                                                                <div  class="flex align-center">
                                                                    <i  class="iconfont icon-bingqiu-weixuanzhong" style="color: rgb(96, 98, 102);"></i>
                                                                     <span  class="moreBallName">  Hockey

                                                                        <span  class="liveMatchNum">1</span>
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li tabindex="-1" class="el-dropdown-menu__item">
                                                            <a href="/american-football" class="flex align-center justify-between" >
                                                                <div class="flex align-center">
                                                                    <i class="iconfont icon-ganlanqiu-weixuanzhong" style="color:#606266;"></i> 
                                                                    <span class="moreBallName">
                                                                  AM. Football
                                                        </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li tabindex="-1" class="el-dropdown-menu__item">
                                            <a href="/table-tennis" class="flex align-center justify-between">
                                                <div class="flex align-center" >
                                                    <i class="iconfont icon-pingpangqiu-weixuanzhong" style="color:#606266;"></i>
                                                     <span class="moreBallName">
                                                    Table Tennis
                                                    <span class="liveMatchNum">12</span>
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li  tabindex="-1" class="el-dropdown-menu__item">
                                        <a  href="/badminton" class="flex align-center justify-between">
                                            <div  class="flex align-center">
                                                <i  class="iconfont icon-yumaoqiu-weixuanzhong" style="color: rgb(96, 98, 102);"></i>
                                                 <span  class="moreBallName">
                                                    Badminton
                                                </span>
                                                </div>
                                            </a>
                                        </li>
                                    </div>
                                    <div class="moreItem" style="padding-left:0;padding-right:8px;">
                                        <li tabindex="-1" class="el-dropdown-menu__item">
                                            <a href="/handball" class="flex align-center justify-between">
                                                <div class="flex align-center">
                                                    <i class="iconfont icon-shouqiu-weixuanzhong" style="color:#606266;"></i>
                                                     <span class="moreBallName">
                                                    Handball
                                                </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li tabindex="-1" class="el-dropdown-menu__item">
                                            <a href="/snooker" class="flex align-center justify-between">
                                                <div class="flex align-center" >
                                                    <i class="iconfont icon-sinuoke-weixuanzhong" style="color:#606266;"></i> 
                                                    <span class="moreBallName">
                                                    Snooker
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li tabindex="-1" class="el-dropdown-menu__item">
                                        <a href="/waterpolo" class="flex align-center justify-between">
                                            <div class="flex align-center">
                                                <i class="iconfont icon-shuiqiu-weixuanzhong" style="color:#606266;"></i> 
                                                <span class="moreBallName">
                                                    Water Polo
                                                </span>
                                                </div>
                                            </a>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="flex align-center items-center" style="justify-content: flex-end">
                    <a href="/favorite" class="favorites">
                        <Icon class="iconfont" name="ic:sharp-star-purple500" style="color: yellow;"/>
                         <span >Favorites</span>
                        </a>
                    </div>
                </nav>
            </header>
    </div>
</template>

<script setup>


// const {data} = useFetch('')
</script>

<style lang="scss" scoped>


// first-header

.icon {
    color: white;
}
.header .inner {
    width: 1200px;
    margin: 0 auto;
    position: relative;
}
.header .topLink{
    display: flex;
    align-items: center;
}
.header .topLink .line {
    margin: 0 24px;
    color: #fff;
    opacity: .4;
}
.header .topLink .theSports {
    position: relative;
    top: 2px;
    color: #fff;
}
.pcLogo {
    height: 30px;
}
.p-content-box {
    padding: var(--content-box-margin);
}
.iconfont {
    font-family: iconfont!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-right: 5px;
}
.header .topLink .theSports .icon-data{
    font-size: 12px;
    position: absolute;
    top: -8px;
    right: -24px;
}
.header .toolRightBox .appIcon {
    width: 78px;
    height: 40px;
    cursor: pointer;
}
.header .toolRightBox .searchBox {
    display: inline-block;
    width: 247px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid hsla(0,0%,100%,.8);
    position: relative;
    margin-left: 24px;
}
.header .toolRightBox .searchBox .searchInput {
    display: inline-block;
    width: 207px;
    height: 40px;
    border: none;
    text-indent: 14px;
    font-size: 14px;
    color: #fff;
    background-color: hsla(0,0%,100%,0);
    outline: none;
    padding: 0;
}
.header .toolRightBox .searchBox .searchIcon {
    display: inline-flex;
    width: 40px;
    height: 40px;
    background-color: hsla(0,0%,100%,.1);
    position: absolute;
    right: 0;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.header .toolRightBox .searchBox .searchIcon i {
    color: #fff;
    font-size: 18px;
}
.header .toolRightBox .signIn {
    min-width: 84px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #fff;
    color: #fff;
    font-size: 14px;
    box-sizing: border-box;
    margin-left: 24px;
    cursor: pointer;
    text-align: center;
    line-height: 39px;
    padding: 0 5px;
}
.header .toolRightBox .moreOptionBox .moreOption {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid hsla(0,0%,100%,.8);
    box-sizing: border-box;
    cursor: pointer;
}
.iconfont {
    font-family: iconfont!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.header .toolRightBox .moreOptionBox .moreOption .icon-caidan {
    color: #fff;
    font-size: 20px;
}
.icon-sousuo:before {
    content: "\e903";
}



// sub-header


.header .inner .sub-tab.active {
    background-color: #f1f1f1;
    border-radius: 4px 4px 0 0;
    color: #0f80da;
    opacity: 1;
}
.header .inner .sub-tab {
    justify-content: flex-start;
    align-items: center;
    position: relative;
    line-height: 44px;
    padding: 0 24px;
    cursor: pointer;
    display: flex;
    font-size: 0;
    color: #cfe6f8;
}
.header .inner .sub-tab .text-box{
    vertical-align: middle;
    display: inline-block;
    line-height: normal;
    position: relative;
}
.activeBallIcon {
    width: 20px;
    height: 21px;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    margin-right: 8px;
    top: 0;
}
.header .inner .sub-tab .text-box .text {
    vertical-align: middle;
    display: inline-block;
    font-size: 14px;
}
.header .livenum {
    font-size: 12px;
    position: absolute;
    top: -11px;
    right: -7px;
    transform: scale(.95);
}
.favorites {
    color: #ffe000;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
}

// dropdown

.el-dropdown {
    display: inline-block;
    position: relative;
    color: #606266;
    font-size: 14px;
}
.el-dropdown {
    cursor: pointer;
}
.header .el-dropdown-link {
    display: flex;
    align-items: center;
}
.moreBox {
    color: #cfe6f8;
}

button, [role="button"] {
    cursor: pointer;
}
.font-en .font-500 {
    font-weight: 500;
    font-family: Rubik-Medium,MicrosoftYaHei,MicrosoftYaHei-Bold,PingFang SC;
}
.moreText[data-v-d6c216a8] {
    display: inline-block;
    
    .moreBox .moreIcon[data-v-d6c216a8] {
    margin-left: 8px;
    font-size: 12px;
}width: 31px;
}
.iconfont {
    font-family: iconfont!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>