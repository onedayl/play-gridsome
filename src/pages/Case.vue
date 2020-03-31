<template>
  <Layout>
    <div style="margin-top: 40px">
      <b-tabs
        v-model="activeTab"
        position="is-centered"
        :animated="false"
        @change="changeActiveTab"
      >
        <b-tab-item label="经典全屋">
          <p>经典全屋</p>
        </b-tab-item>
        <b-tab-item label="儿童房">
          <p>儿童房</p>
        </b-tab-item>
        <b-tab-item label="经典空间">
          <p>经典空间</p>
        </b-tab-item>
      </b-tabs>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '定制案例'
  },
  data () {
    return {
      activeTab: 0,
    }
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