import React, { Component } from 'react'
import fetchArticles from '../actions/fetchArticles'
import {connect} from 'react-redux'
export default class SearchBar extends Component {
    constructor(){
        super()
        this.state = {query: ''}
    }
    handleChange = event => {
        this.setState({query: event.target.value})
    }
    handleSubmit = event => {
        event.preventDefault()
       const query =  this.state.query
       this.props.fetchArticles(query)
       this.setState({query: ''})

    }
    render() {
        return (
            <form className="ui category search" onSubmit={this.handleSubmit}>
                <div className="ui icon input">
                    <input onChange={this.handleChange} className="prompt" type="text" placeholder="Enter an article" value={this.state.query}/>
                    <i className="search icon"></i>
                </div>
                <div className="results"></div>
            </form>
        )
    }
}

