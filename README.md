# My project's name

Meraki

## Description

This app is a portfolio about ideas and project my gf is developing.
The mission is to create products that allow customers to purchase consciounsly sourced and ethicaly made products.

Admin: 
CRUD - 
Create product
Edit product
Update product
Delete product

User:
View list of products

### setup .env

you need to setup the `.env` like `.env.sample`
​

### Install the app

```
npm install
```

### USER STORY

404 - As a user I want to see 404 page when I go to a page that doesn’t exist

500 - As a user I want to see a error page when the server doesn't work

Homepage - As a user I want to be able to access the homepage so that I see what the app is about

Register - As a user I want to register as an admin on the webpage

Login - As a user I want to be able to log in as an Admin on the webpage

Logout - As a user I want to be able to log out as an Admin from the webpage

Product page - As a user I want to be able to see the product

About - As a user I want to be able to see the details of the company - Email to contact


### ADMIN STORY

Add a product - As a user I want to be able to add a product

See products - As a user I want to be able to see all the products

Delete page - As a user I want to be able to delete products

Update page - As a user I want to be able to update features of the product



### Run the app

```
npm run start
```

​

## REST API endpoints

Homepage	GET	/	See the main page		

Register form	GET	/auth/register	See the form to register		

Register	POST	/auth/register	Register a user	{ mail, password }	/user-profile

Log in form	GET	/auth/login	See the form to log in		

Log in	POST	/auth/login	Log in the user	{ mail, password }	/zoo

Log out	POST	/auth/logout	Log out a user		/

Admin page list	GET	/user-pages-list	See user's pages		
Product add form	GET	/page/add	See form to upload a new product		
Product add	POST	/product/add	Upload a product to admin collection	
Product profile	GET	/collection/{productid}	See the product page with editable form		
Product edit form	GET	/collection/{productid}/edit	See edit form with product's information		
Product edit	POST	/admin/collection/{productid}/edit	Add product's new information	
Product delete	POST	/admin/collection/{productid}/delete	Delete product from admin collection
​					
## Links

- [Slides]()
- [Frontend repository]()
- [Deployed version]()
