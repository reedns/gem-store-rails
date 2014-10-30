class AddColumnsToProducts < ActiveRecord::Migration
  def change
    add_column :products, :shine, :integer
    add_column :products, :rarity, :integer
    add_column :products, :color, :string
    add_column :products, :faces, :integer
    add_column :products, :image, :string
  end
end
