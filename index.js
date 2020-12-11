const ig = require('./instagram');

(async ()=>{

    await ig.initialize();

    await ig.login('Estou aqui', 'testando');

})()