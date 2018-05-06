### To run the app
1. Clone repository
```
git clone https://github.com/hobroker/domain-hack.git
```
2. Install dependencies
```
yarn install
```
3. Run the app in development mode
```
yarn run server # start the API
yarn start # frontend
```
Open http://localhost:3000 to view it in the browser.
By default the API is listening on PORT ```8080```

### To run the app in production mode
```
yarn run server # starts the API and statically serves files from ```/build``` folder
```
Open http://localhost:8080 to view it in the browser.
