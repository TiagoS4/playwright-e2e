import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import MercadoLivreHomePage from '../support/pages/MercadoLivreHomePage';

test.describe('Inserir CEP para entrega', () => {
    const CONFIG = join(__dirname, '..support/fixtures/config.yml');
    let mercadoLivreHomePage: MercadoLivreHomePage;
    let BASE_URL = 'https://www.mercadolivre.com.br/';

    /*if (process.env.QA) {
        BASE_URL = TheConfig.fromFile(CONFIG)
            .andPath('application.mercado_livre_home_page')
            .retrieveData();
    }*/

    test.beforeEach(async ({page}) => {
        mercadoLivreHomePage = new MercadoLivreHomePage(page);
        await page.goto(BASE_URL);
    });

    test('Preencher o CEP', async () => {
        await mercadoLivreHomePage.preencherCepReal();
    });

    test('Preencher CEP falso', async () => {
        await mercadoLivreHomePage.preencherCepFalso();
        await mercadoLivreHomePage.mensagemErro();
    });
});