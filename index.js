// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    
    //returns the number of blocks given a value
    if (street < 42){
        return 42 - street;
    }
    if (street > 42){
        return street - 42;
    }
  }
  distanceFromHqInBlocks(43);
  distanceFromHqInBlocks(50);
  distanceFromHqInBlocks(34);

  function distanceFromHqInFeet(feet) {
    distanceFromHqInBlocks(feet);
    /* call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks */
        return (distanceFromHqInBlocks(feet) * 264);
    // the return value of distanceFromHqInBlocks can then be used to calculate feet 
    }

  distanceFromHqInFeet(43);
  distanceFromHqInFeet(50);
  distanceFromHqInFeet(34);

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    function distance(){
    if (start < destination){
        return destination - start;
    }
    if (start > destination){
        return start - destination;
    }}
    return distance() * 264
  }
  distanceTravelledInFeet(43, 48);
  distanceTravelledInFeet(50, 60);
  distanceTravelledInFeet(34, 28);


  function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination);
    //returns the fare for the customer
    if (distanceTravelledInFeet(start, destination) < 400){
       return (0);
    }
    else if (distanceTravelledInFeet(start, destination) < 2000){
        return ((distanceTravelledInFeet(start, destination) - 400) * .02);
    }
    else if (distanceTravelledInFeet(start, destination) < 2500){
        return (25);
    }
    else if (distanceTravelledInFeet(start, destination) > 2500){
        return ('cannot travel that far');
    }
  }
  calculatesFarePrice(43, 44);
  calculatesFarePrice(34, 32);
  calculatesFarePrice(50, 58);
  calculatesFarePrice(34, 24);