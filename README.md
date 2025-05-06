# go-cart.io Guides and Documentation

go-cart-io.github.io contains user guides and developer documentation for https://go-cart.io and its related projects. It is built using [Docsify](https://docsify.js.org).

To edit or view the guides locally:

1. Install [Node.js](https://nodejs.org/en) (required for Docsify).

2. Install Docsify CLI globally:

   ```shell script
   npm i docsify-cli -g
   ```

3. Clone the repository:

   ```shell script
   git clone https://github.com/go-cart-io/go-cart-io.github.io.git
   ```

4. Navigate to this repository's directory and run:

   ```shell script
   cd go-cart-io.github.io
   docsify serve .
   ```

The documentation will be available at http://localhost:3000.

## Updating contributors list

1. Install dependencies:

   ```shell script
   npm install
   ```

2. Run script:

   ```shell script
   npm run gen-contributors
   ```
