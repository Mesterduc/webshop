<template>
  <div>
    <Navbar></Navbar>
    <!-- <Sidebar2>
      <ul class="sidebar-panel-nav">
       <li><a href="#home">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#contact">Contact</a></li>
     </ul>
    </Sidebar2> -->
  </div> 
</template>

<script>
import Navbar from "./navbar";
// import Sidebar2 from "./sidebar";

export default {
  components: {
    Navbar,
    // Sidebar2,
  },
};
</script>

<style>
 ul.sidebar-panel-nav {
   list-style-type: none;
 }

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
 }
</style>