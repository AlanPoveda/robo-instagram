const ig = require('./instagram');

(async ()=>{

    await ig.initialize();

    await ig.login('alanpovedaje', '!4lanP0veda*');

})()