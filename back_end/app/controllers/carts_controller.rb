class CartsController < ApplicationController
    def show 
        cart = Cart.find_or_create_by(id: params.permit(:id)[:id])
        render json: {cart: cart, articles: cart.articles}
    end

    def update 
        # binding.pry
        cart = Cart.find_by(id: params.permit(:id)[:id])
        article = Article.find_by(id: params.permit(:article_id)[:article_id])
        cart.articles << article 
        render json: {cart: cart, articles: cart.articles}
    end

    def destroy

        # binding.pry
        cart = Cart.find_by(id: params.permit(:id)[:id])
        article = Article.find_by(id: params.permit(:article_id)[:article_id])
        cart.articles.delete(article) 
        render json: {cart: cart, articles: cart.articles}
    end
end
