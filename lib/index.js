"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const core_1 = require("@material-ui/core");
;
/* Media Queries */
const customMediaQuery = (maxWidth) => (`@media (max-width: ${maxWidth}px)`);
const media = {
    custom: customMediaQuery,
    desktop: customMediaQuery(922),
    tablet: customMediaQuery(768),
    phone: customMediaQuery(576),
};
exports.Icon = styled_components_1.default.div ``;
exports.Page = styled_components_1.default.div `
  background-color: #f3f3f3
  display: block;
  min-height: 400px;
  width: 100vw;
  min-width: 400px;
`;
exports.PageContainer = styled_components_1.default.div `
  background-color: #f3f3f3;
  display: flex;
  min-height: 400px;
`;
exports.PageContent = styled_components_1.default.div `
  background-color: #f3f3f3;
  min-height: 400px;
`;
exports.LoginPage = styled_components_1.default.div `
  background-color: gray;
  display: grid;
  grid-template-columns: 30% auto 30%;
  height: 100vh;
  min-height: 400px;
  ${media.phone} {
    display: flex;
    flex-direction: column;        
  }
  ${media.tablet} {
    grid-template-columns: 10% auto 10%;
  }
`;
exports.Block = styled_components_1.default.div `
  display: ${(props) => props.table ? 'table' : 'block'};
  overflow-y: auto;
  width: ${(props) => !!props.width ? props.width : "auto"};
  padding: ${({ noPadding }) => noPadding ? 0 : '1em'};
  
  ${media.phone} {
    display: block
    width: 100%;        
  }
`;
exports.BlockTitle = styled_components_1.default.div `
  font-size: 1.4rem;
  font-weight: 600;
`;
exports.BlockSubTitle = styled_components_1.default.div `
  font-size: 1rem;
  font-weight: 400;
  color: #909090;
`;
exports.LoadingSpinner = (props) => {
    return react_1.default.createElement(exports.FlexBlock, { wrapp: true, center: true, width: "100%", style: { height: "100%", alignItems: "center" } },
        react_1.default.createElement(exports.Block, { style: { display: "flex", alignItems: "center" } },
            react_1.default.createElement("div", null, props.children)));
};
exports.FlexBlock = styled_components_1.default.div `
  display: flex;
  ${props => !!props.wrapp && props.wrapp ? "flex-wrap: wrap" : "flex-wrap: nowrap"} ;
  width: 100%;
  justify-content: ${props => props.left ? "flex-start" : props.right ? 'flex-end' : props.spaced ? 'space-between' : 'center'};
`;
const StyledCard = styled_components_1.default.div `
  display: block;
  min-height: ${(props) => !!props.height ? props.height : "100px"} ;
  min-width: "200px";
  width: ${(props) => !!props.width ? props.width : "auto"} ;
  margin: 10px;
  background-color: #fafafa;
  box-sizing: border-box;
  box-shadow:0.05em 0.05em 1px 1px #d1d1d1;
  padding-bottom: 10px;
  && .card-header {
    border-bottom: 1px solid #d1d1d1;
  }
  ${(props) => props.selected ? `border: 2px solid ${props.theme.palette.primary.main}` : ''};
  // && .card-selected {
  //   background-color: #D4D4D4;
  // }
  ${(props) => props.shouldHover
    ? '&:hover { background-color: #D4D4D4;  && .card-header {border-bottom: 1px solid #c7c7c7;}}'
    : ''}
`;
const CardTitle = styled_components_1.default.label `
  font-size: 1.1em;
  padding-bottom: 0.5em;
  margin-right: 8px;
  box-border: border-box;
  font-weight: bold;
`;
exports.CardFooter = styled_components_1.default.div `
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  padding: 4px 0px 4px 10px;
  font-weight: 600;
  font-size: 1.2em;
`;
exports.Card = (props) => {
    const [state, setState] = react_1.useState({
        cardSelectedClassname: ''
    });
    return (react_1.default.createElement(StyledCard, Object.assign({ onClick: () => {
            if (!!props.cardActionItems && !!props.cardActionItems.optionItems) {
                if (props.cardActionItems.optionItems[0].name === 'Select') {
                    setState(Object.assign({}, state, { cardSelectedClassname: 'card-selected' }));
                }
                try {
                    props.cardActionItems.optionItems[0].action();
                }
                catch (e) {
                    // Do nothing
                }
            }
        } }, props),
        !!props.title &&
            react_1.default.createElement(exports.Row, { className: "card-header", spaced: true },
                react_1.default.createElement(CardTitle, null, props.title),
                props.editable && react_1.default.createElement(exports.Icon, { className: "far fa-ellipsis-v", onClick: () => {
                        if (!!props.cardActionItems && !!props.cardActionItems.optionItems) {
                            props.cardActionItems.optionItems[0].action();
                        }
                    } })),
        props.children));
};
exports.LoginScreen = styled_components_1.default.div `
  background-color: white;
  display: block;
  align-items: center;
  justify-content: center;
  
  min-height: 300px;
  width: 100%;
  ${media.phone} {
    padding: 0px 20px 0px 20px;
  }
`;
exports.ButtonOld = styled_components_1.default.button `
  background-color: #4CAF50;
  border:  ${props => props.primary ? "none" : props.secondary ? "none" : "1px solid #c03"};
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background: ${props => props.primary ? "#c03" : props.secondary ? "#26B1D6" : "white"};
  color: ${props => props.primary || props.secondary ? "white" : "#c03"};
`;
exports.LoginForm = styled_components_1.default.form `
  padding: 4px;
  margin: 2% 1%;
  width: calc(100% - 10%)
  display: block;
`;
exports.FormField = styled_components_1.default.div `
  display: block;
  justify-content: center;
  width: 100%;
`;
exports.InputField = styled_components_1.default.input `
  display: block;
  width: 100%;
  padding: .375rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${(props) => props.errorState ? "#C92434" : "#495057"};
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;
const BorderlessInputField = styled_components_1.default.input `
  display: block;
  width: 98%;
  padding: .375rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${(props) => props.errorState ? "#C92434" : "#495057"};
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  outline: 0;
  &:hover {
    border-bottom: 2px solid #a0a6ab;
  }
  &:focus {
    border-bottom: 2px solid #56a4e5;
  }
`;
const BorderedLabelInputFieldWrapper = styled_components_1.default.div `
  border: 0;
  outline: 0;
  width: 100%:
  & span {
    font-size: 0.7em;
    color: ##a0a6ab;
  }
`;
exports.MatInputField = (props) => {
    const { placeholder } = props, rest = __rest(props, ["placeholder"]);
    return react_1.default.createElement(BorderedLabelInputFieldWrapper, null,
        react_1.default.createElement("span", null, props.placeholder),
        react_1.default.createElement(BorderlessInputField, Object.assign({ placeholder: placeholder }, rest)));
};
exports.Ptext = styled_components_1.default.p `
  font-size: ${props => props.textSize};
`;
exports.Row = styled_components_1.default.div `
  padding: ${({ noPadding }) => noPadding ? 0 : '1em 1em 0 1em;'};
  width: ${(props) => !!props.width ? props.width : "auto"} ;
  display: flex;
  justify-content: ${props => props.left ? "flex-start" : props.right ? 'flex-end' : props.spaced ? 'space-between' : 'center'};
    & > ${exports.InputField} {
      margin: 10px;
    }
    & > ${exports.ButtonOld} {
      margin: 10px;
    }
    & > ${exports.Ptext} {
      padding: 0px 1%;
    }
`;
exports.ListView = styled_components_1.default.ul `
  padding: 0px;
  width: 100%;
  list-style: none;
`;
const StyledListItem = styled_components_1.default.li `
  padding: 0px;
  width: 100%;
  min-height: 4em;
  height:4em;
  border-bottom: 1px solid gray;
  // transition:font-size 0.5s;
  &:hover {
    cursor: pointer;
    background-color: #d6d6d6;
    // font-size: 1.1em;
  }
   
`;
const ListItemInnerContent = styled_components_1.default.div `
    display: flex;
    align-items: center;
    min-height: 100%;
    & > ${exports.InputField} {
      margin: 10px;
    }
    & > ${exports.ButtonOld} {
      margin: 10px;
    }
    & > ${exports.Ptext} {
      padding: 0px 1%;
    }
    & > ${exports.Icon} {
      padding: 0px 8px 0px 0px;
    }
`;
exports.ListItem = (props) => {
    return (react_1.default.createElement(StyledListItem, { onClick: props.onClick },
        react_1.default.createElement(ListItemInnerContent, null, props.children)));
};
exports.Col = styled_components_1.default.div `
  width: ${props => !!props.width ? props.width : 100}px ;
  max-width: ${props => props.width}px ;
  padding: 2px;
`;
exports.HLine = styled_components_1.default.hr `
  margin: 0px 1%;
`;
exports.NavBarStyled = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  ${props => !!props && !!props.theme ? 'background-color: ' + props.theme.primaryColor : 'background-color: red'};
  max-height: 60px;
  width: 100%;
  border-bottom: ${(props) => !!props && props.noBorder ? 'none' : '1px solid #e2e2e2'};
  & ${exports.Icon} {
    margin-right: 10px;
    box-sizing: border-box;
  }
`;
const NavBarLeft = styled_components_1.default.div ``;
const NavBarTitle = styled_components_1.default.div `
  font-size: 1.4rem;
  font-weight: 600;
`;
const NavBarRight = styled_components_1.default.div ``;
const StyledPadding = styled_components_1.default.div `
  margin: 10px;
`;
exports.CSkeleton = (props) => {
    return react_1.default.createElement(StyledPadding, null, props.children);
};
;
exports.NavBar = (props) => {
    return (react_1.default.createElement(exports.NavBarStyled, Object.assign({}, props),
        react_1.default.createElement(NavBarLeft, null, props.back && react_1.default.createElement(core_1.Button, { onClick: () => { } },
            react_1.default.createElement(exports.Icon, { className: "far fa-chevron-left" }),
            react_1.default.createElement("label", null, "Back"))),
        react_1.default.createElement(NavBarTitle, null, props.pageTitle),
        react_1.default.createElement(NavBarRight, null, props.children)));
};
exports.AppNavBar = (props) => {
    return (react_1.default.createElement(exports.NavBarStyled, Object.assign({}, props),
        props.back && react_1.default.createElement(core_1.Button, { onClick: () => { } },
            react_1.default.createElement(exports.Icon, { className: "far fa-chevron-left" }),
            react_1.default.createElement("label", null, "Back")),
        props.children));
};
exports.TopicHeader = styled_components_1.default.label `
  font-size: 1.4rem;
  font-weight: 500;
`;
;
const ErrorMessageLabel = styled_components_1.default.label `
  color: red;
  font-size: 0.9rem;
`;
exports.InlineFormErrorMessage = (props) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(ErrorMessageLabel, null, props.errorMessage)));
};
exports.NBSpace = styled_components_1.default.span `
  display: table;
  margin-right: ${(props) => props.small ? '4px' : (props.medium ? '8px' : (props.large ? '14px' : '20px'))} 
`;
//# sourceMappingURL=index.js.map