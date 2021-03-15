export default {
  data () {
    return {
      city: '深圳'
    }
  },
  methods: {
    showCity () {
      console.log('myMixin showCity', this.city)
    }
  },
  mounted () {
    console.log('myMixin mounted')
  }
}