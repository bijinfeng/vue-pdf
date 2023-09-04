import { defineComponent } from "vue";

import { OperateBar } from "@/components/OperateBar";

import { useContextProvide } from "./store";

export const PdfPreview = defineComponent({
  name: "PdfPreview",
  props: { file: { type: String, required: true } },
  setup() {
    const store = useContextProvide();

    console.log(store);

    return () => (
      <div class="pdf-container">
        <OperateBar />
      </div>
    );
  },
});
