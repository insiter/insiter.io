activate :autoprefixer do |prefix|
  prefix.browsers = 'last 2 versions'
end

activate :livereload
activate :asset_hash

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_html
  activate :minify_css
  activate :minify_javascript
end
