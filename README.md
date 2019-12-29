# app-frame

---

This is meant to be included as a npm module, this repository contains the source of said module.
- Purpouse:
    - Responsive out of the box.
    - Meant to provide a faster development time for "simple" apps that do not require stylish extremelly custom navbars etc.
    - It aims to provide customizable navbar with links, logo, menu dropdown, color theme, same goes for sidebar.
    - To export labels and support/ provide a mechanism for switching language either from nav or sidebar.
    - Still give you control of its routing, it looks for constant `subRoutes1` of type `:Route[]` in your default routes file and would bootstrap your own app components if you register them there. Your routes would need a path pointing to the feature's MainComponent from your own app router with `children:subRoutes1`, and you're good to go.