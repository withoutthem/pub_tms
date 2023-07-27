/** @jsxImportSource @emotion/react */ //있어야 css={{작동}}

import styled from '@emotion/styled';
import { CssBaseline } from '@mui/material';
import { StyledWidgetTitle, theme, Theme, StyledWidgetWrapDiv } from './components/Header/StyledWidgetTitle';
import { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HCMore from 'highcharts/highcharts-more';
import { url } from 'inspector';
import triImg from './images/icon_tri_01.png';
import triImg2 from './images/icon_tri_02.png';
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
    minHeight: '100vh',
});
const StyledDonutChart = styled('div')({
    width: '189px',
    height: '189px',
});
const StyledDonutChart2 = styled('div')({
    height: '180px',
    paddingTop: '20px',
    textAlign: 'center',
});
const StyledbubbleChart = styled('div')({
    width: '300px',
    height: '300px',
});
const StyledbarChart = styled('div')({});
const StyledLineChart = styled('div')({
    width: '480px',
    height: '500px',
    background: '#F5F7FA',
});
const pieColors = ['#68D6E8', '#B280FF'];
const pieColors2 = ['#68D6E8', '#B280FF', '#FE7A7A', '#FFBF6B'];

//버블차트 옵션
const bubbleOptions = {
    chart: {
        type: 'bubble',
        width: 295,
        height: 295,
        style: {
            position: 'relative',
            left: -27,
        },
    },
    title: {
        style: {
            display: 'none',
        },
    },
    credits: {
        enabled: false,
    },
    legend: {
        enabled: false,
    },
    xAxis: {
        categories: ['하', '중', '상'],
        labels: {
            style: {
                color: '#A5B3C2',
            },
        },
        title: {
            text: '리더십 역량',
            x: 75,
            y: 3,
            style: {
                color: '#56606B',
                fontWeight: 700,
            },
        },
        gridLineWidth: 1,
        gridLineColor: '#DAE3ED',
        tickInterval: 1,
        min: 0,
        max: 2,
        lineColor: 'transparent',
    },
    yAxis: {
        categories: ['하', '중', '상'],
        labels: {
            style: {
                color: '#A5B3C2',
            },
        },
        title: {
            text: '성과',
            x: 17,
            y: -98,
            style: {
                color: '#56606B',
                fontWeight: 700,
                transform: ' rotate(0deg)',
            },
        },
        gridLineWidth: 1,
        gridLineColor: '#DAE3ED',
        tickInterval: 1,
        min: 0,
        max: 2,
    },
    plotOptions: {
        bubble: {
            maxSize: '38%',
            zMin: 20,
            zMax: 30,
            states: {
                hover: {
                    enabled: false,
                },
            },
        },
    },
    series: [
        {
            data: [
                {
                    x: 1,
                    y: 2,
                    z: 23,
                    name: `2023,2021`,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, 'rgba(232, 55, 108, 0.5)'],
                            [1, 'rgba(232, 55, 108, 0.5)'],
                        ],
                    },
                },
                {
                    x: 1,
                    y: 1,
                    z: 28,
                    name: '2023,2022,2021',
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, 'rgba(232, 55, 108, 1)'],
                            [1, 'rgba(232, 55, 108, 1)'],
                        ],
                    },
                },
                {
                    x: 2,
                    y: 1,
                    z: 23,
                    name: '2021',
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, 'rgba(232, 55, 108, 0.5)'],
                            [1, 'rgba(232, 55, 108, 0.5)'],
                        ],
                    },
                },
            ],
            name: '데이터',
            dataLabels: {
                enabled: true,
                formatter: function (this: any) {
                    const name = this.point.name;
                    const lines = name.split(',');
                    // console.log(this,lines);
                    return lines.join('<br />');
                },
                style: {
                    color: '#fff',
                    fontSize: '12px',
                    textOutline: 'none',
                },
            },
        },
    ],
};

//작은도넛 옵션
const donutoptions = {
    chart: {
        type: 'pie',
        width: 189,
        height: 189,
        style: {
            position: 'relative',
            left: '-12px',
            top: '-11px',
        },
    },
    title: {
        style: {
            display: 'none',
        },
    },
    credits: {
        enabled: false, // 하단 차트 로고 비활성화
    },
    plotOptions: {
        pie: {
            innerSize: '70%', // 도넛 안쪽 width
            colors: pieColors,
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
            },
        },
    },
    series: [
        {
            name: 'Brands',
            data: [
                ['LG', 77],
                ['삼성', 23],
            ],
        },
    ],
};

//큰도넛 옵션
const bigDonutoptions = {
    chart: {
        type: 'pie',
        width: 180,
        height: 220,
        style: {
            display: 'inline-block',
        },
    },
    title: {
        text: 'ㅁㄴㅇㅁㄴㅇ',
        style: {
            display: 'block',
            position: 'absolute',
        },
    },
    credits: {
        enabled: false, // 하단 차트 로고 비활성화
    },
    plotOptions: {
        pie: {
            size: '180px',
            innerSize: '70%', // 도넛 안쪽 width
            colors: pieColors2,
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
            },
        },
    },
    series: [
        {
            name: 'foods',
            data: [
                ['짜장면', 180, 50],
                ['짬뽕', 60, 50],
                ['마라탕', 30, 50],
                ['볶음밥', 30, 50],
            ],
        },
    ],
};

//가로그래프 옵션
const xChartOptions = {
    chart: {
        type: 'bar',
        height: 320,
    },
    title: {
        style: {
            display: 'none',
        },
    },
    credits: {
        enabled: false, // 하단 차트 로고 비활성화
    },
    plotOptions: {
        bar: {
            groupPadding: 0.23,
            pointWidth: 20,
            borderRadius: 20,
        },
    },

    series: [
        {
            name: '본인응답',
            data: [83, 83, 90],
            color: '#26B9D1',
        },
        {
            name: '타인응답',
            data: [77, 73, 77],
            color: '#25899A',
        },
        {
            name: '그룹평균',
            type: 'scatter',
            data: [70, 70, 71],
            color: 'black',
            marker: {
                symbol: `url(${triImg})`,
                width: 15,
                height: 10,
            },
            pointPlacement: 0.31,
        },
        {
            name: '회사평균',
            type: 'scatter',
            data: [78, 78, 73],
            color: 'red',
            marker: {
                symbol: `url(${triImg2})`,
                width: 15,
                height: 10,
            },
            pointPlacement: 0.31,
        },
    ],
    xAxis: {
        categories: ['비전/전략', '실행', '인쇄조직'],
        title: {
            text: null,
        },
        lineColor: 'transparent',
        labels: {
            style: {
                color: '#3E454D',
                fontSize: '16px',
                fontWeight: '700',
            },
        },
        gridLineWidth: 0,
    },
    yAxis: {
        min: 50,
        title: {
            text: null,
        },
        tickInterval: 10,
        gridLineWidth: 1,
        lineWidth: '1',
        lineColor: '#DAE3ED',
    },
    legend: {
        itemStyle: {
            color: '#6A6D70',
            fontSize: '15.6px',
            fontWeight: '400',
        },
    },
};

//폴리곤 옵션
const polygonOptions = {
    chart: {
        polar: true,
        type: 'polygon',
    },
    title: {
        style: {
            display: 'none',
        },
    },
    credits: {
        enabled: false, // 하단 차트 로고 비활성화
    },
    xAxis: {
        categories: ['경험', '성과', '역량/리더쉽'],
        tickmarkPlacement: 'on',
        lineWidth: 0,
    },
    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        gridLineWidth: 0, // Remove grid lines
        labels: {
            enabled: false, // Remove labels
        },
        min: 0,
    },
    series: [
        {
            name: '23년',
            data: [
                { y: 80, color: 'red' },
                { y: 50, color: 'red' },
                { y: 90, color: 'red' },
            ],
            pointPlacement: 'on',
            color: 'transparent',
            lineWidth: 2,
            lineColor: 'black',
            marker: {
                fillColor: 'blue', // legend의 dot의 색상 설정
            },
        },
    ],
    legend: {
        enabled: true,
        useHTML: true, // HTML 사용 활성화
        itemHiddenStyle: {
            color: 'transparent',
        },
        itemEvents: {
            legendItemClick: function () {
                // 클릭 이벤트 무시
                return false;
            },
        },
        labelFormatter: function (this: any) {
            return `
        <em style="display:inline-block; width:7px;height:7px;background:red; border-radius:50%;"></em>
        <span style="color: red;">${this.name}</span>
        `; // 커스텀 마크업으로 텍스트 변경
        },
    },
};

//라인 옵션
const lineOptions = {
    chart: {
        type: 'line',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    title: {
        style: {
            display: 'none',
        },
    },
    credits: {
        enabled: false, // 하단 차트 로고 비활성화
    },
    xAxis: {
        categories: [`기획<br />포착`, `방향<br />설정`, `계획<br />구체화`, `타당성<br />검증`, `실행체계<br />구축`],
        labels: {
            style: {
                color: '#8996A3',
                fontSize: '14px',
                fontWeight: '700',
            },
        },
        lineWidth: '1',
        lineColor: '#ddd',
    },
    yAxis: {
        max: 4,
        title: {
            style: {
                display: 'none',
            },
        },
        labels: {
            style: {
                color: '#9DA8B4',
                fontSize: '12px',
                fontWeight: '400',
            },
        },
        gridLineWidth: 1,
        gridLineColor: '#ddd',
    },
    plotOptions: {
        line: {
            lineWidth: 3,
            marker: {
                enabled: false,
            },
        },
    },
    legend: {
        enabled: false,
    },
    series: [
        {
            name: '대상자 종합점수',
            data: [1, 2.2, 3, 2.4, 3],
            color: '#0D6978',
        },
        {
            name: '평균',
            data: [2.5, 1.7, 1, 2.2, 2.7],
            color: '#26B9D1',
        },
        {
            name: '상위 20%',
            data: [1.8, 2, 4, 3, 2.5],
            color: '#B7E4EE',
        },
    ],
};

function App() {
    return (
        <>
            <StyledFullHeightDiv css={{ background: '#e4e4e4', padding: '50px', display: 'flex', flexDirection: 'column' }}>
                <CssBaseline></CssBaseline>
                {/* COMPONENT */}
                <StyledWidgetWrapDiv css={{ width: '308px', marginRight: '10px', flex: '0', marginBottom: '30px' }}>
                    <StyledWidgetTitle theme={theme} title={'9 Block'}>
                        정기평가
                    </StyledWidgetTitle>
                    <StyledbubbleChart>
                        <HighchartsReact highcharts={Highcharts} options={bubbleOptions} />
                    </StyledbubbleChart>
                </StyledWidgetWrapDiv>
                <StyledWidgetWrapDiv css={{ width: '308px', flex: '0', marginRight: '10px', marginBottom: '30px' }}>
                    <StyledWidgetTitle theme={theme} title={'글로벌 역량/상벌'}></StyledWidgetTitle>
                    <StyledDonutChart>
                        <HighchartsReact highcharts={Highcharts} options={donutoptions} />
                    </StyledDonutChart>
                </StyledWidgetWrapDiv>
                <StyledWidgetWrapDiv css={{ width: '308px', minHeight: '400px', flex: '0', marginBottom: '30px' }}>
                    <StyledWidgetTitle theme={theme} title={'주요 선발 정보'}></StyledWidgetTitle>
                    <StyledDonutChart2>
                        <HighchartsReact highcharts={Highcharts} options={bigDonutoptions} />
                    </StyledDonutChart2>
                </StyledWidgetWrapDiv>
                <StyledWidgetWrapDiv css={{ width: '707px', flex: '0', flexDirection: 'column', marginBottom: '30px' }}>
                    <StyledWidgetTitle theme={theme} title={'리더십 서베이 응답 결과 차트'}></StyledWidgetTitle>
                    <StyledbarChart>
                        <HighchartsReact highcharts={Highcharts} options={xChartOptions} />
                    </StyledbarChart>
                </StyledWidgetWrapDiv>
                <StyledWidgetWrapDiv css={{ width: '328px', flex: '0', flexDirection: 'column', marginBottom: '30px' }}>
                    <StyledbarChart>
                        <HighchartsReact highcharts={Highcharts} options={polygonOptions} />
                    </StyledbarChart>
                </StyledWidgetWrapDiv>
                <StyledWidgetWrapDiv css={{ width: '550px', flex: '0' }}>
                    <StyledLineChart>
                        <HighchartsReact highcharts={Highcharts} options={lineOptions} />
                    </StyledLineChart>
                </StyledWidgetWrapDiv>
            </StyledFullHeightDiv>
        </>
    );
}

export default App;
