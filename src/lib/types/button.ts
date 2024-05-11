import type { enctype, method } from "./global.ts";

export type popovertargetaction = "hide" | "show" | "toggle";
export type btnType = "button" | "submit" | "reset";

export interface ButtonProps {
    label?: string;
    id?: string;
    name?: string;
    type?: btnType;
    form?: string;
    formaction?: string;
    formenctype?: enctype;
    formmethod?: method;
    formnovalidate?: boolean;
    disabled?: boolean;
    popovertarget?: string;
    popovertargetaction?: popovertargetaction;
    value?: string;
    ariaLabel?: string;
    classes?: string;
}
