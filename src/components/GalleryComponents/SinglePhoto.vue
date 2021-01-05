<template>
  <div class="p-2 bd-highlight" v-for="(f, i) in files" :key="i">
    <div class="card" style="width: 10rem">
      <img
        :src="urls[i]"
        class="card-img-top uploadImage"
        alt="selectPhoto"
        v-if="f"
      />
      <div class="card-body">
        <h5 class="card-title">{{ names[i] }}</h5>
        <a href="#" class="btn btn-primary" @click="onUpload(urls[i], i)"
          >Upload Photo</a
        >
        <a href="#" class="btn btn-primary mt-2" @click="setAvatar(f)"
          >Set as Avatar</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sp",
  props: { files: null, urls: null, names: null },
  methods: {
    onUpload(file, index) {
      // const fd = new FormData();
      // // const name = this.file.name;
      // fd.append('image',this.file);
      // axios.post('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',fd)
      // .then(res => console.log(res))
      // this.files.splice(index, 1);
      // this.urls.splice(index, 1);
      console.log(file, index);
    },
    setAvatar(data) {
      this.$emit("avatar-photo", URL.createObjectURL(data));
    },
  },
};
</script>

