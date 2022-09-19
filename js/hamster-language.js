export const hamsterLangId = 'hamster';
const keywords = ['функция', 'возврат'];

export function registerHamsterLanguage() {
	monaco.languages.register({ id: hamsterLangId });
	monaco.languages.setMonarchTokensProvider(hamsterLangId, {
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
				[/".*?"/, 'string'],
				[/#/, 'comment']
			]
		}
	});
	monaco.editor.defineTheme(hamsterLangId, {
		base: 'vs',
		rules: [
			{ token: 'keyword', foreground: '#ff6600', fontStyle: 'bold' },
			{ token: 'comment', foreground: '#999999' },
			{ token: 'string', foreground: '#009966' },
			{ token: 'variable', foreground: '#006699' },
		]
	});
}
