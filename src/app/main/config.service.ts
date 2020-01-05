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
export interface NAVBAR_BUTTON{
  label:string
  color?:string
  class?:string
  clickfn:any
  tooltip?:string
  matBadge?:string
  matBadgePosition?:string
  matBadgeColor?:string
  matBadgeSize?:string
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
  // it will be inside a flex span element
  public navbar_left:NAVBAR_BUTTON[] = [];
  // it will be inside a flex span element
  public navbar_right:NAVBAR_BUTTON[] = [];
  public menuButtons:MENU_BUTTONS[];
  public menuLinks:MENU_LINKS[];
  public viewport_height:string = '80vh';
  public drawer_width:string = '30vh';
  public toolbar_color:string;
  public toolbar_class:string;
  public tooltips:TOOLTIPS;
  constructor() { }
}
