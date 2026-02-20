export class FooterHelper {
  constructor() {}

  static handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("Email submitted:", email);
  }
}
