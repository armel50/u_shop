import React, { Component } from 'react'
import fetchCart from '../actions/fetchCart'
import {connect} from 'react-redux'
import deleteFromCart from '../actions/deleteFromCart'
import Loader from '../components/Loader'
import Paypal from '../components/Paypal'

 class Cart extends Component {
    componentDidMount(){
        this.props.fetchCart()
    }

    display_articles = () => {
        if(this.props.articles_in_cart.length !== 0){

        
            return this.props.articles_in_cart.map(e => <div className='ui raised segment' key={e.id}>
                                                                <div className='left_floated'> 
                                                                <h3>{e.name}</h3> 

                                                                <img src={e.picture}  height='250px'/>

                                                                </div>
                                                                
                                                                <div className='ui tall stacked segment right_floated'>
                                                                     <Paypal article={e} />
                                                                    <button className='negative ui button remove' onClick={() =>this.props.deleteFromCart(e.id)}>Remove</button>
                                                                </div>
                                                                    
                                                    </div>)
        }else{
            return (<div> <h1>You have 0 items in your cart</h1> </div>)
        }
    }
    render() {
        return (
            <div>
            <div class="ui statistic">
                <div class="value">
                   Total: $ {this.props.total}
                </div>
               
            </div>


                {
                   !this.props.loading ? this.display_articles() : <Loader />
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading_cart: state.cart.loading,
        articles_in_cart: state.cart.articles,
        total: state.cart.total
    }
}

const mapDispatchToProps =(dispatch) => {
    return {fetchCart:  () => dispatch(fetchCart()), deleteFromCart: id => dispatch(deleteFromCart(id))}
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)