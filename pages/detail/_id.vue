<template>
  <div class="container-fluid" @blur="editJudul">
    <div class="row justify-content-center mt-5 mb-4">
      <div class="col-8">
        <div class="row">
          <div class="col-1" data-cy="button-back-form-detail">
            <router-link to="/" class="text-decoration-none">
              <div class="align-self-center1 fs-1 fw-bold text-black">
                <i class="bi bi-chevron-left"></i>
              </div>
            </router-link>
          </div>

          <div class="col col-8">
            <div class="d-flex flex-row">
              <div v-if="show_edit" class="fs-1 fw-bold text-black me-4">
                <input
                  type="text"
                  value="New Activity"
                  data-cy="input-edit-title-form-detail"
                  class="edit-title"
                />
              </div>
              <div
                v-else
                class="fs-1 fw-bold text-black me-4"
                data-cy="title-form-detail"
              >
                New Activity
              </div>
              <div @click="showEdit">
                <IconEdit type="button" class="mt-3" :width="30" :height="30" />
              </div>
            </div>
          </div>
          <div class="col-3 align-self-end d-flex">
            <button
              type="button"
              data-cy="button-items-add-new"
              data-bs-toggle="modal"
              data-bs-target="#tambahModal"
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

    <div
      v-if="!to_do_ist"
      class="row justify-content-center mt-5 mb-5"
      data-cy="todo-empty"
    >
      <div class="col-5">
        <img
          src="~/assets/images/todo-empty-state.png"
          width="541"
          height="413"
          alt=""
        />
      </div>
    </div>

    <div
      v-else
      class="row justify-content-center mt-5 mb-5"
      data-cy="todo-list-exist"
    >
      <div v-for="(row, i) in to_do_ist" :key="i" class="col-8">
        <div class="rounded-2 bg-white ps-4 pt-3 pe-2 pb-3 mb-4 shadow row">
          <div class="col-11 align-self-start d-flex flex-row">
            <input
              type="checkbox"
              data-cy="todo-item-checkbox"
              class="form-check-input me-4"
            />
            <div
              data-cy="todo-item-priority-indicator"
              :class="`label-indicator ${row.priority}`"
            ></div>
            <span data-cy="todo-item-title" class="todo-item-title">{{
              row.title
            }}</span>
            <IconEdit
              type="button"
              data-bs-toggle="modal"
              :data-bs-target="`#modalEdit_${row.id}`"
              :width="20"
              :height="20"
            />
          </div>
          <div class="col-1 align-self-end">
            <i
              type="button"
              data-cy="todolist-button-delete"
              class="bi bi-trash3 fs-5 ms-4"
              data-bs-toggle="modal"
              :data-bs-target="`#modalDelete_${row.id}`"
              @click="select_delete(row)"
            ></i>
          </div>
        </div>
      </div>
    </div>

    <div v-for="(row, i) in to_do_ist" :data="row" :key="i">
      <ModalHapus :data="row"/>
      <ModalEdit :data="row" />
    </div>
    <!-- <ModalHapus v-for="(row, i) in to_do_ist" :data="row" :key="i" /> -->
    <!-- <ModalEdit v-for="(rowEdit, y) in to_do_ist" :data="rowEdit" :key="y" /> -->
    <ModalTambah />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import ModalHapus from './ModalHapus.vue'
import ModalTambah from './ModalTambah.vue'
import ModalEdit from './ModalEdit.vue'

export default {
  auth: false,
  layout: 'default',
  components: {
    ModalHapus,
    ModalTambah,
    ModalEdit,
  },
  data() {
    return {
      show_edit: false,
      data_delete: null,
    }
  },
  computed: {
    ...mapState('detail', {
      to_do_ist: (state) => state.to_do_ist,
    }),
  },
  created() {
    const id = this.$route.params.id
    this.getTodolist(id)
  },
  methods: {
    ...mapActions('detail', ['getTodolist']),
    showEdit() {
      //   alert(this.show_edit)
      this.show_edit = !this.show_edit
    },
    editJudul() {
      alert('masok')
      this.show_edit = !this.show_edit
    },
    select_delete(val) {
      this.data_delete = val
    },
  },
}
</script>

<style>
.todo-item-title {
  font-size: 18px;
  font-weight: 500;
  margin-right: 16px;
}

.label-indicator.normal {
  background-color: #00a790;
}

.label-indicator.very-high {
  background-color: red;
}

.label-indicator.high {
  background-color: #f8a541;
}

.label-indicator.very-low {
  background-color: #8942c1;
}

.label-indicator.low {
  background-color: #428bc1;
}

.label-indicator {
  height: 14px;
  width: 14px;
  border-radius: 50%;
  margin: 0 19px 0 7px;
  margin-top: 0.25em;
}

.detail-content .content-item .form-check input {
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  border: 1px solid #c7c7c7;
}

.detail-content .content-item .form-check-input {
  margin-top: 0;
  border-radius: 0;
}

.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
  -webkit-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}

.edit-title {
  background-color: transparent;
  border: 0;
  font-size: 36px;
  font-weight: 700;
  border-bottom: 1px solid;
  max-width: 583px;
}
</style>