let homepage= function() {

    //Locators
    let firstNumber_input=element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    //Functions
    this.get = function(url) {
        browser.get(url);
    };
    // assign a function to a variable and then use that variable as a function
    this.enterFirstNumber = function(firstnumber){
        firstNumber_input.sendKeys(firstnumber);
    };

    this.enterSecondNumber = function(secondnumber){
        secondNumber_input.sendKeys(secondnumber);
    };

    this.clickGo = function(){
        goButton.click();

    };
    this.VerifyResult= function(result){
        let output = element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual('10');
    }

    
}
// for refer any external file
module.exports = new homepage();