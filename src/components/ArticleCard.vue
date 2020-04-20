<template>
  <a :href="data.link" target="_blank">
    <article>
      <h5>{{ data.title }}</h5>
      <div class="flex v-center">
        <img :src="data.avatar" class="avatar" />
        <span class="author">{{ data.author }}</span>
      </div>
      <section class="cover-wrapper flex h-between">
        <template v-if="isMobile">
          <img :src="data.covers[0].url" class="cover" />
        </template>
        <template v-else>
          <img
            v-for="cover in data.covers"
            :key="cover.id"
            :src="cover.url"
            class="cover"
          />
        </template>
      </section>
    </article>
  </a>
</template>
<script>
export default {
  name: 'ArticleCardÍ',
  props: {
    data: Object,
    isMobile: Boolean,
  }
}
</script>
<style scoped>
article {
  margin-top: 12px;
  padding: 20px;
  box-shadow: 0 2px 50px 0 rgba(0,0,0,.1);
}
h5 {
  margin-bottom: 12px;
}
.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
.author {
  color: #aa8664;
  font-size: 12px;
  line-height: 24px;
  margin-left: 12px;
}
.cover-wrapper {
  margin-top: 12px;
}
.cover {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
@media (min-width: 375px) {
  .cover {
    height: 210px;
  }
}
@media (min-width: 410px) {
  .cover {
    height: 232px;
  }
}
@media (min-width: 768px) {
  .cover {
    width: 32%;
    height: 122px;
  }
}
@media (min-width: 960px) {
  .cover {
    height: 156px;
  }
}
@media (min-width: 1024px) {
  .cover {
    height: 168px;
  }
}
</style>