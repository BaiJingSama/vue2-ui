<!--
 * @Author: baijingsama 1303802862@qq.com
 * @Date: 2023-03-24 00:30:12
 * @LastEditors: baijingsama 1303802862@qq.com
 * @LastEditTime: 2023-03-29 21:45:21
 * @Description: 
-->
<template>
  <svg class="icon">
    <use :xlink:href="'#'+name"/>
  </svg>
</template>

<script>
  let importAll = (requireContext) => requireContext.keys().forEach(requireContext);
  try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
  export default {
    props: ['name'],
    name: 'Icon'
  };
</script>

<style lang="scss" scoped>
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>