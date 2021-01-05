<template>
  <gallery-modal></gallery-modal>
</template>

<script>
import GalleryModal from "../components/GalleryComponents/GalleryModal.vue";

export default {
  components: { GalleryModal },
  name: "Gallery",
};
</script>

<style>
.show {
  display: block;
  padding-right: 17px;
}

.uploadImage {
  width: 100%;
  max-height: 5rem;
}
</style>