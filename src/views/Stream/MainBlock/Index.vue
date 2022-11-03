<template>
  <div class="grid-container">
    <div class="grid-item item-left">
      <StreamesList v-if="hasStreamesList" :stream="streamesList"/>
    </div>
  </div>
</template>

<script>

import StreamesList from './MoveList/Index'

export default {
  name: 'MainBlock',
  components: { StreamesList },
  props: {
    profileData: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasStreamesList () {
      return this.profileData.stream.length > 3
    },
    streamesList () {
      return this.profileData.stream.slice(3, this.profileData.stream.length)
    }
  }
}
</script>

<style lang="stylus">
  .grid-container
    display grid
    grid-template-columns 1fr

    .grid-item
      &.item-left
        grid-column span 1

      &.item-right
        grid-column span 1

  @media (min-width: 992px)
    .grid-container
      display grid
      grid-template-columns repeat(6, 1fr)

      .grid-item
        &.item-left
          grid-column span 4

        &.item-right
          grid-column span 2

</style>
