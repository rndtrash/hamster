import { HamVM } from "./hamperter-vm.js";

let hamVM = null;

function init() {
	hamVM = new HamVM();
}

window.onload = () => {
	init();
};
