<template>
  <div class="stream-name-level">
    <span> {{ classToName(stream.class) }} </span>
    <span>·</span>
    <span class="text-monospace font-weight-bold"> {{ stream.level }} </span>
  </div>
</template>

<script>
import streamName from '@/mixins/moveName.js'

export default {
  name: 'StreamClassLevel',
  mixins: [streamName],
  props: {
    stream: {
      required: true,
      type: Object
    }
  }
}
</script>
