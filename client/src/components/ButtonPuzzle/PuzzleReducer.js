export const puzzleReducer = (state, action) => {
    const {button1, button2, button3, button4, button5} = state
    let color

    switch (action) {
        case 'button1':
            button1 === 'green' ? color = 'red' : color = 'green'
            return {
                ...state,
                button1: color
            }
        case 'button2':
            button2 === 'green' ? color = 'red' : color = 'green'
            return {
                ...state,
                button2: color
            }
        case 'button3':
            button3 === 'green' ? color = 'red' : color = 'green'
            return {
                ...state,
                button3: color
            }
        case 'button4':
            button4 === 'green' ? color = 'red' : color = 'green'
            return {
                ...state,
                button4: color
            }
        case 'button5':
            button5 === 'green' ? color = 'red' : color = 'green'
            return {
                ...state,
                button5: color
            }
        default:
            return state
    }
};