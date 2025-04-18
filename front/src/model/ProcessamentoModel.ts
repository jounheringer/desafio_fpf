import Status from './ProcessamentoStatus';

class ProcessamentoModel {
  id: number;
  num1: number;
  num2: number;
  num3: number;
  average: number;
  median: number;
  status: Status;

  constructor(id: number, num1: number, num2: number, num3: number, media: number, mediana: number, status: Status) {
    this.id = id
    this.num1 = num1
    this.num2 = num2
    this.num3 = num3
    this.average = media
    this.median = mediana
    this.status = status
  }
}

export default ProcessamentoModel;
