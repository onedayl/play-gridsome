<template>
  <div class="title-wrapper">
    <div class="bilingual-title">{{ ch }}</div>
    <div class="slash">/&nbsp;/&nbsp;/</div>
    <div class="bilingual-subtitle">{{ en }}</div>
  </div>
</template>
<script>
export default {
  name: 'BilingualTitle',
  props: {
    ch: String,
    en: String,
  }
}
</script>
<style>
.title-wrapper {
  text-align: center;
}

.bilingual-title {
  font-size: 32px;
  margin-top: 50px;
  letter-spacing: 16px;
}

.slash {
  color: #aa8664;
  font-size: 16px;
  font-weight: 700;
}

.bilingual-subtitle {
  font-size: 28px;
  color: #a8a8a8;
  font-weight: lighter;
}
</style>