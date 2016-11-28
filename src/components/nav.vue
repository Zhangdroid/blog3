<template>
  <nav class="container">
    <ul>
      <li
        class="item"
        :class="{'chosen': chosenItem === item.name}"
        @click="chosenItem = item.name"
        v-for="item in navItems">{{ item.name }}</li>
    </ul>
    <transition name="shadow" mode="out-in">
      <span class="shadow" :key="chosenItem">{{ chosenItem }}</span>
    </transition>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      navItems: [
        { name: 'articles', category: 'all' },
        { name: 'design', category: 'design' },
        { name: 'code', category: 'code' },
        { name: 'tutorial', category: 'tutorial' }
      ],
      chosenItem: 'articles'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
.container {
  position: relative;
  .item {
    display: inline-block;
    margin: 0 2rem;
    font-size: 2rem;
    font-weight: 200;
    text-transform: capitalize;
    cursor: pointer;
    transition: color .3s ease;
    &:hover {
      color: $primary-color;
    }
    &.chosen {
      color: $primary-color;
    }
  }
  .shadow {
    display: inline-block;
    position: absolute;
    top: -10rem;
    left: -30rem;
    z-index: -1;
    font-size: 15rem;
    font-weight: 800;
    text-transform: uppercase;
    color: darken(rgba($primary-color,.06), 20%);
  }
}
.shadow-enter-active, .shadow-leave-active {
  transition: opacity .2s ease, transform .2s ease;
}
.shadow-enter, .shadow-leave-active {
  opacity: 0;
  transform: translateY(-1rem);
}
</style>
