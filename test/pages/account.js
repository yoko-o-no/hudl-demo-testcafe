import { Selector, t } from "testcafe";
import { generalPage } from "./general";
import { loginData } from "../data/loginData";

const page = new generalPage();

class accountPage {
    constructor() {
        this.url = `${page.basePage}/home`;
        this.teamProject = Selector("[data-qa-id='webnav-teamswitcher-menu'] a:first-child span");
        this.videoLink = Selector("[data-qa-id='webnav-primarynav-video']");
        this.reportsLink = Selector("[data-qa-id='webnav-primarynav-reports']");
        this.teamDropDown = Selector("[data-qa-id='webnav-primarynav-team']");
        this.highlightsLink = Selector("[data-qa-id='webnav-primarynav-highlights']");
        this.search = Selector("[title='Search']");
        this.displayName = Selector('.hui-globaluseritem__display-name span');
        this.logoutLink = Selector(".hui-globalusermenu__items [data-qa-id='webnav-usermenu-logout'] span");
    }

    accountPageloads = async () => {
        await t
            .expect(page.getUrl()).eql(this.url)
            .expect(this.teamProject.exists).ok()
            .expect(this.videoLink.exists).ok()
            .expect(this.reportsLink.exists).ok()
            .expect(this.teamDropDown.exists).ok()
            .expect(this.highlightsLink.exists).ok()
            .expect(this.search.exists).ok()
    }

    validateCoachLoggedIn = async () => {
        await t
            .expect(this.displayName.innerText).eql(loginData.coachLogin.displayName)
    }

    logoutOfAccount = async () => {
        await t
            .hover(this.displayName)
            .click(this.logoutLink)

    }

}

export { accountPage };