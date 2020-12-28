<template>
  <div class="card mb-3" style="width: 80%; min-height: 2rem;">
  <div class="row g-0">
    <div class="col-md-4 d-flex justify-content-center">
      <img src="https://source.unsplash.com/daily" alt="imgCard" class="imageCardTrip ">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title vw-75">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div class="d-flex justify-content-evenly">
        <edit-trip-modal></edit-trip-modal>
        <modal-delete></modal-delete>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ModalDelete from './ModalDelete.vue';
import EditTripModal from './EditTripModal.vue';

export default {
  components: {ModalDelete, EditTripModal}
};
</script>

<style>
.imageCardTrip {
  width: 13rem;
  height: 13rem;
}

.btnAction{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>