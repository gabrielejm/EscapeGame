export const timerReducer = (state, action) => {
  switch (action) {
    case 'activate':
      return { active: true }
    case 'end': 
      return { active: false }
    default:
      return state;
  }
}

export default timerReducer