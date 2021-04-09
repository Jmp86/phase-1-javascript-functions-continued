function saturdayFun(fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`;
}

const mondayWork = function (work = 'go to the office') {
    return `This Monday, I will ${work}.`;
}
mondayWork();

const wrapAdjective = function(flair = "*"){
    return function (adj = 'special'){
        return `You are ${flair}${adj}${flair}!`
    }
}
