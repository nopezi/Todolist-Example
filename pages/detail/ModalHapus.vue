<template>
  <!-- Modal -->
  <div>
    <div
      data-cy="activity-modal-delete"
      class="modal fade"
      :id="data ? `modalDelete_${data.id}` : `modalDelete`"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      v-if="data"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div class="row justify-content-center pb-2 pt-2">
              <div class="col-12 text-center mb-4">
                <img
                  src="~/assets/images/modal-delete-icon.png"
                  width="84px"
                  height="84px"
                />
              </div>
              <div class="col-10 text-center fs-5 fw-semibold">
                Apakah anda yakin menghapus item
                <p class="fw-bold">"{{ data.title }}"?</p>
              </div>
              <div class="col-8 row mt-5">
                <button
                  type="button"
                  class="btn btn-lg col-5 fw-semibold me-2"
                  data-bs-dismiss="modal"
                  data-cy="modal-button-cancel-activity"
                  style="
                    border-radius: 45px;
                    background-color: #f4f4f4;
                    color: #4a4a4a;
                  "
                >
                  Batal
                </button>
                <button
                  type="button"
                  class="btn btn-lg btn-danger col-6 fw-semibold ms-1"
                  style="border-radius: 45px"
                  data-bs-toggle="modal"
                  data-bs-target="#successHapus"
                  data-cy="modal-button-delete-activity"
                  @click="hapus"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div
      data-cy="activity-modal-delete-success"
      class="modal fade"
      id="successHapus"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
                <div class="d-flex">
                    <img src="~/assets/images/modal-information-icon.png" width="24" height="24" alt="" class="me-2">
                    <div class="fw-semibold">Activity berhasil dihapus</div>
                </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'modal-hapus',
  props: {
    data: Object
  },
  methods: {
    ...mapActions('detail', ['deleteItem', 'getTodolist']),
    hapus() {
        this.deleteItem(this.data.id).then(() => {
            const id = this.$route.params.id
            this.getTodolist(id)
        })
    },
  },
}
</script>