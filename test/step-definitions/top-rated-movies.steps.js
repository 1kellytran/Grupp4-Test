
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
	expect(await browser).toHaveTitle('Top Box Office');
});


// Scenario 2
Given(/^I am on the top box office page$/, async() => {
	const url = 'https://www.imdb.com/chart/boxoffice?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=470df400-70d9-4f35-bb05-8646a1195842&pf_rd_r=J10BCJ621PVX24HQWAKD&pf_rd_s=right-4&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_ql_1'
	await browser.url(url);
	const result = await browser.getUrl();
	expect(result).toBe(url);
});

When(/^I click on Top 250 in charts$/, async() => {
	const button = await $('')
	await button.click();	
});

Then(/^I can view IMDB Top 250 movies$/, async() => {
	expect(browser).toHaveTitle('Top 250 Movies');
});


//Scenario 3
Given(/^I am on Top 250 Movies page$/, async() => {
	const url = 'https://www.imdb.com/chart/top?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=470df400-70d9-4f35-bb05-8646a1195842&pf_rd_r=CXP3YQFS79SZTTR46TDW&pf_rd_s=right-4&pf_rd_t=15506&pf_rd_i=boxoffice&ref_=chtbo_ql_3'
	await browser.url(url);
	
	const result = await browser.getUrl();
	console.log(result);
	expect(result).toBe(url);
});

When(/^I click on action in charts$/, async() => {
	const action_link = await $('#sidebar > div:nth-child(10) > span > ul > li:nth-child(1) > a')
	
	await action_link.click();
	
	expect(await browser).toHaveTitle("Feature Film, Rating Count at least 25,000, Action (Sorted by IMDb Rating Descending) - IMDb");
});

Then(/^I can view action movies$/, async() => {
	//const all_genres =await browser.getelementsByclassName('.genre')
	const  all_genres = await [$('.genre')]
	for(const action_genre of all_genres){
		await expect(action_genre).toHaveTextContaining("action");

	}
});


// scenario 4
Given(/^I am on the Top 250 page$/, async() => {
	const url = 'https://www.imdb.com/chart/top?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=470df400-70d9-4f35-bb05-8646a1195842&pf_rd_r=DDZQY7Y66Q1GEP8P08GM&pf_rd_s=right-4&pf_rd_t=15506&pf_rd_i=boxoffice&ref_=chtbo_ql_3'
	await browser.url(url);
	const result = await browser.getUrl();
	expect(result).toBe(url);
});

When(/^I choose release date in the select menu$/, async() => {
	const menu_link = await $('#lister-sort-by-options > option:nth-child(3)')
	await menu_link.click();
	expect(menu_link).toHaveText('Release Date');
});

Then(/^I can view movies ordered by release date$/, async() => {
	
});



