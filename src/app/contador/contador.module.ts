import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    //exports significan que cosas quiero hacer publicas o visibles.
    exports: [
        ContadorComponent
    ]
})

export class ContadorModule {}