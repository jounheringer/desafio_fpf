class ProcessamentoDto {
  num1: number | null;
  num2: number | null;
  num3: number | null;

  constructor(num1: number | null, num2: number | null, num3: number | null) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
  }
}

export default ProcessamentoDto;
