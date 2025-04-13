import {Component, inject, signal} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {TableModule} from 'primeng/table';
import ProcessamentoModel from '../model/ProcessamentoModel';
import ProcessamentoDto from '../model/ProcessamentoDto';
import Status from '../model/ProcessamentoStatus';
import {PrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ButtonModule, FormsModule, InputNumberModule, TableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  primeNgConfig = inject(PrimeNG);
  isDarkMode = signal(false);

  constructor() {
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

  resultados: ProcessamentoModel[] = [
    new ProcessamentoModel(1, 1, 2, 3, 4, 5, Status.PROCESSANDO),
    new ProcessamentoModel(2, 2, 3, 4, 5, 6, Status.PROCESSANDO),
    new ProcessamentoModel(3, 3, 4, 5, 6, 7, Status.PROCESSANDO),
    new ProcessamentoModel(4, 4, 5, 6, 7, 8, Status.PROCESSANDO),
    new ProcessamentoModel(5, 5, 6, 7, 8, 9, Status.PROCESSANDO),
    new ProcessamentoModel(6, 6, 6, 7, 8, 9, Status.PROCESSANDO),
  ];
  form: ProcessamentoDto = new ProcessamentoDto(this.num1, this.num2, this.num3);

  processar() {

  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('dark');
    this.isDarkMode.set(!this.isDarkMode());
  }
}
