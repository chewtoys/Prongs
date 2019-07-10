<template>
<section class="hero">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-variable is-8">
        <div class="column is-5">
          <figure class="image is-centered is-1by1">
            <img v-bind:src="photoFile" class="has-radius" style="filter: drop-shadow(0 0 5px #949494);" />
          </figure>
        </div>
        <div class="column is-7 is-relative">
          <div class="content has-text-centered is-vcentered-column">
            <p>{{ heroContent.title }}</p>
            <p class="title has-text-weight-normal is-uppercase is-2">{{ heroContent.name }}</p>
            <p class="has-text-justified">
              {{ heroContent.msg }}
            </p>
          </div>
          <nav class="level is-bottom-column is-mobile">
            <div class="level-left">
              <div class="level-item">
                <a class="button is-custom" v-scroll-to="'#about'">
                  <span class="icon">
                    <font-awesome-icon :icon="['fas','angle-double-down']" />
                  </span>
                  <span>Learn more</span>
                </a>
              </div>
            </div>
            <div class="level-right" style="margin-left:auto;">
              <div class="level-item">
                <a class="button is-custom" href="#">
                  <span class="icon">
                    <font-awesome-icon :icon="['far','save']" />
                  </span>
                  <span>download CV</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
	props: {
    photoFile: String,
    heroContent: Object
  }
}
</script>