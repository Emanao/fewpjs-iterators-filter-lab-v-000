function findMatching(drivers, str){
  console.log(drivers +":"+ str)
  return drivers.filter(driver=>driver===str);
}
