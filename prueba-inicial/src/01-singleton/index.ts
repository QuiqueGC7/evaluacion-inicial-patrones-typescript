class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public saludar(): void {
    console.log("No se saludar, pero soy un singleton");
  }
}

const instancia1 = Singleton.getInstance();
const instancia2 = Singleton.getInstance();

console.log(instancia1 === instancia2);
instancia1.saludar();