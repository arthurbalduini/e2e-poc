## Simple project to setup e2e tests with cypress

Feel free to feel bad for the code.

This projects uses react 16.13.1 version with hooks, contextAPI, end-to-end tests created with CypressIO and a fake backend created with json-server.

## Run project

No mistery:
```
    npm start
```

It will start the project in the port 3000.

## Run fake-backend

```
    cd fake-backend
    npm start
```

It will start the fake-backend in the port 3007

## Run tests

After starting the application and the fake-backend:

```
    npm start cypress:open
```