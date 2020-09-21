<template>
   <section class="burger-menu"
   :class="{ 'burger-menu--active' : isBurgerActive }"
         @click.prevent="toggle">
      <i class="burger-menu__icon fas fa-bars"></i>

    </section>
</template>

<script>
export default {
  data() {
    return {
      isBurgerActive: false,
    }
  },
  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive
    }
  },

}
</script>

<style>

</style>