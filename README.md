# KIWI

一個提供課程心得的校園平台

## Install

- Install package
```
  npm install
```

- Start server
```
  node app.js
```

## Program structure

```
├── app.js
├── asset
│   ├── css
│   └── js
├── routes   
│   └── xxxx.js  
└── views
    ├── public
    └── xxxx.ejs
```

- `app.js` -> setting of the server
- `routes` -> setting of the routes (Controller)
- `views` -> template files (View)
    - `public` -> layouts

## REST

- `index` -> GET: show all
- `show` -> GET: show single
- `new` -> GET: new page
- `create` -> POST: add into db
- `edit` -> GET: edit page
- `update` -> POST: update into db
- `delete` -> DEL: del data in db

##ejs locals turtorial

設置該頁面的layout

`<% layout('../path/layout') %>`

導入片段的 html or ejs

`<% include path/view %>`
