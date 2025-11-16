# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "axya"
  spec.version       = "0.0.1"
  spec.authors       = ["Ritesh Kanchi"]
  spec.email         = ["rkanchi@g.harvard.edu"]

  spec.summary       = "Axya is a Jekyll theme that helps researchers quickly publish accessible, clean, and modern companion sites for their papers, posters, and projects."
  spec.homepage      = "https://github.com/ritesh-kanchi/axya"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.4"
end
