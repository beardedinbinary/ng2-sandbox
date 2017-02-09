export function reducer(state ={}, {type,current_category, current_filter}){
    switch(type){
        case 'CAT_SELECT':
            return Object.assign({},state, {currentCategory: current_category, currentFilter: current_filter });
    }
    return state;
}



