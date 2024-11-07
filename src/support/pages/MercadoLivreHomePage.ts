import { Page, expect } from '@playwright/test';
import MercadoLivreElements from '../elements/MercadoLivreElements';
import BasePage from './BasePage';

export default class MercadoLivreHomePage extends BasePage {
    readonly mercadoLivreElements: MercadoLivreElements;

    constructor(readonly page: Page) {
      super(page);
      this.page = page;
      this.mercadoLivreElements = new MercadoLivreElements(page);
    }

    async preencherCepReal(): Promise<void> {
        await this.mercadoLivreElements.getBotaoCep().click();
        await this.mercadoLivreElements.getCampoCep().fill('88801-500');
        await this.mercadoLivreElements.getBotaoUsar().click();
    }

    async preencherCepFalso(): Promise<void> {
        await this.mercadoLivreElements.getBotaoCep().click();
        await this.mercadoLivreElements.getCampoCep().fill('99999-999');
        await this.mercadoLivreElements.getBotaoUsar().click();
    }

    async mensagemErro(): Promise<void> {
        await expect(this.mercadoLivreElements.getMensagemErro()).toBeVisible();
      }
}