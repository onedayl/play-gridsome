<template>
  <div>
    <div class="carousel_wrapper">
      <b-carousel>
        <b-carousel-item v-for="(item, i) in 7" :key="i">
          <img :src="images[i]">
        </b-carousel-item>
      </b-carousel>
    </div>
    <BilingualTitle ch="关于我们" en="About Us" />
    <div style="margin-top: 40px; padding: 0 20px;">
      <p>良禽佳木由木匠世家创立，秉持“真材实料好工艺”的产品理念，自建工厂，用好原料、好工艺做禁得住用，耐得住看的现代实木家具，与人们一起成就梦想的家。</p>
      <p>全国物流可达城市均可上门量尺订制，送货安装。</p>
      <LabelTitle title="用料 & 工艺" />
      <ul>
        <li>木材：北美进口GLC，Baillie等品牌标准烘烤木材（白蜡木、白橡木、樱桃木、黑胡桃木），符合FSC标准，闪电拼缝，大板直拼。通体无辅料，不使用贴皮板、齿接板，三层加芯板，不使用松木、泡桐、橡胶木等低质木材。</li>
        <li>涂料：德国欧诗木(OSMO)木蜡油。</li>
        <li>乳胶：德国汉高(Henkel)拼板乳胶。</li>
        <li>五金：德国海蒂诗(Hettich)等品牌五金件。</li>
        <li>工艺：小件家具（斗柜、电视柜、桌椅等），为榫卯结构整装工艺。大件家具（床，衣柜、书柜），为活榫卯配合金属螺栓工艺。家具精细打磨，无死角。</li>
      </ul>
    </div>
    <div style="margin-top: 40px">
      <g-image src="~/assets/showcase.png" />
    </div>
    <BilingualTitle ch="联系我们" en="Contact Us" />
    <div style="text-align: center; margin-top: 40px;">
      <div class="flex h-center">
        <div class="qrcode">
          <g-image src="~/assets/wechat.jpg" alt="wechat" fit="contain" background="#ffffff" />
        </div>
        <div class="qrcode">
          <g-image src="~/assets/miniprogram.jpg" alt="wechat" />
        </div>
      </div>
      <p style="margin: 20px 0 8px 0"><strong>北京良禽佳木家居有限公司</strong></p>
      <p style="font-size: 14px">13911521580（老虎） 13931647670（小强）</p>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: '首页'
  },
  data () {
    return {
      images: [
        'https://cdn.sz01.yunmicloud.biz/jiamu/official//official/img/img2_6ab7eeb.jpg',
        'https://cdn.sz01.yunmicloud.biz/jiamu/official//official/img/img1_0f951b8.jpg',
        'https://cdn.sz01.yunmicloud.biz/jiamu/official//official/img/img7_c8c515a.jpg',
        'https://cdn.sz01.yunmicloud.biz/jiamu/official//official/img/img6_88ce4f2.jpg',
        'https://cdn.sz01.yunmicloud.biz/jiamu/official//official/img/img5_58fe1f6.jpg',
        'https://cdn.sz01.yunmicloud.biz/jiamu/official//official/img/img4_595549b.jpg',
        'https://cdn.sz01.yunmicloud.biz/jiamu/official//official/img/img3_a26f91c.jpg',
      ]
    }
  }
}
</script>

<style>
.columns, .column {
  margin: 0;
  padding: 0;
}

.column, .carousel-item, .showcase, .showcase img {
  height: 220px;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel .carousel-indicator .indicator-item .indicator-style {
  border-color: #aa8664;
}

.carousel .carousel-indicator .indicator-item.is-active .indicator-style, .carousel .carousel-indicator .indicator-item .indicator-style:hover {
  background-color: #aa8664;
}

@media (min-width: 576px) {
  .column, .carousel-item {
    height: 324px;
  }
}

@media (min-width: 768px) {
  .column, .carousel-item {
    height: 432px;
  }
}

@media (min-width: 960px) {
  .column, .carousel-item {
    height: 540px;
  }
}
</style>
