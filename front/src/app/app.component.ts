import {Component, inject, OnInit, signal} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {TableModule} from 'primeng/table';
import ProcessamentoModel from '../model/ProcessamentoModel';
import ProcessamentoDto from '../model/ProcessamentoDto';
import {PrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura';
import {ApiService} from './service/api.service';
import { ToastModule } from 'primeng/toast';
import {MessageService} from 'primeng/api';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ButtonModule, FormsModule, InputNumberModule, TableModule, ToastModule],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  primeNgConfig = inject(PrimeNG);
  isDarkMode = signal(false);

  constructor(private api: ApiService, private messageService: MessageService) {
    this.primeNgConfig.theme.set({
      preset: Aura,
      options: {
        darkModeSelector: '.dark',
      },
    });
  }

  title = 'front';

  num1: number | null = null;
  num2: number | null = null;
  num3: number | null = null;

  num1Touched = false;
  num2Touched = false;
  num3Touched = false;

  resultados: ProcessamentoModel[] = [];

  refesh() {
    this.api.getNumbers().subscribe(data => {
      this.resultados = data;
    })
  }

  processar() {
    this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Enviado requisicao de processamento'});
    this.api.sendNumbers(new ProcessamentoDto(this.num1, this.num2, this.num3)).subscribe({
      next: (data) => {
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Processamento realizado com sucesso'});
        this.getAll()
        this.clearInputs()
      },
      error: (error) => {
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao processar requisicao '});
      }
    })
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('dark');
    this.isDarkMode.set(!this.isDarkMode());
  }

  ngOnInit(): void {
    this.getAll()
  }

  private clearInputs() {
    this.num1 = null;
    this.num2 = null;
    this.num3 = null;
    this.num1Touched = false;
    this.num2Touched = false;
    this.num3Touched = false;
  }

  private getAll() {
    this.api.getNumbers().subscribe(data => {
      console.log(data);
      this.resultados = data;
    })
  }
}
