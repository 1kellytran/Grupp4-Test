const { Given, When, Then } = require('@wdio/cucumber-framework'); // using statement

Given(/^I am the IMDB site$/, async () => {
    const url = `https://www.imdb.com/`

    await browser.url(url);

    const result = await browser.getUrl();
    expect(await result).toBe(url);
    // await browser.debug();
});

When(/^I click the menu button$/, async () => {
    // #imdbHeader-navDrawerOpen--desktop
	// const button = await $('#imdbHeader-navDrawerOpen--desktop');
    // const button = await $('//*[@id="imdbHeader-navDrawerOpen--desktop"]/svg');
    // const button = await $('//*[@id="imdbHeader-navDrawerOpen"]/svg');
    const button = await $('#imdbHeader-navDrawerOpen > svg');
    
    // if window size
    await button.click();
    // await browser.debug();
});

Then(/^I see the different categories$/, async () => {
    const panel = await $('div[data-testid="panel-content"]');

    const categories = [
        "Movies", "TV Shows", "Watch", "Awards & Events",
        "Celebs", "Community"
    ];
    
    for (const category of categories) {
        await expect(panel).toHaveTextContaining(category);
    }
	
});

