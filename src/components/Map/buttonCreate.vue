<template>
  <div :class="{'btnPosClicked': active, 'btnPos' : !active}">
    <div class="d-flex flex-column bd-highlight mb-3">
      <div class="p-2 bd-highlight d-flex justify-content-center">
        <button type="button" class="btn btn-primary btnClick" @click="changeControlActive" v-if="active"><i class="fas fa-arrow-down"></i></button>
        <button type="button" class="btn btn-primary btnClick" @click="changeControlActive" v-else><i class="fas fa-arrow-up"></i></button>
      </div>
      <div class="p-2 bd-highlight d-flex justify-content-center pb-2" :class="{'d-none' : !active}">
        <create-trip-modal></create-trip-modal>
      </div>
      <div class="bd-highlight d-flex justify-content-center" :class="{'d-none' : !active}">
        <div class="d-flex flex-column bd-highlight scrollTrips">
          <div class="d-flex justify-content-center"><card-trip></card-trip></div>
          <div class="d-flex justify-content-center"><card-trip></card-trip></div>
          <div class="d-flex justify-content-center"><card-trip></card-trip></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardTrip from './CardTrip.vue';
import CreateTripModal from './CreateTripModal.vue';

export default {
  components: {CardTrip, CreateTripModal},
  data() {
    return {
      active: !true,
    };
  },
  methods: {
    changeControlActive(){
      this.active = !this.active;
    }
  },
};
</script>

<style>
.btnPos {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 20;
  width: 100vw;
  height: 7vh;
  transition: 0.3s linear;
}

.btnPosClicked {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 20;
  width: 100vw;
  min-height: 40vh;
  background-color: #fff;
  transition: 0.3s linear;
}

.btnClick {
  width: 30%;
  height: 20%;
}

.scrollTrips {
  height: 40vh;
  overflow-y: scroll;
}
</style>