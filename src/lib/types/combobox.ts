import type { FullAutoFill } from "svelte/elements";
import type { enctype, method } from "./global.ts";

export type comboboxType = "text" | "search" | "email" | "url" | "tel";

export interface ComboboxOption {
    value: string;
    label?: string;
    disabled?: boolean;
}

export interface ComboboxProps {
    label?: string;
    id?: string;
    name?: string;
    type?: comboboxType;
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
    options?: string[] | ComboboxOption[];
    disabled?: boolean;
    readonly?: boolean;
    autocomplete?: FullAutoFill;
    list?: string;
    multiple?: boolean;
    size?: number;
    validationRules?: ComboboxValidationRules;
}

export interface ComboboxValidationRules {
    required?: boolean;
    min?: number;
    max?: number;
    email?: boolean;
    pattern?: RegExp;
    characterSets?: CharSet[];
    allowCustomValue?: boolean;
    mustMatchOption?: boolean;
}

export interface CharSet {
    chars: string;
    exc?: boolean;
    min?: number;
}
