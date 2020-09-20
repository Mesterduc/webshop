<template>
  <section class="nav" :class="{ 'nav--scroll': !NavbarFixed }">
    <div class="nav-logo_container">
      <!-- <img class="nav__img" src="" alt="logo"> -->

      <router-link class="nav__logo-links" to="/">
        <span class="nav__logo">Vi laver smykker</span>
      </router-link>
    </div>
    <section class="nav-links_container">
      <router-link class="nav__links" v-for="nav in navbar" :key="nav.link" :to="nav.link">{{nav.name}}</router-link>
    </section>
    <section class="nav-icons_container">
      <i class="nav__icon fas fa-user-alt"></i>
      <i class="nav__icon fas fa-globe"></i>
      <i class="nav__icon fas fa-shopping-cart"></i>
    </section>

    <section class="burger-menu">
      <i class="burger-menu__icon fas fa-bars"></i>

    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      navbar: [
        { name: 'Home', link:'/'},
        { name: 'About', link:'/About'},
        { name: 'Smykker', link:'/Smykker'},
        { name: 'Workshop', link:'/Workshop'},
      ],
      NavbarFixed: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset;

      if (window.pageYOffset < 0) {
        return;
      }
      this.NavbarFixed = currentScrollPosition <= this.lastScrollPosition;
    },
  },
};
</script>

<style>
</style>