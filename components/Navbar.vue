<template>
  <section>
    <div data-cy="navbar-top" class="d-flex navbar-custom">
      <div
        class="align-self-center text-white fs-4 fw-bold"
        style="margin-left: 180px"
      >
        TO DO LIST APP
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'navbar',
}
</script>

<style>
.navbar-custom {
  /* header-background */

  /* position: absolute; */
  /* width: 1420px; */
  height: 105px;
  left: 0px;
  top: 0px;

  background: #16abf8;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>