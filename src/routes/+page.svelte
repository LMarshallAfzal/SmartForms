<script lang="ts">
    import Button from "$lib/Button.svelte";
    import SmartForm from "$lib/SmartForm.svelte";

    import type { FormConfig } from "$lib/types/form.ts";

    const config: FormConfig = {
        inputs: [
            {
                id: 'inputfield1',
                name: 'inputfield1',
                label: 'inputfield1',
                type: 'text',
                placeholder: 'inputfield1',
            }
        ],
        buttons: [
            {
                id: 'submit-btn',
                name: 'submit-btn',
                label: 'Save',
                type: 'submit',
            }
        ]
    }
</script>

<h1>Welcome to Super Forms libary</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Button>My button</Button>
<SmartForm config={config}  />