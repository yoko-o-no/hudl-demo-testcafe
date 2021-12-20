import { generalPage } from "../pages/general"
import { loginPage } from "../pages/login";
import { accountPage } from "../pages/account";

const page = new generalPage();
const login = new loginPage();
const account = new accountPage();

fixture`Hudl login tests`.page(page.basePage);

test(`User can navigate to Hudl login page`, async (t) => {
    await page.navigateToLogin();
    await login.loginPageLoads();
});

test(`Coach can login to their account`, async (t) => {
    await page.navigateToLogin();
    await login.loginAsCoach();
    await account.accountPageloads();
    await account.validateCoachLoggedIn();
});

test(`User can't login when invalid credentials used`, async (t) => {
    await page.navigateToLogin();
    await login.invalidlogin();
});

test(`Coach can logout of their account`, async (t) => {
    await page.navigateToLogin();
    await login.loginAsCoach();
    await account.logoutOfAccount();
    await page.homepageLoads();
});