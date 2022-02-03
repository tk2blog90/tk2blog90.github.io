## Local running command

```
bundle exec jekyll serve --livereload
```

## Link layout

```
{% capture url %}{{ "" }}{% endcapture %}
{% capture name %}{{ "" }}{% endcapture %}
{% capture thumbnail %}{{ "" }}{% endcapture %}
{% include site-link.html %}
```

- `url` is required.
- `name` is required.
- `thumbnail` is **not** required. Can be empty string.
