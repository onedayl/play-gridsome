<template>
  <div style="height: 100%">
    <div class="map-wrapper">
      <ClientOnly>
        <amap
          :zoom="14"
          :center="focusExpo.coor"
        >
          <amap-tool-bar />
          <amap-marker
            :position="focusExpo.coor"
            :label="{
              content: `<b>${focusExpo.address}</b><br>导航：${focusExpo.navigation}`,
              direction: 'top',
              offset: [0, -10],
            }"
          />
        </amap>
      </ClientOnly>
    </div>
    <div style="margin-top: 20px; padding: 0 20px;">
      <div class="flex h-center">
        <b-dropdown position="is-top-right">
          <b-button type="is-light" slot="trigger" slot-scope="{ active }" expanded>
              <span>{{ focusExpo.title }}</span>
              <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
          </b-button>
          <b-dropdown-item
            v-for="(expo, index) in expos"
            :key="index"
            aria-role="listitem"
            @click="changeFocus(index)"
          >
            {{ expo.title }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <p style="margin-top: 20px; text-align: center">更多城市展厅陆续开放中……</p>
  </div>
</template>

<page-query>
query {
  data: allExpo(sortBy: "ctime", order: ASC) {
    edges {
      node {
        id,
        title,
        address,
        log,
        lat,
        navigation,
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Expo',
  metaInfo: {
    title: '展厅'
  },
  data () {
    return {
      focusIndex: 0,
    }
  },
  computed: {
    expos () {
      return this.$page.data.edges.map(d => {
        return {
          id: d.node.id,
          title: d.node.title,
          address: d.node.address,
          coor: [d.node.log, d.node.lat],
          navigation: d.node.navigation,
        }
      })
    },
    focusExpo () {
      return this.expos[this.focusIndex]
    }
  },
  methods: {
    changeFocus (i) {
      this.focusIndex = i
    }
  }
}
</script>
<style>
.map-wrapper {
  height: 70%;
}
.dropdown-content {
  max-height: 400px;
  overflow-y: scroll;
}
.dropdown, .dropdown-trigger {
  width: 192px;
}
.dropdown.is-mobile-modal > .dropdown-menu {
  z-index: 200;
}
a.dropdown-item {
  text-align: center;
  padding: 8px 0;
}
.background {
  z-index: 1001;
}
.dropdown {
  z-index: 1002;
}
</style>
