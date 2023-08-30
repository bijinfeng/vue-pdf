import type { SlotsType } from "vue";

import { defineComponent } from "vue";

export const IconButton = defineComponent({
  name: "IconButton",
  props: {
    actived: {
      type: Boolean,
      default: false,
    },
  },
  emits: { click: () => true },
  slots: Object as SlotsType<{ default: any }>,
  setup(props, { emit, slots }) {
    return () => (
      <div
        onClick={() => emit("click")}
        class={[
          "p-[6px] rounded cursor-pointer hover:bg-[rgba(0,0,0,.04)]",
          { "bg-[rgba(0,0,0,.04)]": props.actived },
        ]}
      >
        {slots.default?.()}
      </div>
    );
  },
});
