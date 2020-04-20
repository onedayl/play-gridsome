<template>
  <div style="height: 100%">
    <div class="map-wrapper">
      <ClientOnly>
        <amap
          :zoom="14"
          :center="focusExpo.coordinate"
        >
          <amap-tool-bar />
          <amap-marker
            :position="focusExpo.coordinate"
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
        <b-dropdown aria-role="list">
          <b-button type="is-light" slot="trigger" slot-scope="{ active }" expanded>
              <span>{{ focusExpo.name }}</span>
              <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
          </b-button>
          <b-dropdown-item
            v-for="(expo, index) in expos"
            :key="index"
            aria-role="listitem"
            @click="changeFocus(index)"
          >
            {{ expo.name }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <p style="margin-top: 20px; text-align: center">更多城市展厅陆续开放中……</p>
  </div>
</template>

<script>

export default {
  name: 'Expo',
  metaInfo: {
    title: '展厅'
  },
  data () {
    return {
      focusIndex: 0,
      expos: [{
        name: '北京展厅',
        address: '北京市顺义区后俸伯北路4号院',
        coordinate: [116.705984, 40.141721],
        navigation: '良禽佳木北京展厅',
      }, {
        name: '广州展厅',
        address: '广州市番禹区西坊大街264号西坊大院文创园Y1栋',
        coordinate: [113.355841, 22.936533],
        navigation: '良禽佳木广州展厅',
      }, {
        name: '天津工厂展厅',
        address: '天津市宁河区(芦台经济开发区)进场路东侧',
        coordinate: [117.750997, 39.359817],
        navigation: '良禽佳木宁河工厂',
      }, {
        name: '南通工厂展厅',
        address: '江苏省南通市如皋市益寿北路105号',
        coordinate: [120.544402, 32.413667],
        navigation: '良禽佳木南通工厂',
      }]
    }
  },
  computed: {
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
.dropdown .background {
  z-index: 199;
}
</style>
