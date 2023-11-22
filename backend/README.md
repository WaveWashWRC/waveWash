# File Structure

```

├── controllers
│   ├── User
│   │   └── userAuth.js
│   └── Vendor
│       └── vendorAuth.js
├── database
│   ├── connect.js
│   ├── UserModel.js
│   └── VendorModel.js
├── middleware
│   └── authenticate.js
├── package.json
├── package-lock.json
├── README.md
├── routes
│   ├── User
│   │   └── auth.js
│   └── Vendor
│       └── auth.js
└── server.js

```

# Environment variables

```
PORT = <PORT NUMBER>
DB_URI = <MongoDB URI>
JWT_SECRET_KEY = <JWT KEY>
```
# Setup 

```
npm install
npm start
```
# API Endpoints

# USERS

### Registeration Route 

```POST /api/auth/register```
* Send HTTP Request with the following JSON format

```
{
    "name": "John Doe",
    "phoneNumber": <phone number>,
    "emailId": <email id>,
    "password":<password>,
    "location":{
        "pincode": <pincode>,
        "state": <state>,
        "city": <city>,
        "address": <street address>,
        "landmark": <landmark>
    }
}
```

* Response (STATUS 201)
  
  On successful submission
```
  { 
    msg: 'new user created', 
    success: true 
  }
```

### Login Route

```POST /api/auth/login```
* Send HTTP Request with the following JSON format

```
{
    "emailId": <email id>,
    "password": <password>
}
```
* Response format on success (STATUS 200)

    ```
    {
        "success": true,
        "msg": "authenticated",
        "username": "John Doe",
        "userId": "6544f95e6a34e9464bd73382",
        "token": <JSON WEB TOKEN>
    }
    ```

    # VENDORS

    ```POST /api/vendor/auth/register```
* Send HTTP Request with the following JSON format
```
{
    "emailId":<email>,
    "password": <password>,
    "phoneNumber":<phn>,
    "ownerName":"Vishwas R",
    "companyName":"Smooth Mechanix",
    "location":{
        "pincode":"562652",
        "city":"Bengaluru",
        "state":"Karnataka",
        "address":"BMS Road, Basavanagudi",
        "landmark":"Temple"
    }
}
```
* Response (STATUS 200)

```
{
  "success" : true,
  "msg":  "new vendor created"
}
```
### Login Route

```POST /api/vendor/auth/login```
* Send HTTP Request with the following JSON format

```
{
    "emailId": <email id>,
    "password": <password>
}
```
* Response format on success (STATUS 200)

    ```
    {
        "success": true,
        "msg": "authenticated",
        "companyName": "Smooth Mechaniz",
        "vendorId": <_id>,
        "token": <JSON WEB TOKEN>
    }
    ```
# AD ROUTER
include headers with
 ```authorization : Bearer <sessionToken>``` in all reqs except the GET req
## Create ads
 
* POST  /api/ad/create

Req body
```
{
    "desc":"My bike needs a wash... had tough roadtrip this weekend",
    "services":{
        "category":"Bike wash",
        "expectedPrice":"500.0"
    },
    "location":{
        "pincode": "560078",
        "state": "Karnataka",
        "city": "Bengaluru",
        "address": "5 cross, KS Layout, Banashankari",
        "landmark": "Hotel Dwarka Grand"
    }
}
```
## UPDATE ad

 PUT /api/ad/update/:id

id is the advertisement id --> needs to be passed in every update req
Add same body as the CREATE req

## GET ALL THE ADS

```note : filters will be added soon ```

Make a GET req to /api/ad/get/all

```
[
    {
        "location": {
            "pincode": 560078,
            "state": "Karnataka",
            "city": "Bengaluru",
            "address": "ITPL, Whitefield",
            "landmark": "ITPL"
        },
        "services": {
            "category": "Car wash - SUV",
            "expectedPrice": {
                "$numberDecimal": "600"
            }
        },
        "_id": "6556b601787375393d7f4caa",
        "customerId": "6544f95e6a34e9464bd73382",
        "desc": "Got my Jeep dirty after off-roading...need some urgent service!",
        "images": [],
        "createdAt": "2023-11-17T00:38:25.602Z",
        "updatedAt": "2023-11-17T00:47:17.949Z",
        "__v": 0
    },
    {
        "location": {
            "pincode": 560078,
            "state": "Karnataka",
            "city": "Bengaluru",
            "address": "KS Layout, Banashankari",
            "landmark": "DSC"
        },
        "services": {
            "category": "Bike wash",
            "expectedPrice": {
                "$numberDecimal": "500.0"
            }
        },
        "_id": "6556b916acc587be0f5335d3",
        "customerId": "6544f95e6a34e9464bd73382",
        "desc": "My bike needs a wash... had tough roadtrip this weekend",
        "images": [],
        "createdAt": "2023-11-17T00:51:34.365Z",
        "updatedAt": "2023-11-17T00:51:34.365Z",
        "__v": 0
    }
]
```