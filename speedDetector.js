function speedDetector(speed) {
    const speedLimit = 70;
    const addDemeritperkm = 5;
    const demeritLimit = 12;
    if (speed <= speedLimit){
        return console.log("ok");
    }
    const excessSpeed = speed - speedLimit;
    const demeritpoints = Math.floor(excessSpeed/addDemeritperkm);

    if(demeritpoints > demeritLimit){
        return console.log("liscens suspended")
}else {
    return console.log(demeritpoints);
}
}
speedDetector(135)