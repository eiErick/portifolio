import { Component } from '@angular/core';
import { ContainerProjetosComponent } from "../../components/container-projetos/container-projetos.component";

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [ContainerProjetosComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  projects = [
    {'img': 'cardapio.png', 'name': 'Onrange', 'description': 'Projeto de Cardápio online escolar', 'technology': 'JAVASCRIPT, PWA, HTML, CSS, GIT', 'link': 'https://eierick.github.io/cardapio/alunos', 'github': 'https://github.com/eierick/cardapio'},
    {'img': 'stopwatch.png', 'name': 'Stopwatch', 'description': 'Projeto de cronometro para web e app desktop', 'technology': 'JAVASCRIPT, ELECTRON, HTML, CSS, GIT', 'link': 'https://eierick.github.io/stopwatch', 'github': 'https://github.com/eierick/stopwatch'},
    {'img': 'passcraft.png', 'name': 'Passcraft', 'description': 'Projeto de gerador de senha aleatória para web e app desktop', 'technology': 'JAVASCRIPT, ELECTRON, HTML, CSS, GIT', 'link': 'https://eierick.github.io/passcraft', 'github': 'https://github.com/eierick/passcraft'},
    {'img': 'qnote.png', 'name': 'Qnote', 'description': 'Projeto de criador notas rápidas para web e app desktop', 'technology': 'JAVASCRIPT, ELECTRON, HTML, CSS, GIT', 'link': 'https://eierick.github.io/qnote', 'github': 'https://github.com/eierick/qnote'},
    {'img': 'textcraft.png', 'name': 'Textcraft', 'description': 'Projeto de editord de textos simples para web e app desktop', 'technology': 'JAVASCRIPT, ELECTRON, HTML, CSS, GIT', 'link': 'https://eierick.github.io/textcraft', 'github': 'https://github.com/eierick/textcraft'}
  ]
}
