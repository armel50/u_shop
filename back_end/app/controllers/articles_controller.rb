class ArticlesController < ApplicationController
    def index 
        articles = Article.all
        render json: articles
    end 

    def create 
        name = params.permit(:name)
        picture = params.permit(:picture)
        price = params.permit(:price)
        article = Article.create(name: name, picture: picture, article: article)
        render json: article
    end

    def delete 
        article = Article.find_by(id: params.permit(:id))
        article.delete 
        render json: {message: "Succesfully deleted"}
    end


end
