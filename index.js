function produceDrivingRange( blockRange ) {
  return function ( startingBlock, endingBlock ) {
    let distanceToTravel = Math.abs( parseInt(endingBlock) - parseInt(startingBlock));
    let difference = blockRange - distanceToTravel;

    if ( difference > 0 ) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator() {

}

function createDriver() {

}
