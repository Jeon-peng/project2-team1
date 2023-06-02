import { useEffect, useState, useRef } from "react";
//import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Chart from 'chart.js/auto';
//import { Doughnut } from "react-chartjs-2";
import { useQuery} from "@tanstack/react-query";
import db from '../firebase.js';
import { collection, getDocs, query, where, documentId } from "firebase/firestore";
import Loading from "./Loading.js";

//ChartJS.register(ArcElement, Tooltip, Legend);

function EndStateChart(params) {
    const chartRef = useRef(null);

    const lt60dayChart = (dataset) => {
        let low60Day = dataset.filter(d => d.lt60Day === 1)
        let above60Day = dataset.filter(d => d.lt60Day === 0)
        const lt60DayDataset = [
            low60Day.reduce((partialSum, a) => partialSum + parseFloat(a.percentage), 0.0),
            above60Day.reduce((partialSum, a) => partialSum + parseFloat(a.percentage), 0.0)
        ]
        const subDatasetlt60Day = [...low60Day, ...above60Day]
        const backgroundColor = [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            ];
        return ({
            type: 'doughnut',
            data: {
                labels: dataset.map((elem)=> elem.lt60Day+":"+elem.endState),
                datasets: [{
                    data: subDatasetlt60Day.map((elem) => parseFloat(elem.percentage)),
                    backgroundColor: backgroundColor,
                    labels: dataset.map((elem)=> elem.endState)
                },
                {
                    data: lt60DayDataset,
                    backgroundColor: ["#FF5F15","#00B3A0"],
                    borderColor: ["#FF5F15","#00B3A0"],
                    labels: ["60일 미만", "60일 이상"],
                },]
            },
            options: {
                responsive: true,
                legend: {
                    display: false,
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var dataset = data.datasets[tooltipItem.datasetIndex];
                            var index = tooltipItem.index;
                            return dataset.labels[index] + ': ' + dataset.data[index];
                        }
                    }
                }
            }
        });
    }

    const dataconfig = (dataset , option="count") => {
        return ({
            type: 'doughnut',
            data: {
                labels: dataset.map((elem)=> elem.endState),
                datasets: [
                    {
                        label: '#',
                        data: dataset.map((elem) => parseFloat(elem[option])),
                        backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        ],
                        borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                        hoverOffset: 4,
                    },
                ],
            }
        })
    }
    const [doughnutData, setDoughnutData] = useState(null);
    const {status, data, error} = useQuery(["strayanimal, endstate"], async ( )=> {
        const colref = collection(db, "strayanimal");
        const q = await getDocs(query(colref, where(documentId(), "in", ['차트03_보호_종료_시_상태_비율', '차트04_60일_보호_종료_상태_비율', '차트06_유기건수_축종_내_보호_종료_후_상태'])))
        const docList = q.docs.map((doc) => {
                const data = doc.data();
                return data.data;
        })
        return docList
    });
    useEffect(() => {
        if (status === "success") {
            console.log(data[0], data[1]);
            if (params.type === "all") {
                setDoughnutData(dataconfig(data[0]))
            } else if (params.type === "60days") {
                setDoughnutData(lt60dayChart(data[1]))
            } else if (params.type === "개") {
                setDoughnutData(dataconfig(data[2].filter(data => data.kindCd === "개")))
            } else if (params.type === "고양이") {
                setDoughnutData(dataconfig(data[2].filter(data => data.kindCd === "고양이")))
            } else {
                setDoughnutData(dataconfig(data[2].filter(data => data.kindCd === "기타축종")))
            }
        }
        
    }, [status, params.type])
    useEffect(() => {
        if (status === "success" && doughnutData != null) {
            let chartStatus = Chart.getChart(params.type)
            if(chartStatus !== undefined) {
                chartStatus.destroy()
            }
            const ctx = chartRef.current.getContext('2d');
            new Chart(ctx, doughnutData);
        }
    }, [doughnutData, status])
    if (status === "loading" || doughnutData === null) {
        return <Loading/>
    }
    return <div><canvas id={params.type} ref={chartRef}/></div>
    //return <Doughnut data={doughnutData} />
}

export default EndStateChart;