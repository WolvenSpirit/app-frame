import { Injectable } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

export interface MENU_BUTTONS{
  label:string
  clickfn:any
  tooltip?:string
}
// This is meant to work with normal links and not ones with relative pathing, query params etc. at least for now.
export interface MENU_LINKS{
  label:string
  path:string
  tooltip?:string
}

export interface TOOLTIPS{
  navbar_menu_button:string
  sidebar_toggle:string
}

@Injectable({
  providedIn: 'root'
})
/** 
 * ConfigService is meant to expose all modifiable properties of the elements included in this feature module.
 * Exception: the sub router that this feature module registers will look into your default routing file 
 * for a variable named `subRoutes1` which should be of type `Route[]` just like your routes constant.
*/
export class ConfigService {
  // Config mode side/push and autosize true/false
  // default side, true
  public sidebar_config = {mode:'side',autosize:true}
  // Escaped sidebar as navbar logo
  public sidebar_logo:SafeHtml;
   // Escaped markup as navbar logo
  public navbar_logo:SafeHtml;
  // Escaped markup, it will be inside a flex span element
  public navbar_left:SafeHtml;
  // Escaped markup, it will be inside a flex span element
  public navbar_right:SafeHtml;
  public menuButtons:MENU_BUTTONS[];
  public menuLinks:MENU_LINKS[];
  public viewport_height:string = '100vh';
  public drawer_width:string = '30vh';
  public toolbar_color:string = "primary";
  public tooltips:TOOLTIPS;
  constructor() { }
}
