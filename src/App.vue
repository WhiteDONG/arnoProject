<template>
  <div id="app">
    <div id="nav">
      <ul class="nav-wrap">
        <router-link to="/" exact><div class="logo-icn">logo-icon</div></router-link>
        <li class="drop-tilte"  style="margin-left: 22px;" >
          <router-link to="/voice_desktop" >桌面音箱</router-link>
          <dl class="drop-down">
            <dd><router-link to="/voice_desktop/f613" >F-613</router-link></dd>
            <dd><router-link to="/voice_desktop/littleBel" >Little Bel</router-link></dd>
            <dd><router-link to="/voice_desktop/lightPlace" >Light Standing</router-link></dd>
          </dl>
        </li>
      
        <router-link to="/voice_desktop/" tag="li" class="drop-tilte" >桌面音箱
          <ul class="drop-down">
            <li><router-link to="/voice_desktop/F-613" >F-613</router-link></li>
            <li><router-link to="/voice_desktop/Little Bel" >Little Bel</router-link></li>
            <li><router-link to="/voice_desktop/Light Standing" >Light Standing</router-link></li>
          </ul>
        </router-link>
        <router-link to="/voice_ambient/Bel" tag="li" class="drop-tilte">环境音箱
          <ul class="drop-down">
            <li><router-link to="/voice_ambient/Bel">Bel</router-link></li>
            <li><router-link to="/voice_ambient/Little Bel">Little Bel</router-link></li>
            <li><router-link to="/voice_ambient/BMA RX-80">BMA RX-80</router-link></li>
            <li><router-link to="/voice_ambient/Rex-060">Rex-060</router-link></li>
            <li><router-link to="/voice_ambient/BMA-816">BMA-816</router-link></li>
            <li><router-link to="/voice_ambient/CAMS0609">CAMS0609</router-link></li>
            <li><router-link to="/voice_ambient/Light Hanging">Light Hanging</router-link></li>
            <li><router-link to="/voice_ambient/Light Standing">Light Standing</router-link></li>
          </ul>
        </router-link>
        <router-link to="/home_theater/F-806" tag="li" class="drop-tilte">家庭影院
          <ul class="drop-down">
            <li><router-link to="/home_theater/F-806">F-806</router-link></li>
            <li><router-link to="/home_theater/CAMS0609">CAMS0609</router-link></li>
            <li><router-link to="/home_theater/F-804">F-804</router-link></li>
            <li><router-link to="/home_theater/F-802">F-802</router-link></li>
            <li><router-link to="/home_theater/LFT-2501">LFT-2501</router-link></li>
            <li><router-link to="/home_theater/CGB-602-F">CGB-602-F</router-link></li>
          </ul>
        </router-link>
        <router-link to="/home_recreation/AR1304" tag="li" class="drop-tilte">家庭娱乐
          <ul class="drop-down">
            <li><router-link to="/home_recreation/AR1304">AR1304</router-link></li>
            <li><router-link to="/home_recreation/AR1302">AR1302</router-link></li>
            <li><router-link to="/home_recreation/AR3801">AR3801</router-link></li>
          </ul>
        </router-link>
        <router-link to="/customized/F612-T4" tag="li" class="drop-tilte">专业定制
          <ul class="drop-down large-drop_down">
            <li><router-link to="/customized/F612-T4">F612-T4</router-link></li>
            <li><router-link to="/customized/MA1603-TW">MA1603-TW</router-link></li>
            <li><router-link to="/customized/F8012-3001">F8012-3001</router-link></li>
            <li><router-link to="/customized/CAMS0609">CAMS0609</router-link></li>
            <li><router-link to="/customized/LFT2501">LFT2501</router-link></li>
            <li><router-link to="/customized/AR1304">AR1304</router-link></li>
            <li><router-link to="/customized/AR1302">AR1302</router-link></li>
            <li><router-link to="/customized/AR3801">AR3801</router-link></li>
            <li><router-link to="/customized/CGB602">CGB602</router-link></li>
            <li><router-link to="/customized/BMA RX-80">BMA RX-80</router-link></li>
            <li><router-link to="/customized/Rex-060">Rex-060</router-link></li>
            <li><router-link to="/customized/BMA-816">BMA-816</router-link></li>
          </ul>
        </router-link>
        <router-link to="/major/major1" tag="li" class="drop-tilte">专业&商业
          <ul class="drop-down large-drop_down">
            <li><router-link to="/major/major1">会议厅</router-link></li>
            <li><router-link to="/major/major2">音乐厅&剧场</router-link></li>
            <li><router-link to="/major/major3">音乐俱乐部</router-link></li>
            <li><router-link to="/major/major4">咖啡厅&餐吧</router-link></li>
            <li><router-link to="/major/major5">音乐空间&音乐建筑 </router-link></li>
            <li><router-link to="/major/major6">电影院</router-link></li>
            <li><router-link to="/major/major7">时尚品牌店</router-link></li>
            <li><router-link to="/major/major8">美术馆&博物馆</router-link></li>
            <li><router-link to="/major/major9">寺院&禅意空间</router-link></li>
            <li><router-link to="/major/major10">体育场&公共设施</router-link></li>
            <li><router-link to="/major/major11">艺术展&演出活动</router-link></li>
            <li><router-link to="/major/major12">科研装置</router-link></li>
            <li><router-link to="/major/major13">酒店&商厦</router-link></li>
          </ul>
        </router-link>
        <router-link to="/brand/brand1" tag="li" class="drop-tilte" style='width:56px'>品牌
          <ul class="drop-down" style="width: 120px;">
            <li><router-link to="/brand/brand1">品牌介绍</router-link></li>
            <li><router-link to="/brand/brand2">Taguchi哲学</router-link></li>
            <li><router-link to="/brand/brand3">Taguchi技术</router-link></li>
            <li><router-link to="/brand/brand4">联系我们</router-link></li>
          </ul>
        </router-link>
        <router-link to="/wares" tag="li" class="drop-tilte">商品icon</router-link>
        <router-link to="/japan" tag="li" class="drop-tilte">日本语</router-link>
      </ul>
    </div>
    <router-view v-if="routerAlive" />
    <div class="footer">
      <div class="footer-content">
        <div class="extend-link">
          <dl>
            <dt>家用产品</dt>
            <dd>桌面音箱</dd>
            <dd>环境音箱</dd>
            <dd>家庭影院</dd>
            <dd>家庭娱乐</dd>
          </dl>
          <dl>
            <dt>专业产品</dt>
            <dd>背景音箱</dd>
            <dd>专业定制</dd>
            <dd>专业音箱</dd>
          </dl>
          <dl>
            <dt>产品购买</dt>
            <dd>企业商铺</dd>
          </dl>
          <dl>
            <dt>关于我们</dt>
            <dd>品牌介绍</dd>
            <dd>Taguchi哲学</dd>
            <dd>Taguchi技术</dd>
            <dd>联系我们</dd>
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
.router-link-active {color: #000000!important;}

</style>

<script>

export default {
    data() {
      return{
        routerAlive:true
      }
    },
    mounted(){
      document.getElementsByTagName('body')[0].scrollTop = 0
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
