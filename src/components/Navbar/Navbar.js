import React from 'react'
import LineChart from './LineChart';
import {Box, Title ,BoxHeading, Heading, BoxContent, ContentContainer, 
    Buttons, Option, OptionBox, CalenderBox, Calender, Button,
    Labels, Label, Chart, NgayBox, GiatriBox, LineCharts, QuyA, QuyB, QuyC, Tab,
    ArrowWrapper, CalenderIconWrapper, ChartIconWrapper, DocIconWrapper} from './Navbar.elements';

const Navbar = () => {
    return (
        <>
            <Box>
                <Title>
                    TRA CỨU GIÁ ĐƠN VỊ
                </Title>
            </Box>
            <BoxHeading>
                <Heading>
                Nhằm cung cấp cho bạn đầy đủ thông tin về giá trị quỹ trong cả hiện tại và quá khứ, bạn có thể tùy chọn thời điểm tra cứu theo khung thời gian bạn muốn
                </Heading>
            </BoxHeading>
            <BoxContent>
                <ContentContainer>
                    <Buttons>
                    <ChartIconWrapper/>
                    <DocIconWrapper/>
                        <OptionBox>
                            <Option>
                                 Tất cả các quỹ
                            </Option>
                                <ArrowWrapper/>
                        </OptionBox>
                        <CalenderBox>
                            <CalenderIconWrapper/>
                            <Calender>
                                01/07/2020 - 10/08/2020
                            </Calender>
                        </CalenderBox>
                        <Button>
                            TRA CỨU 
                        </Button>
                    </Buttons>    
                    <Chart>
                        <NgayBox>
                            Ngày: 20/07/2020
                        </NgayBox>
                        <GiatriBox>
                            Giá trị quỹ: 335.00
                        </GiatriBox>
                        <Labels>
                            <Label>
                                <QuyA></QuyA> Quỹ A<Tab/><QuyB></QuyB> Quỹ B<Tab/><QuyC></QuyC> Quỹ C
                            </Label>
                        </Labels>
                        <LineCharts>
                            <LineChart>

                            </LineChart>
                        </LineCharts>
                    </Chart>                
                </ContentContainer>
            </BoxContent>
        </>
    )
}

export default Navbar
