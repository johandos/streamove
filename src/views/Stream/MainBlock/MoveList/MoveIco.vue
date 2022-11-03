<template>
  <div class="stream-ico d-flex align-items-center hover-cursor-pointer" @click="goToStream(stream.id)">
    <span class="stream-image border" :class="streamClassImg"/>
    <span class="stream-name ml-2 font-weight-bold" :class="{'text-danger': stream.hardcore}">
      {{ stream.name }}
    </span>
    <img v-if="stream.seasonal" src="@/assets/img/leaf.png" width="12px" class="ml-2" alt="seasonal_leaf">
  </div>
</template>

<script>
import goToStream from '@/mixins/goToStream'

export default {
  name: 'StreamIco',
  mixins: [goToStream],
  props: {
    stream: {
      required: true,
      type: Object
    }
  },
  computed: {
    streamClassImg () {
      const gender = this.stream.gender === 1 ? 'female' : 'male'
      const hardcore = this.stream.hardcore ? 'border-danger' : ''
      return `stream-${this.stream.classSlug} ${gender} ${hardcore}`
    }
  }
}
</script>

<style lang="stylus">
  .stream-ico
    vertical-align middle

    .stream-image
      width 30px
      height 26px
      display inline-block
      background-size 210%

    .stream-name
      height 24px
      display inline-block
</style>
