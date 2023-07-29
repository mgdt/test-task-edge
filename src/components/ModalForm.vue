<script setup>
import * as yup from "yup";
import { useForm } from "vee-validate";
import ModalInput from "./ModalInput.vue";
import ModalTextarea from "./ModalTextarea.vue";

const schema = yup.object({
  email: yup
    .string()
    .email("Неверный формат почты")
    .required("Обязательное поле")
    .default("test@test.ru"),
  name: yup
    .string()
    .required("Обязательное поле")
    .max(101, "Поле содержит более 100 символов"),
  surname: yup.string().max(101, "Поле содержит более 100 символов"),
  phone: yup
    .string()
    .required("Обязательное поле")
    .min(18, "Неверный формат телефона"),
  message: yup.string().max(501, "Поле содержит более 500 символов"),
});

const { values, errors, defineComponentBinds, meta, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    email: "",
    name: "",
    surname: "",
    phone: "+7",
    message: "",
  },
});

const email = defineComponentBinds("email", {
  validateOnModelUpdate: false,
});
const name = defineComponentBinds("name", {
  validateOnModelUpdate: false,
});
const surname = defineComponentBinds("surname", {
  validateOnModelUpdate: false,
});
const phone = defineComponentBinds("phone", {
  validateOnModelUpdate: false,
});
const message = defineComponentBinds("message", {
  validateOnModelUpdate: false,
});

const onSubmit = handleSubmit((values, { resetForm }) => {
  alert(JSON.stringify(values));
  resetForm();
});
</script>

<template>
  <form @submit.prevent="onSubmit">
    <ModalInput
      v-bind="name"
      :errors="errors?.name"
      :label="'Имя'"
    ></ModalInput>
    <ModalInput
      v-bind="surname"
      :errors="errors?.surname"
      :label="'Фамилия'"
    ></ModalInput>
    <ModalInput
      v-bind="phone"
      :errors="errors?.phone"
      :label="'Телефон'"
      :mask="'+7 (###) ###-##-##'"
    ></ModalInput>
    <ModalInput
      v-bind="email"
      :errors="errors?.email"
      :label="'Email'"
    ></ModalInput>
    <ModalTextarea
      v-bind="message"
      :errors="errors?.message"
      :label="'Сообщение'"
    ></ModalTextarea>
    <button type="submit">Отправить</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: stretch;
  width: 100%;
}
button {
  background-color: cadetblue;
  border: none;
  padding-top: 15px;
  padding-bottom: 15px;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}
</style>
