import type { PDFDocumentLoadingTask } from "pdfjs-dist";
import type { InjectionKey } from "vue";

import { inject, provide, reactive } from "vue";

export interface StoreState {
  state: ReturnType<
    typeof reactive<{
      pdfLoading: boolean;
      pdfError: boolean;
      pdfPromise: PDFDocumentLoadingTask | null;
    }>
  >;
}

export const PROVIDE_KEY = Symbol() as InjectionKey<StoreState>;

export const useContextProvide = () => {
  const state = reactive<StoreState["state"]>({
    pdfLoading: false,
    pdfError: false,
    pdfPromise: null,
  });

  provide(PROVIDE_KEY, { state });

  return { state };
};

export const useContext = () => {
  return inject(PROVIDE_KEY);
};
