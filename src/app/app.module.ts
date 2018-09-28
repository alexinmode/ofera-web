import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//Rutas
import{ APP_ROUTING } from './app.routes';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { GarantiaComponent } from './components/garantia/garantia.component';
import { CotizarComponent } from './components/cotizar/cotizar.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { LineasNegocioComponent } from './components/lineas-negocio/lineas-negocio.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderAlternativoComponent } from './components/slider-alternativo/slider-alternativo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    GarantiaComponent,
    CotizarComponent,
    PreguntasFrecuentesComponent,
    LineasNegocioComponent,
    SliderComponent,
    SliderAlternativoComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFontAwesomeModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
