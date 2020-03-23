<template>
  <div class="flex h-center">
    <div class="label-title flex hv-center">
      <span>{{ title }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LabelTitle',
  props: {
    title: String
  }
}
</script>
<style>
.label-title {
  width: 160px;
  height: 40px;
  color: #f8f8f8;
  font-size: 14px;
  font-weight: 600;
  text-indent: 8px;
  padding-top: 3px;
  margin: 32px 0;
  background-image: url('../assets/label.svg');
  background-size: cover;
}
</style>