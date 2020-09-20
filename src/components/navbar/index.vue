<template>
  <div>
    <Navbar></Navbar>
     <Burgermenu></Burgermenu>
    <Sidebar2></Sidebar2>
  </div> 
</template>

<script>
import Burgermenu from "./burgermenu";
import Navbar from "./navbar";
import Sidebar2 from "./sidebar";

export default {
  components: {
    Burgermenu,
    Navbar,
    Sidebar2,
  },
};
</script>

<style>
</style>