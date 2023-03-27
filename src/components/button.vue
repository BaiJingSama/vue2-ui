<template>
  <div>
    <button class="s-button" :class="{ [`icon-${iconPosition}`]: true }">
      <Icon v-if="icon" :name="icon" />
      <div class="content">
        <slot></slot>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: ["icon", "iconPosition"],
};
</script>

<style lang="scss" scoped>
@import "../assets/style/vars.scss";
.s-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  font: inherit;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  line-height: $button-height;

  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background: $button-active-bg;
  }

  > .icon {
    order: 1;
    margin-right: .3em;
  }
  >.content{
    order: 2;
  }

  &.icon-right {
    > .icon { order: 2; margin-right: 0em;margin-left: .3em;}
    > .content{order: 1}
  }
}
</style>
