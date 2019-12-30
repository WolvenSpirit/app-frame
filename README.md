# app-frame [in progress]
Scaffolding for a standard angular (~8.+) application based on material library that can be imported as a npm module.
---

This is meant to be included as a npm module, this repository contains the source of said module.
Why like this? Most scaffolding that are available require you to refactor them and then you are faced 
with the fact that a lot of that scaffolding was put in place using some style of organizing things etc. 
but still requires you to go there and change the stuff that it generated as stubs.

This approach exports a service and a component, the service will contain most properties that are configurable 
and the component is provided so you can place it on your routes and make a nested route junction. Thats pretty much it, arrays are provided for writing your links with labels put a logo, sidebar stuff and so on.


- Purpouse:
    - Responsive out of the box.
    - Meant to provide a faster development time for "simple" apps that do not require stylish extremely custom navbars etc.
    - It aims to provide customizable navbar with links, logo, menu dropdown, color theme, same goes for sidebar.
    - To export labels and support/ provide a mechanism for switching language either from nav or sidebar.

--- 

Running this:
-   double check:
    - @angular-devkit/build-angular
    - ! most of the stuff in the package.json don't strip it of any.

#### This feature module is bundled using https://github.com/ng-packagr/ng-packagr 