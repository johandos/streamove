<template>
  <div class="stream-list border-top border-secondary mt-5 pt-5">
    <b-table
      hover
      striped
      dark
      :items="stream"
      :fields="fields"
      stacked="sm"
      small
    >
      <template v-slot:cell(name)="data">
        <StreamIco :stream="data.item"/>
      </template>

      <template v-slot:cell(class)="data">
        <StreamClassLevel :stream="{ class: data.item.classSlug, level: data.item.level}"/>
      </template>

      <template v-slot:cell(kills)="data">
        <span>{{ data.item.kills.elites | formatNumber }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
import { formatNumber } from '@/filters/numeral'

import StreamIco from './MoveIco'
import StreamClassLevel from './MoveClassLevel'

export default {
  name: 'StreamesList',
  filters: {
    formatNumber
  },
  components: { StreamClassLevel, StreamIco },
  props: {
    stream: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'class',
          label: 'Class',
          sortable: true
        },
        {
          key: 'kills',
          label: 'Elite Kills',
          sortable: true
        }
      ]
    }
  }
}
</script>
