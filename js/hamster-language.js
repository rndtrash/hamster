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
				[/".*?[^\\]"/, 'string'],
				[/#/, 'comment']
			]
		}
	});
}
