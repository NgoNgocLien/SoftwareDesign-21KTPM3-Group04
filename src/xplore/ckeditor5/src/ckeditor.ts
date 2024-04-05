/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { AIAssistant, OpenAITextAdapter  } from '@ckeditor/ckeditor5-ai';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import {
	Bold,
	Code,
	Italic,
	Strikethrough,
	Subscript,
	Superscript,
	Underline
} from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { FontColor, FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import {
	Image,
	ImageCaption,
	ImageInsert,
	ImageStyle,
	ImageToolbar,
	ImageUpload
} from '@ckeditor/ckeditor5-image';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { SelectAll } from '@ckeditor/ckeditor5-select-all';
import { Undo } from '@ckeditor/ckeditor5-undo';
import { WordCount } from '@ckeditor/ckeditor5-word-count';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		AIAssistant,
		Alignment,
		Autoformat,
		BlockQuote,
		Bold,
		Code,
		CodeBlock,
		Essentials,
		FindAndReplace,
		FontColor,
		FontSize,
		Heading,
		Image,
		ImageCaption,
		ImageInsert,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Italic,
		Link,
		List,
		MediaEmbed,
		Paragraph,
		OpenAITextAdapter ,
		SelectAll,
		Strikethrough,
		Subscript,
		Superscript,
		Underline,
		Undo,
		WordCount
	];

	public static override defaultConfig: EditorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'heading',
				'|',
				'fontSize',
				'fontColor',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'code',
				'superscript',
				'subscript',
				'alignment',
				'bulletedList',
				'numberedList',
				'link',
				'blockQuote',
				'codeBlock',
				'imageInsert',
				'imageUpload',
				'mediaEmbed',
				'selectAll',
				'findAndReplace',
				'aiCommands',
				'aiAssistant'
			]
		},
		language: 'en',
		image: {
			toolbar: [
				'imageTextAlternative',
				'toggleImageCaption',
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side'
			]
		},
		licenseKey: 'b3lIK3VyOFdJOFZVanBtRE94V3hET3h2WS95N3RsVERKZllUWVhUZWM5SjZPSC81Qm16Rm9VOU4rSWNDLU1qQXlOREEwTWpjPQ==',
		ai: {
            openAI: {
				apiUrl: 'http://localhost:8080/api/auth/request-gpt',
				// requestHeaders: {
				// 	Authorization: 'Bearer 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'
				// }
            },
			// aiAssistant: {
			// 	contentAreaCssClass: "gpt-response"
			// }
        },
	};
}

export default Editor;
