#!/bin/bash
docker run --rm -p 4000:4000   -v "$PWD":/srv/jekyll   -v "$PWD/vendor/bundle":/usr/local/bundle   jekyll/jekyll jekyll serve --livereload --host 0.0.0.0
