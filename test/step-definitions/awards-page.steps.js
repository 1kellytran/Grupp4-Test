const{Given, When, Then} = require('@wdio/cucumber-framework');

// Scenario 1: Get to Oscar
Given(/^I am on the IMDb homepage$/, async () => {
    await browser.maximizeWindow();
    await browser.url("https://www.imdb.com/");
});

When(/^I click on the menu bar$/, async () => {
    const menuBar = await $("#imdbHeader-navDrawerOpen--desktop > svg");
    await menuBar.click();
})

When(/^I click the Oscars in Awards & Events$/, async () => {
    await $('aside[data-testid="drawer"]').waitForDisplayed({ timeout: 3000 });
    const oscars = await $$('[role=menuitem]')[23];
    await oscars.click();
});

Then(/^I can see results relating to the Oscars ceremony$/, async () => {
    const browserUrl = await browser.getUrl();
    expect(browserUrl).toContain('https://www.imdb.com/oscars/?ref_=nv_ev_acd');
});

// Scenario 2: View best motion picture
Given(/^I am on the Oscars page$/, async () => {
	await browser.url('https://www.imdb.com/oscars/?ref_=nv_ev_acd');
});

When(/^I click the Winners button$/, async () => {	
    await $('#widget-nav > div.nav-buttons > div > ul > li:nth-child(2) > a > span:nth-child(1)').click();
    await new Promise(r => setTimeout(r, 2000));
});

Then(/^I can see which movie won best motion picture$/, async () => {	
    const winner = await $('#center-8-react > div > div.event-widgets__award-list > div:nth-child(1) > h3 > div:nth-child(1) > div.event-widgets__award-category-nominations > div:nth-child(1) > div:nth-child(1) > div.event-widgets__nomination-details > div.event-widgets__nominees > div.event-widgets__primary-nominees > span > span > a').getText();
    await expect(winner).toBe('Nomadland');
    await new Promise(r => setTimeout(r, 2000));    
});

// Scenario 3: View actor in best motion picture
Given(/^I am on the winners section on the Oscars page$/, async () => {
	await browser.url('https://www.imdb.com/oscars/nominations/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=68c47215-6bcb-477d-a6e8-0d1a458681d0&pf_rd_r=ZQT0KYDGZMHXBREA3S9Y&pf_rd_s=top-1&pf_rd_t=60601&pf_rd_i=oscars&ref_=fea_acd_nav_i2');
});

When(/^I click on Frances McDormand in best motion pictures card$/, async () => {
    await $('=Frances McDormand').click();
    await new Promise(r => setTimeout(r, 2000));
});

Then(/^I can see the actress' profile$/, async () => {
    const actress = await $('#name-overview-widget-layout > tbody > tr:nth-child(1) > td > h1').getText();
    await expect(actress).toBe('Frances McDormand');
});

// ALTERNATE SCENARIO
// Senario 4: Back to IMDb homepage
Given(/^I am on the actress' profile page$/, async () => {
    await browser.url('https://www.imdb.com/name/nm0000531/');
});

When(/^I click the IMDb-logo on the top left of the page$/, async () => {
	const imdbLogo = $('#home_img_holder');
    await imdbLogo.click();
    await new Promise(r => setTimeout(r, 2000));
});

Then(/^I will return to the IMDb homepage$/, async () => {
    const browserUrl = await browser.getUrl();
    expect(browserUrl).toContain('https://www.imdb.com/?ref_=nv_home');
});
