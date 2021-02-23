import React, { AllHTMLAttributes, useState } from 'react';
import styled from 'styled-components'
import { Button, CardContent } from '@material-ui/core';

interface IButtonType {
  primary?: boolean,
  secondary?: boolean,
  normal?: boolean
};

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

/* Media Queries */
const customMediaQuery = (maxWidth: number) => (`@media (max-width: ${maxWidth}px)`);

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};

export const Icon = styled.div``;

export const Page = styled.div`
  background-color: #f3f3f3
  display: block;
  min-height: 400px;
  width: 100vw;
  min-width: 400px;
`;

export const PageContainer = styled.div`
  background-color: #f3f3f3;
  display: flex;
  min-height: 400px;
`;

export const PageContent = styled.div`
  background-color: #f3f3f3;
  min-height: 400px;
`;

export const LoginPage = styled.div`
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

export const Block = styled.div`
  display: ${(props: IBlockAttrib) => props.table ? 'table' : 'block'};
  overflow-y: auto;
  width: ${(props: IBlockAttrib) => !!props.width ? props.width : "auto"};
  padding: ${({ noPadding }: IBlockAttrib) => noPadding ? 0 : '1em'};
  
  ${media.phone} {
    display: block
    width: 100%;        
  }
`;

export const BlockTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const BlockSubTitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #909090;
`;

interface ILoadingProps extends AllHTMLAttributes<any> {
  children?: React.ReactNode;
}
export const LoadingSpinner = (props: ILoadingProps) => {
  return <FlexBlock wrapp center width="100%" style={{ height: "100%", alignItems: "center" }}>
    <Block style={{ display: "flex", alignItems: "center" }}>
      <div>{props.children}</div>
    </Block>
  </FlexBlock>
}

export const FlexBlock = styled.div<any>`
  display: flex;
  ${props => !!props.wrapp && props.wrapp ? "flex-wrap: wrap" : "flex-wrap: nowrap"} ;
  width: 100%;
  justify-content: ${props => props.left ? "flex-start" : props.right ? 'flex-end' : props.spaced ? 'space-between' : 'center'};
`;

const StyledCard = styled.div`
  display: block;
  min-height: ${(props: any) => !!props.height ? props.height : "100px"} ;
  min-width: "200px";
  width: ${(props: any) => !!props.width ? props.width : "auto"} ;
  margin: 10px;
  background-color: #fafafa;
  box-sizing: border-box;
  box-shadow:0.05em 0.05em 1px 1px #d1d1d1;
  padding-bottom: 10px;
  && .card-header {
    border-bottom: 1px solid #d1d1d1;
  }
  ${(props: any) => props.selected ? `border: 2px solid ${props.theme.palette.primary.main}` : ''};
  // && .card-selected {
  //   background-color: #D4D4D4;
  // }
  ${(props: any) => props.shouldHover
      ? '&:hover { background-color: #D4D4D4;  && .card-header {border-bottom: 1px solid #c7c7c7;}}'
      : ''
    }
`;

const CardTitle = styled.label`
  font-size: 1.1em;
  padding-bottom: 0.5em;
  margin-right: 8px;
  box-border: border-box;
  font-weight: bold;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  padding: 4px 0px 4px 10px;
  font-weight: 600;
  font-size: 1.2em;
`;

interface ICardProps extends AllHTMLAttributes<any> {
  headerTitle: string;
  subTitle: string;
  editable: boolean;
  cardActionItems?: any;
}

export const Card = (props: any) => {
  const [state, setState] = useState({
    cardSelectedClassname: ''
  })
  return (
    <StyledCard onClick={() => {
      if (!!props.cardActionItems && !!props.cardActionItems.optionItems) {
        if (props.cardActionItems.optionItems[0].name === 'Select') {
          setState({...state, cardSelectedClassname: 'card-selected'})
        }
        try {
          props.cardActionItems.optionItems[0].action();
        } catch (e) {
          // Do nothing
        }
        
      }
    }} {...props} >
      {
        !!props.title &&
        <Row className="card-header" spaced>
          <CardTitle>{props.title}</CardTitle>
          {
            props.editable && <Icon className="far fa-ellipsis-v" onClick={() => {
              if (!!props.cardActionItems && !!props.cardActionItems.optionItems) {
                props.cardActionItems.optionItems[0].action();
              }
            }}></Icon>
          }
        </Row>
      }
      {props.children}
    </StyledCard>
  )
};

export const LoginScreen = styled.div`
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

export const ButtonOld = styled.button<IButtonType>`
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

export const LoginForm = styled.form`
  padding: 4px;
  margin: 2% 1%;
  width: calc(100% - 10%)
  display: block;
`;

export const FormField = styled.div`
  display: block;
  justify-content: center;
  width: 100%;
`;

export const InputField = styled.input<ITextFieldAttrib>`
  display: block;
  width: 100%;
  padding: .375rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${(props: ITextFieldAttrib) => props.errorState ? "#C92434" : "#495057"};
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

const BorderlessInputField = styled.input<ITextFieldAttrib>`
  display: block;
  width: 98%;
  padding: .375rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${(props: ITextFieldAttrib) => props.errorState ? "#C92434" : "#495057"};
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

const BorderedLabelInputFieldWrapper = styled.div`
  border: 0;
  outline: 0;
  width: 100%:
  & span {
    font-size: 0.7em;
    color: ##a0a6ab;
  }
`;

export const MatInputField = (props: any) => {
  const { placeholder, ...rest } = props;
  return <BorderedLabelInputFieldWrapper>
    <span>{props.placeholder}</span>
    <BorderlessInputField placeholder={placeholder} {...rest} />
  </BorderedLabelInputFieldWrapper>
};

export const Ptext = styled.p<{ textSize?: string }>`
  font-size: ${props => props.textSize};
`;

export const Row = styled.div<IRowAttrib>`
  padding: ${({ noPadding }: IBlockAttrib) => noPadding ? 0 : '1em 1em 0 1em;'};
  width: ${(props: IRowAttrib) => !!props.width ? props.width : "auto"} ;
  display: flex;
  justify-content: ${props => props.left ? "flex-start" : props.right ? 'flex-end' : props.spaced ? 'space-between' : 'center'};
    & > ${InputField} {
      margin: 10px;
    }
    & > ${ButtonOld} {
      margin: 10px;
    }
    & > ${Ptext} {
      padding: 0px 1%;
    }
`;

export const ListView = styled.ul<any>`
  padding: 0px;
  width: 100%;
  list-style: none;
`;

const StyledListItem = styled.li<any>`
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
const ListItemInnerContent = styled.div<any>`
    display: flex;
    align-items: center;
    min-height: 100%;
    & > ${InputField} {
      margin: 10px;
    }
    & > ${ButtonOld} {
      margin: 10px;
    }
    & > ${Ptext} {
      padding: 0px 1%;
    }
    & > ${Icon} {
      padding: 0px 8px 0px 0px;
    }
`;

export const ListItem = (props: any) => {
  return (
    <StyledListItem onClick={props.onClick}>
      <ListItemInnerContent>
        {props.children}
      </ListItemInnerContent>
    </StyledListItem>
  );
};

export const Col = styled.div<IGridColumn>`
  width: ${props => !!props.width ? props.width : 100}px ;
  max-width: ${props => props.width}px ;
  padding: 2px;
`;

export const HLine = styled.hr`
  margin: 0px 1%;
`;

export const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  ${props => !!props && !!props.theme ? 'background-color: ' + props.theme.primaryColor : 'background-color: red'};
  max-height: 60px;
  width: 100%;
  border-bottom: ${(props: any) => !!props && props.noBorder ? 'none' : '1px solid #e2e2e2'};
  & ${Icon} {
    margin-right: 10px;
    box-sizing: border-box;
  }
`;

const NavBarLeft = styled.div``;
const NavBarTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`;
const NavBarRight = styled.div``;

const StyledPadding = styled.div`
  margin: 10px;
`;

export const CSkeleton = (props: any) => {
  return <StyledPadding>
    {props.children}
  </StyledPadding>
};

interface INavBarOption {
  back?: boolean;
  title?: string;
  noBorder?: boolean;
  animateTransition?: boolean;

};

export const NavBar = (props: any) => {
  return (
    <NavBarStyled {...props}>
      <NavBarLeft>
        {
          props.back && <Button onClick={() => { }}>
            <Icon className="far fa-chevron-left" />
            <label>Back</label>
          </Button>
        }
      </NavBarLeft>
      <NavBarTitle>
        {
          props.pageTitle
        }
      </NavBarTitle>
      <NavBarRight>
        {
          props.children
        }
      </NavBarRight>

    </NavBarStyled>
  )
}

export const AppNavBar = (props: any) => {
  return (
    <NavBarStyled {...props}>
      {
        props.back && <Button onClick={() => { }}>
          <Icon className="far fa-chevron-left" />
          <label>Back</label>
        </Button>
      }

      {
        props.children
      }

    </NavBarStyled>
  )
}

export const TopicHeader = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
`;


interface IErrorMessageAttrib extends AllHTMLAttributes<string> {
  children?: React.ReactChildren;
  errorMessage: string
};

const ErrorMessageLabel = styled.label`
  color: red;
  font-size: 0.9rem;
`;

export const InlineFormErrorMessage = (props: IErrorMessageAttrib) => {
  return (
    <div>
      <ErrorMessageLabel>
        {
          props.errorMessage
        }
      </ErrorMessageLabel>
    </div>
  )
};

interface INBSpaceProps {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  xlarge?: boolean;
}
export const NBSpace = styled.span`
  display: table;
  margin-right: ${(props: INBSpaceProps) => props.small ? '4px' : (props.medium ? '8px' : (props.large ? '14px' : '20px'))} 
`;