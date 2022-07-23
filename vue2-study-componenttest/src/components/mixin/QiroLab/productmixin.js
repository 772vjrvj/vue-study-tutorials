export default {
  data() {
    return {
      products : []
    }
  },
  created(){
    this.products = this.loadProducts();
  },
  methods: {
    loadProducts() {
      return [
        'product A',
        'product B',
        'product C',
        'product D'
      ]
    }
  }
}