import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CotizarComponent }  from './components/cotizar/cotizar.component';
import { GarantiaComponent } from './components/garantia/garantia.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { LineasNegocioComponent } from './components/lineas-negocio/lineas-negocio.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderAlternativoComponent } from './components/slider-alternativo/slider-alternativo.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'cotizar', component: CotizarComponent },
  { path: 'garantia', component: GarantiaComponent },
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent },
  { path: 'lineas-negocio', component: LineasNegocioComponent},
  { path: 'slider', component: SliderComponent},
  { path: 'sliderAlt', component: SliderAlternativoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
