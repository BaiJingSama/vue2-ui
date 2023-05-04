<template>
  <div class="wrapper" :class="{ error }">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly" 
      @change="$emit('change',$event.target.value)"
      @input="$emit('input',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
    />
    <template  v-if="error">
      <Icon name="settings" class="icon-error"/>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

  <script>
  export default {
    props: {
      value: {
        type: String,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      error: {
        type: String,
      },
    },
    name: "input",
  };
  </script>

<style lang="scss" scoped>
@import "../assets/style/vars.scss";
$height: 32px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$readonly-bg: #cccccc;
$red: #f1453d;
.wrapper {
  > :not(:last-child){
    margin-right: .5em
  }
  align-items: center;
  font-size: $font-size;
  display: inline-block;
  &.error {
    > input {
      border-color: $red;
    }
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #aaa;
      color: #999;
      cursor: not-allowed;
    }
    &[readonly] {
      background-color: $readonly-bg;
      cursor: text;
    }
  }
  .icon-error{
    fill: $red;
  }
  .error-message{
    color: $red;
  }
}
</style>
