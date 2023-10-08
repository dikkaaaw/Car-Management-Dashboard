# Car-Management-Dashboard
To submit challenge chapter 04 from Binar Academy

# Installation
1. Clone the project
```bash
git clone https://github.com/dikkaaaw/Car-Management-Dashboard
```
2. Go to your directory
```bash
cd challenge-04
```
3. Install dependencies
```bash
npm install
```
4. Set .env
```bash
PORT = YOUR_PORT

# Config for Imagekit
PUBLIC_KEY = IMAGEKIT_PUBLICKEY
PRIVATE_KEY = IMAGEKIT_PRIVATEKEY
URL_ENDPOINT = YOUR_URL_ENDPOINT

# Config for Database
DB_USERNAME = YOUR_DATABASE_USERNAME
DB_NAME = YOUR_DATABASE_NAME
DB_PASS = YOUR_POSTGRES_PASS
DB_HOST = YOUR_HOST
```
5. Run the server
```bash
npm run dev
```
6. Open the browser
```bash
browse http://localhost:port
```

# Rest APi
1. Get All Cars Data
```http
GET /cars
```
Response :
```bash
{
    "status": "success",
    "data": {
        "Cars": [
            {
                "id": 7,
                "name": "Avanza",
                "price": 200000,
                "category": "large",
                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fid%2Fsearch%3Fq%3Dtoyota%2BAvanza&psig=AOvVaw0C3jXczUFw5HbdIW4wdZ78&ust=1696794080723000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCID-lNfY5IEDFQAAAAAdAAAAABAD",
                "createdAt": "2023-10-08T01:15:45.960Z",
                "updatedAt": "2023-10-08T01:15:45.960Z"
            },
            {
                "id": 8,
                "name": "Brio",
                "price": 150000,
                "category": "medium",
                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fid%2Fsearch%3Fq%3Dtoyota%2BAvanza&psig=AOvVaw0C3jXczUFw5HbdIW4wdZ78&ust=1696794080723000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCID-lNfY5IEDFQAAAAAdAAAAABAD",
                "createdAt": "2023-10-08T01:16:04.782Z",
                "updatedAt": "2023-10-08T01:16:04.782Z"
            }
        ]
    }
}
```

2. Get car data by Id
```http
GET /cars/:id
```
Response :
```bash
{
    "status": "success",
    "message": "Data found!",
    "data": {
        "Cars": {
            "id": 7,
            "name": "Avanza",
            "price": 200000,
            "category": "large",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fid%2Fsearch%3Fq%3Dtoyota%2BAvanza&psig=AOvVaw0C3jXczUFw5HbdIW4wdZ78&ust=1696794080723000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCID-lNfY5IEDFQAAAAAdAAAAABAD",
            "createdAt": "2023-10-08T01:15:45.960Z",
            "updatedAt": "2023-10-08T01:15:45.960Z"
        }
    }
}
```
3. Update car data by id
```http
PATCH /cars/:id
```
Response : 
```bash
{
    "status": "success",
    "message": "Success update data!",
    "data": {
        "updateCar": [
            1,
            [
                {
                    "id": 7,
                    "name": "Jazz",
                    "price": 150000,
                    "category": "small",
                    "image": "https://ik.imagekit.io/mtworq56z/VmfueMMOko09BwpogWPFmBUShLbLDzik4wPP6AFz.png?updatedAt=1696730345656",
                    "createdAt": "2023-10-08T01:59:33.974Z",
                    "updatedAt": "2023-10-08T02:00:35.877Z"
                }
            ]
        ]
    }
}
```
4. Delete car by id
```http
DELETE /cars/:id
```
```bash
{
    "status": "success",
    "message": "Success delete data!"
}
```
5. Create new car data
```http
POST /cars
```
```bash
{
    "status": "success",
    "data": {
        "newCar": {
            "id": 7,
            "name": "Brio",
            "price": 150000,
            "category": "small",
            "image": "https://ik.imagekit.io/mtworq56z/VmfueMMOko09BwpogWPFmBUShLbLDzik4wPP6AFz.png?updatedAt=1696730345656",
            "updatedAt": "2023-10-08T01:59:33.974Z",
            "createdAt": "2023-10-08T01:59:33.974Z"
        }
    }
}
```

# ERD for this project!
![erd](https://github.com/dikkaaaw/Car-Management-Dashboard/assets/142596631/6e2f1945-f130-4184-9ac2-6f55e1461b4a)

# Dashboard Page
```bash
/dashboard
```
<img width="960" alt="dashboardimage" src="https://github.com/dikkaaaw/Car-Management-Dashboard/assets/142596631/26bdc5ae-ceb3-465f-8c0d-547dcea60b05">

