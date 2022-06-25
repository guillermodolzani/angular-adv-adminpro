import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';


 declare function customIniitFunctions()
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent 
implements OnInit {




  constructor(private SettingsService: SettingsService) { }

  ngOnInit(): void {
  
     customIniitFunctions()
   
}
  
 
  //./assets/css/colors/default-dark.css"
}