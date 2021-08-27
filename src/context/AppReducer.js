export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_TASK':
      return {
        ...state,
        users: state.users.filter(user => {
          return user.id !== action.payload;
        })
      }
    case 'ADD_TASK':
      return {
        ...state,
        users: [action.payload, ...state.users]
      }
    case 'EDIT_TASK':
      const updateUser = action.payload;

      const updateUsers = state.users.map(user => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      })
      return {
        ...state,
        users: updateUsers
      }
    
      

    default:
      return state;
  }
}