import { VideoMasterComponent } from './video-master/video-master.component';
import { Component } from '@angular/core';
import { UserComponent } from "./user/user.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-main', 
  imports: [RouterOutlet, RouterLink, RouterLinkActive, UserComponent,HomeComponent,VideoMasterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
