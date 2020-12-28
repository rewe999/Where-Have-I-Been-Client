<template>
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="activeShow = !activeShow">
  Create New Trip
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" :class="{show : activeShow}">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="createTrip">CREATE YOUR TRIP</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="activeShow = false"></button>
      </div>
      <div class="modal-body">
        <!--  -->
        <div class="mb-3">
            <label for="nameOfTheTrip" class="form-label">Name of the Trip</label>
            <input type="email" class="form-control" id="nameOfTheTrip" placeholder="Here you can enter the name of the trip">
            </div>
            <div class="mb-3">
            <label for="TripDescribe" class="form-label">Trip Describe</label>
            <textarea class="form-control" id="TripDescribe" placeholder="Here you can describe your trip in a few words" rows="3"></textarea>
        </div>

        <div class="input-group mb-3">
            <label class="input-group-text" for="TripUpload">Upload</label>
            <input type="file" class="form-control" id="TripUpload">
        </div>

        <div class="form-group row">
            <label for="TripDate" class="col-2 col-form-label">Date</label>
            <div class="col-10">
                <input class="form-control" type="date" id="TripDate">
            </div>
        </div>
        <!--  -->
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">NEXT STEP</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      activeShow: false
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