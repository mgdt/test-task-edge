<script setup>
const props = defineProps({
  modelValue: String,
  errors: String,
  label: String,
});
const emit = defineEmits(["update:modelValue", "blur"]);
</script>

<template>
  <label class="custom-input">
    <p>{{ props.label }}</p>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
      type="text"
    ></textarea>
    <span v-if="props.errors">{{ props.errors }}</span>
  </label>
</template>

<style scoped>
.custom-input {
  position: relative;
}
textarea {
  height: 100px;
  width: 300px;
  font-size: 16px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid rgb(201, 201, 201);
  border-radius: 5px;
  outline: none;
  resize: vertical;
  padding-top: 15px;
  padding-bottom: 15px;
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
