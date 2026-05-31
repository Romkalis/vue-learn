import AppAlert from "@/components/AppAlert.vue"
export default {
   data: () => ({
    isAlert: true,
  }),
  components: {
    'app-alert': AppAlert
  },
  methods: {
    toggleAlert() {
      this.isAlert = !this.isAlert
    }
  }
}
