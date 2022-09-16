NAME=hamnide
7ZA?=7za

.PHONY: all static dist dev

all: html css js static

dist: all
	pushd dist; $(7ZA) a ../$(NAME).zip *

html: dist/index.html

dist/index.html:
	npx html-minifier src/index.html --collapse-whitespace -o dist/index.html

css: dist/styles/main.css

dist/styles/main.css:
	npx clean-css-cli -o dist/styles/main.css src/styles/main.css

js: dist/js/hamperter-vm.js dist/js/hamsper.js dist/js/main.js

%.js:
	mkdir -p dist/js
	npx uglify-js $(shell echo '$@' | sed 's/dist\///') -o $@

static:
	cp -r public/* dist/

dev: all
	npx http-server dist/
