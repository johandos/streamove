export default {
  methods: {
    /**
     * Go to stream Id
     * @param streamId {String | Number}
     */
    goToStream (streamId) {
      const { region, battleTag } = this.$route.params
      this.$router.push({ name: 'Stream', params: { region, battleTag, streamId } })
    }
  }
}
