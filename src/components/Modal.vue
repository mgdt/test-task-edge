<script setup>
import { useModalsStore } from "../stores/modals";

const modalsStore = useModalsStore();
</script>

<template>
  <div
    class="modal-wrap"
    :class="{ active: modalsStore.modalShown }"
    @click="modalsStore.toggleModal"
  >
    <div class="modal" @click.stop="">
      <div @click="modalsStore.toggleModal" class="modal-close">&times;</div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: start;
  overflow-y: scroll;
  opacity: 0;
  visibility: hidden;
  transition-duration: 0.2s;
}
.modal-wrap.active {
  opacity: 1;
  visibility: visible;
}
.modal {
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 5px;
  background-color: white;
  padding: 30px;
  padding-top: 40px;
  display: flex;
  position: relative;
}
.modal-close {
  cursor: pointer;
  font-size: 40px;
  position: absolute;
  top: 5px;
  right: 15px;
}
</style>
