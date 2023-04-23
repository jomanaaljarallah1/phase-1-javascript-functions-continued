// code your solution here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}
mondayWork("work from home");
mondayWork();
function wrapAdjective(st='*'){
    return  function (set='special'){
        return `You are ${st}${set}${st}!`;
    }
}
     
    
      wrapAdjective("||")("a dedicated programmer");