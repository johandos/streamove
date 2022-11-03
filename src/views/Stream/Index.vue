<template>
  <div class="profile-view">
    <div class="profile-body">
      <BaseLoading v-if="isLoading" />

      <template v-if="StreamData !== null">
        <MainBlock :profile-data="StreamData" />
      </template>
    </div>
  </div>
</template>

<script>
import setError from '@/mixins/setError'
import { getApiStream } from '@/api/stream'
import BaseLoading from '@/components/BaseLoading'
import MainBlock from './MainBlock/Index'

export default {
  name: 'ProfileView',
  mixins: [setError],
  components: {
    BaseLoading,
    MainBlock
  },
  data () {
    return {
      isLoading: false,
      StreamData: null
    }
  },
  computed: {
    artisansData () {
      return {
        blacksmith: this.StreamData.blacksmith,
        blacksmithHardcore: this.StreamData.blacksmithHardcore,
        jeweler: this.StreamData.jeweler,
        jewelerHardcore: this.StreamData.jewelerHardcore,
        mystic: this.StreamData.mystic,
        mysticHardcore: this.StreamData.mysticHardcore
      }
    }
  },
  created () {
    this.isLoading = true
    const { region, battleTag: account } = this.$route.params
    this.fetchData(region, account)
  },
  methods: {
    /**
     * Fetch data
     * @param region {String}
     * @param account {String}
     */
    fetchData (region, account) {
      // Fetch Data
      getApiStream()
        .then(({ data }) => {
          this.StreamData = data
        })
        .catch((err) => {
          this.StreamData = null
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
          this.setApiErr(errObj)
          this.$router.push({ name: 'Error' })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
