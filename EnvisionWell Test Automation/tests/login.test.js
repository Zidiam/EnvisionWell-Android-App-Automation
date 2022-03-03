//login.test.js

const wdio = require("webdriverio");
jest.setTimeout(20000);

let client;
let EMAIL;
let PASSWORD;

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

beforeAll( async() => {
    client = await wdio.remote(opts);
    EMAIL = 'test10@envisionwellteam.testinator.com'
    PASSWORD = 'EdAnFH88'
});

afterAll( async() => {
    await client.deleteSession();
});

test('Connected', async() =>{
    client = await wdio.remote(opts);
    expect(Object.values(client)[1]['appPackage']).toBe('com.envision.well.app');
});

test('Login Successful', async() =>{
    //declare element selector values
    const NEXT_BTN = 'id=com.envision.well.app:id/btn_skip'
    const LOGIN_SCREEN = 'id=com.envision.well.app:id/LoginScreenBtn'
    const EMAIL_TXT_FIELD = 'id=com.envision.well.app:id/LoginText'
    const PASSWORD_TXT_FIELD = 'id=com.envision.well.app:id/PasswordText'
    const LOGIN_BTN = 'id=com.envision.well.app:id/SignInButton'
    const ACCEPT_BTN = 'id=com.envision.well.app:id/accept_btn'
    const ALLOW_BTN = 'id=com.android.permissioncontroller:id/permission_allow_foreground_only_button'
    const PROFILE = 'id=com.envision.well.app:id/ProfileNamee'

    //Click Through Prompts
    await client.$(NEXT_BTN).click();
    await client.$(LOGIN_SCREEN).click();
    await client.$(EMAIL_TXT_FIELD).setValue(EMAIL);
    await client.$(PASSWORD_TXT_FIELD).setValue(PASSWORD);
    await client.$(LOGIN_BTN).click();
    await client.$(ACCEPT_BTN).click();
    await client.pause(6000);

    //Check if there is allow microphone button
    if(client.$(ALLOW_BTN).isDisplayed()){
        await client.$(ALLOW_BTN).click();
    }

    //Check if profile is loaded
    expect(await client.$(PROFILE).isDisplayed()).toBe(true);
});
