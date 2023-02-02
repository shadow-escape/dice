export const DIRECTIONS = {
    RIGHT: 'RIGHT',
    UP: 'UP'
}

export const LOC = {
    [DIRECTIONS.RIGHT]: 'fa-solid fa-arrow-right',
    [DIRECTIONS.UP]: 'fa-solid fa-arrow-up'
}

export const MAPPINGS = ['1-2', '1-3', '1-4', '1-5', '2-1', '2-3', '2-4', '2-6', '3-1', '3-2', '3-5', '3-6', '4-1', '4-2', '4-5', '4-6', '5-1', '5-3', '5-4', '5-6', '6-2', '6-3', '6-4', '6-5']

export const variants = [
    {// 0
        value: 1, // 1-2
        coordinates: [0, 0, 1], //0 0 1
        moves: {
            [DIRECTIONS.RIGHT]: {
                2: {position: 4, title: '↑→→', steps: [1, 0, 1, 1, 0, 0, 1, 0, -1]},
                5: {position: 19, title: '→→↑', steps: [0, 1, 1, 0, 2, 1, 1, 2, 1]},
                6: {position: 21, title: '→↑→', steps: [0, 1, 1, 0, 1, 2, 0, 2, 2]}
            },
            [DIRECTIONS.UP]: {
                3: {position: 10, title: '↑↑→', steps: [1, 0, 1, 2, 0, 1, 2, -1, 1]},
                4: {position: 14, title: '→↑↑', steps: [0, 1, 1, 0, 1, 2, 0, 1, 3]},
                6: {position: 21, title: '↑→↑', steps: [1, 0, 1, 1, 0, 0, 2, 0, 0]}
            }
        }
    },
    {//1
        value: 1, // 1-3
        coordinates: [0, 0, 2],
        moves: {
            [DIRECTIONS.RIGHT]: {
                3: {position: 8, title: '↑→→', steps: [1, 0, 2, 1, 0, 1, 1, 0, 0]},
                4: {position: 15, title: '→→↑', steps: [0, 1, 2, 0, 2, 2, 1, 2, 2]},
                6: {position: 23, title: '→↑→', steps: [0, 1, 2, 0, 1, 3, 0, 2, 3]}
            },
            [DIRECTIONS.UP]: {
                2: {position: 6, title: '→↑↑', steps: [0, 1, 2, 0, 1, 3, 0, 1, 4]},
                5: {position: 18, title: '↑↑→', steps: [1, 0, 2, 2, 0, 2, 2, -1, 2]},
                6: {position: 23, title: '↑→↑', steps: [1, 0, 2, 1, 0, 1, 2, 0, 1]}
            }
        }
    },
    {//2
        value: 1, // 1-4
        coordinates: [0, 0, 0],
        moves: {
            [DIRECTIONS.RIGHT]: {
                3: {position: 11, title: '→→↑', steps: [0, 1, 0, 0, 2, 0, 1, 2, 0]},
                4: {position: 12, title: '↑→→', steps: [1, 0, 0, 1, 0, -1, 1, 0, -2]},
                6: {position: 20, title: '→↑→', steps: [0, 1, 0, 0, 1, 1, 0, 2, 1]}
            },
            [DIRECTIONS.UP]: {
                2: {position: 5, title: '↑↑→', steps: [1, 0, 0, 2, 0, 0, 2, -1, 0]},
                5: {position: 17, title: '→↑↑', steps: [0, 1, 0, 0, 1, 1, 0, 1, 2]},
                6: {position: 20, title: '↑→↑', steps: [1, 0, 0, 1, 0, -1, 2, 0, -1]}
            }
        }
    },
    {//3
        value: 1, // 1-5
        coordinates: [0, 0, 3],
        moves: {
            [DIRECTIONS.RIGHT]: {
                2: {position: 7, title: '→→↑', steps: [0, 1, 3, 0, 2, 3, 1, 2, 3]},
                5: {position: 16, title: '↑→→', steps: [1, 0, 3, 1, 0, 2, 1, 0, 1]},
                6: {position: 22, title: '→↑→', steps: [0, 1, 3, 0, 1, 4, 0, 2, 4]}
            },
            [DIRECTIONS.UP]: {
                3: {position: 9, title: '→↑↑', steps: [0, 1, 3, 1, 1, 3, 2, 1, 3]},
                4: {position: 13, title: '↑↑→', steps: [1, 0, 3, 2, 0, 3, 2, -1, 3]},
                6: {position: 22, title: '↑→↑', steps: [1, 0, 3, 1, 0, 2, 2, 0, 2]}
            }
        }
    },
    {//4
        value: 2, // 2-1
        coordinates: [1, 0, -1],
        moves: {
            [DIRECTIONS.RIGHT]: {
                1: {position: 0, title: '↑→→', steps: [2, 0, -1, 2, -1, -1, 2, -2, -1]},
                5: {position: 18, title: '→↑→', steps: [1, 0, -2, 2, 0, -2, 2, -1, -2]},
                6: {position: 23, title: '→→↑', steps: [1, 0, -2, 1, 0, -3, 2, 0, -3]}
            },
            [DIRECTIONS.UP]: {
                3: {position: 11, title: '→↑↑', steps: [1, 0, -2, 2, 0, -2, 3, 0, -2]},
                4: {position: 15, title: '↑↑→', steps: [2, 0, -1, 3, 0, -1, 3, 0, 0]},
                5: {position: 18, title: '↑→↑', steps: [2, 0, -1, 2, -1, -1, 3, -1, -1]}
            }
        }
    },
    {//5
        value: 2, // 2-3
        coordinates: [2, -1, 0],
        moves: {
            [DIRECTIONS.RIGHT]: {
                3: {position: 9, title: '↑→→', steps: [2, -1, -1, 2, -2, -1, 2, -3, -1 ]},
                4: {position: 14, title: '→→↑', steps: [2, -2, 0, 2, -3, 0, 2, -3, 1]},
                5: {position: 16, title: '→↑→', steps: [2, -2, 0, 3, -2, 0, 3, -2, -1]}
            },
            [DIRECTIONS.UP]: {
                1: {position: 2, title: '↑↑→', steps: [3, -1, 0, 4, -1, 0, 4, 0, 0]},
                5: {position: 16, title: '↑→↑', steps: [2, -1, -1, 2, -2, -1, 3, -2, -1]},
                6: {position: 22, title: '→↑↑', steps: [2, -2, 0, 3, -2, 0, 4, -2, 0]}
            }
        }
    },
    {//6
        value: 2, // 2-4
        coordinates: [0, 1, 0],
        moves: {
            [DIRECTIONS.RIGHT]: {
                3: {position: 10, title: '→→↑', steps: [0, 2, 0, 0, 3, 0, 0, 3, -1]},
                4: {position: 13, title: '↑→→', steps: [0, 1, 1, 0, 2, 1, 0, 3, 1]},
                5: {position: 19, title: '→↑→', steps: [0, 2, 0, 1, 2, 0, 1, 2, 1]}
            },
            [DIRECTIONS.UP]: {
                1: {position: 1, title: '→↑↑', steps: [0, 2, 0, 1, 2, 0, 2, 2, 0]},
                5: {position: 19, title: '↑→↑', steps: [0, 1, 1, 0, 2, 1, 1, 2, 1]},
                6: {position: 21, title: '↑↑→', steps: [0, 1, 1, 0, 1, 2, 0, 2, 2]}
            }
        }
    },
    {//7
        value: 2, // 2-6
        coordinates: [-1, 0, 1],
        moves: {
            [DIRECTIONS.RIGHT]: {
                1: {position: 3, title: '→→↑', steps: [-1, 0, 2, -1, 0, 3, 0, 0, 3]},
                5: {position: 17, title: '→↑→', steps: [-1, 0, 2, 0, 0, 2, 0, 1, 2]},
                6: {position: 20, title: '↑→→', steps: [0, 0, 1, 0, 1, 1, 0, 2, 1]}
            },
            [DIRECTIONS.UP]: {
                3: {position: 8, title: '↑↑→', steps: [0, 0, 1, 1, 0, 1, 1, 0, 0]},
                4: {position: 12, title: '→↑↑', steps: [-1, 0, 2, 0, 0, 2, 1, 0, 2]},
                5: {position: 17, title: '↑→↑', steps: [0, 0, 1, 0, 1, 1, 1, 1, 1]}
            }
        }
    },
    {//8
        value: 3, // 3-1
        coordinates: [1, 0, 0],
        moves: {
            [DIRECTIONS.RIGHT]: {
                1: {position: 1, title: '↑→→', steps: [2, 0, 0, 2, -1, 0, 2, -2, 0]},
                4: {position: 13, title: '→↑→', steps: [1, 0, -1, 2, 0, -1, 2, -1, -1]},
                6: {position: 22, title: '→→↑', steps: [1, 0, -1, 1, 0, -2, 2, 0, -2]}
            },
            [DIRECTIONS.UP]: {
                2: {position: 7, title: '↑↑→', steps: [2, 0, 0, 3, 0, 0, 3, 0, 1]},
                4: {position: 13, title: '↑→↑', steps: [2, 0, 0, 2, -1, 0, 3, -1, 0]},
                5: {position: 19, title: '→↑↑', steps: [1, 0, -1, 2, 0, -1, 3, 0, -1]}
            }
        }
    },
    {//9
        value: 3, // 3-2
        coordinates: [0, 1, -3],
        moves: {
            [DIRECTIONS.RIGHT]: {
                2: {position: 5, title: '↑→→', steps: [0, 1, -2, 0, 2, -2, 0, 3, -2]},
                4: {position: 15, title: '→↑→', steps: [0, 2, -3, 1, 2, -3, 1, 2, -2]},
                5: {position: 18, title: '→→↑', steps: [0, 2, -3, 0, 3, -3, 1, 3, -3]}
            },
            [DIRECTIONS.UP]: {
                1: {position: 3, title: '→↑↑', steps: [0, 2, -3, 1, 2, -3, 2, 2, -3]},
                4: {position: 15, title: '↑→↑', steps: [0, 1, -2, 0, 2, -2, 1, 2, -2]},
                6: {position: 23, title: '↑↑→', steps: [0, 1, -2, 0, 1, -1, 0, 2, -1]}
            }
        }
    },
    {//10
        value: 3, // 3-5
        coordinates: [0, -1, 3],
        moves: {
            [DIRECTIONS.RIGHT]: {
                2: {position: 6, title: '→→↑', steps: [0, 0, 3, 0, 1, 3, 1, 1, 3]},
                4: {position: 12, title: '→↑→', steps: [0, 0, 3, 1, 0, 3, 1, 0, 2]},
                5: {position: 17, title: '↑→→', steps: [0, -1, 2, 0, 0, 2, 0, 1, 2]}
            },
            [DIRECTIONS.UP]: {
                1: {position: 0, title: '↑↑→', steps: [1, -1, 3, 2, -1, 3, 2, -2, 3]},
                4: {position: 12, title: '↑→↑', steps: [0, -1, 2, 0, 0, 2, 1, 0, 2]},
                6: {position: 20, title: '→↑↑', steps: [0, 0, 3, 1, 0, 3, 2, 0, 3]}
            }
        }
    },
    {//11
        value: 3, // 3-6
        coordinates: [1, 2, 0],
        moves: {
            [DIRECTIONS.RIGHT]: {
                1: {position: 2, title: '→→↑', steps: [1, 2, 1, 1, 2, 2, 2, 2, 2]},
                4: {position: 14, title: '→↑→', steps: [1, 2, 1, 2, 2, 1, 2, 1, 1]},
                6: {position: 21, title: '↑→→', steps: [2, 2, 0, 2, 1, 0, 2, 0, 0]}
            },
            [DIRECTIONS.UP]: {
                2: {position: 4, title: '→↑↑', steps: [1, 2, 1, 2, 2, 1, 3, 2, 1]},
                4: {position: 14, title: '↑→↑', steps: [2, 2, 0, 2, 1, 0, 3, 1, 0]},
                5: {position: 16, title: '↑↑→', steps: [2, 2, 0, 3, 2, 0, 3, 2, -1]}
            }
        }
    },
    {//12
        value: 4, // 4-1
        coordinates: [1, 0, 2],
        moves: {
            [DIRECTIONS.RIGHT]: {
                1: {position: 2, title: '↑→→', steps: [2, 0, 2, 2, -1, 2, 2, -2, 2]},
                3: {position: 10, title: '→↑→', steps: [1, 0, 1, 2, 0, 1, 2, -1, 1]},
                6: {position: 21, title: '→→↑', steps: [1, 0, 1, 1, 0, 0, 2, 0, 0]}
            },
            [DIRECTIONS.UP]: {
                2: {position: 7, title: '→↑↑', steps: [1, 0, 1, 2, 0, 1, 3, 0, 1]},
                3: {position: 10, title: '↑→↑', steps: [2, 0, 2, 2, -1, 2, 3, -1, 2]},
                5: {position: 19, title: '↑↑→', steps: [2, 0, 2, 3, 0, 2, 3, 0, 3]}
            }
        }
    },
    {//13
        value: 4, // 4-2
        coordinates: [0, -1, 1],
        moves: {
            [DIRECTIONS.RIGHT]: {
                2: {position: 6, title: '↑→→', steps: [0, -1, 0, 0, 0, 0, 0, 1, 0]},
                3: {position: 8, title: '→↑→', steps: [0, 0, 1, 1, 0, 1, 1, 0, 0]},
                5: {position: 17, title: '→→↑', steps: [0, 0, 1, 0, 1, 1, 1, 1, 1]}
            },
            [DIRECTIONS.UP]: {
                1: {position: 3, title: '↑↑→', steps: [1, -1, 1, 2, -1, 1, 2, -2, 1]},
                3: {position: 8, title: '↑→↑', steps: [0, -1, 0, 0, 0, 0, 1, 0, 0]},
                6: {position: 23, title: '→↑↑', steps: [0, 0, 1, 1, 0, 1, 2, 0, 1]}
            }
        }
    },
    {//14
        value: 4, // 4-5
        coordinates: [0, 1, -1],
        moves: {
            [DIRECTIONS.RIGHT]: {
                2: {position: 5, title: '→→↑', steps: [0, 2, -1, 0, 3, -1, 1, 3, -1]},
                3: {position: 11, title: '→↑→', steps: [0, 2, -1, 1, 2, -1, 1, 2, 0]},
                5: {position: 18, title: '↑→→', steps: [0, 1, 0, 0, 2, 0, 0, 3, 0]}
            },
            [DIRECTIONS.UP]: {
                1: {position: 0, title: '→↑↑', steps: [0, 2, -1, 1, 2, -1, 2, 2, -1]},
                3: {position: 11, title: '↑→↑', steps: [0, 1, 0, 0, 2, 0, 1, 2, 0]},
                6: {position: 20, title: '↑↑→', steps: [0, 1, 0, 0, 1, 1, 0, 2, 1]}
            }
        }
    },
    {//15
        value: 4, // 4-6
        coordinates: [1, 2, -2],
        moves: {
            [DIRECTIONS.RIGHT]: {
                1: {position: 1, title: '→→↑', steps: [1, 2, -1, 1, 2, 0, 2, 2, 0]},
                3: {position: 9, title: '→↑→', steps: [1, 2, -1, 2, 2, -1, 2, 1, -1]},
                6: {position: 22, title: '↑→→', steps: [2, 2, -2, 2, 1, -2, 2, 0, -2]}
            },
            [DIRECTIONS.UP]: {
                2: {position: 4, title: '↑↑→', steps: [2, 2, -2, 3, 2, -2, 3, 2, -3]},
                3: {position: 9, title: '↑→↑', steps: [2, 2, -2, 2, 1, -2, 3, 1, -2]},
                5: {position: 16, title: '→↑↑', steps: [1, 2, -1, 2, 2, -1, 3, 2, -1]}
            }
        }
    },
    {//16
        value: 5, //5-1
        coordinates: [-1, 2, -1],
        moves: {
            [DIRECTIONS.RIGHT]: {
                1: {position: 3, title: '↑→→', steps: [0, 2, -1, 0, 3, -1, 0, 4, -1]},
                2: {position: 5, title: '→↑→', steps: [-1, 2, -2, 0, 2, -2, 0, 3, -2]},
                6: {position: 20, title: '→→↑', steps: [-1, 2, -2, -1, 2, -3, 0, 2, -3]}
            },
            [DIRECTIONS.UP]: {
                2: {position: 5, title: '↑→↑', steps: [0, 2, -1, 0, 3, -1, 1, 3, -1]},
                3: {position: 11, title: '↑↑→', steps: [0, 2, -1, 1, 2, -1, 1, 2, 0]},
                4: {position: 15, title: '→↑↑', steps: [-1, 2, -2, 0, 2, -2, 1, 2, -2]}
            }
        }
    },
    {//17
        value: 5, //5-3
        coordinates: [0, 1, 2],
        moves: {
            [DIRECTIONS.RIGHT]: {
                2: {position: 7, title: '→↑→', steps: [0, 2, 2, 1, 2, 2, 1, 2, 3]},
                3: {position: 10, title: '↑→→', steps: [0, 1, 3, 0, 2, 3, 0, 3, 3]},
                4: {position: 13, title: '→→↑', steps: [0, 2, 2, 0, 3, 2, 1, 3, 2]}
            },
            [DIRECTIONS.UP]: {
                1: {position: 2, title: '→↑↑', steps: [0, 2, 2, 1, 2, 2, 2, 2, 2]},
                2: {position: 7, title: '↑→↑', steps: [0, 1, 3, 0, 2, 3, 1, 2, 3]},
                6: {position: 22, title: '↑↑→', steps: [1, 1, 2, 2, 1, 2, 2, 0, 2]}
            }
        }
    },
    {//18
        value: 5, //5-4
        coordinates: [2, -1, 2],
        moves: {
            [DIRECTIONS.RIGHT]: {
                2: {position: 4, title: '→↑→', steps: [2, -2, 2, 3, -2, 2, 3, -2, 1]},
                3: {position: 9, title: '→→↑', steps: [2, -2, 2, 2, -3, 2, 3, -3, 2]},
                4: {position: 14, title: '↑→→', steps: [2, -1, 1, 2, -2, 1, 2, -3, 1]}
            },
            [DIRECTIONS.UP]: {
                1: {position: 1, title: '↑↑→', steps: [3, -1, 2, 4, -1, 2, 4, 0, 2]},
                2: {position: 4, title: '↑→↑', steps: [2, -1, 1, 2, -2, 1, 3, -2, 1]},
                6: {position: 21, title: '→↑↑', steps: [2, -2, 2, 3, -2, 2, 4, -2, 2]}
            }
        }
    },
    {//19
        value: 5, //5-6
        coordinates: [1, 2, 1],
        moves: {
            [DIRECTIONS.RIGHT]: {
                1: {position: 0, title: '→→↑', steps: [1, 2, 2, 1, 2, 3, 2, 2, 3]},
                2: {position: 6, title: '→↑→', steps: [1, 2, 2, 2, 2, 2, 2, 1, 2]},
                6: {position: 23, title: '↑→→', steps: [2, 2, 1, 2, 1, 1, 2, 0, 1]}
            },
            [DIRECTIONS.UP]: {
                2: {position: 6, title: '↑→↑', steps: [2, 2, 1, 2, 1, 1, 3, 1, 1]},
                3: {position: 8, title: '→→↑', steps: [1, 2, 2, 2, 2, 2, 3, 2, 2]},
                4: {position: 12, title: '↑↑→', steps: [2, 2, 1, 3, 2, 1, 3, 2, 0]}
            }
        }
    },
    {//20
        value: 6, //6-2
        coordinates: [0, 2, 1],
        moves: {
            [DIRECTIONS.RIGHT]: {
                1: {position: 2, title: '→↑→', steps: [0, 3, 1, 0, 3, 0, 0, 4, 0]},
                2: {position: 7, title: '↑→→', steps: [1, 2, 1, 1, 2, 2, 1, 2, 3]},
                5: {position: 16, title: '→→↑', steps: [0, 3, 1, 0, 4, 1, 1, 4, 1]}
            },
            [DIRECTIONS.UP]: {
                1: {position: 2, title: '↑→↑', steps: [1, 2, 1, 1, 2, 2, 2, 2, 2]},
                3: {position: 10, title: '→↑↑', steps: [0, 3, 1, 1, 3, 1, 2, 3, 1]},
                4: {position: 14, title: '↑↑→', steps: [1, 2, 1, 2, 2, 1, 2, 1, 1]}
            },
        }
    },
    {//21
        value: 6, //6-3
        coordinates: [0, 2, 2],
        moves: {
            [DIRECTIONS.RIGHT]: {
                1: {position: 0, title: '→↑→', steps: [0, 3, 2, 0, 3, 1, 0, 4, 1]},
                3: {position: 11, title: '↑→→', steps: [1, 2, 2, 1, 2, 3, 1, 2, 4]},
                4: {position: 12, title: '→→↑', steps: [0, 3, 2, 0, 4, 2, 1, 4, 2]}
            },
            [DIRECTIONS.UP]: {
                1: {position: 0, title: '↑→↑', steps: [1, 2, 2, 1, 2, 3, 2, 2, 3]},
                2: {position: 6, title: '↑↑→', steps: [1, 2, 2, 2, 2, 2, 2, 1, 2]},
                5: {position: 18, title: '→↑↑', steps: [0, 3, 2, 1, 3, 2, 2, 3, 2]}
            }
        }
    },
    {//22
        value: 6, //6-4
        coordinates: [0, 2, 0],
        moves: {
            [DIRECTIONS.RIGHT]: {
                1: {position: 3, title: '→↑→', steps: [0, 3, 0, 0, 3, -1, 0, 4, -1]},
                3: {position: 8, title: '→→↑', steps: [0, 3, 0, 0, 4, 0, 1, 4, 0]},
                4: {position: 15, title: '↑→→', steps: [1, 2, 0, 1, 2, 1, 1, 2, 2]}
            },
            [DIRECTIONS.UP]: {
                1: {position: 3, title: '↑→↑', steps: [1, 2, 0, 1, 2, 1, 2, 2, 1]},
                2: {position: 5, title: '→↑↑', steps: [0, 3, 0, 1, 3, 0, 2, 3, 0]},
                5: {position: 17, title: '↑↑→', steps: [1, 2, 0, 2, 2, 0, 2, 1, 0]}
            }
        }
    },
    {//23
        value: 6, //6-5
        coordinates: [0, 2, 3],
        moves: {
            [DIRECTIONS.RIGHT]: {
                1: {position: 1, title: '→↑→', steps: [0, 3, 3, 0, 3, 2, 0, 4, 2]},
                2: {position: 4, title: '→→↑', steps: [0, 3, 3, 0, 4, 3, 1, 4, 3]},
                5: {position: 19, title: '↑→→', steps: [1, 2, 3, 1, 2, 4, 1, 2, 5]},
            },
            [DIRECTIONS.UP]: {
                1: {position: 1, title: '↑→↑', steps: [1, 2, 3, 1, 2, 4, 2, 2, 4]},
                3: {position: 9, title: '↑↑→', steps: [1, 2, 3, 2, 2, 3, 2, 1, 3]},
                4: {position: 13, title: '→↑↑', steps: [0, 3, 3, 1, 3, 3, 2, 3, 3]},
            }
        }
    }
]