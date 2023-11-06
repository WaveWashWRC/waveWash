# API Endpoints

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