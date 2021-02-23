import React, { AllHTMLAttributes } from 'react';
interface IButtonType {
    primary?: boolean;
    secondary?: boolean;
    normal?: boolean;
}
interface IGridColumn {
    width?: number;
}
interface IRowAttrib extends AllHTMLAttributes<any> {
    left?: boolean;
    right?: boolean;
    center?: boolean;
    spaced?: boolean;
    noPadding?: boolean;
}
interface ITextFieldAttrib {
    errorState?: boolean;
}
interface IBlockAttrib extends AllHTMLAttributes<any> {
    noPadding?: boolean;
    table?: boolean;
    overFlowVertical?: boolean;
}
export declare const Icon: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Page: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const PageContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const PageContent: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const LoginPage: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Block: import("styled-components").StyledComponent<"div", any, IBlockAttrib, never>;
export declare const BlockTitle: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const BlockSubTitle: import("styled-components").StyledComponent<"div", any, {}, never>;
interface ILoadingProps extends AllHTMLAttributes<any> {
    children?: React.ReactNode;
}
export declare const LoadingSpinner: (props: ILoadingProps) => JSX.Element;
export declare const FlexBlock: import("styled-components").StyledComponent<"div", any, any, never>;
export declare const CardFooter: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Card: (props: any) => JSX.Element;
export declare const LoginScreen: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ButtonOld: import("styled-components").StyledComponent<"button", any, IButtonType, never>;
export declare const LoginForm: import("styled-components").StyledComponent<"form", any, {}, never>;
export declare const FormField: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const InputField: import("styled-components").StyledComponent<"input", any, ITextFieldAttrib, never>;
export declare const MatInputField: (props: any) => JSX.Element;
export declare const Ptext: import("styled-components").StyledComponent<"p", any, {
    textSize?: string | undefined;
}, never>;
export declare const Row: import("styled-components").StyledComponent<"div", any, IRowAttrib, never>;
export declare const ListView: import("styled-components").StyledComponent<"ul", any, any, never>;
export declare const ListItem: (props: any) => JSX.Element;
export declare const Col: import("styled-components").StyledComponent<"div", any, IGridColumn, never>;
export declare const HLine: import("styled-components").StyledComponent<"hr", any, {}, never>;
export declare const NavBarStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const CSkeleton: (props: any) => JSX.Element;
export declare const NavBar: (props: any) => JSX.Element;
export declare const AppNavBar: (props: any) => JSX.Element;
export declare const TopicHeader: import("styled-components").StyledComponent<"label", any, {}, never>;
interface IErrorMessageAttrib extends AllHTMLAttributes<string> {
    children?: React.ReactChildren;
    errorMessage: string;
}
export declare const InlineFormErrorMessage: (props: IErrorMessageAttrib) => JSX.Element;
interface INBSpaceProps {
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    xlarge?: boolean;
}
export declare const NBSpace: import("styled-components").StyledComponent<"span", any, INBSpaceProps, never>;
export {};
//# sourceMappingURL=index.d.ts.map