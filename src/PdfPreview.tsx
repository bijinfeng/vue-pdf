import { defineComponent } from "vue";

export const PdfPreview = defineComponent({
  name: "PdfPreview",
  props: { file: { type: String, required: true } },
  setup(props) {
    console.log(props.file);

    return () => <div>ss</div>;
  },
});
