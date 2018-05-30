// 可以认为是 store 的计算属性， 暴露为store.getters
export default {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  }
}
