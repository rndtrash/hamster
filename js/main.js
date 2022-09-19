import { HamVM } from "./hamperter-vm.js";
import { registerHamsterLanguage, hamsterLangId } from "./hamster-language.js";
import { registerHamAsmLanguage, hamasmLangId } from "./hamasm-language.js";

let hamVM = null;
let editor = null;

function init() {
	hamVM = new HamVM();

	monaco.editor.defineTheme(hamsterLangId, {
		base: 'vs',
		rules: [
			{ token: 'keyword', foreground: '#ff6600', fontStyle: 'bold' },
			{ token: 'comment', foreground: '#999999' },
			{ token: 'string', foreground: '#009966' },
			{ token: 'variable', foreground: '#006699' },
		]
	});
	registerHamsterLanguage();
	registerHamAsmLanguage();
	editor = monaco.editor.create(document.getElementById('code'), {
		value: 'функция Хамлы():\n\tвозврат "хамяк)"',
		language: hamsterLangId,
		theme: 'hamster-theme',
		automaticLayout: true
	});
}

window.onload = () => {
	init();
};
