import { HamVM } from "./hamperter-vm.js";
import { registerHamsterLanguage, hamsterLangId } from "./hamster-language.js";

let hamVM = null;
let editor = null;

function init() {
	hamVM = new HamVM();

	registerHamsterLanguage();
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
