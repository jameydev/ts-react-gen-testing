declare interface Props {
    children?: React.ReactNode;
}

declare interface LinkProps {
    href: string;
    text: string;
}

declare interface ListItem {
    id: number;
    icon: string;
    name: string;
    link: LinkProps;
}

declare interface ListProps {
    ordered: boolean;
    items: ListItem[];
}

declare interface FormProps extends Props {
    handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

declare interface FormInputProps {
    forLabel: string;
    labelTxt: string;
    id: string;
    name: string;
    inputType: string;
}
