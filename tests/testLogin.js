module.exports = {
  'Demo test Login' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .setValue('input[name=email]', 'student@rta.com')
      .setValue('input[name=password]', '123123123')
      .waitForElementVisible('button[type=submit]', 1000)
      .click('button[type=submit]')
      .pause(1000)
  }
};

