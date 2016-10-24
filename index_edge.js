/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'timer',
                            symbolName: 'timer',
                            type: 'rect',
                            rect: ['26', '32', '41', '23', 'auto', 'auto']
                        },
                        {
                            id: 'var',
                            type: 'rect',
                            rect: ['72px', '37px', '7px', '8px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'back',
                            type: 'image',
                            rect: ['0', '0', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"back.png",'0px','0px']
                        },
                        {
                            id: 'keys',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0', '1280px', '800px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"keys.png",'0px','0px']
                        },
                        {
                            id: 'player_german',
                            symbolName: 'player_german',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto']
                        },
                        {
                            id: 'player_eng',
                            symbolName: 'player_eng',
                            display: 'none',
                            type: 'rect',
                            rect: ['1', '1', '1280', '800', 'auto', 'auto']
                        },
                        {
                            id: 'Text',
                            display: 'none',
                            type: 'text',
                            rect: ['477px', '118px', '340px', '84px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">CHOOSE&nbsp;ID</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [58, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'points',
                            type: 'group',
                            rect: ['-265', '-86', '0', '0', 'auto', 'auto'],
                            c: [
                            {
                                id: 'point1',
                                symbolName: 'point1',
                                display: 'block',
                                type: 'rect',
                                rect: ['743px', '333px', '100', '100', 'auto', 'auto']
                            },
                            {
                                id: 'point2',
                                symbolName: 'point2',
                                display: 'block',
                                type: 'rect',
                                rect: ['855px', '331px', '100', '100', 'auto', 'auto']
                            },
                            {
                                id: 'point3',
                                symbolName: 'point3',
                                display: 'block',
                                type: 'rect',
                                rect: ['972px', '333px', '100', '100', 'auto', 'auto']
                            },
                            {
                                id: 'point4',
                                symbolName: 'point4',
                                display: 'block',
                                type: 'rect',
                                rect: ['743px', '443px', '100', '100', 'auto', 'auto']
                            },
                            {
                                id: 'point5',
                                symbolName: 'point5',
                                display: 'block',
                                type: 'rect',
                                rect: ['855px', '441px', '100', '100', 'auto', 'auto']
                            },
                            {
                                id: 'point6',
                                symbolName: 'point6',
                                display: 'block',
                                type: 'rect',
                                rect: ['969px', '442px', '100', '100', 'auto', 'auto']
                            },
                            {
                                id: 'point7',
                                symbolName: 'point7',
                                display: 'block',
                                type: 'rect',
                                rect: ['743px', '553px', '100', '100', 'auto', 'auto']
                            },
                            {
                                id: 'point8',
                                symbolName: 'point8',
                                display: 'block',
                                type: 'rect',
                                rect: ['855px', '551px', '100', '100', 'auto', 'auto']
                            },
                            {
                                id: 'point9',
                                symbolName: 'point9',
                                display: 'block',
                                type: 'rect',
                                rect: ['967px', '551px', '100', '100', 'auto', 'auto']
                            },
                            {
                                id: 'point0',
                                symbolName: 'point0',
                                display: 'block',
                                type: 'rect',
                                rect: ['855px', '658px', '100', '100', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'german',
                            display: 'none',
                            type: 'rect',
                            rect: ['167px', '245px', '356px', '249px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'eng',
                            display: 'none',
                            type: 'rect',
                            rect: ['780px', '245px', '387px', '230px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'loop',
                            symbolName: 'loop',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '1', '1280', '800', 'auto', 'auto'],
                            opacity: '1'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '800px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 81047,
                    autoPlay: true,
                    labels: {
                        "id": 500,
                        "start": 2000,
                        "code": 3000,
                        "code_see": 3500,
                        "error": 4000,
                        "free": 5000,
                        "menu": 5750,
                        "german": 7000,
                        "eng": 9000
                    },
                    data: [
                        [
                            "eid271",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${point1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid263",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${point9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid52",
                            "opacity",
                            3000,
                            500,
                            "linear",
                            "${loop}",
                            '1',
                            '0'
                        ],
                        [
                            "eid276",
                            "display",
                            0,
                            0,
                            "linear",
                            "${player_eng}",
                            'none',
                            'none'
                        ],
                        [
                            "eid422",
                            "display",
                            7113,
                            0,
                            "linear",
                            "${player_eng}",
                            'none',
                            'none'
                        ],
                        [
                            "eid387",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${player_eng}",
                            'none',
                            'block'
                        ],
                        [
                            "eid421",
                            "display",
                            10883,
                            0,
                            "linear",
                            "${player_eng}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            0,
                            0,
                            "linear",
                            "${keys}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            500,
                            0,
                            "linear",
                            "${keys}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${keys}",
                            'block',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${keys}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            0,
                            0,
                            "linear",
                            "${loop}",
                            'none',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${loop}",
                            'none',
                            'block'
                        ],
                        [
                            "eid47",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${loop}",
                            'block',
                            'block'
                        ],
                        [
                            "eid91",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${loop}",
                            'block',
                            'none'
                        ],
                        [
                            "eid59",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${loop}",
                            'none',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${loop}",
                            'none',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${german}",
                            'none',
                            'block'
                        ],
                        [
                            "eid61",
                            "left",
                            4000,
                            125,
                            "linear",
                            "${keys}",
                            '0px',
                            '-24px'
                        ],
                        [
                            "eid62",
                            "left",
                            4125,
                            125,
                            "linear",
                            "${keys}",
                            '-24px',
                            '0px'
                        ],
                        [
                            "eid63",
                            "left",
                            4250,
                            125,
                            "linear",
                            "${keys}",
                            '0px',
                            '24px'
                        ],
                        [
                            "eid64",
                            "left",
                            4375,
                            125,
                            "linear",
                            "${keys}",
                            '24px',
                            '0px'
                        ],
                        [
                            "eid262",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${point0}",
                            'block',
                            'none'
                        ],
                        [
                            "eid269",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${point3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid89",
                            "opacity",
                            500,
                            2500,
                            "linear",
                            "${keys}",
                            '1',
                            '0'
                        ],
                        [
                            "eid51",
                            "opacity",
                            3000,
                            500,
                            "linear",
                            "${keys}",
                            '0',
                            '1'
                        ],
                        [
                            "eid56",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${keys}",
                            '1',
                            '0'
                        ],
                        [
                            "eid270",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${point2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid265",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${point7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid268",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${point4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid70",
                            "display",
                            1895,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${eng}",
                            'none',
                            'block'
                        ],
                        [
                            "eid267",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${point5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${player_german}",
                            'none',
                            'block'
                        ],
                        [
                            "eid567",
                            "display",
                            8941,
                            0,
                            "linear",
                            "${player_german}",
                            'block',
                            'none'
                        ],
                        [
                            "eid264",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${point8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid266",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${point6}",
                            'block',
                            'none'
                        ],
                            [ "eid102", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${point1}', [] ] ],
                            [ "eid278", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${loop}', [] ] ],
                            [ "eid275", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${timer}', [] ] ],
                            [ "eid393", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${player_eng}', [] ] ],
                            [ "eid103", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${point2}', [] ] ],
                            [ "eid277", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${player_german}', [] ] ],
                            [ "eid46", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${loop}', [0] ] ],
                            [ "eid423", "trigger", 5750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${player_german}', [] ] ],
                            [ "eid424", "trigger", 5750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${player_eng}', [] ] ],
                            [ "eid261", "trigger", 7000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${player_german}', [0] ] ],
                            [ "eid388", "trigger", 9000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${player_eng}', [0] ] ]
                    ]
                }
            },
            "point1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                            id: 'poinz1',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/poinz.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${poinz1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid38",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${poinz1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            125,
                            125,
                            "linear",
                            "${poinz1}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "loop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'start_loop',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(101,101,101,1.00)']
                        },
                        {
                            type: 'image',
                            rect: ['65px', '76px', '1150px', '647px', 'auto', 'auto'],
                            id: '_1de',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/1de.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['64px', '76px', '1151px', '647px', 'auto', 'auto'],
                            id: '_1en',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/1en.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['65px', '74px', '1151px', '647px', 'auto', 'auto'],
                            id: '_2de',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/2de.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['65px', '74px', '1151px', '647px', 'auto', 'auto'],
                            id: '_2en',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/2en.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['65px', '74px', '1151px', '647px', 'auto', 'auto'],
                            id: '_3de',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/3de.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['65px', '74px', '1151px', '647px', 'auto', 'auto'],
                            id: '_3en',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/3en.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['65px', '74px', '1151px', '647px', 'auto', 'auto'],
                            id: '_4de',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/4de.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['65px', '74px', '1151px', '647px', 'auto', 'auto'],
                            id: '_4en',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/4en.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['65px', '74px', '1151px', '647px', 'auto', 'auto'],
                            id: '_5de',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/5de.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['65px', '74px', '1151px', '647px', 'auto', 'auto'],
                            id: '_5en',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/5en.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['65px', '74px', '1151px', '647px', 'auto', 'auto'],
                            id: '_6de',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/6de.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['65px', '74px', '1151px', '647px', 'auto', 'auto'],
                            id: '_6en',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/6en.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['65px', '74px', '1151px', '647px', 'auto', 'auto'],
                            id: '_7de',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/7de.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['65px', '74px', '1151px', '647px', 'auto', 'auto'],
                            id: '_7en',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/7en.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['65px', '74px', '1151px', '647px', 'auto', 'auto'],
                            id: '_8de',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/8de.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['65px', '74px', '1151px', '647px', 'auto', 'auto'],
                            id: '_8en',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/8en.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '800px']
                        }
                    }
                },
                timeline: {
                    duration: 79047,
                    autoPlay: true,
                    labels: {
                        "1": 1000,
                        "loop1": 2000,
                        "2": 10000,
                        "loop2": 11000,
                        "3": 20000,
                        "loop3": 21000,
                        "4": 30000,
                        "loop4": 31000,
                        "5": 40000,
                        "loop5": 41000,
                        "6": 50000,
                        "loop6": 51000,
                        "7": 60000,
                        "loop7": 61000,
                        "8": 70000,
                        "loop8": 71000
                    },
                    data: [
                        [
                            "eid477",
                            "opacity",
                            20000,
                            1000,
                            "linear",
                            "${_3de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid481",
                            "opacity",
                            24000,
                            1000,
                            "linear",
                            "${_3de}",
                            '1',
                            '0'
                        ],
                        [
                            "eid485",
                            "opacity",
                            28000,
                            1000,
                            "linear",
                            "${_3de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid440",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1de}",
                            'none',
                            'none'
                        ],
                        [
                            "eid441",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${_1de}",
                            'none',
                            'block'
                        ],
                        [
                            "eid454",
                            "display",
                            9073,
                            0,
                            "linear",
                            "${_1de}",
                            'block',
                            'none'
                        ],
                        [
                            "eid434",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_4de}",
                            'none',
                            'none'
                        ],
                        [
                            "eid488",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${_4de}",
                            'none',
                            'block'
                        ],
                        [
                            "eid501",
                            "display",
                            39047,
                            0,
                            "linear",
                            "${_4de}",
                            'block',
                            'none'
                        ],
                        [
                            "eid537",
                            "opacity",
                            60000,
                            0,
                            "linear",
                            "${_7en}",
                            '0',
                            '0'
                        ],
                        [
                            "eid539",
                            "opacity",
                            61000,
                            0,
                            "linear",
                            "${_7en}",
                            '0',
                            '0'
                        ],
                        [
                            "eid542",
                            "opacity",
                            64000,
                            1000,
                            "linear",
                            "${_7en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid547",
                            "opacity",
                            68000,
                            1000,
                            "linear",
                            "${_7en}",
                            '1',
                            '0'
                        ],
                        [
                            "eid428",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_7de}",
                            'none',
                            'none'
                        ],
                        [
                            "eid534",
                            "display",
                            60000,
                            0,
                            "linear",
                            "${_7de}",
                            'none',
                            'block'
                        ],
                        [
                            "eid549",
                            "display",
                            69065,
                            0,
                            "linear",
                            "${_7de}",
                            'block',
                            'none'
                        ],
                        [
                            "eid427",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_7en}",
                            'none',
                            'none'
                        ],
                        [
                            "eid535",
                            "display",
                            60000,
                            0,
                            "linear",
                            "${_7en}",
                            'none',
                            'block'
                        ],
                        [
                            "eid548",
                            "display",
                            69065,
                            0,
                            "linear",
                            "${_7en}",
                            'block',
                            'none'
                        ],
                        [
                            "eid505",
                            "opacity",
                            40000,
                            0,
                            "linear",
                            "${_5de}",
                            '0',
                            '0'
                        ],
                        [
                            "eid508",
                            "opacity",
                            41000,
                            0,
                            "linear",
                            "${_5de}",
                            '0',
                            '0'
                        ],
                        [
                            "eid512",
                            "opacity",
                            44000,
                            1000,
                            "linear",
                            "${_5de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid516",
                            "opacity",
                            48000,
                            1000,
                            "linear",
                            "${_5de}",
                            '1',
                            '0'
                        ],
                        [
                            "eid438",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2de}",
                            'none',
                            'none'
                        ],
                        [
                            "eid456",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${_2de}",
                            'none',
                            'block'
                        ],
                        [
                            "eid472",
                            "display",
                            19057,
                            0,
                            "linear",
                            "${_2de}",
                            'block',
                            'none'
                        ],
                        [
                            "eid435",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_3en}",
                            'none',
                            'none'
                        ],
                        [
                            "eid474",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${_3en}",
                            'none',
                            'block'
                        ],
                        [
                            "eid487",
                            "display",
                            29080,
                            0,
                            "linear",
                            "${_3en}",
                            'block',
                            'none'
                        ],
                        [
                            "eid554",
                            "opacity",
                            70000,
                            0,
                            "linear",
                            "${_8en}",
                            '0',
                            '0'
                        ],
                        [
                            "eid559",
                            "opacity",
                            74000,
                            1000,
                            "linear",
                            "${_8en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid562",
                            "opacity",
                            78000,
                            1000,
                            "linear",
                            "${_8en}",
                            '1',
                            '0'
                        ],
                        [
                            "eid429",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_6en}",
                            'none',
                            'none'
                        ],
                        [
                            "eid520",
                            "display",
                            50000,
                            0,
                            "linear",
                            "${_6en}",
                            'none',
                            'block'
                        ],
                        [
                            "eid533",
                            "display",
                            59066,
                            0,
                            "linear",
                            "${_6en}",
                            'block',
                            'none'
                        ],
                        [
                            "eid432",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_5de}",
                            'none',
                            'none'
                        ],
                        [
                            "eid503",
                            "display",
                            40000,
                            0,
                            "linear",
                            "${_5de}",
                            'none',
                            'block'
                        ],
                        [
                            "eid518",
                            "display",
                            49089,
                            0,
                            "linear",
                            "${_5de}",
                            'block',
                            'none'
                        ],
                        [
                            "eid430",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_6de}",
                            'none',
                            'none'
                        ],
                        [
                            "eid519",
                            "display",
                            50000,
                            0,
                            "linear",
                            "${_6de}",
                            'none',
                            'block'
                        ],
                        [
                            "eid532",
                            "display",
                            59066,
                            0,
                            "linear",
                            "${_6de}",
                            'block',
                            'none'
                        ],
                        [
                            "eid492",
                            "opacity",
                            30000,
                            1000,
                            "linear",
                            "${_4de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid495",
                            "opacity",
                            34000,
                            1000,
                            "linear",
                            "${_4de}",
                            '1',
                            '0'
                        ],
                        [
                            "eid500",
                            "opacity",
                            38000,
                            1000,
                            "linear",
                            "${_4de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid433",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_4en}",
                            'none',
                            'none'
                        ],
                        [
                            "eid489",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${_4en}",
                            'none',
                            'block'
                        ],
                        [
                            "eid502",
                            "display",
                            39047,
                            0,
                            "linear",
                            "${_4en}",
                            'block',
                            'none'
                        ],
                        [
                            "eid437",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2en}",
                            'none',
                            'none'
                        ],
                        [
                            "eid457",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${_2en}",
                            'none',
                            'block'
                        ],
                        [
                            "eid471",
                            "display",
                            19057,
                            0,
                            "linear",
                            "${_2en}",
                            'block',
                            'none'
                        ],
                        [
                            "eid476",
                            "opacity",
                            20000,
                            0,
                            "linear",
                            "${_3en}",
                            '0',
                            '0'
                        ],
                        [
                            "eid480",
                            "opacity",
                            24000,
                            1000,
                            "linear",
                            "${_3en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid484",
                            "opacity",
                            28000,
                            1000,
                            "linear",
                            "${_3en}",
                            '1',
                            '0'
                        ],
                        [
                            "eid459",
                            "opacity",
                            10000,
                            0,
                            "linear",
                            "${_2en}",
                            '0',
                            '0'
                        ],
                        [
                            "eid463",
                            "opacity",
                            14000,
                            1000,
                            "linear",
                            "${_2en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid470",
                            "opacity",
                            18000,
                            1000,
                            "linear",
                            "${_2en}",
                            '1',
                            '0'
                        ],
                        [
                            "eid426",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_8de}",
                            'none',
                            'none'
                        ],
                        [
                            "eid550",
                            "display",
                            70000,
                            0,
                            "linear",
                            "${_8de}",
                            'none',
                            'block'
                        ],
                        [
                            "eid565",
                            "display",
                            79047,
                            0,
                            "linear",
                            "${_8de}",
                            'block',
                            'none'
                        ],
                        [
                            "eid443",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${_1de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid449",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${_1de}",
                            '1',
                            '0'
                        ],
                        [
                            "eid453",
                            "opacity",
                            8000,
                            1000,
                            "linear",
                            "${_1de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid522",
                            "opacity",
                            50000,
                            0,
                            "linear",
                            "${_6en}",
                            '0',
                            '0'
                        ],
                        [
                            "eid527",
                            "opacity",
                            54000,
                            1000,
                            "linear",
                            "${_6en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid530",
                            "opacity",
                            58000,
                            1000,
                            "linear",
                            "${_6en}",
                            '1',
                            '0'
                        ],
                        [
                            "eid507",
                            "opacity",
                            40000,
                            1000,
                            "linear",
                            "${_5en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid511",
                            "opacity",
                            44000,
                            1000,
                            "linear",
                            "${_5en}",
                            '1',
                            '0'
                        ],
                        [
                            "eid515",
                            "opacity",
                            48000,
                            1000,
                            "linear",
                            "${_5en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid538",
                            "opacity",
                            60000,
                            1000,
                            "linear",
                            "${_7de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid543",
                            "opacity",
                            64000,
                            1000,
                            "linear",
                            "${_7de}",
                            '1',
                            '0'
                        ],
                        [
                            "eid546",
                            "opacity",
                            68000,
                            1000,
                            "linear",
                            "${_7de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid555",
                            "opacity",
                            70000,
                            1000,
                            "linear",
                            "${_8de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid558",
                            "opacity",
                            74000,
                            1000,
                            "linear",
                            "${_8de}",
                            '1',
                            '0'
                        ],
                        [
                            "eid563",
                            "opacity",
                            78000,
                            1000,
                            "linear",
                            "${_8de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid425",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_8en}",
                            'none',
                            'none'
                        ],
                        [
                            "eid551",
                            "display",
                            70000,
                            0,
                            "linear",
                            "${_8en}",
                            'none',
                            'block'
                        ],
                        [
                            "eid564",
                            "display",
                            79047,
                            0,
                            "linear",
                            "${_8en}",
                            'block',
                            'none'
                        ],
                        [
                            "eid523",
                            "opacity",
                            50000,
                            1000,
                            "linear",
                            "${_6de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid526",
                            "opacity",
                            54000,
                            1000,
                            "linear",
                            "${_6de}",
                            '1',
                            '0'
                        ],
                        [
                            "eid531",
                            "opacity",
                            58000,
                            1000,
                            "linear",
                            "${_6de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid491",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${_4en}",
                            '0',
                            '0'
                        ],
                        [
                            "eid496",
                            "opacity",
                            34000,
                            1000,
                            "linear",
                            "${_4en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid499",
                            "opacity",
                            38000,
                            1000,
                            "linear",
                            "${_4en}",
                            '1',
                            '0'
                        ],
                        [
                            "eid460",
                            "opacity",
                            10000,
                            1000,
                            "linear",
                            "${_2de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid464",
                            "opacity",
                            14000,
                            1000,
                            "linear",
                            "${_2de}",
                            '1',
                            '0'
                        ],
                        [
                            "eid469",
                            "opacity",
                            18000,
                            1000,
                            "linear",
                            "${_2de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid439",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1en}",
                            'none',
                            'none'
                        ],
                        [
                            "eid445",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${_1en}",
                            'none',
                            'block'
                        ],
                        [
                            "eid455",
                            "display",
                            9073,
                            0,
                            "linear",
                            "${_1en}",
                            'block',
                            'none'
                        ],
                        [
                            "eid436",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_3de}",
                            'none',
                            'none'
                        ],
                        [
                            "eid473",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${_3de}",
                            'none',
                            'block'
                        ],
                        [
                            "eid486",
                            "display",
                            29080,
                            0,
                            "linear",
                            "${_3de}",
                            'block',
                            'none'
                        ],
                        [
                            "eid446",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_1en}",
                            '0',
                            '0'
                        ],
                        [
                            "eid448",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${_1en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid452",
                            "opacity",
                            8000,
                            1000,
                            "linear",
                            "${_1en}",
                            '1',
                            '0'
                        ],
                        [
                            "eid431",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_5en}",
                            'none',
                            'none'
                        ],
                        [
                            "eid504",
                            "display",
                            40000,
                            0,
                            "linear",
                            "${_5en}",
                            'none',
                            'block'
                        ],
                        [
                            "eid517",
                            "display",
                            49089,
                            0,
                            "linear",
                            "${_5en}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "player_german": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'vid_german',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,0,0,0.00)']
                        },
                        {
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            id: 'Rectangle6',
                            opacity: '0.5',
                            display: 'block',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/1de2.mp4'],
                            id: '_1de',
                            opacity: '0',
                            preload: 'auto',
                            rect: ['140px', '118px', '1000px', '563px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/2de.mp4'],
                            id: '_2de',
                            opacity: '0',
                            preload: 'auto',
                            rect: ['140px', '119px', '1000px', '563px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/3de.mp4'],
                            id: '_3de',
                            opacity: '0',
                            preload: 'auto',
                            rect: ['140px', '119px', '1000px', '563px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/4de.mp4'],
                            id: '_4de',
                            opacity: '0',
                            preload: 'auto',
                            rect: ['140px', '119px', '1000px', '563px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/5de.mp4'],
                            id: '_5de',
                            opacity: '0',
                            preload: 'auto',
                            rect: ['140px', '118px', '1000px', '563px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/6de.mp4'],
                            id: '_6de',
                            opacity: '0',
                            preload: 'auto',
                            rect: ['140px', '118px', '1000px', '563px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/7de.mp4'],
                            id: '_7de',
                            opacity: '0',
                            preload: 'auto',
                            rect: ['140px', '119px', '1000px', '563px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/8de.mp4'],
                            id: '_8de',
                            opacity: '0',
                            preload: 'auto',
                            rect: ['140px', '118px', '1000px', '563px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            rect: ['1142px', '18px', '100px', '100px', 'auto', 'auto'],
                            id: 'close-icon',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/close-icon.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280px', '800px']
                        }
                    }
                },
                timeline: {
                    duration: 24000,
                    autoPlay: true,
                    labels: {
                        "1": 1000,
                        "2": 4000,
                        "3": 7000,
                        "4": 10000,
                        "5": 13000,
                        "6": 16000,
                        "7": 19000,
                        "8": 22000
                    },
                    data: [
                        [
                            "eid176",
                            "opacity",
                            7000,
                            1000,
                            "linear",
                            "${_3de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid177",
                            "opacity",
                            8000,
                            1000,
                            "linear",
                            "${_3de}",
                            '1',
                            '0'
                        ],
                        [
                            "eid231",
                            "display",
                            0,
                            0,
                            "linear",
                            "${vid_german}",
                            'block',
                            'block'
                        ],
                        [
                            "eid140",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_4de}",
                            'none',
                            'none'
                        ],
                        [
                            "eid183",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${_4de}",
                            'none',
                            'block'
                        ],
                        [
                            "eid190",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${_4de}",
                            'block',
                            'none'
                        ],
                        [
                            "eid234",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${close-icon}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${close-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid237",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${close-icon}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid238",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${close-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid240",
                            "opacity",
                            7000,
                            1000,
                            "linear",
                            "${close-icon}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid241",
                            "opacity",
                            8000,
                            1000,
                            "linear",
                            "${close-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid243",
                            "opacity",
                            10000,
                            1000,
                            "linear",
                            "${close-icon}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid244",
                            "opacity",
                            11000,
                            1000,
                            "linear",
                            "${close-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid246",
                            "opacity",
                            13000,
                            1000,
                            "linear",
                            "${close-icon}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid247",
                            "opacity",
                            14000,
                            1000,
                            "linear",
                            "${close-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid249",
                            "opacity",
                            16000,
                            1000,
                            "linear",
                            "${close-icon}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid250",
                            "opacity",
                            17000,
                            1000,
                            "linear",
                            "${close-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid252",
                            "opacity",
                            19000,
                            1000,
                            "linear",
                            "${close-icon}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid253",
                            "opacity",
                            20000,
                            1000,
                            "linear",
                            "${close-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid255",
                            "opacity",
                            22000,
                            1000,
                            "linear",
                            "${close-icon}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid256",
                            "opacity",
                            23000,
                            1000,
                            "linear",
                            "${close-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid196",
                            "opacity",
                            13000,
                            1000,
                            "linear",
                            "${_5de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid199",
                            "opacity",
                            14000,
                            1000,
                            "linear",
                            "${_5de}",
                            '1',
                            '0'
                        ],
                        [
                            "eid137",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_7de}",
                            'none',
                            'none'
                        ],
                        [
                            "eid210",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${_7de}",
                            'none',
                            'block'
                        ],
                        [
                            "eid218",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${_7de}",
                            'block',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_5de}",
                            'none',
                            'none'
                        ],
                        [
                            "eid192",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${_5de}",
                            'none',
                            'block'
                        ],
                        [
                            "eid198",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${_5de}",
                            'block',
                            'none'
                        ],
                        [
                            "eid185",
                            "opacity",
                            10000,
                            1000,
                            "linear",
                            "${_4de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid189",
                            "opacity",
                            11000,
                            1000,
                            "linear",
                            "${_4de}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${Rectangle6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_8de}",
                            'none',
                            'none'
                        ],
                        [
                            "eid220",
                            "display",
                            22000,
                            0,
                            "linear",
                            "${_8de}",
                            'none',
                            'block'
                        ],
                        [
                            "eid230",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${_8de}",
                            'block',
                            'none'
                        ],
                        [
                            "eid146",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${_1de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid147",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${_1de}",
                            '1',
                            '0'
                        ],
                        [
                            "eid212",
                            "opacity",
                            19000,
                            1000,
                            "linear",
                            "${_7de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid217",
                            "opacity",
                            20000,
                            1000,
                            "linear",
                            "${_7de}",
                            '1',
                            '0'
                        ],
                        [
                            "eid225",
                            "opacity",
                            22000,
                            1000,
                            "linear",
                            "${_8de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid229",
                            "opacity",
                            23000,
                            1000,
                            "linear",
                            "${_8de}",
                            '1',
                            '0'
                        ],
                        [
                            "eid232",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${vid_german}",
                            'rgba(255,0,0,0.00)',
                            'rgba(255,0,0,0.00)'
                        ],
                        [
                            "eid207",
                            "opacity",
                            16000,
                            1000,
                            "linear",
                            "${_6de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid208",
                            "opacity",
                            17000,
                            1000,
                            "linear",
                            "${_6de}",
                            '1',
                            '0'
                        ],
                        [
                            "eid142",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2de}",
                            'none',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${_2de}",
                            'none',
                            'block'
                        ],
                        [
                            "eid169",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${_2de}",
                            'block',
                            'none'
                        ],
                        [
                            "eid164",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Rectangle6}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid149",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${Rectangle6}",
                            '0.501112',
                            '0'
                        ],
                        [
                            "eid165",
                            "opacity",
                            3000,
                            1000,
                            "linear",
                            "${Rectangle6}",
                            '0.000000',
                            '0.5'
                        ],
                        [
                            "eid167",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${Rectangle6}",
                            '0.500000',
                            '0'
                        ],
                        [
                            "eid172",
                            "opacity",
                            6000,
                            1000,
                            "linear",
                            "${Rectangle6}",
                            '0.000000',
                            '0.5'
                        ],
                        [
                            "eid179",
                            "opacity",
                            8000,
                            1000,
                            "linear",
                            "${Rectangle6}",
                            '0.500000',
                            '0'
                        ],
                        [
                            "eid181",
                            "opacity",
                            9000,
                            1000,
                            "linear",
                            "${Rectangle6}",
                            '0.000000',
                            '0.5'
                        ],
                        [
                            "eid188",
                            "opacity",
                            11000,
                            1000,
                            "linear",
                            "${Rectangle6}",
                            '0.500000',
                            '0'
                        ],
                        [
                            "eid191",
                            "opacity",
                            12000,
                            1000,
                            "linear",
                            "${Rectangle6}",
                            '0.000000',
                            '0.5'
                        ],
                        [
                            "eid200",
                            "opacity",
                            14000,
                            1000,
                            "linear",
                            "${Rectangle6}",
                            '0.500000',
                            '0'
                        ],
                        [
                            "eid203",
                            "opacity",
                            15000,
                            1000,
                            "linear",
                            "${Rectangle6}",
                            '0.000000',
                            '0.5'
                        ],
                        [
                            "eid209",
                            "opacity",
                            17000,
                            1000,
                            "linear",
                            "${Rectangle6}",
                            '0.500000',
                            '0'
                        ],
                        [
                            "eid215",
                            "opacity",
                            18000,
                            1000,
                            "linear",
                            "${Rectangle6}",
                            '0.000000',
                            '0.5'
                        ],
                        [
                            "eid219",
                            "opacity",
                            20000,
                            1000,
                            "linear",
                            "${Rectangle6}",
                            '0.500000',
                            '0'
                        ],
                        [
                            "eid221",
                            "opacity",
                            21000,
                            1000,
                            "linear",
                            "${Rectangle6}",
                            '0.000000',
                            '0.5'
                        ],
                        [
                            "eid227",
                            "opacity",
                            23000,
                            1000,
                            "linear",
                            "${Rectangle6}",
                            '0.500000',
                            '0'
                        ],
                        [
                            "eid138",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_6de}",
                            'none',
                            'none'
                        ],
                        [
                            "eid201",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${_6de}",
                            'none',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_3de}",
                            'none',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${_3de}",
                            'none',
                            'block'
                        ],
                        [
                            "eid182",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${_3de}",
                            'block',
                            'none'
                        ],
                        [
                            "eid152",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${_2de}",
                            '0',
                            '1'
                        ],
                        [
                            "eid168",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${_2de}",
                            '1',
                            '0'
                        ],
                        [
                            "eid143",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1de}",
                            'none',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${_1de}",
                            'none',
                            'block'
                        ],
                            [ "eid153", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_6de}', [] ] ],
                            [ "eid158", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_8de}', [] ] ],
                            [ "eid160", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_7de}', [] ] ],
                            [ "eid159", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_5de}', [] ] ],
                            [ "eid157", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_4de}', [] ] ],
                            [ "eid154", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_3de}', [] ] ],
                            [ "eid156", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_1de}', [] ] ],
                            [ "eid155", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_2de}', [] ] ],
                            [ "eid257", "trigger", 1000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_1de}', [0] ] ],
                            [ "eid258", "trigger", 4000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_2de}', [0] ] ],
                            [ "eid260", "trigger", 6000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_2de}', [] ] ],
                            [ "eid259", "trigger", 7000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_3de}', [0] ] ],
                            [ "eid180", "trigger", 9000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_3de}', [] ] ],
                            [ "eid186", "trigger", 10000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_4de}', [0] ] ],
                            [ "eid194", "trigger", 12000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_4de}', [] ] ],
                            [ "eid195", "trigger", 13000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_5de}', [0] ] ],
                            [ "eid204", "trigger", 15000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_5de}', [] ] ],
                            [ "eid205", "trigger", 16000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_6de}', [0] ] ],
                            [ "eid213", "trigger", 18000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_6de}', [] ] ],
                            [ "eid214", "trigger", 19000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_7de}', [0] ] ],
                            [ "eid223", "trigger", 21000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_7de}', [] ] ],
                            [ "eid224", "trigger", 22000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_8de}', [0] ] ]
                    ]
                }
            },
            "point2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                            id: 'poinz2',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/poinz.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid82",
                            "opacity",
                            0,
                            123,
                            "linear",
                            "${poinz2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            123,
                            127,
                            "linear",
                            "${poinz2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid85",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${poinz2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2",
                            "display",
                            0,
                            0,
                            "linear",
                            "${poinz2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid86",
                            "display",
                            250,
                            0,
                            "linear",
                            "${poinz2}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "point3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                            id: 'poinz3',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/poinz.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid3",
                            "display",
                            0,
                            0,
                            "linear",
                            "${poinz3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid96",
                            "display",
                            250,
                            0,
                            "linear",
                            "${poinz3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "opacity",
                            0,
                            123,
                            "linear",
                            "${poinz3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "opacity",
                            123,
                            127,
                            "linear",
                            "${poinz3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid95",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${poinz3}",
                            '0',
                            '0'
                        ]
                    ]
                }
            },
            "point4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                            id: 'poinz4',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/poinz.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid4",
                            "display",
                            0,
                            0,
                            "linear",
                            "${poinz4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            250,
                            0,
                            "linear",
                            "${poinz4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid97",
                            "opacity",
                            0,
                            126,
                            "linear",
                            "${poinz4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            126,
                            124,
                            "linear",
                            "${poinz4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid101",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${poinz4}",
                            '0',
                            '0'
                        ]
                    ]
                }
            },
            "point5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                            id: 'poinz5',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/poinz.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid104",
                            "opacity",
                            0,
                            129,
                            "linear",
                            "${poinz5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid106",
                            "opacity",
                            129,
                            121,
                            "linear",
                            "${poinz5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid107",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${poinz5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid5",
                            "display",
                            0,
                            0,
                            "linear",
                            "${poinz5}",
                            'block',
                            'block'
                        ],
                        [
                            "eid108",
                            "display",
                            250,
                            0,
                            "linear",
                            "${poinz5}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "point6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                            id: 'poinz6',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/poinz.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid6",
                            "display",
                            0,
                            0,
                            "linear",
                            "${poinz6}",
                            'block',
                            'block'
                        ],
                        [
                            "eid113",
                            "display",
                            250,
                            0,
                            "linear",
                            "${poinz6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid109",
                            "opacity",
                            0,
                            123,
                            "linear",
                            "${poinz6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid111",
                            "opacity",
                            123,
                            127,
                            "linear",
                            "${poinz6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid112",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${poinz6}",
                            '0',
                            '0'
                        ]
                    ]
                }
            },
            "point7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                            id: 'poinz7',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/poinz.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid114",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${poinz7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid116",
                            "opacity",
                            125,
                            125,
                            "linear",
                            "${poinz7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid117",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${poinz7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid7",
                            "display",
                            0,
                            0,
                            "linear",
                            "${poinz7}",
                            'block',
                            'block'
                        ],
                        [
                            "eid118",
                            "display",
                            250,
                            0,
                            "linear",
                            "${poinz7}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "point8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                            id: 'poinz8',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/poinz.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid119",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${poinz8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            124,
                            126,
                            "linear",
                            "${poinz8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid122",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${poinz8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8",
                            "display",
                            0,
                            0,
                            "linear",
                            "${poinz8}",
                            'block',
                            'block'
                        ],
                        [
                            "eid123",
                            "display",
                            250,
                            0,
                            "linear",
                            "${poinz8}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "point9": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                            id: 'poinz9',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/poinz.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid10",
                            "display",
                            0,
                            0,
                            "linear",
                            "${poinz9}",
                            'block',
                            'block'
                        ],
                        [
                            "eid128",
                            "display",
                            250,
                            0,
                            "linear",
                            "${poinz9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid124",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${poinz9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "opacity",
                            125,
                            125,
                            "linear",
                            "${poinz9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid127",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${poinz9}",
                            '0',
                            '0'
                        ]
                    ]
                }
            },
            "point0": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                            id: 'poinz0',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/poinz.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid129",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${poinz0}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            125,
                            125,
                            "linear",
                            "${poinz0}",
                            '1',
                            '0'
                        ],
                        [
                            "eid132",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${poinz0}",
                            '0',
                            '0'
                        ],
                        [
                            "eid9",
                            "display",
                            0,
                            0,
                            "linear",
                            "${poinz0}",
                            'block',
                            'block'
                        ],
                        [
                            "eid133",
                            "display",
                            250,
                            0,
                            "linear",
                            "${poinz0}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "player_eng": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'player_energ',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,0,0,0.00)']
                        },
                        {
                            rect: ['1px', '0px', '1280px', '800px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            id: 'Rectangle',
                            opacity: '0.50257240853659',
                            display: 'block',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/1en.mp4'],
                            id: '_1en',
                            opacity: '0',
                            preload: 'auto',
                            rect: ['140px', '118px', '1000px', '563px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/2en.mp4'],
                            id: '_2en',
                            opacity: '0',
                            preload: 'auto',
                            rect: ['141px', '118px', '1000px', '563px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/3en.mp4'],
                            id: '_3en',
                            opacity: '0',
                            preload: 'auto',
                            rect: ['140px', '118px', '1000px', '563px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/4en.mp4'],
                            id: '_4en',
                            opacity: '0',
                            preload: 'auto',
                            rect: ['141px', '118px', '1000px', '563px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/5en.mp4'],
                            id: '_5en',
                            opacity: '0',
                            preload: 'auto',
                            rect: ['141px', '118px', '1000px', '563px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/6en.mp4'],
                            id: '_6en',
                            opacity: '0',
                            preload: 'auto',
                            rect: ['141px', '118px', '1000px', '563px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/7en.mp4'],
                            id: '_7en',
                            opacity: '0',
                            preload: 'auto',
                            rect: ['141px', '118px', '1000px', '563px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/8en.mp4'],
                            id: '_8en',
                            opacity: '0',
                            preload: 'auto',
                            rect: ['141px', '118px', '1000px', '563px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            rect: ['1142px', '18px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'close-icon_e22',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/close-icon_e2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280px', '800px']
                        }
                    }
                },
                timeline: {
                    duration: 24000,
                    autoPlay: true,
                    labels: {
                        "1": 1000,
                        "2": 4000,
                        "3": 7000,
                        "4": 10000,
                        "5": 13000,
                        "6": 16000,
                        "7": 19000,
                        "8": 22000
                    },
                    data: [
                        [
                            "eid333",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${_1en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid334",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${_1en}",
                            '1',
                            '0'
                        ],
                        [
                            "eid287",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'block'
                        ],
                        [
                            "eid286",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid288",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid292",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid293",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid298",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid299",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid303",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid304",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid308",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid309",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid313",
                            "display",
                            18000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid314",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid318",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid319",
                            "display",
                            22000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid363",
                            "opacity",
                            19000,
                            1000,
                            "linear",
                            "${_7en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid364",
                            "opacity",
                            20000,
                            1000,
                            "linear",
                            "${_7en}",
                            '1',
                            '0'
                        ],
                        [
                            "eid324",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_7en}",
                            'none',
                            'none'
                        ],
                        [
                            "eid361",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${_7en}",
                            'none',
                            'block'
                        ],
                        [
                            "eid365",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${_7en}",
                            'block',
                            'none'
                        ],
                        [
                            "eid368",
                            "opacity",
                            22000,
                            1000,
                            "linear",
                            "${_8en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid369",
                            "opacity",
                            23000,
                            1000,
                            "linear",
                            "${_8en}",
                            '1',
                            '0'
                        ],
                        [
                            "eid325",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_6en}",
                            'none',
                            'none'
                        ],
                        [
                            "eid356",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${_6en}",
                            'none',
                            'block'
                        ],
                        [
                            "eid360",
                            "display",
                            18000,
                            0,
                            "linear",
                            "${_6en}",
                            'block',
                            'none'
                        ],
                        [
                            "eid280",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '0.50025406504065'
                        ],
                        [
                            "eid282",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.500254',
                            '0.49742759146341'
                        ],
                        [
                            "eid284",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0.49742759146341',
                            '0.50098450203252'
                        ],
                        [
                            "eid285",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0.500985',
                            '0'
                        ],
                        [
                            "eid289",
                            "opacity",
                            3000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.50006351626016'
                        ],
                        [
                            "eid291",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0.5000640153884888',
                            '0'
                        ],
                        [
                            "eid294",
                            "opacity",
                            6000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.49691946138211'
                        ],
                        [
                            "eid295",
                            "opacity",
                            7000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0.49691900610923767',
                            '0.50257240853659'
                        ],
                        [
                            "eid297",
                            "opacity",
                            8000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0.5025720000267029',
                            '0'
                        ],
                        [
                            "eid300",
                            "opacity",
                            9000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid302",
                            "opacity",
                            11000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid305",
                            "opacity",
                            12000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid307",
                            "opacity",
                            14000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid310",
                            "opacity",
                            15000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid312",
                            "opacity",
                            17000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid315",
                            "opacity",
                            18000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid317",
                            "opacity",
                            20000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid320",
                            "opacity",
                            21000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid322",
                            "opacity",
                            23000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid338",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${_2en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid339",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${_2en}",
                            '1',
                            '0'
                        ],
                        [
                            "eid395",
                            "display",
                            0,
                            0,
                            "linear",
                            "${close-icon_e22}",
                            'block',
                            'block'
                        ],
                        [
                            "eid323",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_8en}",
                            'none',
                            'none'
                        ],
                        [
                            "eid366",
                            "display",
                            22000,
                            0,
                            "linear",
                            "${_8en}",
                            'none',
                            'block'
                        ],
                        [
                            "eid370",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${_8en}",
                            'block',
                            'none'
                        ],
                        [
                            "eid353",
                            "opacity",
                            13000,
                            1000,
                            "linear",
                            "${_5en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid354",
                            "opacity",
                            14000,
                            1000,
                            "linear",
                            "${_5en}",
                            '1',
                            '0'
                        ],
                        [
                            "eid343",
                            "opacity",
                            7000,
                            1000,
                            "linear",
                            "${_3en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid344",
                            "opacity",
                            8000,
                            1000,
                            "linear",
                            "${_3en}",
                            '1',
                            '0'
                        ],
                        [
                            "eid330",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_4en}",
                            'none',
                            'none'
                        ],
                        [
                            "eid346",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${_4en}",
                            'none',
                            'block'
                        ],
                        [
                            "eid350",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${_4en}",
                            'block',
                            'none'
                        ],
                        [
                            "eid327",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2en}",
                            'none',
                            'none'
                        ],
                        [
                            "eid566",
                            "display",
                            3940,
                            0,
                            "linear",
                            "${_2en}",
                            'none',
                            'block'
                        ],
                        [
                            "eid340",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${_2en}",
                            'block',
                            'none'
                        ],
                        [
                            "eid329",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_3en}",
                            'none',
                            'none'
                        ],
                        [
                            "eid341",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${_3en}",
                            'none',
                            'block'
                        ],
                        [
                            "eid345",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${_3en}",
                            'block',
                            'none'
                        ],
                        [
                            "eid348",
                            "opacity",
                            10000,
                            1000,
                            "linear",
                            "${_4en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid349",
                            "opacity",
                            11000,
                            1000,
                            "linear",
                            "${_4en}",
                            '1',
                            '0'
                        ],
                        [
                            "eid397",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${close-icon_e22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid398",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${close-icon_e22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid400",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${close-icon_e22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid401",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${close-icon_e22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid403",
                            "opacity",
                            7000,
                            1000,
                            "linear",
                            "${close-icon_e22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid404",
                            "opacity",
                            8000,
                            1000,
                            "linear",
                            "${close-icon_e22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid406",
                            "opacity",
                            10000,
                            1000,
                            "linear",
                            "${close-icon_e22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid407",
                            "opacity",
                            11000,
                            1000,
                            "linear",
                            "${close-icon_e22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid409",
                            "opacity",
                            13000,
                            1000,
                            "linear",
                            "${close-icon_e22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid410",
                            "opacity",
                            14000,
                            1000,
                            "linear",
                            "${close-icon_e22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid412",
                            "opacity",
                            16000,
                            1000,
                            "linear",
                            "${close-icon_e22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid413",
                            "opacity",
                            17000,
                            1000,
                            "linear",
                            "${close-icon_e22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid415",
                            "opacity",
                            19000,
                            1000,
                            "linear",
                            "${close-icon_e22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid416",
                            "opacity",
                            20000,
                            1000,
                            "linear",
                            "${close-icon_e22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid418",
                            "opacity",
                            22000,
                            1000,
                            "linear",
                            "${close-icon_e22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid419",
                            "opacity",
                            23000,
                            1000,
                            "linear",
                            "${close-icon_e22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid328",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1en}",
                            'none',
                            'none'
                        ],
                        [
                            "eid331",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${_1en}",
                            'none',
                            'block'
                        ],
                        [
                            "eid335",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${_1en}",
                            'block',
                            'none'
                        ],
                        [
                            "eid358",
                            "opacity",
                            16000,
                            1000,
                            "linear",
                            "${_6en}",
                            '0',
                            '1'
                        ],
                        [
                            "eid359",
                            "opacity",
                            17000,
                            1000,
                            "linear",
                            "${_6en}",
                            '1',
                            '0'
                        ],
                        [
                            "eid273",
                            "display",
                            0,
                            0,
                            "linear",
                            "${player_energ}",
                            'block',
                            'block'
                        ],
                        [
                            "eid326",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_5en}",
                            'none',
                            'none'
                        ],
                        [
                            "eid351",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${_5en}",
                            'none',
                            'block'
                        ],
                        [
                            "eid355",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${_5en}",
                            'block',
                            'none'
                        ],
                            [ "eid371", "trigger", 1000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_1en}', [0] ] ],
                            [ "eid372", "trigger", 3000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_1en}', [] ] ],
                            [ "eid373", "trigger", 4000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_2en}', [0] ] ],
                            [ "eid374", "trigger", 6000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_2en}', [] ] ],
                            [ "eid375", "trigger", 7000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_3en}', [0] ] ],
                            [ "eid376", "trigger", 9000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_3en}', [] ] ],
                            [ "eid377", "trigger", 10000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_4en}', [0] ] ],
                            [ "eid378", "trigger", 12000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_4en}', [] ] ],
                            [ "eid379", "trigger", 13000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_5en}', [0] ] ],
                            [ "eid380", "trigger", 15000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_5en}', [] ] ],
                            [ "eid381", "trigger", 16000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_6en}', [0] ] ],
                            [ "eid382", "trigger", 18000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_6en}', [] ] ],
                            [ "eid383", "trigger", 19000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_7en}', [0] ] ],
                            [ "eid384", "trigger", 21000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_7en}', [] ] ],
                            [ "eid385", "trigger", 22000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_8en}', [0] ] ],
                            [ "eid386", "trigger", 24000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_8en}', [] ] ]
                    ]
                }
            },
            "timer": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '41px', '23px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '41px', '23px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-11281921");
