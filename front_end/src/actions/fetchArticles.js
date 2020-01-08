export default function fetchArticles(query) {
    return (dispatch) => {
        query ? console.log(query) : console.log('no query')
    if (!query){
        dispatch({ type: 'START_ADDING_ARTICLE_REQUEST'});
        fetch('http://localhost:3000/articles')
          .then(response => response.json())
          .then(articles => dispatch({ type: 'ADD_ARTICLES', articles }));
    }else{
        console.log(query)
        fetch(`http://localhost:3000/articles_with_query/${query}`)
          .then(response => response.json())
          .then(articles => dispatch({ type: 'ADD_ARTICLES', articles }));
    }
       
      };
}