new Vue({
  el: '#app',
  data: {
    showTaskForm: false,
  },
  methods: {
    toggleTaskForm() {
      this.showTaskForm = !this.showTaskForm;
    },
  },
});
