import type { FullAutoFill } from "svelte/elements";
import type { enctype, method } from "./global.ts";

export type inputType = "text" | "number" | "email" | "url" | "password" | "hidden" | "tel";

export interface ComboboxOption {
    value: string;
    label?: string;
    disabled?: boolean;
}

export interface InputProps {
    label?: string;
    id?: string;
    name?: string;
    type?: inputType
    placeholder?: string;
    form?: string;
    formaction?: string;
    formmethod?: method;
    formenctype?: enctype;
    formnovalidate?: boolean;
    required?: boolean;
    value?: string;
    classes?: string;
    styles?: string;
    validationRules?: ValidationRules;
    isCombobox?: boolean;
    options?: string[] | ComboboxOption[];
    disabled?: boolean;
    readonly?: boolean;
    autocomplete?: FullAutoFill;
    list?: string;
    size?: number;
}

export interface ValidationRules {
    required?: boolean;
    min?: number;
    max?: number;
    email?: boolean;
    pattern?: RegExp;
    characterSets?: CharSet[];
}

export interface CharSet {
    chars: string;
    exc?: boolean;
    min?: number;
}
