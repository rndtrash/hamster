export const HamsterState = {
	OK: Symbol("ok"),
	DISAPPOINTED: Symbol("disappointed")
};
Object.freeze(HamsterState);

export class Hamster {
	constructor(x, y) {
		this.x = x || 0;
		this.y = y || 0;
	}
}
