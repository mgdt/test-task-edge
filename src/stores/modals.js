import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalsStore = defineStore("modals", () => {
  const modalShown = ref(false);

  function toggleModal() {
    if (modalShown.value) {
      modalShown.value = !modalShown.value;
      document.body.classList.remove("scroll-disabled");
      return;
    }
    modalShown.value = !modalShown.value;
    document.body.classList.add("scroll-disabled");
  }

  return { modalShown, toggleModal };
});
