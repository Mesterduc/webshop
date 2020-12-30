<template>
  <section class="sidebar">
    <div class="sidebar__backdrop" @click.prevent="closeSidebarPanel" v-if="menu"></div>
    <transition name="slide">
      <div v-if="menu" class="sidebar__panel">
        <ul class="sidebar__nav">
          <!-- <li v-for="nav in navbar" :key="nav.link">
             <a class="sidebar__link" :href="nav.link">{{nav.name}}</a>
          </li> -->
          <router-link
       class="nav__links"
        v-for="nav in navbar"
        :key="nav.link"
         :to="nav.link"
       >{{nav.name}}</router-link>
        </ul>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  data() {
    return {
      navbar: this.$store.state.BurgerMenu.navbar,
    };
  },
  computed: {
    menu() {
      return this.$store.state.BurgerMenu.menu;
    },
  },
  methods: {
    closeSidebarPanel() {
      this.$store.dispatch("toggleActive");
    },
  },
};
</script>

<style>
</style>