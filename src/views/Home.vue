<template>
  <section class="home">
    <section class="frontpage">
      <figure class="frontpage_container">
        <router-link to="/">
          <img
            v-bind:style="{ height: imgheight + 'px' }"
            class="frontpage__img"
            src="../assets/images/frontpage2.jpg"
            alt="New collection"
          />
        </router-link>
        <figcaption class="frontpage__caption">
          <span class="frontpage__caption-header">Winter Collection 2020</span>
          <span
            class="frontpage__caption-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
          <span class="frontpage__caption-shop">Shop now</span>
        </figcaption>
      </figure>
    </section>
    <section class="jewelry-categories">
        <header class="jewelry__header">Shop By Category</header>
      <div class="jewelry">
        <figure class="jewelry_container">
          <img class="jewelry__img" src="../assets/images/ringsCategory.jpg" alt="Rings" />
          <figcaption class="jewelry__caption_container">
            <span class="jewelry__caption-category">Rings</span>
            <span class="jewelry__caption-shop">Shop now</span>
          </figcaption>
        </figure>
        <figure class="jewelry_container">
          <img class="jewelry__img" src="../assets/images/necklaceCategory.jpg" alt="Necklace" />
          <figcaption class="jewelry__caption_container">
            <span class="jewelry__caption-category">Necklace</span>
            <span class="jewelry__caption-shop">Shop now</span>
          </figcaption>
        </figure>
        <figure class="jewelry_container">
          <img class="jewelry__img" src="../assets/images/earringsCategory.jpg" alt="earrings" />
          <figcaption class="jewelry__caption_container">
            <span class="jewelry__caption-category">Earrings</span>
            <span class="jewelry__caption-shop">Shop now</span>
          </figcaption>
        </figure>
      </div>
    </section>
    <!-- <section class="about">
      <div class="about-text_container">
        <span class="about__header"></span>
        <p class="about__text"></p>
      </div>
      <img class="about__img" src="#" alt="about-img">
    </section>-->
    <section class="newcollection">
      <header class="newcollection__header">This season's new trends</header>
      <img class="newcollection__img" src="../assets/images/newcollection2.jpg" alt />
      <div class="newcollection__text_contianer">
        <span class="newcollection__text-header">Get the newest look</span>
        <p
          class="newcollection__text"
        >Necklace, rings, statemens and more, exclusively avaliable this fall.</p>
        <router-link class="newcollection__button" to="#"> New arrivals</router-link>
      </div>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      imgheight: 755,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.imgheight = window.innerHeight - 90;
    },
  },
};
</script>
