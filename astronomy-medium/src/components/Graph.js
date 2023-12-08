import React from 'react'
import { Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import { useState } from 'react';

export const Graph = ({dataSets, graphRadio}) => {
    const labels = ['name', 'Assumed Distance', 'Galactocentric Radius', 'Observed circular velocity', 'Uncertainty in Vobs', 'Gas velocity contribution', 'Disk velocity contribution', 'Buldge velocity contribution', 'Disk surface brightness', 'Buldge surface brightness'];
    // params it'll need:
    // the radio button telling it what to graph with respect to radius in KPC
    // the different galaxies and their data =, it'll be an list array, each index being a type of galaxy. then it has
    // more arrays for that data

    //first lets just get the data as for each galaxy and a radio selected, itll give xes=[] and yes=[]

    //new strucutre of [[x values][y values]] for each galaxy

    const colors = ["lightgreen", "tan", 'lightyellow', "coral", "violet", "lightpink", "lightgray"];

    var dataList = [];
    var galLabels = [];
    var data = [];

    if((graphRadio > 0) && (dataSets.length > 1)){
        dataList = [];
        galLabels = [];
        data = [];
        dataSets.forEach(set => {
            //for each galaxy (here)there are multiple subsets
            const galData = [];
            set.forEach(subSet => {
                // subsets 
                const galaxy = {x: subSet[2], y: subSet[graphRadio]};
                galData.push(galaxy);
            })
            dataList.push(galData);
        })
    console.log(dataList);

    dataSets.forEach(set => {
        galLabels.push(set[0][0]);
    })

    data = {
        labels: galLabels,
        datasets: dataList.map((graphData, index) => ({
            label: galLabels[index],
            data: graphData,
            borderColor: colors[Math.random() * colors.length],
            backgroundColor: colors[Math.random() * colors.length],
            borderWidth: 2,
            fill: false,
            tension: 0.4
        }))
    }
    console.log(data);
    }
    //one galaxt is at dataSets[0]
    // console.log("parse" + graphCheck);

    // if((graphCheck.length > 0) && (dataSets.length === 1)){
    //     dataList = [];
    //     galLabels = [];
    //     data = [];
    //     graphCheck.forEach(check => {
    //         //for each checked box, that's the data set
    //         const set = dataSets[0];
    //         const galData = [];
    //         set.forEach(subSet => {
    //             //getting the smaller params
    //             const galaxy = {x: subSet[2], y: subSet[check]};
    //             galData.push(galaxy);
    //         })
    //         //for each check, make a set of each galaxy subset
    //         dataList.push(galData);

    //         galLabels.push(labels[check]);
    //     })


    //     data = {
    //         labels: galLabels,
    //         datasets: dataList.map((graphData, index) => ({
    //             label: galLabels[index],
    //             data: graphData,
    //             borderColor: colors[Math.random() * colors.length],
    //             backgroundColor: colors[Math.random() * colors.length],
    //             borderWidth: 2,
    //             fill: false,
    //             tension: 0.4
    //         }))
    //     }
    //     // console.log("parse" + dataList);
    //     // console.log("parse" + galLabels);
    //     // console.log("parse" + data);
    // }
    
    

    

  return (
    <div style={{width: "100%", height : "500px"}}>
        
        {(((graphRadio > 0)) && (dataSets.length > 0)) && (
        <Line
            style={{margin: '2em'}}
            id='chart'
            height={'30px'}
            data={data}
            options={{
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: false,
                        text: "vibe check"
                    },
                    legend: {
                        display: true
                    }
                },
                scales: {
                    y: {
                        gridLines: {
                            color: "black"
                          },
                        title: {
                            display: true,
                            text: labels[graphRadio],
                        },
                        ticks: {
                            stepSize: 1,
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Radius in KPC',
                        },
                        ticks: {
                            display: true
                        },
                        type: 'linear',
                        gridLines: {
                            color: "black"
                          },
                    }
                    
                },
            }}>

        </Line>

        )}

    {/* {(((graphCheck.length > 0)) && (dataSets.length > 0)) && (
        <Line
            style={{margin: '2em'}}
            id='chart'
            height={'30px'}
            data={data}
            options={{
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: false,
                        text: "vibe check"
                    },
                    legend: {
                        display: true
                    }
                },
                scales: {
                    y: {
                        gridLines: {
                            color: "black"
                          },
                        title: {
                            display: true,
                            text: 'y',
                        },
                        ticks: {
                            stepSize: 1,
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Radius in KPC',
                        },
                        ticks: {
                            display: true
                        },
                        type: 'linear',
                        gridLines: {
                            color: "black"
                          },
                    }
                    
                },
            }}>

        </Line>

        )} */}
    </div>
  )
}


export default Graph;