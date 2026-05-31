const AppSettings = {
    data: () => ({
        title: 'title from Data'
    }),

    template: `
    <div class="card center">
        <h1>{{ title }} из свойства template</h1>
        <button class="btn" @click="this.title = 'New Title!'"> Change title</button>
    </div>
    `,

      beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  }

}

Vue.createApp(AppSettings).mount('#app')