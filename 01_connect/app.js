const app = {
  data() {
    return {
      mainTitle: "Notes",
      fieldPlaceholder: "Input note",
      fieldValue: "",
      notes: ["Note One", "Note Two"],
      vModelField: '',
      error: "",
    };
  },
  methods: {
    handleChangeInput(evt) {
      this.fieldValue = evt.target.value;

      if (this.fieldValue !== "") this.error = "";
    },
    handleAddNote() {
      if (this.fieldValue === "") {
        this.error = "Field is empty, you need to type something!";
      } else {
        this.error = "";
        this.notes.push(this.fieldValue);
        this.fieldValue = "";
      }
    },
    handleDeleteNote(note, i) {
      console.log("handleDelete");
      this.notes = this.notes.filter((n) => n !== note);
      console.log(i);
    },
  },
  computed: {
    doubleCounter() {
      return this.notes.length * 2;
    },
  },

  watch: {
    fieldValue() {
      if (this.fieldValue.length > 10) {
        this.handleAddNote()
      }
    },
    vModelField(val) {
        console.log('V-nodel field changed: ', val)
    }
  },
};
Vue.createApp(app).mount("#app");
