export default function createPlugin() {
	return {
		name: '',
		hooks: {
			'astro:config:setup': ({ injectScript }) => {
				// This gets injected into the user's page, so the import will pull
				// from the project's version of jQuery in their package.json.
				injectScript(
					'page',
					`import $ from "jquery";`
				);
			},
		},
	};
}