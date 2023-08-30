import { defineComponent } from "vue";

export const PdfPreview = defineComponent({
  name: "PdfPreview",
  props: { file: { type: String, required: true } },
  setup() {
    return () => <div>ss</div>;
  },
});
