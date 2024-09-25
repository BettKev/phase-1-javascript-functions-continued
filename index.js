// code your solution here
function saturdayFun(act1=`roller-skate`){
   return(`This Saturday, I want to ${act1}!`);
}


const mondayWork = function (act2="go to the office"){
    return(`This Monday, I will ${act2}.`);
}


function wrapAdjective(param1 = '*') {
    return function(param2=`special`) {
      return `You are ${param1}${param2}${param1}!`;
    };
  }