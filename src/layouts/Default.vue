<template>
  <div class="layout">
    <div class="header_wrapper flex h-center">
      <header class="header flex h-between-v-center">
        <g-link to="/">
          <g-image src="~/assets/logo.png" alt="logo" width=100 height=56 />
        </g-link>
        <nav class="flex">
          <div
            v-for="(link, index) in navLinks"
            :key="index"
            class="nav-link"
          >
            <g-link :to="link.path">{{ link.name}}</g-link>
          </div>
        </nav>
      </header>
    </div>
    <div class="content_wrapper flex h-center">
      <div class="content">
        <slot/>
      </div>
    </div>
    <div class="footer_wrapper flex hv-center">
      <footer class="flex wrap h-center">
        <div class="copyright">版权所有 北京良禽佳木家居有限公司</div>
        <div class="copyright">All Rights Reserved 京ICP备18056225号-1</div>
      </footer>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      navLinks: [{
        name: '城市展厅',
        path: '/expo/'
      }, {
        name: '定制案例',
        path: '/case/'
      }]
    }
  },
}
</script>

<style>
html, body {
  height: 100%;
}

body {
  font-family: 'PingFang SC', 'Tahoma', 'BlinkMacSystemFont', 'segoe ui', 'roboto', 'oxygen', 'cantarell', 'helvetica neue', 'ubuntu', 'sans-serif';
  color: #333333;
  margin:0;
  padding:0;
}

ul {
  list-style-type: none;
  margin: 0;
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.flex {
  display: flex;
}

.wrap {
  flex-wrap: wrap;
}

.hv-center {
  justify-content: center;
  align-items: center;
}

.h-center {
  justify-content: center;
}

.h-between-v-center {
  justify-content: space-between;
  align-items: center;
}

.header_wrapper {
  position: fixed;
  z-index: 1000;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 -1px 0 rgba(0,0,0,.05), 0 0 6px rgba(0,0,0,.1);
}

.header {
  width: 100%;
  max-width: 1024px;
}

.nav-link a {
  color: #aa8665;
  text-decoration: none;
  margin-right: 20px;
  margin-top: 6px;
  padding-bottom: 6px;
  display: inline-block;
  font-size: 14px;
}

.nav-link .active {
  border-bottom: 2px solid #aa8664;
}

.content_wrapper {
  flex: 1 0 auto;
  padding-top: 59px;
  padding-bottom: 40px;
}

.content {
  box-sizing: border-box;
  width: 100%;
  max-width: 1024px;
}

.qrcode {
  width: 120px;
  margin: 0 10px;
}

.footer_wrapper {
  flex: 0 0 auto;
  width: 100%;
  height: 56px;
  color: #f0f0f0;
  background-color: #1f2121;
}

.copyright {
  padding: 0 8px;
  font-size: 14px;
}

</style>
