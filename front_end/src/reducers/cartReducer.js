
export default function cartReducer (state = { articles: [], loading: false, total: 0.0 }, action) {
    switch(action.type ){
        
        // case "START_ADDING_ARTICLE_REQUEST" : 
        // console.log(action)
        // return {...state, loading: true}

        case 'ADD_ARTICLES_IN_CART': console.log(action)
        return {articles: action.articles, loading: false, total: action.articles.reduce((memo, e)=>e.price + memo,0)}
        default: return state
    }
}