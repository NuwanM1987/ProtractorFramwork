
//importing the external file
let homepage = require('../pages/homepage');
describe('demo calculator test',function()
{

it('addition test',function () {
   
   homepage.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(3000);
    homepage.enterFirstNumber('6');
    homepage.enterSecondNumber('4');
    homepage.clickGo();
    homepage.VerifyResult('10');
  
    browser.sleep(3000);
    // browser.get('http://juliemr.github.io/protractor-demo/');
     // element(by.model('first')).sendKeys("3");
    //element(by.model('second')).sendKeys("7");
   // element(by.css('[ng-click="doAddition()"]')).click();
    //  let results= element(by.cssContainingText('.ng-binding','10'));
    // for the verification we use Jasmine
   // expect(results.getText()).toEqual('10');
}); 

it('Substraction test',function () {
   
   homepage.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(3000);
    homepage.enterFirstNumber('67');
    homepage.enterSecondNumber('4');
    homepage.clickGo();
    homepage.VerifyResult('10');
  
    browser.sleep(6000);
    // browser.get('http://juliemr.github.io/protractor-demo/');
     // element(by.model('first')).sendKeys("3");
    //element(by.model('second')).sendKeys("7");
   // element(by.css('[ng-click="doAddition()"]')).click();
    //  let results= element(by.cssContainingText('.ng-binding','10'));
    // for the verification we use Jasmine
   // expect(results.getText()).toEqual('10');
}); 


});