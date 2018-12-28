

describe("sample2 test",function(){

    it("amazon test",async function(){
        browser.waitForAngularEnabled(false);
        await browser.get("http://www.amazon.com");
        await browser.sleep(2000);
    });

})