'use babel';

import suggestions from '../data/unity';

class UnityProvider {
	constructor() {
		//Only offer suggestions only when editing cs files
		this.selector = '.cs';
		//Prioritize these suggestions
		this.suggestionPriority = 2;
	}

	getSuggestions(options) {
		const { prefix } = options;
		//Only offer suggestions after 3 characters have been typed
		if (prefix.length >= 3) {
			return this.findMatchingSuggestions(prefix);
		}
	}

	//Filter list of suggestion
	findMatchingSuggestions(prefix) {
		//Case insensitive
		let prefixLower = prefix.toLowerCase();
		//Find suggestions beginning with users text
		let matchingSuggestions = suggestions.filter((suggestion) => {
			let textLower = suggestion.text.toLowerCase();
			return textLower.startsWith(prefixLower);
		});

		//Gather extra data on each suggestion
		return matchingSuggestions.map(this.inflateSuggestion);
	}

	inflateSuggestion(suggestion) {
		return {
			text: suggestion.text,
			description: suggestion.description,
			descriptionMoreURL: suggestion.descriptionMoreURL,
			type: suggestion.type
		};
	}
}
export default new UnityProvider();
