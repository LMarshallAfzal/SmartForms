import type { enctype, method } from "./global.ts";

export type InputType = "text" | "number" | "email" | "url" | "password" | "hidden" | "tel" | "hidden";

export interface InputProps {
    label?: string;
    id?: string;
    name?: string;
    type?: InputType
    placeholder?: string;
    form?: string;
    formaction?: string;
    formmethod?: method;
    formenctype?: enctype;
    formnovalidate?: boolean;
    required?: boolean;
    value?: string;
    classes?: string;
}