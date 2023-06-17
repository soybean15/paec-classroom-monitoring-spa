<template>
  <dialog id="my_modal_3" class="modal">
    <form method="dialog" class="modal-box m-0 p-0">
      <button class="btn btn-sm btn-circle btn-ghost bg-slate-300 absolute right-2 top-2">
        ✕
      </button>
      <slot></slot>

    </form>
  </dialog>
</template>

<script>
export default {};
</script>

<style>
</style>