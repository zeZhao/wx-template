Component({
  properties: {
    product: {
      type: Object,
      value: {}
    },
    favorite: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    onSelect() {
      this.triggerEvent('select', { id: this.data.product.id });
    },
    onToggleFavorite() {
      this.triggerEvent('togglefavorite', { id: this.data.product.id });
    }
  }
});
