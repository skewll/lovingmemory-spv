<template>
  <div class="container">
    <div class="section links">
      <Nav />
    </div>
    <div class="section details">
      <!-- CONTENT START -->
      <h1 class="title">Photo Gallery</h1>
      <!-- CONTENT END -->
      <CoolLightBox 
        :items="images" 
        :index="index"
        @close="index = null">
      </CoolLightBox>

      <div class="images-wrapper">
        <div
          class="image"
          v-for="(image, imageIndex) in thumbs"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
      </div>
      <!-- <p>*To upload to gallery, email photos or a zip file containing photos to 
        <a href="mailto:upload@seanvaughn.com?subject=Upload">{{$config.uploadEmail}}</a>
      </p> this Works :-) -->
      <!-- <p>*To upload to gallery, email photos or a zip file containing photos to 
        <a :href="config.uploadEmailLink">{{$config.uploadEmail}}</a>
      </p> THIS DOES NOT WORK -->
      <!-- <p>*To upload to gallery, email photos or a zip file containing photos to 
        <a :href="{{$config.uploadEmailLink}}">{{$config.uploadEmail}}</a>
      </p> THIS DOES NOT WORK -->
      <p>*To upload to gallery, email photos or a zip file containing photos to 
        <a :href="uploadEmailLink">{{$config.uploadEmail}}</a>
      </p>
      <!-- <p>*To upload to gallery, email photos or a zip file containing photos to 
        <a :href="`mailto:${{{$config.uploadEmail}}}?subject=Upload`">{{$config.uploadEmail}}</a>
      </p> DOESNT WORK--> 
      <!-- <p>*To upload to gallery, email photos or a zip file containing photos to 
        <a :href="'mailto:' + config.uploadEmail + '?subject=Upload'">{{$config.uploadEmail}}</a>
      </p>  DOESNT WORK-->
      <!-- <p>*To upload to gallery, email photos or a zip file containing photos to 
        <a :href="'mailto:' + config.uploadEmail + '?subject=Upload'">{{$config.uploadEmail}}</a>
      </p> -->
      <!-- <p>*To upload to gallery, email photos or a zip file containing photos to 
        <a :href="('mailto:' + config.uploadEmail + '?subject=Upload')">{{$config.uploadEmail}}</a>
      </p> DOESNT WORK-->
      <!-- <p>
        <a :href="`mailto:${config.uploadEmail}`">{{$config.uploadEmail}}</a>
      </p> DOESNT WORK-->
      <!-- <p>
        <a :href="$config.uploadEmail">{{$config.uploadEmail}}</a>
      </p> -->
    </div>
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
 export default {
  components: {
    CoolLightBox,
  },

  data: function () {
    return {
      images: [],
      thumbs: [],
      uploadEmailLink: config.uploadEmail,
      index: null
    };
  },
  mounted() {
    this.importAll(require.context('~/assets/gallery/', true, /\.(png|jpe?g|svg)$/));
    this.importThumbs(require.context('~/assets/thumbs/', true, /\.(png|jpe?g|svg)$/));
  },

  methods: {
    importAll(r) {
      console.log(r)
      r.keys().forEach(key => (this.images.push(r(key))));
    },
    importThumbs(r) {
      console.log(r)
      r.keys().forEach(key => (this.thumbs.push(r(key))));
    },
  },
};
</script>

<style lang="scss">
.images-wrapper {
    margin-bottom: 20px;
    margin-right: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    @media screen and (max-width: 800px) {
      justify-content: center;
      width: calc(100% + 60px);
      margin-left: -30px;
      margin-bottom: 0px;
    }
}
.images-wrapper .image {
    cursor: pointer;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 3px;
    width: 120px;
    height: 120px;
    @media screen and (max-width: 800px) {
      width: 105px;
      height: 105px;
    }
}
</style>
