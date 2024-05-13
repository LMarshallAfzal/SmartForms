<script lang="ts">
    import 'bootstrap/dist/css/bootstrap.min.css';
    import SmartForm from "$lib/SmartForm.svelte";

    import type { FormConfig, FormData } from "$lib/types/form.ts";


    export let form: FormData;

    let email: string = form?.email || '';
    let password: string = form?.password || '';

    const config: FormConfig = {
        inputs: [
            {
                id: 'email',
                name: 'email',
                label: 'text',
                type: 'email',
                placeholder: 'Email',
                classes: 'form-control',
                value: email,
            },
            {
                id: 'password',
                name: 'password',
                label: 'Password',
                type: 'password',
                placeholder: 'Password',
                classes: 'form-control',
                value: password,
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

<SmartForm config={config} method="post" />