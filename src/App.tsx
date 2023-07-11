/** @jsxImportSource @emotion/react */ //있어야 css={{작동}}

import styled from '@emotion/styled';
import { CssBaseline } from '@mui/material';

//components
import {StyledWidgetTitle, theme, Theme, StyledWidgetWrapDiv} from './components/Header/StyledWidgetTitle';

// 규칙
// 1. styled('div')({}) 이런식으로 쓰면 됨
// 2. css={{}} 이런식으로 쓰면 됨
// 3. 네이밍은 Styled로 시작하고, 그 뒤에 컴포넌트 이름을 적는다.(마지막에는 태그 이름) ex) StyledNamedWidgetDiv 
// 4. 컬러 위에 gray 나 primary 등이 써져있는 컬러의 경우 theme에서 가져와야함. 임시 theme는 src/components/Header/StyledWidgetTitle.tsx에 있음 
// 5. 현재 layout을 확인해보면, 컨텐츠가 가득 차있으므로 minWidth로 최소너비를 잡고, 더 커지는 경우에만 flex:1로 늘어나게 함 (신경 안써도 될 듯)
// 6. styled() 많아지면 원래는 Styled로 파일 나누는데 이건 그냥 한 파일에 ㄱㄱ
// 7. 확장을 고려하긴 해야함

const StyledFullHeightDiv = styled('div')({
  minHeight:'100vh'
})


function App() {
  return (
    <>
    <StyledFullHeightDiv css={{background:'#e4e4e4', padding:'50px'}}>
      <CssBaseline></CssBaseline> 
      {/* COMPONENT */}
      <StyledWidgetWrapDiv css={{minWidth:'308px'}}>
        <StyledWidgetTitle theme={theme} title={'9 Block'} >
          정기평가
        </StyledWidgetTitle>
        {/* GRAPH 부분  */}
      </StyledWidgetWrapDiv>

    </StyledFullHeightDiv>
    </>
  );
}

export default App;
