import { defineComponent } from "vue";

export const Divider = defineComponent({
  name: "Divider",
  setup() {
    return () => <span class="pdf-divider" />;
  },
});
