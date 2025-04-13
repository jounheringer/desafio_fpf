import ProcessamentoStatus from './ProcessamentoStatus';

class ProcessamentoResponse {
  id: number;
  status: ProcessamentoStatus

  constructor(id: number, status: ProcessamentoStatus) {
    this.id = id
    this.status = status
  }
}

export default ProcessamentoResponse;
