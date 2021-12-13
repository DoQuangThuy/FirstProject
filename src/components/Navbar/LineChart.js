import React from 'react';
import { Line } from 'react-chartjs-2';
import { withTheme } from 'styled-components';

const labels = ['01/07', '05/07', '11/07','15/07', '21/07','25/07', '31/07','05/08', '10/08'];
const LineChart = () => {
    return <>
        <Line
            data={{
                labels:labels,
                datasets: [
                    {
                        label: 'Quỹ A',
                        data: [0.92,0.93,0.91,0.95,0.96,0.96,0.91,0.91,0.93,0.99],
                        borderColor: '#E87722',
                        backgroundColor: '#E87722',
                        borderWidth: 2,
                    },
                    {
                        label: 'Quỹ B',
                        data: [0.9,0.91,0.94,0.96,0.97,0.92,0.99,1,0.94,0.98],
                        borderColor: '#6ECEB2',
                        backgroundColor: '#6ECEB2',
                        borderWidth: 2,
                    },
                    {
                        label: 'Quỹ C',
                        data: [0.96,0.94,0.97,0.93,0.98,0.9,0.91,0.94,0.93,0.95],
                        borderColor: '#FED141',
                        backgroundColor: '#FED141',
                        borderWidth: 2,
                    }
                ],
                
            }}
            options = {{
                scales:{
                    y: {
                        min: 0.90,
                        max: 1.02,
                        ticks: {
                            stepSize: 0.02,
                            color: '#000',
                            font:{
                                size: 16,
                                weight: 400,
                                family: 'Arial',
                                lineHeight: '24px',
                            },
                        }
                    },
                    x:{
                        grid: {
                            display: true,
                            
                        },
                        ticks:{
                            callback: function(val,index){
                                return index % 2 == 0 ? this.getLabelForValue(val): '';
                            },
                            color: '#000',
                            font:{
                                size: 16,
                            },
                            

                        },
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                plugins:{
                    legend:{
                        display: false,
                    }
                }
            }}
            
        />
    </>
}

export default LineChart