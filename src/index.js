module.exports = function toReadable (number) {
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let secondUnits = ['eleven','twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const getTwoCount = (count) => {
    if(number % 10 === 0) {
      return dozens[(count / 10) - 1]
    }
    if(count < 20) {
      return secondUnits[+count.toString().slice(1) -1]
    }
    else {
      return dozens[count.toString()[0] -1] + ' ' + units[count.toString()[1]]
    }
  }

  const getThreeCount = (count) => {
    if(number % 100 === 0) {
      return units[count / 100] + ' ' + 'hundred'
    }
    if(number / 10 ===  0) {
      return units[Math.floor(count /  100)] + ' ' + 'hundred' + ' ' + dozens[+Math.floor(count / 10).toString().slice(1) -1]
    }
    if(+count.toString()[1] === 0) {
      return units[Math.floor(count / 100)] + ' ' + 'hundred' + ' ' + units[+count.toString().slice(2)]
    } 
    else {
      return units[Math.floor(count / 100)] + ' ' + 'hundred' + ' ' + getTwoCount(+count.toString().slice(1))
    }
  }

  if(number.toString().length === 1) {
    return units[number]
  }
  if(number.toString().length === 2) {
    return getTwoCount(number)
  }
  else {
    return getThreeCount(number)
  }

}
