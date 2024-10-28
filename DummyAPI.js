describe('Dummy Tests', () => {
    let res;
    //STEP 1
    // TO login the page first we should get the access token
    it.only('Login Test', () => {
        cy.request({
            method: "POST",
            url: 'https://dummyjson.com/auth/login',
            body:
            {
              "username": "emilys",
              "password": "emilyspass",
              "expiresInMins": 30 
            },
            headers: {
                "content-Type" : "application/json"
            }
        })
        .then((Lakshmi) => {
            expect(Lakshmi.status).to.eq(200);
            // const res = Json.Stringify(Lakshmi.body);
            res = Lakshmi.body.accessToken
            cy.log(res);
        })
        
    });
    // STEP 2
    // To GET the authorization user
    it.only('Get Auth User', () => {
        cy.request({
            method: "GET",
            url: 'https://dummyjson.com/auth/me',
            headers: {
                "Authorization" : "Bearer " + res,
                "content-Type" : "application/json"
            }
        })
        .then((Lakshmi) => {
            expect(Lakshmi.status).to.eq(200);
            const res = JSON.stringify(Lakshmi.body);
            cy.log(res);
        })  
    });
    // STEP 3
    // To refresh user by using the access token process
    it.only('Refresh Token', () => {
        cy.request({
            method: "POSt",
            url: 'https://dummyjson.com/auth/refresh',
            body: {
                "refreshToken" : res,
                "expiresInMins": 30,
            },
            headers: {
                "Authorization" : "Bearer " + res,
                "content-Type" : "application/json"
            }
        })
        .then((Lakshmi) => {
            expect(Lakshmi.status).to.eq(200);
            const res = JSON.stringify(Lakshmi.body);
            cy.log(res);
        })
        
    });
    // STEP 4
    // To GET all products 
    it.only('Get all products', () => {
        cy.request({
            method: "GET",
            url: 'https://dummyjson.com/products',
            headers: {
                "content-Type" : "application/json"
            }
        })
        .then((Lakshmi) => {
            expect(Lakshmi.status).to.eq(200);
            const res = JSON.stringify(Lakshmi.body);
            cy.log(res);
        })
    });
    // STEP 5
    // To specify the single product from all product by given the ID number
    // It will give that specify ID number details
    it.only('Get single products', () => {
        cy.request({
            method: "GET",
            url: 'https://dummyjson.com/products/1',
            headers: {
                "content-Type" : "application/json"
            }
        })
        .then((Lakshmi) => {
            expect(Lakshmi.status).to.eq(200);
            const res = JSON.stringify(Lakshmi.body);
            cy.log(res);
        })        
    });
    // STEP 6
    // TO search for a product from all the products with specifying the product name
    it.only('Search products', () => {
        cy.request({
            method: "GET",
            url: 'https://dummyjson.com/products/search?q=phone',
            headers: {
                "content-Type" : "application/json"
            }
        })
        .then((Lakshmi) => {
            expect(Lakshmi.status).to.eq(200);
            const res = JSON.stringify(Lakshmi.body);
            cy.log(res);
        })        
    });
    // STEP 7
    // To GET the limit products and skip of the some products
    it.only('Limit and skip products', () => {
        cy.request({
            method: "GET",
            url: 'https://dummyjson.com/products?limit=10&skip=10&select=title,price',
            headers: {
                "content-Type" : "application/json"
            }
        })
        .then((Lakshmi) => {
            expect(Lakshmi.status).to.eq(200);
            const res = JSON.stringify(Lakshmi.body);
            cy.log(res);
        })        
    });
    // STEP 8
    // TO sort the products what we want from all the products
    it.only('Sort products', () => {
        cy.request({
            method: "GET",
            url: 'https://dummyjson.com/products?sortBy=title&order=asc',
            headers: {
                "content-Type" : "application/json"
            }
        })
        .then((Lakshmi) => {
            expect(Lakshmi.status).to.eq(200);
            const res = JSON.stringify(Lakshmi.body);
            cy.log(res);
        })        
    });
    // STEP 9
    // To GET all products in the category
    it.only('Get all products categories', () => {
        cy.request({
            method: "GET",
            url: 'https://dummyjson.com/products/categories',
            headers: {
                "content-Type" : "application/json"
            }
        })
        .then((Lakshmi) => {
            expect(Lakshmi.status).to.eq(200);
            const res = JSON.stringify(Lakshmi.body);
            cy.log(res);
        })        
    });
    // STEP 10
    // To GET the product category ist
    it.only('Get products categories list', () => {
        cy.request({
            method: "GET",
            url: 'https://dummyjson.com/products/category-list',
            headers: {
                "content-Type" : "application/json"
            }
        })
        .then((Lakshmi) => {
            expect(Lakshmi.status).to.eq(200);
            const res = JSON.stringify(Lakshmi.body);
            cy.log(res);
        })        
    });
    // STEP 11
    // TO GET specfied product from the category list
    it.only('Get products by a category', () => {
        cy.request({
            method: "GET",
            url: 'https://dummyjson.com/products/category/smartphones',
            headers: {
                "content-Type" : "application/json"
            }
        })
        .then((Lakshmi) => {
            expect(Lakshmi.status).to.eq(200);
            const res = JSON.stringify(Lakshmi.body);
            cy.log(res);
        })        
    });
    // STEP 12
    // To ADD a new product to the category list
    it.only('Add a new product', () => {
        cy.request({
            method: "POST",
            url: 'https://dummyjson.com/products/add',
            body:
            {
                "title": "BMW Pencil"
            },
            headers: {
                "content-Type" : "application/json"
            }
        })
        .then((Lakshmi) => {
            expect(Lakshmi.status).to.eq(201);
            const res = JSON.stringify(Lakshmi.body);
            cy.log(res);
        })        
    });
    // STEP 13
    // To UPDATE a product in the category list
    it.only('Update a product', () => {
        cy.request({
            method: "PUT",
            url: 'https://dummyjson.com/products/1',
            body:
            {
                "title": "iPhone Galaxy +1"
            },
            headers: {
                "content-Type" : "application/json"
            }
        })
        .then((Lakshmi) => {
            expect(Lakshmi.status).to.eq(200);
            const res = JSON.stringify(Lakshmi.body);
            cy.log(res);
        })        
    });
    // STEP 14
    // To DELETE a specific product from the category list
    it.only('Delete a product', () => {
        cy.request({
            method: "DELETE",
            url: 'https://dummyjson.com/products/1',
            headers: {
                "content-Type" : "application/json"
            }
        })
        .then((Lakshmi) => {
            expect(Lakshmi.status).to.eq(200);
            const res = JSON.stringify(Lakshmi.body);
            cy.log(res);
        })        
    });
});