import React from 'react'
import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom'


export default function Article({article,addArticlesToCart}) {

    const handleClick = (event) => {
        addArticlesToCart(article.id)

    }

    return (
        <div className='column '>
        <div className="ui special cards">
 
    <div >
     
      <img src={article.picture}  className='index' />
    <div className="content">

      <a href={`/articles/${article.id}`} className="header"><h3>{article.name}</h3></a>
      <div className="meta">
        <small> Sold By: Apple</small>
      </div>
    </div>
    <div className="extra content">
    <button className='ui primary button' onClick={handleClick}>Add To Cart</button> 

      <div className="ui mini horizontal statistic">
        <div className="value">
            {article.price}
        </div>
        <div className="label">
            $
        </div>
    </div> 
    </div>
    </div>
  </div>
           
        </div>
    )
}
