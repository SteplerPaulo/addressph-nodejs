# Philippines Address API

This API provides address data specifically tailored for the Philippines.

## Prerequisites

Before using this API, ensure you have the following prerequisites:

- Node.js installed on your system
- MySQL database setup with the `addressph` schema imported from `addressph.sql`

## How to Use

To get started with the Philippines Address API:

1. Clone or download the repository.
2. Import the `addressph.sql` file into your MySQL database.
3. Install dependencies by running `npm install`.
4. Start the server by running `nodemon`.
5. You're all set! 😊


## Sample Requests

#### Find All Addresses
- `GET /api/barangays`
- `GET /api/countries`
- `GET /api/municipalities`
- `GET /api/provinces`

#### Find Addresses with Filters
- `GET /api/municipalities?name=Lipa City`
- `GET /api/provinces?name=Batangas`
