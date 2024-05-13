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
                id: 'fname-input',
                name: 'fname',
                label: 'Firstname',
                type: 'text',
                required: true,
                placeholder: 'John',
                classes: 'form-control',
                value: password,
                validationRules: {
                    required: true
                }
            },
            {
                id: 'email-input',
                name: 'email',
                label: 'Email',
                type: 'email',
                required: true,
                placeholder: 'Email',
                classes: 'form-control',
                value: email,
                validationRules: {
                    email: true
                }
            },
            {
                id: 'password',
                name: 'password',
                label: 'Password',
                type: 'password',
                required: true,
                placeholder: 'Password',
                classes: 'form-control',
                value: password,
                validationRules: {
                    required: true,
                    // min: 8,
                    // max: 25,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,16}$/,
                    // characterSets: [
                    //     {characters: 'A-Z', minOccurrences: 1},
                    //     {characters: '0-9', minOccurrences: 1},
                    //     {characters: '!@#$%^&*', minOccurrences: 1},
                    // ]
                    
                }
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

<h1>Welcome to Super Forms library</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<SmartForm config={config} method="post" />