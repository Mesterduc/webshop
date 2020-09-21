<template>
  <section class="sidebar">
    <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isPanelOpen: true,
    };
  },
  methods: {
    closeSidebarPanel() {
      this.isPanelOpen = false;
    },
  },
};
</script>

<style>
.sidebar-backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
        z-index: 9;
    }

    .sidebar-panel {
        overflow-y: auto;
        background-color: #130f40;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        padding: 3rem 20px 2rem 20px;
        width: 300px;
    }
</style>