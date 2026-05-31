const App = {
    data: () => ({
        person: {
        name: 'Roman',
        age: 40,
        },
        items: [1,2,3,4,5,6,7],
        inputField: '',
    }),
    
    methods: {
        addElementToList () {

            const input = this.$refs.myInput.value

            if(input.trim() === "") {
                return
            }
            this.items.push(input)
            this.$refs.myInput.value = ''
        }
    },
    computed: {
        evenItems () {
            return this.items.filter( i => i % 2 === 0)
        }, 
    }
}

Vue.createApp(App).mount('#app')