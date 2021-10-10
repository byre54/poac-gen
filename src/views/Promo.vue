<template>
  <div class="relative bg-white overflow-hidden">
    <div class="pt-1 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div class="sm:max-w-lg">
          <h1 class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Proof Of Accomplishment Generator
          </h1>
          <p class="mt-4 text-xl text-gray-500">Accomplishment Artifact & Proof </p>
        </div>
        <div>
          <div class="mt-10">
            <!-- List image grid -->
            <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
              <div class="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-44 h-22 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                      <img src="https://www.gagdiploma.com/ad_AWARD_FIRST_PLACE.gif" alt="" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="w-44 h-22 rounded-lg overflow-visible">
                      <img src="https://cdn.arkademi.com/asset/img/20210330152856/Arkademi-Kursus-Online-Sertifikat-Kursus-Sertifikasi-Halal-untuk-Usaha-Kuliner-Frame-White.jpg" alt="" class="w-full h-full object-center object-cover" />
                    </div>
                  </div>
                  <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-44 h-22 rounded-lg overflow-hidden">
                      <img src="https://images.template.net/26488/Free-Long-Service-Award-Certificate-Template.jpeg" alt="" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="w-44 h-22 rounded-lg overflow-hidden">
                      <img src="http://3.bp.blogspot.com/-VSIVhwvWwik/VaFqlHIx_HI/AAAAAAAAENM/QgINJsVjedM/s1600/sertifikat-kursus-online.png" alt="" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="w-44 h-22 rounded-lg overflow-hidden">
                      <img src="https://images.template.net/26488/Free-Long-Service-Award-Certificate-Template.jpeg" alt="" class="w-full h-full object-center object-cover" />
                    </div>
                  </div>
                  <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-44 h-22 rounded-lg overflow-hidden">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Q5kFfCfrkF_YWDthPARQ4Bfh0y222M256fD1pJLhcFu4gegTnJU3Kr3aHtVc92QZuf4&usqp=CAU" alt="" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="w-44 h-22 rounded-lg overflow-hidden">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQub_zFS-nb32itZD-5gAGLaT8PaNDbJ7qFWg&usqp=CAU" alt="" class="w-full h-full object-center object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" class="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">Enter App</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Web3Storage } from 'web3.storage'
// const tokenkey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDU0Y2I3QTVkQTdENjQ2NDQ1NTg1ZDg2RDg4NEFmZTQ4MDA3NEE0NDUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2MjkyMTExMDA1MzYsIm5hbWUiOiJtZXRhd2FyZCJ9.VxT8657vw1jEeou6zew9o3xuAfiDBMT3NJ4R8nf2hZs'
// const client = new Web3Storage({token:tokenkey})
// const fileinput = 

export default {
  data() {
    return {
      info : null
    }
  },
  mounted() {
    axios
    .get('https://bafybeic6jkk6b6xdtkdcmtjobzdz62kees5zezshlttz7fdgozegtx5ota.ipfs.dweb.link/0x7342c7d7B8D0aE7FeCe192a15F5Ba5243dcCA45F.json')
  },
//   components: {
//     Dialog,
//     DialogOverlay,
//     DialogTitle,
//     TransitionChild,
//     TransitionRoot,
//     ExclamationIcon,
//   },
//   // methods: {
//   //   buka() {
//   //     return open
//   //   }
//   // },
//   // setup() {
//   //   const open=ref(true)
//   // }
 
//  setup() {
//     const open = ref(true)

//     return {
//       open
//     }
  }


</script>