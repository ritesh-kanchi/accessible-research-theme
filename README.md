# Accessible Research Theme (cooler name TBD)

**A theme that is very much under construction**

An accessible Jekyll theme for research websites.

This theme helps researchers quickly publish accessible, clean, and simple companion sites for their papers, posters, and projects. Most Jekyll themes overlook accessibility — this one aims for:

- WCAG 2.1 AAA compliance
- Screen‑reader‑friendly semantics
- Full keyboard navigation support
- High color contrast and readability
- Minimal cognitive load
- Solid mobile navigation experience

Live Example:
[Systems for Scaling Accessibility Efforts in Large Computing Courses](https://g.ritesh-kanchi.com/sigcse26-systems-for-scaling-accessibility/)

## Features

- Accessible layouts for research websites
- Homepage with hero section + automatic page grid
- Clean typography and Tailwind‑generated CSS
- Configurable metadata:
  - Conference name & year
  - Authors
  - Affiliation details
  - Research links (PDF, DOI, supplemental, etc.)
- Fully responsive

## Todo List (in no particular order nor exhaustive)

- [ ] Navbar improvements
- [ ] Mobile Nav improvements
- [ ] WCAG 2.1 AAA compliance audit
- [ ] Screen reader testing
- [ ] Keyboard navigation testing
- [ ] Provide greater extensibility (e.g., more configuration options)
- [ ] Allow more flexibility via SASS than hardcoded CSS
- [ ] Add more features (e.g., blog support, more layouts)
- [ ] Improve documentation
- [ ] Allow for external links as part of the homepage grid
- [ ] Allow for greater customization (colors, fonts, etc.)

## Installation

### 1. Using as a Remote Theme (GitHub Pages compatible)

Add this to your `_config.yml`:

```yaml
plugins:
  - jekyll-remote-theme

remote_theme: ritesh-kanchi/accessible-research-theme
```

Then run:

```bash
bundle install
bundle exec jekyll serve
```

### 2. Installing the Gem Locally

Build the gem:

```bash
gem build accessible-research-theme.gemspec
```

Install it:

```bash
gem install ./accessible-research-theme-0.1.0.gem
```

Then in your site’s `Gemfile`:

```ruby
gem "accessible-research-theme"
```

And in `_config.yml`:

```yaml
theme: accessible-research-theme
```

## Usage

The theme currently provides these layouts:

- `default` — base layout with header and footer
- `home` — homepage with hero section and automatic page grid
- `page` — simple general‑purpose page layout

More layouts will come as the theme evolves.

## Configuration

Add the following fields to your `_config.yml` to customize your research site:

```yaml
title: Research Title
description: An accompanying website for a research paper.

conference:
  name: Conference Name
  year: 2026

content:
  footer: Your Name
  affiliation:
    name: University Name
    department: Department Name
    url: https://example.com
  type: Paper
  authors:
    - name: First Author
      url: https://example.com
    - name: Second Author
      url: https://example.com
  links:
    - label: Paper Link
      url: https://doi.org/10.1145/XXXXXXX.XXXXXXX
```

Add as many authors or links as needed.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/ritesh-kanchi/accessible-research-theme. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

I appreciate any feedback or suggestions for improvements!

## License

This theme is open source under the MIT License.

## Notes

The CSS for this theme is generated using Tailwind CSS. See: [“How to quickly add Tailwind to an existing Jekyll site”](https://syntaxjournal.com/how-to-add-tailwindcss-jekyll/)
