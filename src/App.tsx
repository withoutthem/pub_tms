/** @jsxImportSource @emotion/react */ //있어야 css={{작동}}

import styled from '@emotion/styled';
import { CssBaseline } from '@mui/material';
import {StyledWidgetTitle, theme, Theme, StyledWidgetWrapDiv} from './components/Header/StyledWidgetTitle';
import { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HCMore from 'highcharts/highcharts-more';
HCMore(Highcharts);
//components


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
});
const StyledDonutChart = styled('div')({
  width:'189px',
  height:'189px',
});
const StyledDonutChart2 = styled('div')({
  height:'180px',
  paddingTop:'20px',
  textAlign:'center',
});
const StyledbubbleChart = styled('div')({
  width:'300px',
  height:'300px',
});
const pieColors = ['#68D6E8','#B280FF'];
const pieColors2  = ['#68D6E8','#B280FF','#FE7A7A','#FFBF6B'];

//버블차트 옵션
const bubbleOptions = {
  chart: {
    type: 'bubble',
    width:295,
    height:295,
    style:{
      position:'relative',
      left:-27,
    }
  },
  title:{
    style:{
     display:'none',
    }
   },
   credits: {
    enabled: false,
  },
  legend: {
    enabled: false
  },
  xAxis: {
    categories: ['하', '중', '상'],
    labels: {
      style: {
        color: '#A5B3C2'
      }
    },
    title: {
      text: '리더십 역량',
      x:75,
      y:3,
      style: {
        color: '#56606B',
        fontWeight: 700,
      }
    },
    gridLineWidth: 1, 
    gridLineColor: '#DAE3ED',
    tickInterval: 1, 
    min: 0, 
    max: 2,
    lineColor: 'transparent'
  },
  yAxis: {
    categories: ['하', '중', '상'],
    labels: {
      style: {
        color: '#A5B3C2'
      }
    },
    title: {
      text: '성과',
      x: 17, 
      y: -98,
      style: {
        color: '#56606B',
        fontWeight: 700,
        transform:" rotate(0deg)",
      }
    },
    gridLineWidth: 1, 
    gridLineColor: '#DAE3ED',
    tickInterval: 1,
    min: 0,
    max: 2 
  },
  plotOptions: {
    bubble: {
      maxSize: '38%',
      zMin: 20,
      zMax: 30, 
      states: {
        hover: {
          enabled: false 
        }
      }
    }
  },
  series: [{
    data: [
      { x: 1, y: 2, z: 23,name:`2023,2021`,color: { linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 }, stops: [[0, 'rgba(232, 55, 108, 0.5)'], [1, 'rgba(232, 55, 108, 0.5)']] }},
      { x: 1, y: 1, z: 28,name:'2023,2022,2021',color: { linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 }, stops: [[0, 'rgba(232, 55, 108, 1)'], [1, 'rgba(232, 55, 108, 1)']] }},
      { x: 2, y: 1, z: 23,name:'2021',color: { linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 }, stops: [[0, 'rgba(232, 55, 108, 0.5)'], [1, 'rgba(232, 55, 108, 0.5)']] }}
    ],
    name: '데이터',
    dataLabels: {
      enabled: true,
      formatter: function(this: any) {
        const name = this.point.name;
        const lines = name.split(',');
        // console.log(this,lines); 
        return lines.join('<br />'); 
      },
      style: {
        color: '#fff',
        fontSize:'12px',
        textOutline: 'none'
      }
    }
  }]
}

//작은도넛 옵션
const donutoptions = {
  chart: {
    type: 'pie',
    width: 189, 
    height: 189,
    style:{
      position:'relative',
      left:'-12px',
      top:'-11px'
    }
  },
  title:{
   style:{
    display:'none',
   }
  },
  credits: {
    enabled: false, // 하단 차트 로고 비활성화
  },
  plotOptions: {
      pie: {
        innerSize: '70%', // 도넛 안쪽 width
        colors:pieColors,
        states: {
          hover: {
            halo: {
              size: 0, //hover했을때 3d효과 0~10까지 할 수 있는듯 필요하면 사용
            },
          },
        },
      },
      series: {
        dataLabels: {
            style: {
                display: 'none', //각 데이터의 label
            },
            connectorWidth: 0, //라벨을 가르키는 ui 거미 다리같이 생긴거
        }
    }
  },
  series: [
    {
      name: 'Brands',
      data: [
        ['LG',77],
        ['삼성',23],
      ],
    },
    
  ],
  
};

//큰도넛 옵션
const bigDonutoptions = {
  chart: {
    type: 'pie',
    width: 180, 
    height: 190,
    style:{
      display:'inline-block',
    }
  },
  title:{
   style:{
    display:'none',
   }
  },
  credits: {
    enabled: false, // 하단 차트 로고 비활성화
  },
  plotOptions: {
      pie: {
        size:'180px',
        innerSize: '70%', // 도넛 안쪽 width
        colors:pieColors2,
        states: {
          hover: {
            halo: {
              size: 0, //hover했을때 3d효과 0~10까지 할 수 있는듯 필요하면 사용
            },
          },
        },
      },
      series: {
        dataLabels: {
            style: {
                display: 'none', //각 데이터의 label
            },
            connectorWidth: 0, //라벨을 가르키는 ui 거미 다리같이 생긴거
        }
    }
  },
  series: [
    {
      name: 'foods',
      data: [
        ['짜장면', 180,50],
        ['짬뽕', 60,50],
        ['마라탕', 30,50],
        ['볶음밥', 30,50],
      ],
    },
    
  ],
  
};

function App() {
  return (
    <>
    <StyledFullHeightDiv css={{background:'#e4e4e4', padding:'50px',display:'flex'}}>
      <CssBaseline></CssBaseline> 
      {/* COMPONENT */}
      <StyledWidgetWrapDiv css={{minWidth:'308px',marginRight:'10px',flex:'0'}}>
        <StyledWidgetTitle theme={theme} title={'9 Block'} >
          정기평가
        </StyledWidgetTitle>
        <StyledbubbleChart>
          <HighchartsReact highcharts={Highcharts} options={bubbleOptions} />
        </StyledbubbleChart>
      </StyledWidgetWrapDiv>
      <StyledWidgetWrapDiv css={{minWidth:'308px',flex:'0',marginRight:'10px'}}>
        <StyledWidgetTitle theme={theme} title={'글로벌 역량/상벌'} ></StyledWidgetTitle>
        <StyledDonutChart>
          <HighchartsReact highcharts={Highcharts} options={donutoptions} />
        </StyledDonutChart>
      </StyledWidgetWrapDiv>
      <StyledWidgetWrapDiv css={{minWidth:'308px',flex:'0'}}>
        <StyledWidgetTitle theme={theme} title={'주요 선발 정보'} ></StyledWidgetTitle>
        <StyledDonutChart2>
          <HighchartsReact highcharts={Highcharts} options={bigDonutoptions} />
        </StyledDonutChart2>
      </StyledWidgetWrapDiv>
    </StyledFullHeightDiv>
    </>
  );
}

export default App;
