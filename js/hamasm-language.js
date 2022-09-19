export const hamasmLangId = 'hamAsm';
const keywords = ['mov', 'nop'];

export function registerHamAsmLanguage() {
	monaco.languages.register({ id: hamasmLangId });
	monaco.languages.setMonarchTokensProvider(hamasmLangId, {
		keywords,
		tokenizer: {
			root: [
				[/[a-zA-Zа-яёА-ЯЁ][a-zA-Zа-яёА-ЯЁ\d]*/, {
					cases: {
						'@keywords': 'keyword',
						'@default': 'variable'
					}
				}
				],
				[/".*?[^\\]"/, 'string'],
				[/#/, 'comment']
			]
		}
	});
}
