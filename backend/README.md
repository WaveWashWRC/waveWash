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

    # File Structure

    ```
    .
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
    