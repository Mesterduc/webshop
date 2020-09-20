<template>
  <section class="footer">
    <section class="footer__explor footer__box">
      <header class="footer__header">Explor</header>
      <router-link class="footer__links" to="#">Necklace</router-link>
      <router-link class="footer__links" to="#">Rings</router-link>
      <router-link class="footer__links" to="#">Earrings</router-link>
      <router-link class="footer__links" to="#">Charms</router-link>
      <router-link class="footer__links" to="#">Bracelets</router-link>
      <router-link class="footer__links" to="#">Custom Made</router-link>
    </section>
    <section class="footer__service footer__box">
      <header class="footer__header">Customer Service</header>
      <div class="footer__links_container">
        <router-link class="footer__links_container" to="#">FAQs</router-link>
        <router-link class="footer__links" to="#">Delivery</router-link>
        <router-link class="footer__links" to="#">return policies</router-link>
        <router-link class="footer__links" to="#">Size guide</router-link>
      </div>
    </section>
    <section class="footer__about footer__box">
      <header class="footer__header">Our Company</header>
      <router-link class="footer__links_container" to="#">World of Vi laver smykker</router-link>
      <router-link class="footer__links" to="#">Sustainability</router-link>
      <router-link class="footer__links" to="#">Careers</router-link>
      <router-link class="footer__links" to="#">Website privacy</router-link>
      <router-link class="footer__links" to="#">Contact</router-link>
    </section>

    <section class="footer__newsletter footer__box">
      <div class="footer__newsletter-form">
      <header class="footer__newsletter-header">Latest news from Vi laver smykker</header>
        <input class="footer__newsletter-input" type="email" name="emailid" placeholder="Email" />
        <button type="submit">Send</button>
      </div>

      <div class="footer__newsletter-icons">
        <a href="#">
          <i class="footer__newsletter-icon fab fa-instagram"></i>
        </a>
        <a href="#">
          <i class="footer__newsletter-icon fab fa-facebook-square"></i>
        </a>
        <a href="#">
          <i class="footer__newsletter-icon fab fa-pinterest"></i>
        </a>
        <a href="#">
          <i class="footer__newsletter-icon fab fa-facebook"></i>
        </a>
        <a href="#">
          <i class="footer__newsletter-icon fab fa-youtube"></i>
        </a>
      </div>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>