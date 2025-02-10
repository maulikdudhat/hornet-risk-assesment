import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

const CryptoTransactionAnalysis = ({ data }) => {
    // const [searchQuery, setSearchQuery] = useState('');
    const [selectedSource, setSelectedSource] = useState(data[0]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const riskGaugeRef = useRef(null);
    const entityChartRef = useRef(null);
    const transactionChartRef = useRef(null);

    // const initializeCharts = (foundSource) => {
    //     console.log('Initializing charts...');

    //     console.log(riskGaugeRef.current, "riskGaugeRef.current")
    //     console.log(entityChartRef.current, "entityChartRef.current")
    //     console.log(transactionChartRef.current, "transactionChartRef.current")

    //     // Ensure DOM elements are available
    //     if (riskGaugeRef.current && entityChartRef.current && transactionChartRef.current) {
    //         // Dispose existing chart instances to avoid memory leaks
    //         echarts.getInstanceByDom(riskGaugeRef.current);
    //         echarts.getInstanceByDom(entityChartRef.current);
    //         echarts.getInstanceByDom(transactionChartRef.current);

    //         // Initialize new chart instances
    //         const riskGauge = echarts.init(riskGaugeRef.current);
    //         const entityChart = echarts.init(entityChartRef.current);
    //         const transactionChart = echarts.init(transactionChartRef.current);

    //         // Resize charts on window resize
    //         const resizeCharts = () => {
    //             riskGauge.resize();
    //             entityChart.resize();
    //             transactionChart.resize();
    //         };
    //         window.addEventListener('resize', resizeCharts);

    //         // Risk Gauge Chart
    //         riskGauge.setOption({
    //             animation: true,
    //             series: [{
    //                 type: 'gauge',
    //                 startAngle: 180,
    //                 endAngle: 0,
    //                 min: 0,
    //                 max: 100,
    //                 splitNumber: 8,
    //                 axisLine: {
    //                     lineStyle: {
    //                         width: 6,
    //                         color: [
    //                             [parseFloat(foundSource.risk_score) / 100 || 20, '#FF4B55'],
    //                             [1, '#4B5563']
    //                         ]
    //                     }
    //                 },
    //                 pointer: {
    //                     icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
    //                     length: '12%',
    //                     width: 20,
    //                     offsetCenter: [0, '-60%'],
    //                     itemStyle: {
    //                         color: '#FF4B55'
    //                     }
    //                 },
    //                 axisTick: {
    //                     length: 12,
    //                     lineStyle: {
    //                         color: '#9CA3AF',
    //                         width: 2
    //                     }
    //                 },
    //                 splitLine: {
    //                     length: 20,
    //                     lineStyle: {
    //                         color: '#9CA3AF',
    //                         width: 3
    //                     }
    //                 },
    //                 axisLabel: {
    //                     color: '#9CA3AF',
    //                     fontSize: 12,
    //                     distance: -60
    //                 },
    //                 title: {
    //                     offsetCenter: [0, '-20%'],
    //                     fontSize: 20,
    //                     color: '#fff'
    //                 },
    //                 detail: {
    //                     fontSize: 30,
    //                     offsetCenter: [0, '0%'],
    //                     valueAnimation: true,
    //                     formatter: '{value}%',
    //                     color: '#fff'
    //                 },
    //                 data: [{
    //                     value: parseFloat(foundSource.risk_score)
    //                 }]
    //             }]
    //         });

    //         // Entity Analysis Chart
    //         const levelData = foundSource.level_vise_risk_analysis[0]; // Use the first level for simplicity
    //         entityChart.setOption({
    //             animation: false,
    //             tooltip: {
    //                 trigger: 'axis',
    //                 axisPointer: {
    //                     type: 'shadow'
    //                 }
    //             },
    //             legend: {
    //                 data: ['Risky', 'Non-Risky'],
    //                 textStyle: {
    //                     color: '#fff'
    //                 }
    //             },
    //             grid: {
    //                 left: '3%',
    //                 right: '4%',
    //                 bottom: '3%',
    //                 containLabel: true
    //             },
    //             xAxis: {
    //                 type: 'value',
    //                 axisLine: {
    //                     lineStyle: {
    //                         color: '#4B5563'
    //                     }
    //                 },
    //                 axisLabel: {
    //                     color: '#9CA3AF'
    //                 }
    //             },
    //             yAxis: {
    //                 type: 'category',
    //                 data: [`Level ${levelData.level}`],
    //                 axisLine: {
    //                     lineStyle: {
    //                         color: '#4B5563'
    //                     }
    //                 },
    //                 axisLabel: {
    //                     color: '#9CA3AF'
    //                 }
    //             },
    //             series: [
    //                 {
    //                     name: 'Risky',
    //                     type: 'bar',
    //                     stack: 'total',
    //                     label: {
    //                         show: true,
    //                         color: '#fff'
    //                     },
    //                     emphasis: {
    //                         focus: 'series'
    //                     },
    //                     data: [levelData.risky_entities_count],
    //                     itemStyle: {
    //                         color: '#FF4B55'
    //                     }
    //                 },
    //                 {
    //                     name: 'Non-Risky',
    //                     type: 'bar',
    //                     stack: 'total',
    //                     label: {
    //                         show: true,
    //                         color: '#fff'
    //                     },
    //                     emphasis: {
    //                         focus: 'series'
    //                     },
    //                     data: [levelData.non_risky_entities_count],
    //                     itemStyle: {
    //                         color: '#91CC75'
    //                     }
    //                 }
    //             ]
    //         });

    //         // Transaction Types Chart
    //         transactionChart.setOption({
    //             animation: false,
    //             tooltip: {
    //                 trigger: 'item'
    //             },
    //             legend: {
    //                 orient: 'vertical',
    //                 left: 'left',
    //                 textStyle: {
    //                     color: '#fff'
    //                 }
    //             },
    //             series: [
    //                 {
    //                     type: 'pie',
    //                     radius: '50%',
    //                     data: [
    //                         { value: levelData.total_coinjoin, name: 'CoinJoin' },
    //                         { value: levelData.total_flagged, name: 'Flagged' }
    //                     ],
    //                     emphasis: {
    //                         itemStyle: {
    //                             shadowBlur: 10,
    //                             shadowOffsetX: 0,
    //                             shadowColor: 'rgba(0, 0, 0, 0.5)'
    //                         }
    //                     },
    //                     itemStyle: {
    //                         color: function (params) {
    //                             const colors = ['#FF4B55', '#FAC858'];
    //                             return colors[params.dataIndex];
    //                         }
    //                     },
    //                     label: {
    //                         color: '#fff'
    //                     }
    //                 }
    //             ]
    //         });

    //         return () => {
    //             window.removeEventListener('resize', resizeCharts);
    //         };
    //     } else {
    //         console.error('Chart containers not found!');
    //     }
    // };

    useEffect(() => {
        const riskGauge = echarts.init(riskGaugeRef.current);
        const entityChart = echarts.init(entityChartRef.current);
        const transactionChart = echarts.init(transactionChartRef.current);

        const resizeCharts = () => {
            riskGauge.resize();
            entityChart.resize();
            transactionChart.resize();
        };

        window.addEventListener('resize', resizeCharts);

        // Risk Gauge Chart
        riskGauge.setOption({
            animation: true,
            series: [{
                type: 'gauge',
                startAngle: 180,
                endAngle: 0,
                min: 0,
                max: 100,
                splitNumber: 8,
                axisLine: {
                    lineStyle: {
                        width: 6,
                        color: [
                            [parseFloat(selectedSource.risk_score) / 100, '#FF4B55'],
                            [1, '#4B5563']
                        ]
                    }
                },
                pointer: {
                    icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                    length: '12%',
                    width: 20,
                    offsetCenter: [0, '-60%'],
                    itemStyle: {
                        color: '#FF4B55'
                    }
                },
                axisTick: {
                    length: 12,
                    lineStyle: {
                        color: '#9CA3AF',
                        width: 2
                    }
                },
                splitLine: {
                    length: 20,
                    lineStyle: {
                        color: '#9CA3AF',
                        width: 3
                    }
                },
                axisLabel: {
                    color: '#9CA3AF',
                    fontSize: 12,
                    distance: -60
                },
                title: {
                    offsetCenter: [0, '-20%'],
                    fontSize: 20,
                    color: '#fff'
                },
                detail: {
                    fontSize: 30,
                    offsetCenter: [0, '0%'],
                    valueAnimation: true,
                    formatter: '{value}%',
                    color: '#fff'
                },
                data: [{
                    value: parseFloat(selectedSource.risk_score)
                }]
            }]
        });

        // Entity Analysis Chart
        const levelData = selectedSource.level_vise_risk_analysis[0]; // Use the first level for simplicity
        entityChart.setOption({
            animation: false,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['Risky', 'Non-Risky'],
                textStyle: {
                    color: '#fff'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#4B5563'
                    }
                },
                axisLabel: {
                    color: '#9CA3AF'
                }
            },
            yAxis: {
                type: 'category',
                data: [`Level ${levelData.level}`],
                axisLine: {
                    lineStyle: {
                        color: '#4B5563'
                    }
                },
                axisLabel: {
                    color: '#9CA3AF'
                }
            },
            series: [
                {
                    name: 'Risky',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                        color: '#fff'
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [levelData.risky_entities_count],
                    itemStyle: {
                        color: '#FF4B55'
                    }
                },
                {
                    name: 'Non-Risky',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                        color: '#fff'
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [levelData.non_risky_entities_count],
                    itemStyle: {
                        color: '#91CC75'
                    }
                }
            ]
        });

        // Transaction Types Chart
        transactionChart.setOption({
            animation: false,
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                textStyle: {
                    color: '#fff'
                }
            },
            series: [
                {
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: levelData.total_coinjoin, name: 'CoinJoin' },
                        { value: levelData.total_flagged, name: 'Flagged' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    itemStyle: {
                        color: function (params) {
                            const colors = ['#FF4B55', '#FAC858'];
                            return colors[params.dataIndex];
                        }
                    },
                    label: {
                        color: '#fff'
                    }
                }
            ]
        });

        return () => {
            window.removeEventListener('resize', resizeCharts);
        };
    }, [selectedSource]);

    // const handleSearch = () => {
    //     setLoading(true);
    //     setError('');
    //     const foundSource = data.find(source => source.source_address === searchQuery);

    //     if (foundSource) {
    //         console.log('Found source:', foundSource);
    //         setSelectedSource(foundSource);

    //         setTimeout(() => {
    //             initializeCharts(foundSource); // Use foundSource directly
    //         }, 1000);
    //     } else {
    //         console.log('Source not found');
    //         setError('Wrong source address added');
    //         setSelectedSource(null);
    //     }

    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 3000);
    // };

    const handleSourceChange = (source) => {
        setLoading(true);

        setTimeout(() => {
            setError('')
            setLoading(false);
            setSelectedSource(source);
        }, 1000);
    };



    return (
        <div className="bg-gray-900 font-['Inter'] min-h-screen">
            <div className="max-w-8xl mx-auto">
                <div className="bg-gray-800 rounded-lg shadow-sm p-6">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
                        <div className='p-4'>
                            <div className="loading-skeleton hidden">
                                <div className="h-8 bg-gray-700 rounded animate-pulse mb-4"></div>
                                <div className="h-6 bg-gray-700 rounded animate-pulse w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-700 rounded animate-pulse w-1/2"></div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-0 mb-4 w-full">
                                <span className="text-gray-300">Select Source Address:</span>
                                {/* <input
                                    type="text"
                                    className="flex-1 border border-gray-700 bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-custom"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button
                                    className="text-white hover:text-custom/80 !rounded-button p-2 m-2 bg-black rounded"
                                    onClick={handleSearch}
                                >
                                    Search
                                </button> */}

                                <select
                                    className="w-full sm:w-auto min-w-[150px] sm:min-w-[200px] border border-gray-700 bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-custom appearance-none"
                                    onChange={(e) => handleSourceChange(data[e.target.value])}
                                >
                                    {data.map((source, index) => (
                                        <option key={index} value={index}>
                                            {source.source_address}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {error && <p className="text-red-500">{error}</p>}
                            <h1 className="text-2xl font-semibold mb-2 text-white">Transaction Risk Analysis</h1>
                            {selectedSource && (
                                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                                    <span className="text-gray-300">Source Address:</span>
                                    <code className="bg-gray-700 px-3 py-1 rounded text-sm text-white">{selectedSource.source_address}</code>
                                    {/* <button className="text-custom hover:text-custom/80 !rounded-button">
                                        <i className="far fa-copy"></i>
                                    </button> */}
                                </div>
                            )}
                        </div>
                        {selectedSource && !loading && (
                            <div className="text-center">
                                <div ref={riskGaugeRef} style={{ width: '200px', height: '300px' }}></div>
                                <div className="mt-2">
                                    <span className="text-custom font-semibold bg-red-900/50 px-3 py-1 rounded-full animate-pulse">
                                        {selectedSource.risk}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    {loading ? (
                        <div className="space-y-6">
                            <div className="h-8 bg-gray-700 rounded animate-pulse"></div>
                            <div className="h-6 bg-gray-700 rounded animate-pulse w-3/4"></div>
                            <div className="h-4 bg-gray-700 rounded animate-pulse w-1/2"></div>
                        </div>
                    ) : selectedSource ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                <div className="bg-gray-700 rounded-lg p-4">
                                    <h3 className="text-lg font-medium mb-2 text-white">Entity Analysis</h3>
                                    <div ref={entityChartRef} style={{ width: '100%', height: '200px' }}></div>
                                </div>
                                <div className="bg-gray-700 rounded-lg p-4">
                                    <h3 className="text-lg font-medium mb-2 text-white">Transaction Types</h3>
                                    <div ref={transactionChartRef} style={{ width: '100%', height: '200px' }}></div>
                                </div>
                                <div className="bg-gray-700 rounded-lg p-4">
                                    <h3 className="text-lg font-medium mb-2 text-white">Risk Metrics</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-white">CoinJoin Transactions</span>
                                                <span className="font-medium text-white">{selectedSource.level_vise_risk_analysis[0].total_coinjoin}</span>
                                            </div>
                                            <div className="w-full bg-gray-600 rounded-full h-2">
                                                <div
                                                    className="bg-white h-2 rounded-full"
                                                    style={{ width: `${(selectedSource.level_vise_risk_analysis[0].total_coinjoin / 5) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-white">Flagged Transactions</span>
                                                <span className="font-medium text-white">{selectedSource.level_vise_risk_analysis[0].total_flagged}</span>
                                            </div>
                                            <div className="w-full bg-gray-600 rounded-full h-2">
                                                <div
                                                    className="bg-white h-2 rounded-full"
                                                    style={{ width: `${(selectedSource.level_vise_risk_analysis[0].total_flagged / 5) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {selectedSource.level_vise_risk_analysis.map((level, index) => (
                                    <React.Fragment key={index}>
                                        <div className="mb-6 border border-gray-700 rounded-lg">
                                            <div className="p-4 border-b border-gray-700 bg-gray-700 rounded">
                                                <h2 className="text-lg font-semibold mb-4 text-white">Transaction Flow</h2>
                                            </div>
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                                <div className="p-4 rounded-lg shadow-sm">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="font-semibold text-white">Beneficiary</span>
                                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Transfer</span>
                                                    </div>
                                                    <div className="text-sm space-y-2">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-gray-400 text-sm">Address:</span>
                                                            <code className="bg-gray-100 px-2 py-1 rounded text-xs break-all overflow-hidden w-full ml-1">{level.beneficiary_details[0].beneficiary_address}</code>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-gray-400 text-sm">Amount:</span>
                                                            <p className='text-white'>{level.beneficiary_details[0].amount
                                                            }</p>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-gray-400 text-sm">Entity:</span>
                                                            <p className="text-white">{level.beneficiary_details[0].entity_name}</p>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-gray-400 text-sm">Token:</span>
                                                            <span className="text-white">{level.beneficiary_details[0]?.token_type}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="p-4 rounded-lg shadow-sm">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="font-semibold text-white">Payer</span>
                                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Deposit</span>
                                                    </div>
                                                    <div className="text-sm space-y-2">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-gray-400 text-sm">Address:</span>
                                                            <code className="bg-gray-100 px-2 py-1 rounded text-xs break-all overflow-hidden w-full ml-1">{level.payer_details[0].payer_address}</code>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-gray-400 text-sm">Amount:</span>
                                                            <p className="text-white">{level.payer_details[0]?.amount}</p>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-gray-400 text-sm">Entity:</span>
                                                            <span className="text-white">{level.payer_details[0]?.entity_name}</span>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-gray-400 text-sm">Token:</span>
                                                            <span className="text-white">{level.payer_details[0]?.token_type}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border border-gray-700 rounded-lg">
                                            <div className="p-4 border-b border-gray-700 bg-gray-700">
                                                <h3 className="font-medium text-white">Beneficiary Details (Level {level.level})</h3>
                                            </div>
                                            <div className="p-4">
                                                <div className="flex flex-col space-y-4">
                                                    {level.beneficiary_details.map((beneficiary, idx) => (
                                                        <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                                            <div>
                                                                <span className="text-gray-400 text-sm">Address</span>
                                                                <div className="flex items-center space-x-2 mt-1">
                                                                    <code className="text-sm text-white break-all overflow-hidden w-full">{beneficiary.beneficiary_address}</code>
                                                                    <button className="text-custom hover:text-custom/80 !rounded-button">
                                                                        <i className="far fa-copy"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="text-gray-400 text-sm">Amount</span>
                                                                <p className="mt-1 text-white">{beneficiary.amount} {beneficiary.token_type}</p>
                                                            </div>
                                                            <div>
                                                                <span className="text-gray-400 text-sm">Entity</span>
                                                                <p className="mt-1 text-white">{beneficiary.entity_name}</p>
                                                            </div>
                                                            <div>
                                                                <span className="text-gray-400 text-sm">Date</span>
                                                                <p className="mt-1 text-white">{beneficiary.date}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-gray-700 rounded-lg">
                                            <div className="p-4 border-b border-gray-700 bg-gray-700">
                                                <h3 className="font-medium text-white">Payer Details (Level {level.level})</h3>
                                            </div>
                                            <div className="p-4">
                                                <div className="flex flex-col space-y-4">
                                                    {level.payer_details.map((payer, idx) => (
                                                        <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                                            <div>
                                                                <span className="text-gray-400 text-sm">Address</span>
                                                                <div className="flex items-center space-x-2 mt-1">
                                                                    <code className="text-sm text-white break-all overflow-hidden w-full">{payer.payer_address}</code>
                                                                    <button className="text-custom hover:text-custom/80 !rounded-button">
                                                                        <i className="far fa-copy"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="text-gray-400 text-sm">Amount</span>
                                                                <p className="mt-1 text-white">{payer.amount} {payer.token_type}</p>
                                                            </div>
                                                            <div>
                                                                <span className="text-gray-400 text-sm">Entity</span>
                                                                <p className="mt-1 text-white">{payer.entity_name}</p>
                                                            </div>
                                                            <div>
                                                                <span className="text-gray-400 text-sm">Date</span>
                                                                <p className="mt-1 text-white">{payer.date}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </>
                    ) : <>

                        <div class="flex flex-col md:flex-row items-center justify-between mb-6 gap-4"><div class="text-center w-full py-16"><i class="fas fa-search text-gray-500 text-6xl mb-4"></i><h2 class="text-2xl font-semibold text-gray-300 mb-2">No Analysis Available</h2><p class="text-gray-400 mb-4">Please enter a source address to see risk analysis</p></div></div>

                    </>}
                </div>
            </div>
        </div>
    );
};

export default CryptoTransactionAnalysis;