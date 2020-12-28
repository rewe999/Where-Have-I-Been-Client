<template>
<button type="button" class="btn btn-primary btnAction" data-bs-toggle="modal" data-bs-target="#ModalDelete" @click="actionDelete = !actionDelete">
  <i class="fas fa-trash"></i>
</button>

<!-- Modal -->
<div class="modal fade" id="ModalDelete" tabindex="-1" aria-labelledby="ModalDelete" aria-hidden="true" :class="{show : actionDelete}">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalDelete">Delete Confirm</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="actionDelete = false"></button>
      </div>
      <div class="modal-body">
        DO YOU WANT TO DELETE THE SELECTED TRIP?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
        <button type="button" class="btn btn-primary" @click="actionDelete = false">DELETE</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      actionDelete: false
    }
  }
}
</script>

<style>
.show {
  display: block; 
  padding-right: 17px;
  z-index: 20;
}

.modal-backdrop {
    display: none; 
}

.modal-content {
    margin: 2px auto;
    z-index: 1100 !important;
}
</style>