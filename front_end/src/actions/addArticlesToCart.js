export default function addArticleToCart(article_id) {
    console.log(article_id)
    return (dispatch) => {
        // dispatch({ type: 'START_ADDING_ARTICLE_REQUEST' });
        const params = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
           body: JSON.stringify({article_id: article_id})
        }
        fetch('http://localhost:3000/carts/1',params)
          .then(response => response.json())
          .then(articles_in_cart => {console.log(articles_in_cart); return dispatch({ type: 'ADD_ARTICLES_IN_CART',cart: articles_in_cart.cart, articles: articles_in_cart.articles }) });
      };
}

