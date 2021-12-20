import { Selector, t } from "testcafe";
import { generalPage } from "./general";
import { loginData } from "../data/loginData";

const page = new generalPage();

class loginPage {
    constructor() {
        this.url = `${page.basePage}/login`;
        this.signUpLink = Selector('.sign-up-trial a');
        this.email = Selector("input[name='username']");
        this.password = Selector("input[name='password']");
        this.login = Selector('#logIn');
        this.rememberMe = Selector('#remember-me');
        this.needHelp = Selector('.need-help');
        this.loginWithOrganisation = Selector('#logInWithOrganization');
        this.loginError = Selector('.login-error');
    }

    loginPageLoads = async () => {
        await t
            .expect(page.getUrl()).eql(this.url)
            .expect(this.signUpLink.exists).ok()
            .expect(this.email.exists).ok()
            .expect(this.password.exists).ok()
            .expect(this.login.exists).ok()
            .expect(this.rememberMe.exists).ok()
            .expect(this.needHelp.exists).ok()
            .expect(this.loginWithOrganisation.exists).ok()
    }

    loginAsCoach = async () => {
        await t
            .typeText(this.email, loginData.coachLogin.email)
            .typeText(this.password, loginData.coachLogin.password)
            .click(this.login)
    }

    invalidlogin = async () => {
        await t
            .typeText(this.email, loginData.invalidLogin.email)
            .typeText(this.password, loginData.invalidLogin.password)
            .click(this.login)
            .expect(this.loginError.exists).ok();
    }

}

export { loginPage };