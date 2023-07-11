/** @jsxImportSource @emotion/react */ //있어야 css={{작동}}

import {Button} from '@mui/material';
import styled, { CSSObject } from '@emotion/styled';

// 임시 local theme 
export interface Theme{
  gray:{
    gray100 : string,
    gray200 : string,
    gray300 : string,
    gray400 : string,
    gray500 : string,
    gray600 : string,
    gray700 : string,
    gray800 : string,
    gray900 : string,
  }
}
export const theme = {
  gray:{ // 색깔 안맞음 copilot이 알아서 생성해준거임
    gray100 : '#F7FAFC',
    gray200 : '#EDF2F7',
    gray300 : '#E2E8F0',
    gray400 : '#CBD5E0',
    gray500 : '#A0AEC0',
    gray600 : '#718096',
    gray700 : '#4A5568',
    gray800 : '#2D3748',
    gray900 : '#1A202C',
  }
}
export const StyledWidgetWrapDiv = styled('div')({
  display:'flex',
  flexDirection:'column',
  background:'#fff',
  padding:'20px 24px',
  borderRadius:'8px',
  flex:1
})

const StyledWidgetTitleDiv = styled('div')({
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  marginBottom:'16px'
})

const StyledWidgetTitleTypo = styled('div')({
  fontSize:'18px',
  fontWeight:'700',
  lineHeight:'24px'
})

const StyledExtraButton = styled(Button)(({theme}:{theme:Theme})=>{
  return({
    color:theme.gray.gray500,
    fontWeight:'500',
    fontSize:'14px',
    lineHeight:'20px',
    minWidth:'0px',
    border:'none'
  })
})

interface StyledWidgetTitleProps{
  theme:Theme;
  title:string;
  icon?:string;
  style?:CSSObject;
  children?:React.ReactNode;
  onClick?:(e:React.MouseEvent)=>void;
}

export const StyledWidgetTitle = ({theme,title,icon,style,children,onClick}:StyledWidgetTitleProps)=>{
  return(
    <StyledWidgetTitleDiv css={style}>
      <StyledWidgetTitleTypo css={{display:'flex'}}>
        {title}
        {icon && <img src={icon} alt="" />}
      </StyledWidgetTitleTypo>
      {
        children &&
        <StyledExtraButton theme={theme} onClick={onClick && (e => onClick(e))}>
          {children}
        </StyledExtraButton>
      }
    </StyledWidgetTitleDiv>
  )
}
