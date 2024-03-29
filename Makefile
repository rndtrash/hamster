NAME=hamnide
7ZA?=7za

.PHONY: all clean html css js static dist dev

all: html css js static dist/vs

dist: all
	pushd dist; $(7ZA) a ../$(NAME).zip *

dist/vs:
	cd 3rd/monaco-editor && npm i && npm run release
	cp -r 3rd/monaco-editor/release/min/vs dist/

html: dist/index.html

dist/%.html: src/%.html
	mkdir -p dist
	npx html-minifier $< --collapse-whitespace -o $@

css: dist/styles/main.css

dist/styles/%.css: src/styles/%.css
	mkdir -p dist/styles
	npx clean-css-cli $< -o $@

js: dist/js/hamster-language.js dist/js/hamasm-language.js dist/js/hamperter-vm.js dist/js/hamsper.js dist/js/main.js

dist/js/%.js: js/%.js
	mkdir -p dist/js
	npx uglify-js $< -o $@

static:
	cp -r public/* dist/

dev: all
	npx http-server dist/

clean:
	rm -rf dist/
