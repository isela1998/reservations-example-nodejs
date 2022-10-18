## API Hotel reservations

This technical test shows how to implement a simple REST API using Node.js, Express and Docker.
The endpoints are:

For Clients:

- POST / (Allows the registration of a new client: name, nif, address, phone, status)

For Payment Methods:

- POST / (Allows the registration of a new payment method: name, status)

For Rooms:

- POST / (Allows the registration of a new room: number, description, price per day, status)

For Reservations:

- POST / (Allows the registration of a new reservation: client, room, days, amount, payment method, status)

- PATCH /:id (Allows update a reservation to paid status)

- DELETE /:id (Allows update a reservation to deleted status)

- GET / (Allows get all reservations)

All endpoints return a simple response in JSON.

## Build

```
docker build -t reservations .
```

## Run

Run in default port `4000`:

```
docker run -it -p 4000:4000 reservations
```

```
docker compose run reservations npm start
```

```
docker compose up -d
```

## Postman Documentation

```
https://documenter.getpostman.com/view/23002359/2s847FtDCn
```

## NOTE:

I hadn't used Docker before, but I did some research and learned about the basic implementation, I hope I got it right. It's working!
