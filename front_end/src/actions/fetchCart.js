export default function fetchArticles() {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_ARTICLE_REQUEST' });
        fetch('http://localhost:3000/carts/1')
          .then(response => response.json())
          .then(articles_in_cart => {console.log(articles_in_cart); return dispatch({ type: 'ADD_ARTICLES_IN_CART',cart: articles_in_cart.cart, articles: articles_in_cart.articles }) });
      };
}