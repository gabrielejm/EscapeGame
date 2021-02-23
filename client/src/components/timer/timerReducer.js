export const timerReducer = (state, action) => {
  switch (action.type) {
    case 'activate':
      return { ...state, active: true }
    case 'gameOver': 
      return { ...state, active: false }
    case 'youWin':
      return {...state, active: false, isFinished: true}
    case 'seconds':
      return {
        ...state, seconds: action.value
      }
    case 'minutes': 
      return { ...state, minutes: action.value }
    default:
      return state;
  }
}

export default timerReducer