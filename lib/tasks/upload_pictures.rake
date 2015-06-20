namespace :image_upload do
  desc "Upload default pictures for discounts"
  task :default_discount_pictures => :environment do
    Discount.all.each do |discount|
      default_image = File.open("public/default_pictures/discounts/#{discount.title}.jpg")
      discount.image = default_image
      discount.save
    end
  end

  desc "Upload default pictures for categories"
  task :default_category_pictures => :environment do
    Category.all.each do |category|
      default_image = File.open("public/default_pictures/categories/#{category.name}.jpg")
      category.image = default_image
      category.save
    end
  end

  desc "upload all default images"
  task :all => [:default_discount_pictures, :default_category_pictures]
end