import React from 'react'

export default function ArticleShow({match,articles}) {
    const article = articles.find(e => e.id === parseInt( match.params.articleId))
    const handleClick = () => {
        window.history.back()
    }
    const display_article = () => {

        if(article){

          return(  <div className='ui raised segment show'>
                        <button className='back' onClick={handleClick}><i class="times circle icon"></i>
</button>
                        <h3>{article.name}</h3>
            
                        <img src={article.picture} />
                        <h3>Price: ${article.price} </h3>
                        <div class="ui tall stacked segment">
                            <h3>Description</h3>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                        </div>
                    </div>
             )

        }
        
    }
    return (
        <div>
            {display_article()}
                  
        </div>
    )
}

