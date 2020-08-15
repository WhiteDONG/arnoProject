<template>
  <div id="app">
    <div id="nav">
      <ul class="wrap">
        <router-link to="/index/F-613" tag="li">桌面音箱
          <div class="">
            <ul>
              <li><router-link to="/index/F-613">F-613</router-link></li>
              <li><router-link to="/index/Little Bel">Little Bel</router-link></li>
              <li><router-link to="/index/Light Standing">Light Standing</router-link></li>
            </ul>
          </div>
        </router-link>
        <router-link to="/about" tag="li">环境音箱</router-link>
        <router-link to="/about" tag="li">家庭娱乐</router-link>
        <router-link to="/about" tag="li">专业定制</router-link>
        <router-link to="/about" tag="li">专业&商业</router-link>
        <router-link to="/about" tag="li">品牌</router-link>
        <router-link to="/about" tag="li">日本语</router-link>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.wrap {
    text-align: center;
    height: 18px;
}
.wrap > li {
    float: left;
    list-style-type: none;
    margin-right: 10px;
}
.wrap > li:hover {
    cursor: pointer;
    color: cadetblue;
}
</style>
