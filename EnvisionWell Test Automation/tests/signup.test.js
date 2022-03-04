//login.test.js

const wdio = require("webdriverio");
jest.setTimeout(200000);

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
    EMAIL = 'test2360@envisionwellteam.testinator.com'
    PASSWORD = '123456789Jm!'
});

afterAll( async() => {
    await client.deleteSession();
});

test('Connected', async() =>{
    expect(Object.values(client)[1]['appPackage']).toBe('com.envision.well.app');
});

test('Login Successful', async() =>{
    const phoneNumber = '1111211160'
    //declare element selector values
    const screenVal = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout'
    const screenVa2 = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout'
    const SKIP_BTN = 'id=com.envision.well.app:id/btn_skip'
    const SIGN_UP_SCREEN = 'id=com.envision.well.app:id/SignUpScreenBtn'
    const PHONE_FIELD = 'id=com.envision.well.app:id/SignUpNumberText'
    const EMAIL_TXT_FIELD = 'id=com.envision.well.app:id/SignUpEmailText'
    const PASSWORD_TXT_FIELD = 'id=com.envision.well.app:id/PasswordText'
    const PRIVACY_CHECK = 'id=com.envision.well.app:id/privacy_chechbox'
    const SIGN_UP_BTN = 'id=com.envision.well.app:id/SignUpButtonOnSignUpPage'
    const ACCEPT_BTN = 'id=com.envision.well.app:id/accept_btn'
    const ALLOW_BTN = 'id=com.android.permissioncontroller:id/permission_allow_foreground_only_button'
    const firstName = 'id=com.envision.well.app:id/etfirstname'
    const lastName = 'id=com.envision.well.app:id/etlastname'
    const nickName = 'id=com.envision.well.app:id/etnickname'
    const DOB = 'id=com.envision.well.app:id/etDOB'
    const NEXT_BTN = 'id=com.envision.well.app:id/btnnext'
    const SETUP_SKIP_BTN = 'id=com.envision.well.app:id/skip'

    const PROFILE = 'id=com.envision.well.app:id/ProfileNamee'

    //Click Through Prompts
    if(client.$(SKIP_BTN).isDisplayed()){
        await client.$(SKIP_BTN).click();
        }
    await client.$(SIGN_UP_SCREEN).click();
    await client.$(PHONE_FIELD).setValue(phoneNumber);
    await client.$(EMAIL_TXT_FIELD).setValue(EMAIL);
    await client.$(PASSWORD_TXT_FIELD).setValue(PASSWORD);
    await client.$(PRIVACY_CHECK).click();
    await client.$(SIGN_UP_BTN).click();
    await client.pause(10000);
    //await client.$(ACCEPT_BTN).click();

    await client.$(firstName).setValue('test');
    await client.$(lastName).setValue('test');
    await client.$(nickName).setValue('test');
    await client.touchAction([
        { action: 'press', x: 30, y: 1500},
        { action: 'moveTo', x: 30, y: 550 },
        'release'
    ]);
    await client.$(DOB).click();
    await client.$('id=android:id/button1').click();
    await client.$(NEXT_BTN).click();
    await client.$(NEXT_BTN).click();
    await client.$('id=com.envision.well.app:id/cbAmerican').click();
    await client.$(NEXT_BTN).click();
    await client.$('id=com.envision.well.app:id/cbHispanic').click();
    await client.$(NEXT_BTN).click();
    await client.$('id=com.envision.well.app:id/cbMale').click();
    await client.$(NEXT_BTN).click();
    await client.$('id=com.envision.well.app:id/cbEnglish').click();
    await client.$(NEXT_BTN).click();
    await client.$(SETUP_SKIP_BTN).click();
    await client.$(NEXT_BTN).click();
    await client.$(NEXT_BTN).click();
    await client.$('id=com.envision.well.app:id/cbloseweight').click();
    await client.$(NEXT_BTN).click();
    await client.$(SETUP_SKIP_BTN).click();
    await client.$('id=com.envision.well.app:id/cblightly').click();
    await client.$(NEXT_BTN).click();
    await client.$('id=com.envision.well.app:id/cbMonday').click();
    await client.$(NEXT_BTN).click();
    await client.$('id=com.envision.well.app:id/cbreadarticle').click();
    await client.$(NEXT_BTN).click();
    await client.$('id=com.envision.well.app:id/cbrunning').click();
    await client.$(NEXT_BTN).click();
    await client.$('id=com.envision.well.app:id/cbphone').click();
    await client.$(NEXT_BTN).click();
    await client.$('id=com.envision.well.app:id/cbfT').click();
    await client.$(NEXT_BTN).click();
    await client.$('id=com.envision.well.app:id/btnfinish').click();
    await client.touchAction([
        { action: 'press', x: 30, y: 1500},
        { action: 'moveTo', x: 30, y: 550 },
        'release'
    ]);
    await client.$('id=com.envision.well.app:id/see_subscription_btn').click();
    await client.$('id=com.envision.well.app:id/no_thanks').click();
    //Check if there is allow microphone button
    if(client.$(ALLOW_BTN).isDisplayed()){
        await client.$(ALLOW_BTN).click();
    }
    expect(await client.$(PROFILE).isDisplayed()).toBe(true);
});
