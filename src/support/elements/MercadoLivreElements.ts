import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class MercadoLivreElements extends BaseElements {
    constructor(readonly page: Page) {
      super(page);
      this.page = page;
    }

    getBotaoCep(): Locator {
        return this.page.locator('class=nav-menu-item')
    }

    getCampoCep(): Locator {
        return this.page.locator('placeholder=Informar um CEP')
    }

    getBotaoUsar(): Locator {
        return this.page.locator('.andes-button zip-code__use-button andes-button--medium andes-button--loud')
    }

    getMensagemErro(): Locator {
        return this.page.locator('text=Digite um CEP válido.');
      }
}