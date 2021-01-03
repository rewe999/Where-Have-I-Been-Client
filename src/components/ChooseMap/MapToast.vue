<template>
  <div class="accordion pt-3" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
          @click="accordionActive = !accordionActive"
        >
          <!-- Do you want add {{ searchValue.text }} to Trip ? -->
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
        :class="{ show: accordionActive }"
      >
        <div class="accordion-body">
          <div class="d-flex justify-content-evenly">
            <button type="button" class="btn btn-info">Save</button>
            <button type="button" class="btn btn-warning" @click="nullArray()">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapToast",
  data() {
    return {
      accordionActive: false,
    };
  },
  // props: { searchValue: Object },
  methods: {
    nullArray() {
      this.accordionActive = null;
    },
  },
};
</script>

<style>
</style>