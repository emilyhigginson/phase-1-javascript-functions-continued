function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
let mondayWork = function(activity ="go to the office") {
    return `This Monday, I will ${activity}.`
}
let wrapAdjective = function(style="*") {
    return function(adjective="a hard worker") {
      return `You are ${style}${adjective}${style}!`
    }
  }