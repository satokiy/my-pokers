<script setup>
const props = defineProps({
  img: String,
  link: String,
  alt: String,
});
</script>

<template>
  <div class="link-card">
    <a :href="props.link" target="_blank">
      <img :src="props.img" :alt="props.alt" />
    </a>
  </div>
</template>

<style scoped>
.link-card {
  display: block;
  width: 100%;
  border-radius: 8px;
  border: 1px solid;
  border-color: #d3d3d3;
  overflow: hidden;
  -webkit-transition: all .2s;
  transition: all .2s;
  
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
}
</style>
