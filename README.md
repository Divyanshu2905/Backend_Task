# Project Name

This project is a backend task aimed at developing a RESTful API to fetch price and volume data from sample databases designed previously. 
Additionally, it involves setting up a MongoDB Atlas cluster and designing Schemas for PRice and Volume Data.

## Befor testing please ensure to download the dependencies using  npm install.

## API Development and Integration

### Task
Develop a RESTful API to fetch price and volume data from sample databases designed from Task B.

### Requirements
- Implement endpoints for fetching price and volume data from the database to be relayed on the front end.

### Implementation
The Solution revolves around pair Adress considering it is a unique attribiute and can be used as a key to the document.
- Endpoints:
  - `/Price/pairAddress`: Fetch price data from the database.
  - `/Volume/pairAddress`: Fetch volume data from the database.
- Additionally, change changable variables in `API.js` as needed and run `node API.js` to get the desired results.
- Files in Use
  - API.js
- Modules Used-
  - Axios

## Database Management

### Task
Set up a MongoDB Atlas cluster and design a schema for a sample dataset.

### Requirements
- Create a database containing price and volume data.
- Implement CRUD operations using Mongoose or native MongoDB drivers.

### Implementation
- Set up a MongoDB Atlas cluster.
- Designed schemas for Prices and Volume Datas Seperatly.
- Price Schmea Contains-
  - chainId
  - dexId
  - url
  - pairAddress
  - baseToken
  - quoteToken
  - priceNative
  - priceUsd
  - priceChange
  - pairCreatedAt
- Volume Schema Contains-
  - chainId
  - dexId
  - url
  - pairAddress
  - baseToken
  - quoteToken
  - volume
  - pairCreatedAt 
- Implemented CRUD operations for interacting with the database.

## Testing API Endpoints
To test the API endpoints, follow these steps:
1. Start the server using `node index.js`.
2. Perform CRUD operations on the following endpoints:
   - `localhost:5000/Price/pairAddress`: To get price data .
   - `localhost:5000/Volume/pairAddress`: To get volume data.
   - `localhost:5000/Price`: For price data Post request .
   - `localhost:5000/Volume`: For volume data Post Request.
3. Additionly Implemented unparameterised Get Request to get all data from Price or Volume at `localhost:5000/Price` and `localhost:5000/Volume` respectively.
4. Files in Use-
     - Index.js
     - Price.js
     - Volume.js
     - PriceSchema.js
     - VolumeSchema.js
5. Modules Used-
     - Mongoose
     - Express


## Please Refer to Commented Codebase for Additional insight.
   