import { Selector, ClientFunction, t } from "testcafe";

class generalPage {
    constructor() {
        this.basePage = "https://www.hudl.com";
        this.loginLink = Selector("[data-qa-id='login']");
    }

    getUrl = ClientFunction(() => window.location.href);

    navigateToLogin = async () => {
        await t.click(this.loginLink);
    };

    homepageLoads = async () => {
        await t.expect(this.getUrl()).eql(`${this.basePage}/en_gb/`);
    };

}

export { generalPage };