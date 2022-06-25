import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public linkTheme=document.querySelector('#theme')

  constructor() {
   
  const url= localStorage.getItem('theme') || './assets/css/colors/default-dark.css'

  // const url=`./assets/css/colors/${theme}.css`

  this.linkTheme.setAttribute('href',url)
   }

   
   ChangeTheme(theme:string){

    

    // public links:NodeListOf<Element>


    //para cambiar los atributos de color
    const url=`./assets/css/colors/${theme}.css`
    console.log(url)
    this.linkTheme.setAttribute('href',url) 

    //para uqe no se pierda el color de la pagina cuando la recargo
    localStorage.setItem('theme', url) 

      this.checkCurrentTheme()

  }

  checkCurrentTheme(){

    const links=document.querySelectorAll('.selector')

    links.forEach(elem=>{
      elem.classList.remove('working')
      const btnTheme=elem.getAttribute('data-theme')
      const btnThemeUrl=`./assets/css/colors/${btnTheme}.css`
      const currentTheme=this.linkTheme.getAttribute('href')

      if(btnThemeUrl===currentTheme){
        elem.classList.add('working')
      }
    })
  }
}
