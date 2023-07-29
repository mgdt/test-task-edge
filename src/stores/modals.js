import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalsStore = defineStore("modals", () => {
  const modals = ref({
    message: false,
    example: false,
  });

  function toggleModal(modal) {
    if (modals.value[modal]) {
      modals.value[modal] = !modals.value[modal];
      document.body.classList.remove("scroll-disabled");
      return;
    }
    modals.value[modal] = !modals.value[modal];
    document.body.classList.add("scroll-disabled");
  }

  return { modals, toggleModal };
});
