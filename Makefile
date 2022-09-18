NAME=hamnide
7ZA?=7za

.PHONY: all html css js static dist dev

all: html css js static

dist: all
	pushd dist; $(7ZA) a ../$(NAME).zip *

html: dist/index.html

dist/%.html: src/%.html
	mkdir -p dist
	npx html-minifier $< --collapse-whitespace -o $@

css: dist/styles/main.css

dist/styles/%.css: src/styles/%.css
	mkdir -p dist/styles
	npx clean-css-cli $< -o $@

js: dist/js/hamperter-vm.js dist/js/hamsper.js dist/js/main.js

dist/js/%.js: js/%.js
	mkdir -p dist/js
	npx uglify-js $< -o $@

static:
	cp -r public/* dist/

dev: all
	npx http-server dist/
