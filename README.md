<img width="150" alt="Axya" src="axya.svg" />

**An accessible Jekyll theme for research websites.**

> [!IMPORTANT]
> This repository is under construction and active development.

Axya is a Jekyll theme that helps researchers quickly publish accessible, clean, and modern companion sites for their papers, posters, and projects. Most Jekyll themes overlook accessibility—this one aims for:

- WCAG 2.1 AAA compliance
- Screen‑reader‑friendly semantics
- Full keyboard navigation support
- High color contrast and readability
- Minimal cognitive load
- Solid mobile navigation experience

Live Example:
[Systems for Scaling Accessibility Efforts in Large Computing Courses](https://g.riteshkanchi.com/sigcse26-systems-for-scaling-accessibility/)

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

## Installation

### 1. Using as a Remote Theme (GitHub Pages compatible)

First, follow the usage for [jekyll-remote-theme](https://github.com/benbalter/jekyll-remote-theme).

Then, add this to your `_config.yml`:

```yaml
remote_theme: ritesh-kanchi/axya@main
```

Then run:

```bash
bundle exec jekyll serve
```

> [!WARNING]
> jekyll-remote-theme has its own problems, and may not work out of the box. Including the following gems may help:

```Gemfile
gem 'csv'
gem 'base64'
gem 'bigdecimal'

gem "jekyll", "4.3.3"
gem "jekyll-remote-theme", "~> 0.4.3"
```

### 2. Installing the Gem Locally

Build the gem:

```bash
gem build axya.gemspec
```

Install it:

```bash
gem install ./axya-0.0.1.gem
```

Then in your site’s `Gemfile`:

```ruby
gem "axya"
```

And in `_config.yml`:

```yaml
theme: axya
```

## Usage

The theme currently provides these layouts:

- `base` — base layout with header and footer
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

## Where does Axya come from?

A riff on "A11y" (if you can imagine the "x" being two crossed 1's.)
