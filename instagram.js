//Estou fazendo uma navegação usando o robô para ver como funciona

const puppeteer = require('puppeteer');

const BASE_URL = 'https://instagram.com/'

const instagram = {
    browser: null,
    page: null,

    initialize: async () =>{
        instagram.browser = await puppeteer.launch({
            headless: false
        });

        instagram.page = await instagram.browser.newPage();

        await instagram.page.goto(BASE_URL);
    },

    login: async (username, password) =>{        

        // Tempo para esperar a página funcionar
        await instagram.page.waitFor(1000);

        // tempo colocado para que entre e espere pelo que o imput seja carregado
        await instagram.page.waitForSelector('input[name="username"]');
        
        //Colocando o login e senha 
        await instagram.page.type('input[name="username"]', username, { delay:50 });
        await instagram.page.type('input[name="password"]', password, { delay:50 });

        await instagram.page.waitForSelector('[class="sqdOP.L3NKy.y3zKF"]');

        await instagram.click('[class="sqdOP.L3NKy.y3zKF"]')



        
    }


}

module.exports = instagram;