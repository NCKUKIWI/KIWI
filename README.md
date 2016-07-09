# KIWI

一個提供課程心得的校園平台

## Install

- Install package
```
  npm install
```

- Start server
```
  npm start
```

## Program structure

```
├── app.js
├── assets
│   ├── css
│   └── js
├── routes   
│   └── xxxx.js  
│── model
│   └── db.js  
└── views
    ├── public
    └── xxxx.ejs
```

- `app.js` -> setting of the server
- `assets` -> custom css and js file
  - `css`
  - `js`
- `routes` -> setting of the routes (Controller)
- `model` -> database function 
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

###Insert data into table

db.Insert(table,data,callback);

####Example:

`var data = {
  'col1': 'value1',
  'col2': 'value2',
}

db.Insert('table_name',data,function(err,result){...});`

###Delete data by Id

db.DeleteById(table,id,callbak);

####Example:

`db.DeleteById('table_name','2',function(err){...});`

###Get all data from table order by column

db.GetAll(table,order,callback);

####Example:

`db.GetAll('table_name','columns_name',function(datas){...});`

###Get specific data from table order by column

db.GetCols(table,columns,order,callback);

####Example:

`var columns = ['columns_name1','columns_name2'];

db.GetCols('table_name',columns,'columns_name',function(datas){...});`

###Find one data by Id (just on data)

db.FindbyID(table,id,callback);

####Example:

`db.FindbyID('table_name','2',function(data){...});`

###Find one datas by Id (one or more datas)

db.FindbyColumn(table,col,value,callback);

####Example:

`db.FindbyColumn('table_name','columns_name','2',function(){...});`
