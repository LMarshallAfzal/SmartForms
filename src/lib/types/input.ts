import type { enctype, method } from "./global.ts";

export type inputType = "text" | "number" | "email" | "url" | "password" | "hidden" | "tel" | "hidden";

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
    validationRules?: ValidationRules;
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