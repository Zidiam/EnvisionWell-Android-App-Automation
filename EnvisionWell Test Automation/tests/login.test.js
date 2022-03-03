//login.test.js

const wdio = require("webdriverio");
jest.setTimeout(20000);

let client;

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName: "Android",
        automationName: "UiAutomator2",
        udid: "emulator-5554",
        appPackage: "com.envision.well.app",
        appActivity: ".UI.WalkThroughActivity"
    }
};

afterAll( async() => {
    await client.deleteSession();
});

test('Connected', async() =>{
    client = await wdio.remote(opts);
    expect(Object.values(client)[1]['appPackage']).toBe('com.envision.well.app');
});

test('Logging In', async() =>{
    //declare element selector values
    const NEXT_BTN = 'id=com.envision.well.app:id/btn_skip'
    const LOGIN_SCREEN = 'id=com.envision.well.app:id/LoginScreenBtn'
    const EMAIL_TXT_FIELD = 'id=com.envision.well.app:id/LoginText'
    const PASSWORD_TXT_FIELD = 'id=com.envision.well.app:id/PasswordText'
    const LOGIN_BTN = 'id=com.envision.well.app:id/SignInButton'
    const PROFILE = 'id=com.envision.well.app:id/accept_btn'
    
    await client.$(NEXT_BTN).click();
    await client.$(LOGIN_SCREEN).click();
    await client.$(EMAIL_TXT_FIELD).setValue('test10@envisionwellteam.testinator.com');
    await client.$(PASSWORD_TXT_FIELD).setValue('EdAnFH88');
    await client.$(LOGIN_BTN).click();
    await client.pause(6000);
    const confirmed = await client.$(PROFILE).isDisplayed();
    expect(confirmed).toBe(true);
});