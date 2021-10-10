<template lang="pug">
TransitionRoot(as="template" show=true)
    Dialog.fixed.z-10.inset-0.overflow-y-auto(as="div" auto-reopen="true" @close="open=false")
    .flex.items-end.justify-center.min-h-screen.pt-4.px-4.pb-20.text-center(class="sm:block sm:p-0")
        TransitionChild(as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0")
            DialogOverlay.fixed.inset-0.bg-gray-500.bg-opacity-75.transition-opacity
        span.hidden(class="sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true") x
        TransitionChild(as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 m:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95")
            .inline-block.align-bottom.bg-white.rounded-lg.text-left.overflow-hidden.shadow-xl.transform.transition-all(class="sm:my-8 sm:align-middle sm:max-w-lg sm:w-full")
                .bg-white.px-4.pt-5.pb-4(class="sm:p-6 sm:pb-4")
                    div(class="sm:flex sm:items-start")
                        .mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-red-100(class="sm:mx-0 sm:h-10 sm:w-10")
                            ExclamationIcon.text-red.h-6.w-6(aria-hidden="true")
                        .mt-3.text-center(class="sm:mt-0 sm:ml-4 sm:text-left")
                            DialogTitle.text-lg.leading-6font-medium.text-gray-900(as="h3") CONTENT NIH
                            .mt-2
                                p.text-sm.text-gray-500 yakin nih ? 
                .bg-gray-50.px-4.py-3(class="sm:px-6 sm:flex-row-reverse")
                    button.w-full.inline-flex.justify-center.rounded-md.border.border-transparent.shadow-sm.px-4.py-2.bg-red-600.text-base.font-medium.text-white(class="hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" @click="open=false") Deactivate
                    button.mt-3.w-full.inline-flex.justify-center.rounded-md.border.border-gray-300.shadow-sm.px-4.py-2.bg-white.text-base.font-medium.text-gray-700(class="hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-5 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="open=false") Cancel
</template>
<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationIcon } from '@heroicons/vue/outline'

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ExclamationIcon,
  },
  setup() {
    const open = ref(true)
    // return true
    return {
      open
    }
  },
}
</script>