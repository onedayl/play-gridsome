<template>
  <div>
    <div style="margin-top: 40px">
      <b-tabs
        v-model="activeTab"
        position="is-centered"
        :animated="false"
        @change="changeActiveTab"
      >
        <b-tab-item label="经典全屋">
          <ArticleCard
            v-for="article in articles"
            :key="article.link"
            :data="article"
            :isMobile="isMobile"
          />
        </b-tab-item>
        <b-tab-item label="儿童房">
          <p>儿童房</p>
        </b-tab-item>
        <b-tab-item label="经典空间">
          <p>经典空间</p>
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>

<script>

export default {
  metaInfo: {
    title: '定制案例'
  },
  data () {
    return {
      activeTab: 0,
      isMobile: false,
      articles: [{
        title: '去他的佛系，就要为「简美」家具打Call',
        avatar: 'https://sz01.cdn.bjlqjm.biz/jiamu/official//official/img/logo_4309ba7.png',
        author: '良小禽',
        link: 'https://mp.weixin.qq.com/s/y5d9A4JvGgLmu-T4qZ5eQg',
        covers: [{
          id: '1',
          url: 'https://sz01.cdn.bjlqjm.biz/jiamu/official//official/img/custom_001_a93a929.jpg',
        }, {
          id: '2',
          url: 'https://sz01.cdn.bjlqjm.biz/jiamu/official//official/img/custom_002_b741709.jpg',
        }, {
          id: '3',
          url: 'https://sz01.cdn.bjlqjm.biz/jiamu/official//official/img/custom_003_72ead86.jpg',
        }]
      }, {
        title: '技术宅一年精装一个家，开心的却是他的小伙伴们',
        avatar: 'https://sz01.cdn.bjlqjm.biz/jiamu/official//official/img/logo_4309ba7.png',
        author: '老虎',
        link: 'https://mp.weixin.qq.com/s?__biz=MzA4MzU0OTMxNA==&mid=2651786725&idx=1&sn=b12be210b9db2d06c700d8eded0dbb31&scene=19#wechat_redirect',
        covers: [{
          id: '1',
          url: 'https://sz01.cdn.bjlqjm.biz/jiamu/official//official/img/custom_004_674a452.png',
        }, {
          id: '2',
          url: 'https://sz01.cdn.bjlqjm.biz/jiamu/official//official/img/custom_005_1187fb9.png',
        }, {
          id: '3',
          url: 'https://sz01.cdn.bjlqjm.biz/jiamu/official//official/img/custom_006_e17209d.png',
        }]
      }]
    }
  },
  mounted () {
    window.onresize = function (e) {
      const screenWidth = e.target.screen.width;
      this.isMobile = screenWidth < 768 ? true : false;
    }.bind(this)
  },
  methods: {
    changeActiveTab (i) {
      window.console.log(i)
    }
  }
}
</script>
<style>
.tabs ul, .tabs li a {
  border: 0;
  margin: 0;
  /* margin: 0 10px; */
}
.tabs li.is-active a {
  color: #aa8664;
  border-bottom: 2px solid #aa8664;
  margin-bottom: 0;
}
</style>