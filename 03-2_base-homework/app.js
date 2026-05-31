const AppSettings = {
    data: () => ({
        title: 'VUE Learning Plan',
        steps: [
          {
            id: 1,
            name: "Основы",
            text: ' В этом блоке узнаем основы VUE'
          },
          {
            id: 2,
            name: "Компоненты",
            text: ' В этом блоке узаем что такое компоненты и чем их готовить'
          },
          {
            id: 3,
            name: "Роутер",
            text: 'В этом блоке учимся навигаци и как использовать роутер'
          },
          {
            id: 4,
            name: "VUEX",
            text: 'Узнаем все про стейт менеджер VUEX& и как его использовать'
          },
          {
            id: 5,
            name: "Composition",
            text: 'Узнаем что такое Composition'
          },
        ],
        changedStep: 0,
    }),
    methods: {
      prevStep () {
         if (this.changedStep === 0) {
          return
        }
        this.changedStep --
         
      },
      nextStep () {
        if (this.changedStep === this.steps.length - 1) {
          return
          }
          this.changedStep ++
      },
      changeStep(stepIndex) {
        console.log('ChangeStep called', stepIndex)
        this.changedStep = stepIndex
      },
    },
    computed: {
      isNextBlocked() {
        return this.changedStep === this.steps.length - 1
      },
      isPrevBlocked () {
        return this.changedStep === 0
      }

    },
    template: `
    <div class="card center">
        <h1>{{ title }}</h1>
        <p>{{this.steps[changedStep].text}}</p>

        <ul>
          <li v-for="(step, i) in steps" key="step.name">
            <button @click="changeStep(i)" > {{step.id}} </button>
            <span> {{step.name}} </span>
          </li>
        </ul>

        <button @click="prevStep" :disabled="isPrevBlocked">Previous Step</button>
        <button @click="nextStep" :disabled="isNextBlocked">Next Step</button>
    </div>
    `,

}

Vue.createApp(AppSettings).mount('#app')