
import React, { Component } from 'react'

export default class sideBar extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    componentDidMount(){
        const nav =  document.querySelector('div.ui.inverted.vertical.masthead.center.aligned.segment')
        nav.style.backgroundImage = "url('https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')"       
          
    }
    render() {
        return (
              <div className="ui inverted vertical masthead center aligned segment" >

        <div className="ui container">
            <div className="ui large secondary inverted pointing menu">
                    <a className={window.location.href === 'http://localhost:3001/' ? 'active item': 'item'} href='/'>
                        Home
                        </a>
                        <a className={window.location.href === 'http://localhost:3001/articles' ? 'active item': 'item'} href='/articles'>
                        Articles
                        </a>
                        <a className={window.location.href === 'http://localhost:3001/carts/1' ? 'active item': 'item'} href='/carts/1'>
                        Cart
                        </a>
                    <div className="right item">
                    </div>
            </div>
            </div>

            <div className="ui text container">
            <h1 className="ui inverted header">
                Start Buying Now.
            </h1>
            <h2>It's Easy!</h2>
            <a  href='/articles' className="ui huge primary button">Start Buying! <i className="right arrow icon"></i></a>
        </div> 

    </div>   

        )
    }
}

