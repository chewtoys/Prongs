<template>
<div id='contactform'>
  <div class="field" ref="nameField">
    <div class="control">
      <input class="input is-shadowless is-radiusless" type="text" name="name" placeholder="name">
      <span class="bottom"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="left"></span>
    </div>
  </div>
  <div class="field" ref="emailField">
    <div class="control">
      <input class="input is-shadowless is-radiusless" type="email" name="email" placeholder="email">
      <span class="bottom"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="left"></span>
    </div>
  </div>
  <div class="field" ref="textareaField">
    <div class="control">
      <textarea class="textarea is-shadowless is-radiusless" v-bind:style="textareaStyles" name="message" placeholder="message"></textarea>
      <span class="bottom"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="left"></span>
    </div>
  </div>
  <nav class="level" ref="buttonField">
    <div class="level-left">
      <div class="level-item">
        <div class="field">
          <div class="control">
            <button class="button is-custom" type="submit">
              <span class="icon">
                <font-awesome-icon :icon="['far','paper-plane']" />
              </span>
              <span>
                {{button1.name}}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <div class="field">
          <div class="control">
            <a class="button is-custom" v-bind:href="'mailto:'+button2.email" target="_blank" rel="noopener noreferrer">
              <span class="icon">
                <font-awesome-icon :icon="['far','envelope']" />
              </span>
              <span>
                {{button2.name}}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  data() {
    return {
      button1: {
        id:0,
        name:'submit'
      },
      button2: {
        id:1,
        name:'or send me an email',
        email:'stefanshi1988@gmail.com'
      },
      textareaStyles: { },
      fieldHeightTotal: null
    }
  },
  methods: {
    computeHeight () {
      var fieldHeight1 = this.$refs.nameField.scrollHeight;
      var fieldHeight2 = this.$refs.emailField.scrollHeight;
      var fieldHeight3 = this.$refs.buttonField.scrollHeight;

      var fieldHeightFull1 = fieldHeight1 + Number(window.getComputedStyle(this.$refs.nameField).getPropertyValue('margin-bottom').slice(0,-2)) + Number(window.getComputedStyle(this.$refs.nameField).getPropertyValue('margin-top').slice(0,-2));
      var fieldHeightFull2 = fieldHeight2 + Number(window.getComputedStyle(this.$refs.emailField).getPropertyValue('margin-bottom').slice(0,-2)) + Number(window.getComputedStyle(this.$refs.emailField).getPropertyValue('margin-top').slice(0,-2));
      var fieldHeightFull3 = fieldHeight3 + Number(window.getComputedStyle(this.$refs.buttonField).getPropertyValue('margin-bottom').slice(0,-2)) + Number(window.getComputedStyle(this.$refs.buttonField).getPropertyValue('margin-top').slice(0,-2));

      this.fieldHeightTotal = fieldHeightFull1 + fieldHeightFull2 + fieldHeightFull3;
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.computeHeight();
      var fieldHeight4 = document.getElementById('contact-form-title').scrollHeight;
      var fieldHeightFull4 = fieldHeight4 + Number(window.getComputedStyle(document.getElementById('contact-form-title')).getPropertyValue('margin-bottom').slice(0,-2)) + Number(window.getComputedStyle(document.getElementById('contact-form-title')).getPropertyValue('margin-top').slice(0,-2));
      var aboutHeight = document.getElementById('about-content').scrollHeight;
      this.$set(this.textareaStyles, 'height', aboutHeight - this.fieldHeightTotal - fieldHeight4 +'px');
    })
  }
}
</script>

<style lang="scss" scoped>
// custom style for form
input,
textarea {
  color: black;
  font-size: inherit;
  font-family: inherit;
  background-color: #f8fcfd;
  border: 1px solid transparent;
  transition: background-color 0.3s ease-in-out;
}

input:active {
  border-color: unset;
}

input:hover {
  border-color: transparent;
}

textarea:active {
  border-color: unset;
}

textarea:hover {
  border-color: transparent;
}

textarea:focus, input:focus {
  outline: none;
}

textarea::placeholder, input::placeholder {
  color: hsla(0, 1%, 33%, 0.6);
}

span.bottom,span.top {
  position: absolute;
  background-color: #25F8CB;
  transition: transform 0.1s ease;
  height: 2px;
  left: 0;
  right: 0;
  transform: scaleX(0);
}

span.left,span.right {
  position: absolute;
  background-color: #25F8CB;
  transition: transform 0.1s ease;
  width: 2px;
  top: 0;
  bottom: 0;
  transform: scaleY(0);
}

span.bottom {
  bottom: 0;
  transform-origin: bottom right;
}

input:focus ~ .bottom {
  transform-origin: bottom left;
  transform: scaleX(1);
}

textarea:focus ~ .bottom {
  transform-origin: bottom left;
  transform: scaleX(1);
}

span.right {
  right: 0;
  transform-origin: top right;
  transition-delay: 0.05s;
}

input:focus ~ .right {
  transform-origin: bottom right;
  transform: scaleY(1);
}

textarea:focus ~ .right {
  transform-origin: bottom right;
  transform: scaleY(1);
}

span.top {
  top: 0;
  transform-origin: top left;
  transition-delay: 0.15s;
}

input:focus ~ .top {
  transform-origin: top right;
  transform: scaleX(1);
}

textarea:focus ~ .top {
  transform-origin: top right;
  transform: scaleX(1);
}

span.left {
  left: 0;
  transform-origin: bottom left;
  transition-delay: 0.25s;
}

input:focus ~ .left {
  transform-origin: top left;
  transform: scaleY(1);
}

textarea:focus ~ .left {
  transform-origin: top left;
  transform: scaleY(1);
}
</style>
