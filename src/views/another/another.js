import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      msg: 'Another View!!',
      message: '',
      clicks: 0,
      show: true,
      text: '',
      messageSet: false,
      addUserText: '',
    };
  },
  methods: {
    changeMessage() {
      this.msg = 'Different Message';
    },
    increment() {
      this.clicks++;
    },
    parentMethodName() {
      this.$store.dispatch('addUser', this.addUserText);
    }
  },
  computed: {
    ...mapGetters({
      getUsersUnderForty: 'getUsersUnderForty',
    }),
    counter() {
      return this.clicks * 2;
    },
  },
  mounted() {
    this.$store.dispatch('loadApi');
  }
};
