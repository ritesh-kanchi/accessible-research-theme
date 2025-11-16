# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "accessible-research-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Ritesh Kanchi"]
  spec.email         = ["ritesh.kanchi@gmail.com"]

  spec.summary       = "An accessible Jekyll theme for research. I made this theme to easily create sites for research, as well as because most common Jekyll themes are not accessible and are (imo) poorly designed."
  spec.homepage      = "https://github.com/riteshkanchi/accessible-research-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.4"
end
