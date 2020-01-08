import React, { Component } from 'react'
import {connect} from 'react-redux'
import Article from '../components/Article'
import fetchArticles from '../actions/fetchArticles'
import {Route} from 'react-router-dom'
import ArticleShow from '../components/ArticleShow'
import addArticleToCart from '../actions/addArticlesToCart'
import Loader from '../components/Loader'
import SearchBar from '../components/SearchBar'

 class ArticleContainer extends Component {
    componentDidMount(){
        this.props.fetchArticles()
    }

    display_articles = () => {
        if(this.props.articles && this.props.articles.length !== 0){
            console.log(this.props)
            return this.props.articles.map(e => <Article addArticlesToCart={this.props.addArticleToCart} key={e.id} article={e} />)

        }else{
            const dogs = ['https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60','https://images.unsplash.com/photo-1485358370836-4fb8998c06f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60','https://images.unsplash.com/photo-1516366434321-728a48e6b7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60','https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60']
            return (<div  className="ui raised segment centered">
                    <h3>Sorry We Could Not Find That Article!</h3>
                        <img src={dogs[Math.floor(Math.random() * 4)]} height='500'  width='500'/>
                    </div>)
        }
    }
    render() {
        return (
            <div className='ui container'>
            <SearchBar fetchArticles={this.props.fetchArticles} />
            <div className="ui star rating" data-rating="3"></div>
                <div className={window.location.href !=='http://localhost:3001/articles' ? "ui three column doubling stackable grid container dimed":"ui three column doubling stackable grid container "}>
                {
                   !this.props.loading ? this.display_articles() : <Loader />
                }
                </div>
               < Route  path={`/articles/:articleId`} render={renderProps =><div className='showContainer'> <ArticleShow articles={this.props.articles} {...renderProps}/></div>}/>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.article.loading,
        articles: state.article.articles
    }
}

const mapDispatchToProps =(dispatch) => {
    return {fetchArticles:  query => dispatch(fetchArticles(query)),addArticleToCart: article_id => dispatch(addArticleToCart(article_id))}
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer)