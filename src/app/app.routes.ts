import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';

export const routes: Routes = [
    {'path': '', component: HomeComponent},
    {'path': 'sobre', component: SobreComponent},
    {'path': 'tecnologias', component: TecnologiasComponent},
    {'path': 'projetos', component: ProjetosComponent}
];
