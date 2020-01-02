class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :name
      t.float :price
      t.string :picture
      t.integer :cart_id
      t.timestamps
    end
  end
end
