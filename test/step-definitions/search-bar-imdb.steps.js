const { Given, When, Then } = require('@wdio/cucumber-framework');


Given(/^I am on the IMDB website$/, async () => {
    await browser.url('https://www.imdb.com/');
});

When(/^I enter "([^"]*)" in the search bar$/, async (text) => {
	const searchBar = await $('#suggestion-search');
    await searchBar.setValue(text);
});

When(/^I press enter$/, async () => {
	await browser.keys('\uE007');
});

Then(/^I see results matching "([^"]*)"$/, async (text) => {
	const searchPageTitle = await $('h1[class="findHeader"]').getText();
    expect(searchPageTitle).toContain(text);
});

// Given(/^I am on the IMDB website$/, async () => {
// 	return true;
// });

When(/^I enter a search parameter$/, async () => {
	const searchBar = await $('#suggestion-search');
    await searchBar.setValue("Dune");
});

When(/^The parameter is valid$/, async () => {
    const searchBar = await $('#suggestion-search');
	expect(await searchBar.getValue()).toBe('Dune');
});

Then(/^A dropdown with suggestions appear$/, async () => {
	// const dropDown = await $('.searchMenu__Menu-sc-1wv1epe-0 bVIpmb _7slaS0NikSNpkLVY3A1sk imdb-header__search-menu');
    const dropDown = await $('[role=listbox]');
    expect(dropDown).toBeDefined();
    
    const firstSuggestion = await $('#react-autowhatever-1--item-0');
    expect(firstSuggestion).toHaveText('Dune');
});

Given(/^I've entered a valid parameter in the searchbar$/, async () => {
	const searchBar = await $('#suggestion-search');
    await searchBar.setValue("The Sting");
    // await browser.debug();
});

When(/^I choose a suggestion$/, async () => {
	await  $('#react-autowhatever-1--item-0').click();
});

Then(/^I can see its details$/, async () => {

	const originalTitle = await $('div[data-testid="hero-title-block__original-title"]').getText();
    expect(originalTitle).toHaveTextContaining('The Sting');
    
    const releaseYear = await $$('.ipc-inline-list__item')[0].getText();
    expect(releaseYear).toBe("1973");
});
