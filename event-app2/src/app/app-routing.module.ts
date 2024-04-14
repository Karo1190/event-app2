import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  { path: '', component: SectionComponent },
  { path: 'event/:id', component: EventDetailsComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
