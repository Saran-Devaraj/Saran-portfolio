export class config {
  constructor() {
    this.date = new Date();
  }
  Dateformat() {
    const options = { year: "numeric"};
    return new Date(this.date).toLocaleDateString(undefined, options);
  }
}
