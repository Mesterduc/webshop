<template>
  <main>
    <Navbar> </Navbar>
    
    <router-view/>

    <Footer> </Footer>
  </main>
</template>

<script>
import Navbar from './components/navbar/index'
import Footer from './components/footer/footer'
export default {
  components: {
    Navbar,
    Footer,
  }
  
}
</script>

<style lang="scss">

</style>
