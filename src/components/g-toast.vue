<!--
 * @Author: baijingsama 1303802862@qq.com
 * @Date: 2023-05-08 14:30:42
 * @LastEditors: baijingsama 1303802862@qq.com
 * @LastEditTime: 2023-05-22 21:46:24
 * @Description: toast组件
-->

<template>
  <div class="wrapper" :class="toastClass">
    <div class="toast" ref="wrapper">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" v-if="closeButton.text" ref="line"></div>
      <span class="close" v-if="closeButton.text" @click="onClickClose">
        {{ closeButton.text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "g-toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 3,
    },
    closeButton: {
      type: Object,
      default() {
        return {};
      },
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "middle", "bottom"].includes(value);
      },
    },
  },
  computed: {
    toastClass() {
      return {
        [`position-${this.position}`]: true,
      };
    },
  },
  mounted() {
    this.updateStyles();
    this.execAutoClose();
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    updateStyles() {
      if (this.closeButton && this.closeButton.text) {
        console.log(this.closeButton);
        this.$nextTick(() => {
          this.$refs.line.style.height = `${
            this.$refs.wrapper.getBoundingClientRect().height
          }px`;
        });
      }
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    log() {
      console.log("我是toast");
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton === "function") {
        this.closeButton.callback(this); // this === toast 实例
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.74);

@keyframes top-in {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes middle-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes bottom-in {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

.wrapper{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  &.position-top {
    top: 5%;
    .toast{
      animation: top-in 300ms;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    .toast{
      animation: middle-in 300ms;
    }
  }
  &.position-bottom {
    bottom: 5%;
    transform: translate(-50%);
    .toast{
      animation: bottom-in 300ms;
    }
  }
}

.toast {
  animation: fade-in 1s;
  /* border:1px solid red; */
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
  display: flex;
  align-items: center;
  background: $toast-bg;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 0 24px;
  color: #fff;

  .message {
    padding: 8px 0;
  }
  .line {
    height: 100%;
    margin-left: 24px;
    border-left: 1px solid #ccc;
  }
  .close {
    padding-left: 24px;
    flex-shrink: 0;
  }

}
</style>
