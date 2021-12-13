import styled from 'styled-components'
import img1 from './image/Arrow.png';
import img2 from './image/Calender.png';
import img3 from './image/ChartIcon.png';
import img4 from './image/Document.png';


export const Box = styled.div`
    background: #ffffff;
    color: #ff7043;
    height: 107px;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;   
`
export const Title = styled.div`
    background: #ffffff;
    color: #E87722;
    font-family:  Arial, Helvetica, sans-serif;
    font-style: Medium;
    font-size: 26px;
    font-weight: 400;
    line-height: 30px;
    height: 30px;
    width: 272px;
    display: flex;
    justify-content: center;
    text-align: center;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 77px;
  
`;
export const BoxHeading = styled.div`
    background: #ffffff;
    color: #ff7043;
    height: 64px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;   
`
export const Heading = styled.nav`
    background: #ffffff;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-style: Book;
    font-weight: 400;
    font-size: 16px;
    height: 48px;
    width: 819px;
    display: flex;
    top: 18px;
    text-align: center;
    justify-content: center;
    align-items: center;
    
`;

export const BoxContent = styled.nav`
    background: #ffffff;
    color: #ff7043;
    height: 530px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;   
    top: 30px;
`;
 
export const ContentContainer = styled.nav`
    background: #DBDFE1;
    border: hidden;
    border-radius: 4px;
    height: 530px;
    width: 1080px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;  
`;
export const Buttons = styled.nav`
    border: hidden;
    border-radius: 4px;
    background: #FFFFFF;
    height: 68px;
    width: 1000px;
    top: 40px;
    left: 40px;
    position: absolute;
    display: flex;
`;
export const OptionBox = styled.nav`
    background: white;
    border: solid;
    border-color: #DBDFE1;
    border-radius: 4px;
    border-width: 1px;
    height: 44px;
    width: 236px;
    top: 12px;
    left: 24px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Option = styled.nav`
    font-family: Arial, Helvetica, sans-serif;
    color: #E87722;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;    
    left: 20px;
    
`

export const CalenderBox = styled.nav`
    background: white;
    border: solid;
    border-color: #DBDFE1;
    border-radius: 4px;
    border-width: 1px;
    height: 44px;
    width: 275px;
    top: 12px;
    left: 284px;
    position: absolute;
    justify-content: center;
    align-items: center; 
    display: flex;
`
export const Calender = styled.nav`
    font-family: Arial, Helvetica, sans-serif;
    color: #E87722;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;    
    left: 12px;
`
export const Button = styled.button` 
    background:#E87722;
    color: white;
    border: hidden;
    border-radius: 4px;
    font-family: Arial, Helvetica, sans-serifn;
    font-weight: 700;
    font-size: 14px;
    font-style: Bold;
    letter-spacing: .15em;
    height: 44px;
    width: 139px;
    top: 12px;
    left: 583px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Chart = styled.nav`
    border: hidden;
    border-radius: 4px;
    background: white;
    height: 367px;
    width: 1000px;
    top: 128px;
    left: 40px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Labels = styled.nav`
    background: white;
    height: 58px;
    width: 1000px;
    position: absolute;
    bottom:309px;
`
export const Label = styled.nav`
    background: white;
    color: #000;
    font-family: Arial, Helvetica, sans-serif;
    font-style: Book;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    height: 22px;
    width: 377px;
    position: absolute;
    bottom: 18px;
    right: 66px;
    justify-content: center;
    align-items: center;
`
export const LineCharts = styled.div`
    background: white;
    height: 309px;
    width: 1000px;
    position: absolute;
    top:58px;
`
export const QuyA = styled.div`
    background:#E87722;
    height: 14px;
    width: 14px;
    top:1px;
    position: relative;
    display: inline-block;

`
export const QuyB = styled.div`
    background:#6ECEB2;
    height: 14px;
    width: 14px;
    top:1px;
    position: relative;
    display: inline-block;

`
export const QuyC = styled.div`
    background:#FED141;
    height: 14px;
    width: 14px;
    top:1px;
    position: relative;
    display: inline-block;

`
export const Tab = styled.div`
    background: #fff;
    width: 85px;
    display: inline-block; 
`
export const NgayBox = styled.div`
    background: #0A3B32;
    color: #fff;
    font-family: Arial, Helvetica, sans-serifn;
    font-weight: 400;
    font-size: 16px;
    font-style: normal;
    line-height: 24px;
    position: absolute;
    height: 30px;
    width: 166px;
    top: 34px;
    left: 367px;
    border: solid;
    border-color: #E87722;
    border-width: 1px;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: absolute;
    justify-content: center;
    align-items: center; 
    display: flex;
    z-index: 999;
`
export const GiatriBox = styled.div`
    background: #fff;
    color: #0A3B32;
    font-family: Arial, Helvetica, sans-serifn;
    font-weight: 400;
    font-size: 16px;
    font-style: normal;
    line-height: 24px;
    height: 30px;
    width: 166px;
    top: 64px;
    left: 367px;
    border: solid;
    border-color: #E87722;
    border-width: 1px;
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    position: absolute;
    justify-content: center;
    align-items: center; 
    display: flex;
    z-index: 999;
`
export const ArrowWrapper = styled.div`
    background: #fff;
    background-image: url(${img1});
    height: 7.5px;
    width: 15px;
    top: 19px;
    left: 195.5px;
    position: absolute;    
`
export const ChartIconWrapper = styled.div`
    background: #fff;
    background-image: url(${img3});
    height: 28px;
    width: 27.7px;
    top: 20px;
    right: 77.3px;
    position: absolute;
    
`
export const CalenderIconWrapper = styled.div`
    background-image: url(${img2});
    height: 24px;
    width: 24px;
    top: 10px;
    right: 10px;
    position: absolute;
`
export const DocIconWrapper = styled.div`
    background-image: url(${img4});
    height: 28px;
    width: 24.3px;
    top: 20px;
    right: 24.7px;
    position: absolute;
`