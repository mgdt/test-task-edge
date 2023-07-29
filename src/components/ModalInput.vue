<script setup>
import { vMaska } from "maska";

const props = defineProps({
  modelValue: String,
  errors: String,
  label: String,
  mask: String,
});
const emit = defineEmits(["update:modelValue", "blur"]);
</script>

<template>
  <label class="custom-input">
    <p>{{ props.label }}</p>
    <input
      v-maska
      :data-maska="props.mask ? props.mask : ''"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
      type="text"
    />
    <span v-if="props.errors">{{ props.errors }}</span>
  </label>
</template>

<style scoped>
.custom-input {
  position: relative;
}
input {
  height: 40px;
  width: 100%;
  font-size: 16px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid rgb(201, 201, 201);
  border-radius: 5px;
  outline: none;
}
p {
  margin-bottom: 5px;
}
input:focus {
  border-color: rgb(108, 186, 212);
}
span {
  position: absolute;
  transform: translateY(100%);
  bottom: -5px;
  left: 0;
  font-size: 13px;
  color: red;
}
</style>
