function findMatching(drivers, str){
  return drivers.filter(driver=>driver.toLowerCase()===str.toLowerCase());
}

function fuzzyMatch(drivers, str){
  return drivers.filter(driver=>driver.startsWith(str));
}

function matchName(drivers, str){
  console.log(drivers, str);
  return drivers.filter(driver=>dirver.name===str)

}
