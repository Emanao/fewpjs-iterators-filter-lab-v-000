function findMatching(drivers, str){
  console.log(drivers +":"+ str)
  return drivers.filter(driver=>driver.toLowerCase()===str.toLowerCase());
}
function fuzzyMatch(drivers, str){
  console.log(drivers +":"+ str)
  return drivers.filter(driver=>driver.toLowerCase()===str.toLowerCase());
}
