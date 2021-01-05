<template>
  <button
    type="button"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    @click="changeActive()"
  >
  <img src="../../assets/empty.jpg" alt="empty" class="avatarImageGallery" v-if="avatarSrc == null">
  <img :src="avatarSrc" alt="empty" class="avatarImageGallery" v-else>
  </button>

  <!-- Modal -->
  <div
    class="modal fade overflow-auto"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    :class="{ show: active }"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Upload Photos</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="active = false"
          ></button>
        </div>
        <div class="modal-body">
          <!-- start -->
          <input
            type="file"
            id="files"
            name="files"
            multiple
            @change="onFileSelected"
          /><br /><br />
          <div class="d-flex justify-content-evenly flex-wrap">
            <single-photo
              :files="files"
              :urls="urls"
              :names="names"
              @avatar-photo="setAvatar"
            ></single-photo>
          </div>
          <!-- end -->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="active = false"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SinglePhoto from "./SinglePhoto.vue";

export default {
  name: "Gallery Modal",
  components: { SinglePhoto },
  data() {
    return {
      active: false,
      files: [],
      urls: [],
      names: [],
      avatarSrc : null,
    };
  },
  methods: {
    changeActive() {
      this.active = !this.active;
    },
    onFileSelected(e) {
      this.files.push(e.target.files[0]);
      this.urls.push(URL.createObjectURL(e.target.files[0]));
      this.names.push(e.target.files[0].name);
    },
    setAvatar(data){
      this.avatarSrc = data;
      this.active = false;
    }
  },
};
</script>

<style>
.avatarImageGallery {
  width: 30rem;
  height: 40%;
}
</style>