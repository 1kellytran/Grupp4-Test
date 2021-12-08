
const { Given, When, Then } = require('@wdio/cucumber-framework');
// Scenario 1
Given(/^I am on the IMDB site$/, async() => {
	const url = 'https://www.imdb.com/'
	await browser.url(url);
	const result = await browser.getUrl();
	expect(result).toBe(url);
});
When(/^I click on top box office$/, async() => {
	const button = await $('#__next > main > div > div.ipc-page-content-container.ipc-page-content-container--center.homepage__PageContentContainerStyled-bioyok-1.eFozFn > div:nth-child(7) > section:nth-child(5) > div > a')
	await button.click();	
});
Then(/^I can see top box office movies$/, async() => {
	expect(browser).toHaveTitle('IMDb Top Box Office - IMDb');
});


// Scenario 2
Given(/^I am on the top box office page$/, async() => {
	const url = 'https://www.imdb.com/chart/boxoffice?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=470df400-70d9-4f35-bb05-8646a1195842&pf_rd_r=J10BCJ621PVX24HQWAKD&pf_rd_s=right-4&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_ql_1'
	await browser.url(url);
	const result = await browser.getUrl();
	expect(result).toBe(url);
});

When(/^I click on Top 250 in charts$/, async() => {
	const button = await $('#sidebar > div:nth-child(6) > span > div > div > div > div > div > div > div:nth-child(3) > div > a')
	await button.click();	
});

Then(/^I can view IMDB Top 250 movies$/, async() => {
	expect(browser).toHaveTitle('Top 250 Movies - IMDb');
	
});


//Scenario 3



Given(/^I am on Top office page$/, async() => {
	await browser.url('https://www.imdb.com/chart/boxoffice?');
});

When(/^I click on action in charts$/, async() => {
	
	const action_link = await $('#sidebar > div:nth-child(8) > span > ul > li:nth-child(1) > a')
    await action_link.click();
    expect(await browser).toHaveTitle("Top 50 Action Movies and TV Shows - IMDb");
});



Then(/^I can view action movies$/, async() => {
	 const  all_genres = await [$('.genre')]
	 for(const action_genre of all_genres){
		 await expect(action_genre).toHaveTextContaining("Action");
	 }
});









