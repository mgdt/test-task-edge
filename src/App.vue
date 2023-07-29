<script setup>
import Modal from "./components/Modal.vue";
import ModalForm from "./components/ModalForm.vue";
import SomeLayout from "./components/SomeLayout.vue";
</script>

<template>
  <SomeLayout></SomeLayout>
  <Modal :name="'message'">
    <ModalForm></ModalForm>
  </Modal>
  <Modal :name="'example'">
    <div style="width: 300px">
      <h1 style="margin-bottom: 20px">Другая модалка</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        quisquam aspernatur ad veritatis earum possimus inventore et
        consequuntur, esse veniam qui consequatur iusto. Libero odit, blanditiis
        consectetur labore reiciendis ad.
      </p>
    </div>
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
