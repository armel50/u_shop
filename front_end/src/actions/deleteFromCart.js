export default function deleteFromCart(article_id){
    return dispatch => {

        const params = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
           body: JSON.stringify({article_id: article_id})
        }
        fetch('http://localhost:3000/carts/1',params)
          .then(response => response.json())
          .then(articles_in_cart => {console.log(articles_in_cart); return dispatch({ type: 'ADD_ARTICLES_IN_CART',cart: articles_in_cart.cart, articles: articles_in_cart.articles }) });
      
    }
}