import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const CryptoTransactionAnalysis = () => {
    const riskGaugeRef = useRef(null);
    const entityChartRef = useRef(null);

    useEffect(() => {
        // Initialize ECharts
        const riskGauge = echarts.init(riskGaugeRef.current);
        const entityChart = echarts.init(entityChartRef.current);

        // Gauge Chart Options
        const gaugeOption = {
            animation: false,
            series: [
                {
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
                                [0.3, '#67e0e3'],
                                [0.7, '#ffd77a'],
                                [1, '#FF4B55'],
                            ],
                        },
                    },
                    pointer: {
                        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                        length: '12%',
                        width: 20,
                        offsetCenter: [0, '-60%'],
                        itemStyle: {
                            color: 'auto',
                        },
                    },
                    axisTick: {
                        length: 12,
                        lineStyle: {
                            color: 'auto',
                            width: 2,
                        },
                    },
                    splitLine: {
                        length: 20,
                        lineStyle: {
                            color: 'auto',
                            width: 5,
                        },
                    },
                    axisLabel: {
                        color: '#464646',
                        fontSize: 10,
                        distance: -60,
                    },
                    title: {
                        offsetCenter: [0, '-20%'],
                        fontSize: 14,
                    },
                    detail: {
                        fontSize: 20,
                        offsetCenter: [0, '0%'],
                        valueAnimation: true,
                        formatter: '{value}%',
                        color: 'auto',
                    },
                    data: [
                        {
                            value: 89,
                            name: 'Risk Score',
                        },
                    ],
                },
            ],
        };

        // Entity Chart Options
        const entityOption = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: {
                type: 'value',
            },
            yAxis: {
                type: 'category',
                data: ['Entities'],
            },
            series: [
                {
                    name: 'Risky',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                    },
                    emphasis: {
                        focus: 'series',
                    },
                    data: [3],
                    color: '#FF4B55',
                },
                {
                    name: 'Non-Risky',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                    },
                    emphasis: {
                        focus: 'series',
                    },
                    data: [1],
                    color: '#67e0e3',
                },
            ],
        };

        // Set chart options
        riskGauge.setOption(gaugeOption);
        entityChart.setOption(entityOption);

        // Handle window resize
        const handleResize = () => {
            riskGauge.resize();
            entityChart.resize();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="bg-gray-50 font-['Inter']">
            <div className="max-w-8xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold mb-2">Transaction Risk Analysis</h1>
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-600">Source Address:</span>
                                <code className="bg-gray-100 px-3 py-1 rounded text-sm">1HQ3Go3ggs8pFnXuHVHRytPCq5fGG8Hbhx</code>
                                <button className="text-custom hover:text-custom/80 !rounded-button">
                                    <i className="far fa-copy"></i>
                                </button>
                            </div>
                        </div>
                        <div className="text-center">
                            <div ref={riskGaugeRef} className="w-80 h-80"></div>
                            <div className="mt-2">
                                <span className="text-custom font-semibold">Highly Risky</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h2 className="text-lg font-semibold mb-4">Level 1 Risk Analysis</h2>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-gray-600 text-sm mb-1">Risky Entities</div>
                                    <div className="text-2xl font-bold">3</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-gray-600 text-sm mb-1">Non-Risky Entities</div>
                                    <div className="text-2xl font-bold">1</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-gray-600 text-sm mb-1">Total CoinJoin</div>
                                    <div className="text-2xl font-bold">2</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-gray-600 text-sm mb-1">Total Flagged</div>
                                    <div className="text-2xl font-bold">1</div>
                                </div>
                            </div>
                            <div ref={entityChartRef} className="h-64"></div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h2 className="text-lg font-semibold mb-4">Transaction Flow</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold">Payer</span>
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Deposit</span>
                                    </div>
                                    <div className="text-sm space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Address:</span>
                                            <code className="bg-gray-100 px-2 py-1 rounded text-xs">1PnMfRF2enSZnR6JSexxBHuQnxG8Vo5FVK</code>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Amount:</span>
                                            <span>1.5 BTC</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Entity:</span>
                                            <span className="text-custom">Mixing Service</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold">Beneficiary</span>
                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Transfer</span>
                                    </div>
                                    <div className="text-sm space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Address:</span>
                                            <code className="bg-gray-100 px-2 py-1 rounded text-xs">3Cbq7aT1tY8kMxWLbitaG7yT6bPbKChq64</code>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Amount:</span>
                                            <span>0.75 BTC</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Entity:</span>
                                            <span className="text-custom">Darknet Market</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4">Transaction Timeline</h2>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="flex items-center h-16">
                                <div className="w-0.5 h-full bg-gray-200"></div>
                            </div>
                            <div className="flex-1 ml-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-600">06:02:2025 14:30:00</span>
                                        <span className="text-sm font-medium">0.75 BTC</span>
                                    </div>
                                    <code className="text-xs bg-gray-100 px-2 py-1 rounded block mb-2">
                                        f5d8ee39c1e07f9bb5db2831ebf6177886a84b65b4c5472d8be515fb2d6d25b1
                                    </code>
                                    <div className="flex items-center text-sm">
                                        <i className="fas fa-exchange-alt text-custom mr-2"></i>
                                        <span>Transfer to Darknet Market</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center h-16">
                                <div className="w-0.5 h-full bg-gray-200"></div>
                            </div>
                            <div className="flex-1 ml-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-600">06:02:2025 14:10:00</span>
                                        <span className="text-sm font-medium">1.5 BTC</span>
                                    </div>
                                    <code className="text-xs bg-gray-100 px-2 py-1 rounded block mb-2">
                                        3d3fa1b4f451cdb1a1f5c68d27e0cf66763c8c5a39a1281f5e40c615e27e4f0b
                                    </code>
                                    <div className="flex items-center text-sm">
                                        <i className="fas fa-random text-custom mr-2"></i>
                                        <span>Deposit from Mixing Service</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoTransactionAnalysis;