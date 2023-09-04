import { defineComponent } from "vue";

import AmplifyIcon from "@/assets/amplify.svg?component";
import PageDownIcon from "@/assets/page-down.svg?component";
import PreviousIcon from "@/assets/previous.svg?component";
import ReduceIcon from "@/assets/reduce.svg?component";
import SideBarIcon from "@/assets/sidebar.svg?component";
import { IconButton } from "@/components/IconButton";

import { Divider } from "./Divider";

export const OperateBar = defineComponent({
  name: "OperateBar",
  props: {
    showThumbnail: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    checkThumbnail: () => true,
  },
  setup(props, { emit }) {
    return () => (
      <div class="pdf-operate">
        <IconButton
          actived={props.showThumbnail}
          onClick={() => emit("checkThumbnail")}
        >
          <SideBarIcon class="text-xl" />
        </IconButton>
        <Divider class="m-0" />
        <IconButton>
          <AmplifyIcon class="text-xl" />
        </IconButton>
        <IconButton>
          <ReduceIcon class="text-xl" />
        </IconButton>
        <Divider class="m-0" />
        <IconButton>
          <PreviousIcon class="text-xl" />
        </IconButton>
        <IconButton>
          <PageDownIcon class="text-xl" />
        </IconButton>
      </div>
    );
  },
});
