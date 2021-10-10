<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Award Granted
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="award in formaward" :key="award.cid">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ award.award_title }}</div>
                  <div class="text-sm text-gray-500">{{ award.cid }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ award.fields.length }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900" @click="modal.open">Mint New Award</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  <modal />
  </div>
</template>

<script>
const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]
const formaward = [{
  cid : "bafybeicvomltp34ktzw4erpqrchesl4rczte4lxtia33juv5ihgdee6wdu",
    award_title : "Best Friend of JohnDoe Year 2021",
    owner : "0x7342c7d7B8D0aE7FeCe192a15F5Ba5243dcCA45F",
    fields : [
      {fid : "name", label : "Name", type : "text"},
        {fid : "epithet", label : "Epithet", type : "text"}
    ]
}]
// import {inject} from 'vue'
import Button from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'
// const axios  = inject('axios')
const url = 'https://bafybeic6jkk6b6xdtkdcmtjobzdz62kees5zezshlttz7fdgozegtx5ota.ipfs.dweb.link/0x7342c7d7B8D0aE7FeCe192a15F5Ba5243dcCA45F.json'
export default {
  components: { Button,Modal },
  setup() {
    return {
      people,formaward
    }
  },
  methods: {
    mintaward () {
      console.log('test')
      // this.modal.open()
    }
  },
}
</script>