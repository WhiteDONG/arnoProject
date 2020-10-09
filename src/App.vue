<template>
  <div id="app">
    <div id="nav">
      <ul class="nav-wrap">
        
        <router-link to="/" exact class="logo-icn">
          <img class="logo_san" src="./assets/images/sanjiao.png" alt="" srcset="" width="90px" height="60px">
        </router-link>
       
        <li class="drop-tilte"  style="margin-left: 22px;" >
          <router-link to="/voice_desktop" >桌面音箱</router-link>
          <dl class="drop-down">
            <dd><router-link to="/voice_desktop/F-613" >F-613</router-link></dd>
            <dd><router-link to="/voice_desktop/Little Bel" >Little Bel</router-link></dd>
            <dd><router-link to="/voice_desktop/Light Standing" >Light Standing</router-link></dd>
          </dl>
        </li>
        <li class="drop-tilte" >
          <router-link to="/voice_ambient" >环境音箱</router-link>
          <dl class="drop-down">
            <dd><router-link to="/voice_ambient/Bel">Bel</router-link></dd>
            <dd><router-link to="/voice_ambient/Little Bel">Little Bel</router-link></dd>
            <dd><router-link to="/voice_ambient/BMA RX-80">BMA RX-80</router-link></dd>
            <dd><router-link to="/voice_ambient/Rex-060">Rex-060</router-link></dd>
            <dd><router-link to="/voice_ambient/BMA-816">BMA-816</router-link></dd>
            <dd><router-link to="/voice_ambient/CAMS0609">CAMS0609</router-link></dd>
            <dd><router-link to="/voice_ambient/Light Hanging">Light Hanging</router-link></dd>
            <dd><router-link to="/voice_ambient/Light Standing">Light Standing</router-link></dd>
          </dl>
        </li>
        <li class="drop-tilte" >
          <router-link to="/home_theater" >家庭影院</router-link>
          <dl class="drop-down">
            <dd><router-link to="/home_theater/F-806">F-806</router-link></dd>
            <dd><router-link to="/home_theater/CAMS0609">CAMS0609</router-link></dd>
            <dd><router-link to="/home_theater/F-804">F-804</router-link></dd>
            <dd><router-link to="/home_theater/F-802">F-802</router-link></dd>
            <dd><router-link to="/home_theater/LFT-2501">LFT-2501</router-link></dd>
            <dd><router-link to="/home_theater/CGB-602-F">CGB-602-F</router-link></dd>
          </dl>
        </li>
        <li class="drop-tilte" >
          <router-link to="/home_recreation" >家庭娱乐</router-link>
          <dl class="drop-down">
            <dd><router-link to="/home_recreation/AR1304">AR1304</router-link></dd>
            <dd><router-link to="/home_recreation/AR1302">AR1302</router-link></dd>
            <dd><router-link to="/home_recreation/AR3801">AR3801</router-link></dd>
          </dl>
        </li>
        <li class="drop-tilte" >
          <router-link to="/customized" >专业定制</router-link>
          <dl class="drop-down large-drop_down">
            <dd><router-link to="/customized/F612-T4">F612-T4</router-link></dd>
            <dd><router-link to="/customized/MA1603-TW">MA1603-TW</router-link></dd>
            <dd><router-link to="/customized/F8012-3001">F8012-3001</router-link></dd>
            <dd><router-link to="/customized/CAMS0609">CAMS0609</router-link></dd>
            <dd><router-link to="/customized/LFT2501">LFT2501</router-link></dd>
            <dd><router-link to="/customized/AR1304">AR1304</router-link></dd>
            <dd><router-link to="/customized/AR1302">AR1302</router-link></dd>
            <dd><router-link to="/customized/AR3801">AR3801</router-link></dd>
            <dd><router-link to="/customized/CGB602">CGB602</router-link></dd>
            <dd><router-link to="/customized/BMA RX-80">BMA RX-80</router-link></dd>
            <dd><router-link to="/customized/Rex-060">Rex-060</router-link></dd>
            <dd><router-link to="/customized/BMA-816">BMA-816</router-link></dd>
          </dl>
        </li>
        <li class="drop-tilte" >
          <router-link to="/major" >专业&商业</router-link>
          <dl class="drop-down large-drop_down" style="width: 195%;">
            <dd><router-link to="/major/major1">会议厅</router-link></dd>
            <dd><router-link to="/major/major2">音乐厅&剧场</router-link></dd>
            <dd><router-link to="/major/major3">音乐俱乐部</router-link></dd>
            <dd><router-link to="/major/major4">咖啡厅&餐吧</router-link></dd>
            <dd><router-link to="/major/major5">音乐空间&音乐建筑 </router-link></dd>
            <dd><router-link to="/major/major6">电影院</router-link></dd>
            <dd><router-link to="/major/major7">时尚品牌店</router-link></dd>
            <dd><router-link to="/major/major8">美术馆&博物馆</router-link></dd>
            <dd><router-link to="/major/major9">寺院&禅意空间</router-link></dd>
            <dd><router-link to="/major/major10">体育场&公共设施</router-link></dd>
            <dd><router-link to="/major/major11">艺术展&演出活动</router-link></dd>
            <dd><router-link to="/major/major12">科研装置</router-link></dd>
            <dd><router-link to="/major/major13">酒店&商厦</router-link></dd>
          </dl>
        </li>
        <li class="drop-tilte" >
          <router-link to="/brand" >品牌</router-link>
          <dl class="drop-down" style="width: 120px;">
            <dd><router-link to="/brand/brand1">品牌介绍</router-link></dd>
            <dd><router-link to="/brand/brand2">Taguchi哲学</router-link></dd>
            <dd><router-link to="/brand/brand3">Taguchi技术</router-link></dd>
            <dd><router-link to="/brand/brand4">联系我们</router-link></dd>
          </dl>
        </li>
        <li class="drop-tilte" >
          <router-link to="/wares" ><img src="./assets/images/shopp.png" alt="" srcset="" width="19px" height="19px" style="vertical-align: middle;"></router-link>
        </li>
        <li class="drop-tilte" >
          <a href="http://www.taguchi-craft.jp/">日本语</a>
        </li>
      </ul>
    </div>
    <router-view v-if="routerAlive" />
    <div class="footer">
      <div class="footer-content">
        <div class="extend-link">
          <dl>
            <dt>家用产品</dt>
            <dd><router-link to="/voice_desktop" >桌面音箱</router-link></dd>
            <dd><router-link to="/voice_ambient" >环境音箱</router-link></dd>
            <dd><router-link to="/home_theater" >家庭影院</router-link></dd>
            <dd><router-link to="/home_recreation" >家庭娱乐</router-link></dd>
          </dl>
          <dl>
            <dt>专业产品</dt>
            <dd><router-link to="/customized" >背景音箱</router-link></dd>
            <dd><router-link to="/customized" >专业定制</router-link></dd>
            <dd><router-link to="/customized" >专业音箱</router-link></dd>
          </dl>
          <dl>
            <dt>产品购买</dt>
            <dd>企业商铺</dd>
          </dl>
          <dl>
            <dt>关于我们</dt>
            <dd><router-link to="/brand/brand1">品牌介绍</router-link></dd>
            <dd><router-link to="/brand/brand2">Taguchi哲学</router-link></dd>
            <dd><router-link to="/brand/brand3">Taguchi技术</router-link></dd>
            <dd><router-link to="/brand/brand4">联系我们</router-link></dd>
          </dl>
          <dl>
            <dt>关注我们</dt>
            <dd>公告声明</dd>
            <dd>最新资讯</dd>
            <dd>官方微信</dd>
            <dd>新浪微博</dd>
          </dl>
        </div>
        <p class="record">塔古奇电声技术（深圳）有限公司 ©2020 粤ICP备19143739号</p>
    </div>
    </div>
  </div>
</template>

<style scoped>
@import "./assets/style/main.css";
.router-link-active{color: #000000;}
.router-link-active::after{background: #000000!important;}
</style>

<script>

export default {
    data() {
      return{
        routerAlive:true
      }
    },
    mounted(){
      document.getElementsByTagName('body')[0].scrollTop = 0;
      window.onscroll=function(){
        var sl=-Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);
        document.getElementById('nav').style.left=sl+'px';
      }
    },
    methods: {
      routerFresh() {
        this.routerAlive = false
        this.$nextTick(() => {
          this.routerAlive = true
        });
      },
      getMethod(){
      }
    }
    
}
</script>
