<template>
  <div>
    <!-- Modal -->
    <div
      data-cy="modal-add-item"
      class="modal fade"
      :id="`modalEdit_${data.id}`"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Item</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form-group row px-2 mb-2">
              <div class="col-12">
                <label for="nama_item" class="fw-semibold mb-2 form-label"
                  ><small>Nama List Item</small></label
                >
              </div>
              <div class="col-12">
                <input
                  id="nama_item"
                  type="text"
                  v-model="title"
                  class="form-control form-control-lg"
                  placeholder="Tambahkan nama Activity"
                />
              </div>
            </div>

            <div class="form-group row px-2">
              <div class="col-4">
                <label for="priority" class="fw-semibold mb-2 form-label"
                  ><small>Priority</small></label
                >
                <select
                  id="priority"
                  class="form-control form-control-lg"
                  aria-placeholder="Very High"
                  name="priority"
                  @change="select($event)"
                >
                  <option :value="priority" disabled selected>
                    {{
                      priority === 'very-high'
                        ? 'Very High'
                        : priority === 'high'
                        ? 'High'
                        : priority === 'normal'
                        ? 'Medium'
                        : priority === 'low'
                        ? 'Low'
                        : priority === 'very-low'
                        ? 'Very Low'
                        : ''
                    }}
                  </option>
                  <option value="very-high">
                    <img
                      data-cy="todo-item-priority-indicator"
                      src="~/assets/icons/ellipse-red.png"
                      width="14"
                      height="14"
                    />
                    Very High
                  </option>
                  <option value="high">High</option>
                  <option value="normal">Medium</option>
                  <option value="low">Low</option>
                  <option value="very-low">Very Low</option>
                  <!-- <option v-if="priority != 'very-high'" value="very-high">
                    <img
                      data-cy="todo-item-priority-indicator"
                      src="~/assets/icons/ellipse-red.png"
                      width="14"
                      height="14"
                    />
                    Very High
                  </option>
                  <option v-if="priority != 'high'" value="high">High</option>
                  <option v-if="priority != 'medium'" value="medium">Medium</option>
                  <option v-if="priority != 'low'" value="low">Low</option>
                  <option v-if="priority != 'very-low'" value="very-low">Very Low</option> -->
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              @click="save"
              type="button"
              data-cy="modal-add-save-button"
              class="btn btn-lg tombol-tambah"
              data-bs-dismiss="modal"
              style="
                background-color: #16abf8;
                color: #fff;
                border-radius: 45px;
                border: 0;
                padding: 13.5px 29px;
                font-size: 18px;
                font-weight: 600;
              "
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'modal-edit',
  data() {
    return {
      title: '',
      priority: 'very-high',
    }
  },
  props: {
    data: Object,
  },
  created() {
    this.title = this.data.title
    this.priority = this.data.priority
  },
  methods: {
    ...mapActions('detail', ['addItem', 'getTodolist', 'updateItem']),
    save() {
      const id = this.$route.params.id
      this.updateItem({
        id: this.data.id,
        title: this.title,
        priority: this.priority,
        _comment:
          'list of priority is : very-high, high, normal, low, very-low | defalut value is very-high',
      }).then(() => {
        // this.title = ''
        // this.priority = ''
        this.getTodolist(id)
      })
    },
    select(val) {
      this.priority = val.target.value
    },
  },
}
</script>

<style>
.tombol-tambah {
  background-color: #16abf8;
  color: #fff;
}
</style>