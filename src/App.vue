<script setup>
import Modal from "./components/Modal.vue";
import ModalForm from "./components/ModalForm.vue";
import SomeLayout from "./components/SomeLayout.vue";
</script>

<template>
  <SomeLayout></SomeLayout>
  <Modal>
    <ModalForm></ModalForm>
  </Modal>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
body.scroll-disabled {
  overflow: hidden;
}
</style>
