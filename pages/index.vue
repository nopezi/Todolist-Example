<template>
  <div class="container-fluid">
    <div class="row justify-content-center mt-5 mb-4">
      <div class="col-9">
        <div class="row">
          <div class="col col-9 align-self-start">
            <div class="align-self-center fs-1 fw-bold">Activity</div>
          </div>
          <div class="col align-self-end d-flex">
            <button
              @click="tambah"
              type="button"
              data-cy="activity-add-new"
              class="
                btn btn-info
                align-self-center
                text-white
                fw-bold
                btn-lg
                ps-3
                pe-4
                ms-5
              "
              style="background: #16abf8; border-radius: 116px"
            >
              <i class="bi bi-plus fs-4 fw-bold"></i> Tambah
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center" v-if="activity[0]">
      <div class="col-9">
        <div class="row content-center">
          <div v-for="(row, i) in activity" :key="i" class="col-3">
            <div class="rounded-3 bg-white ps-4 pt-4 pe-2 pb-4 mb-4 shadow">
              <router-link
                :to="`detail/${row.id}`"
                class="text-decoration-none"
              >
                <div class="fs-5 fw-bold text-black">{{ row.title }}</div>
              </router-link>
              <div class="d-flex flex-row">
                <div class="me-4 fs-5">
                  {{ formatDateIsoIndonesia(row.created_at) }}
                </div>
                <i type="button" @click="set_hapus(row)" data-cy="activity-button-delete" class="bi bi-trash3 fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ActivityNotFound v-else />

    <modal-hapus :id="id" :task_name="task_name" />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  layout: 'default',
  data() {
    return {
      id: 0,
      task_name: ""
    }
  },
  computed: {
    ...mapState('home', {
      activity: (state) => state.activity,
    }),
  },
  created() {
    this.getActivity()
  },
  methods: {
    ...mapActions('home', ['getActivity', 'addActivity']),
    formatDateIsoIndonesia(payload) {
      const date = new Date(payload)
      const year = date.getFullYear()
      const month = date.getMonth()
      const dt = date.getDate()
      const day = date.getDay()
      // const hourse = date.getHours()
      // const minute = date.getMinutes()
      // const seconds = date.getSeconds()
      let hari
      let bulan

      switch (day) {
        case 0:
          hari = 'Minggu'
          break
        case 1:
          hari = 'Senin'
          break
        case 2:
          hari = 'Selasa'
          break
        case 3:
          hari = 'Rabu'
          break
        case 4:
          hari = 'Kamis'
          break
        case 5:
          hari = "Jum'at"
          break
        case 6:
          hari = 'Sabtu'
          break
      }
      switch (month) {
        case 0:
          bulan = 'Januari'
          break
        case 1:
          bulan = 'Februari'
          break
        case 2:
          bulan = 'Maret'
          break
        case 3:
          bulan = 'April'
          break
        case 4:
          bulan = 'Mei'
          break
        case 5:
          bulan = 'Juni'
          break
        case 6:
          bulan = 'Juli'
          break
        case 7:
          bulan = 'Agustus'
          break
        case 8:
          bulan = 'September'
          break
        case 9:
          bulan = 'Oktober'
          break
        case 10:
          bulan = 'November'
          break
        case 11:
          bulan = 'Desember'
          break
      }

      return dt + ' ' + bulan + ' ' + year
    },
    set_hapus(val) {
      this.id = val.id
      this.task_name = val.title
    },
    tambah() {
      this.addActivity().then(() => {
        this.getActivity()
      })
    },
    hapus(val) {},
  },
}
</script>

<style>
.content-top {
  margin-left: 160px;
  margin-top: 24px;
}

.content-center {
  /* margin-left: 160px; */
  margin-top: 24px;
}

.rounded-3 .d-flex {
  margin-top: 100px;
  color: #888888;
}
</style>