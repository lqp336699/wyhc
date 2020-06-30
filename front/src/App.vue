<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/" class="item" exact-active-class="active">
        <van-icon name="wap-home" />
        <span>首页</span>
      </router-link>
      <router-link to="/expert" class="item" active-class="active">
        <van-icon name="manager" />
        <span>专家</span>
      </router-link>
      <router-link to="/match" class="item" active-class="active">
        <van-icon name="label" />
        <span>赛事</span>
      </router-link>
      <router-link to="/digitalColor" class="item" active-class="active">
        <van-icon name="fire" />
        <span>数字彩</span>
      </router-link>
      <router-link to="/my" class="item" active-class="active">
        <van-icon name="friends" />
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">

  #nav{
    height: 50px;
    width: 100%;
    padding-top: 4px;
    box-sizing: border-box;
    border-top: 1px solid #ccc;
    background-color: #fff;
    z-index: 100000;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
  }
  .item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    color:#888;
  }
  div .van-icon{
    font-size:28px;
  }
  .active{
    color:#e00;
  }


</style>
