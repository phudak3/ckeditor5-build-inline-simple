import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import autoformatExtra from "./autoformat-extra";

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';

import Emoji from '@phudak/ckeditor5-emoji/src/emoji';
import EmojiPeople from "@phudak/ckeditor5-emoji/src/emoji-people";
import EmojiNature from "@phudak/ckeditor5-emoji/src/emoji-nature";
import EmojiFood from "@phudak/ckeditor5-emoji/src/emoji-food";
import EmojiActivity from "@phudak/ckeditor5-emoji/src/emoji-activity";
import EmojiObjects from "@phudak/ckeditor5-emoji/src/emoji-objects";
import EmojiPlaces from "@phudak/ckeditor5-emoji/src/emoji-places";
import EmojiSymbols from "@phudak/ckeditor5-emoji/src/emoji-symbols";
import EmojiFlags from "@phudak/ckeditor5-emoji/src/emoji-flags";

export default class SimpleInlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
SimpleInlineEditor.builtinPlugins = [
	Essentials,
	Paragraph,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	TextTransformation,
	WordCount,
	Emoji,
	EmojiPeople,
	EmojiNature,
	EmojiPlaces,
	EmojiFood,
	EmojiActivity,
	EmojiObjects,
	EmojiSymbols,
	EmojiFlags,
];

// Editor configuration.
SimpleInlineEditor.defaultConfig = {
	toolbar: {
		items: [
			'emoji',
			'specialCharacters',
			'|',
			'undo',
			'redo'
		]
	},
	typing: {
		transformations: {
			remove: [
				'quotes',
			],
			extra: [
				...autoformatExtra()
			]
		}
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
