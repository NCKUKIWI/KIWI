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
├── assets
│   ├── css
│   └── js
├── routes   
│   └── xxxx.js  
└── views
    ├── public
    └── xxxx.ejs
```

- `app.js` -> setting of the server
- `assets` -> custom css and js file
  - `css`
  - `js`
- `routes` -> setting of the routes (Controller)
- `views` -> template files (View)
  - `public` -> layouts

##View

###ejs locals turtorial

設置該頁面的layout

`<% layout('../path/layout') %>`

導入片段的 html or ejs

`<% include path/view %>`

##Controller

###REST

- `index` -> GET: show all
- `show` -> GET: show single
- `new` -> GET: new page
- `create` -> POST: add into db
- `edit` -> GET: edit page
- `update` -> POST: update into db
- `delete` -> DEL: del data in db

###Body parser

`url?id=1`

req.query.id

`url/:id`

req.params.id

`pass by table`

req.body.id

##Model

請先加入

`var db = require(./db);`

datas就是資料庫回傳的資料

### Get all data from table

`db.getall( tablename , function(datas){
  ......
});`

Example: 拉出 post 這個 table 中的所有資料

`db.getall( 'post' , function(datas){
  res.render('views',{'data':datas});
});`

### Get specific columns from table

`db.getcols( tablename , colsname , function(datas){
  ......
});`

Example: 拉出 post 這個 table 中的 id 跟 title 欄位

`db.getcols( 'post' , 'id,title' , function(datas){
  res.render('views',{'data':datas});
});`

### Find data by ID

`db.findbyID( table , id , function(datas){
  ......
});`

Example: 拉出 post 這個 table 中 id 為 1 的資料

`db.getcols( 'post' , 1 , function(datas){
  res.render('views',{'data':datas});
});`
