import classes from '../utils/moveClasses'

export default {
  methods: {
    classToName (classSlug) {
      return classes[classSlug]
    }
  }
}
