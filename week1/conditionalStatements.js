function launchBrowser(browserName) {

if (browserName === "chrome") 
{
    console.log("Launching Chrome browser...");
} 
else 
{
    console.log(`Launching ${browserName} browser...`);
}
}

function runTests(testType) {
  switch (testType) {
    case "smoke":
      console.log("Running smoke tests...");
      break;

    case "sanity":
      console.log("Running sanity tests...");
      break;

    case "regression":
      console.log("Running regression tests...");
      break;

    default:
      console.log("Unknown test type. Running smoke tests by default...");
      break;
  }
}
launchBrowser("chrome");      
launchBrowser("firefox");     

runTests("smoke");            
runTests("sanity");           
runTests("regression");       
runTests("performance");      
