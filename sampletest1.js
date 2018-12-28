

describe("sample1 test",function(){

    it("google test",async function(){
        browser.waitForAngularEnabled(false);
        await browser.get("http://www.google.com");
        await browser.sleep(2000);
    });

})