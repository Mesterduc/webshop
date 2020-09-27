<template>
   <section class="burger-menu"
         >
      <i @click.prevent="toggle" class="burger-menu__icon fas fa-bars"></i>

    </section>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    menu() {
      return this.$store.state.BurgerMenu.menu
    }
  },
  methods: {
    toggle() {
      this.$store.dispatch('toggleActive')
      
    }
  },

}
</script>

<style>

</style>