 const headerReducer = (state='', action) => {
    switch(action.type) {
        case 'landing':
            return 'h-landing';
        case 'common':
            return '';
        default:
            return state;
    }
}

export default headerReducer;