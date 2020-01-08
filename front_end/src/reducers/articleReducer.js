
export default function articleReducer (state = { articles: [], loading: false }, action) {
    switch(action.type ){
        
        case "START_ADDING_ARTICLE_REQUEST" : 
        console.log(action)
        return {...state, loading: true}

        case 'ADD_ARTICLES': console.log(action)
        return {articles: action.articles, loading: false}
        default: return state
    }
}