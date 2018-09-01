describe('mock application', function() {

    var homeUrl;

    it('sets up initial variables', function() {
        // Can be considered to be beforeAll, which Protractor lacks.
        browser.get('/');
        homeUrl = browser.getCurrentUrl();
    });

    it('loads mock application', function() {
        browser.get('/');
        //$('#email').sendKeys(name + '@test.com');
        //$('button').click();
        var image = $('img');
        expect(browser.getCurrentUrl()).toBe(homeUrl);
        expect(image.isPresent()).toBe(true);
    });

});
