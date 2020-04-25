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
            v-for="item in caseOfHouse"
            :key="item.node.id"
            :data="item.node"
            :isMobile="isMobile"
          />
        </b-tab-item>
        <b-tab-item label="儿童房">
          <ArticleCard
            v-for="item in caseOfChildrenRoom"
            :key="item.node.id"
            :data="item.node"
            :isMobile="isMobile"
          />
        </b-tab-item>
        <b-tab-item label="经典空间">
          <ArticleCard
            v-for="item in caseOfSpace"
            :key="item.node.id"
            :data="item.node"
            :isMobile="isMobile"
          />
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>

<page-query>
query {
	cases: allCase(sortBy: "ctime", order: DESC) {
		edges {
      node {
        id
        category
				title
        author
        covers
        link
        ctime
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: '定制案例'
  },
  data () {
    return {
      activeTab: 0,
      isMobile: true,
    }
  },
  computed: {
    caseOfHouse () {
      return this.$page.cases.edges.filter(i => i.node.category == "1")
    },
    caseOfChildrenRoom () {
      return this.$page.cases.edges.filter(i => i.node.category == "2")
    },
    caseOfSpace () {
      return this.$page.cases.edges.filter(i => i.node.category == "3")
    }
  },
  created () {
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
}
.tabs li.is-active a {
  color: #aa8664;
  border-bottom: 2px solid #aa8664;
  margin-bottom: 0;
}
</style>