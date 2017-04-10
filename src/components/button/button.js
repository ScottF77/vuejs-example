export default {
  props: {
    buttonText: {
      type: String,
      required: true
    }
  },
  methods: {
    emitClick() {
      this.$emit('emitClick');
    }
  }
}
