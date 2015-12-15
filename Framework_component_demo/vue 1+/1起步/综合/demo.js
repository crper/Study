new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [{
      text: 'Add some todos',
      test: '<h2>哈哈哈</h2>'
    }]
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({
          text: text
        })
        this.newTodo = ''
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
})