import { Hamster } from "./hamsper.js";

export const HamVMState = {
	RUNNING: Symbol("running"),
	HALT: Symbol("halt")
};
Object.freeze(HamVMState);

export class HamVM {
	constructor(code, hamster, field) {
		this.code = code || new Uint8Array([0x00]);

		this.hamster = hamster || new Hamster();
		this.field = field;

		this.tickStartCallback = (hamVM) => { };
		this.tickEndCallback = (hamVM) => { };

		this.reset = () => {
			this.registers = {
				pc: 0,
				stackPointer: 0,
				a: 0,
				b: 0,
				overflow: 0
			};
			this.state = HamVMState.HALT;

			this.ram = new Uint8Array(4096);

			// --- //
			const limit = Math.min(this.ram.length, this.code.length);

			if (this.code.length >= this.ram.length) {
				console.warn(`Code is larger than RAM (${this.code.length} bytes of code VS ${this.ram.length} bytes of RAM).`);
			}

			for (let i = 0; i < limit; i++) {
				this.ram[i] = this.code[i];
			}
		};
		this.reset();

		this.run = () => {
			this.state = HamVMState.RUNNING;

			let error = 0;
			while (error !== -1) {
				if (this.state === HamVMState.HALT) {
					console.warn("VM was halted.");
					break;
				}

				error = this.tick();
			}

			this.state = HamVMState.HALT;
		};

		this.consumeInstruction = () => {
			const jump = false;
			while (true) {
				const opcode = this.code[this.registers.pc];

				if (opcode === undefined) { throw `EndOfCode: Reached end of program (position: ${this.registers.pc}), halting...`; }

				//
				if (!jump) { this.registers.pc++; }

				break;
			}
		};

		this.tick = () => {
			try {
				this.tickStartCallback(this);
				this.consumeInstruction();
				this.tickEndCallback(this);
				return 0;
			} catch (error) {
				console.error(error);
				return -1;
			}
		};
	}
}
