import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { MiddleheaderComponent } from './middleheader/middleheader.component';
import { BottomComponent } from './bottom/bottom.component';
import { ListitemsComponent } from './listitems/listitems.component';
@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    MiddleheaderComponent,
    BottomComponent,
    ListitemsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
