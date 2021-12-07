const{Given, When, Then} = require('@wdio/cucumber-framework')

Given(/^I am on the IMDB website$/, async () => {
    await browser.url('https://www.imdb.com/');
        expect(await browser).toHaveTitle('IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows');

});

When(/^I enter "([^"]*)" in the search bar$/, async (text) => {
    const searchInput = await $('#suggestion-search');

    searchInput.addValue(text);
    expect(searchInput).toHaveValue(text); 

});

When(/^I press enter$/, async () => {
    await browser.keys("\uE007");
    //const searchBtn = $('#suggestion-search-button');
    //searchBtn.click();
    //await browser.debug(); //För att pausa!
});

Then(/^I see results matching "([^"]*)"$/, async (text) => {
    expect(await browser).toHaveTitle('Find - IMDb');
    const searchBarHeader = await $('.findHeader');
    expect(await searchBarHeader.getText()).toContain(text);
});



////////////////////////////////////////////////



//Tar Given från föregående test.

When(/^I've entered "([^"]*)" in the search bar$/, async (text) => {
    const searchInput = await $('#suggestion-search');

    searchInput.addValue(text);
    expect(searchInput).toHaveValue(text);
});

Then(/^A dropdown containing searchresults about "([^"]*)" appears$/, async (text) => {
	const dropdownMenu = await $('.searchMenu__Menu-sc-1wv1epe-0 bVIpmb _7slaS0NikSNpkLVY3A1sk imdb-header__search-menu');
    expect(dropdownMenu).toBeDefined();
    expect(dropdownMenu).toHaveTextContaining(text);
});




////////////////////////////////////////////////




Given(/^I've entered "([^"]*)" in the searchbar$/, async (text) => {
    await browser.url('https://www.imdb.com/');
    const searchInput = await $('#suggestion-search');
    searchInput.addValue(text);
	expect(searchInput).toHaveValue(text);
    //await browser.debug();
});

When(/^I choose a suggestion$/, async () => {
	const dropDownChoice = await $('#react-autowhatever-1--item-0');
    await dropDownChoice.click();
});


Then(/^I can see details about "([^"]*)"$/, async (text) => {
    const imageDaniel = await $('#name-poster');
    expect(await imageDaniel).toHaveAttribute('title');
    const title = await $(imageDaniel).getAttribute('title');
    expect(await title).toContain(text)
	expect(await browser).toHaveTitle('Daniel Radcliffe - IMDb');
});
