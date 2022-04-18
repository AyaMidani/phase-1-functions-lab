function distanceFromHqInBlocks(number) {
    if(number<42)
    {
        return 42-number
    }
    else{
        return number-42;
    }
  }

function distanceFromHqInFeet(value){
    return distanceFromHqInBlocks(value)*264;
  }

function distanceTravelledInFeet(start, destination) {
    if(destination>start)
    {
        return (destination-start)*264
    }
    else{
        return (start-destination)*264
    }
  }
  function calculatesFarePrice(start, destination) {
    const Feetcalcuates = distanceTravelledInFeet(start,destination);
    if (Feetcalcuates<= 400){
      return 0;
    }
    if (Feetcalcuates>=400 && Feetcalcuates<=2000){
      return (Feetcalcuates-400)* 0.02;
    }
    else if(Feetcalcuates>=2000&& Feetcalcuates<=2500){
      return 25;
    }
    else if (Feetcalcuates > 2500){
      return "cannot travel that far";
    }
  }
  distanceFromHqInBlocks(50)
  distanceFromHqInFeet(50)