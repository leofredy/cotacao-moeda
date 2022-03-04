export default class FetchService {
  private urlBase = "http://economia.awesomeapi.com.br/json/last/";
  constructor(
    private codesout: string[], 
    private codein: string,
  ) {}

  private mountedUrl() {
    let templateCodesout = ``;
    this.codesout.forEach((codeout, index) => {
      if (index < this.codesout.length - 1) {
        templateCodesout += `${this.codein}-${codeout},`;
      } else {
        templateCodesout += `${this.codein}-${codeout}`;
      }
    });
    return `${this.urlBase}${templateCodesout}`;
  }

  public request() {
    return fetch(this.mountedUrl());
  }
}