import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //exports significan que cosas quiero hacer publicas o visibles.
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule //ngIf ngFor ngIfElse por eso se importa esta libreria.
    ]
})

export class HeroesModule {}