activate :autoprefixer do |prefix|
  prefix.browsers = 'last 2 versions'
end

activate :livereload
activate :asset_hash

activate :external_pipeline,
  name: :webpack,
  command: build? ? 'yarn build' : 'yarn dev',
  source: '.tmp/dist',
  latency: 1

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

helpers do
  def image_url(path)
    data.site.url + image_path(path)
  end

  def is_available(date)
    if Date.parse(date.start) <= Date.today and Date.parse(date.due) > Date.today
      return true
    else
      return false
    end
  end
end

configure :build do
  # "Ignore" JS so webpack has full control.
  ignore { |path| path =~ /\/(.*)\.js$/ && $1 != 'site' }

  activate :minify_html
  activate :minify_css
end

activate :deploy do |deploy|
  deploy.deploy_method = :git
end
