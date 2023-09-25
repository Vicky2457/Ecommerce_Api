
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>E-commerce Platform API</h1>

  <p>This is a beginner-level project for designing an API for an E-commerce platform's admin to manage product inventory. The project is built using Node.js and MongoDB.</p>

  <h2>Getting Started</h2>

  <p>These instructions will help you set up and run the project on your local system for development and testing purposes.</p>

  <h3>Prerequisites</h3>

  <p>You need to have Node.js and MongoDB installed on your machine.</p>

  <h3>Installing</h3>

  <ol>
    <li>Clone the repository to your local machine:</li>
  </ol>
  <pre><code>
    git clone https://github.com/Vicky2457/Ecommerce_Api.git
    cd Ecommerce_Api
  </code></pre>

  <ol start="2">
    <li>Install project dependencies:</li>
  </ol>
  <pre><code>
    npm install
  </code></pre>

  <ol start="3">
    <li>Start the MongoDB server. You can run it locally or set up a remote MongoDB database and configure the connection URL in <code>config.js</code>.</li>
  </ol>

  <h2>Running the API</h2>

  <p>Start the Node.js server.</p>
  <pre><code>
    npm start
  </code></pre>

  <p>The API should now be running at <a href="http://localhost:3000">http://localhost:3000</a>.</p>

  <h2>API Endpoints</h2>

  <h3>Create a New Product</h3>

  <ul>
    <li><strong>URL:</strong> /products/create</li>
    <li><strong>Method:</strong> POST</li>
    <li><strong>Request Body:</strong></li>
  </ul>
  <pre><code>
    {
      "name": "Product Name",
      "quantity": 10
    }
  </code></pre>

  <li><strong>Response:</strong></li>
  <pre><code>
    {
      "data": {
        "product": {
          "_id": "product_id",
          "name": "Product Name",
          "quantity": 10,
          "__v": 0
        }
      }
    }
  </code></pre>

  <h3>List All Products</h3>

  <ul>
    <li><strong>URL:</strong> /products</li>
    <li><strong>Method:</strong> GET</li>
    <li><strong>Response:</strong></li>
  </ul>
  <pre><code>
    {
      "data": {
        "products": [
          {
            "_id": "product_id",
            "name": "Product Name",
            "quantity": 10,
            "__v": 0
          },
          <!-- Other products... -->
        ]
      }
    }
  </code></pre>

  <h3>Delete a Product</h3>

  <ul>
    <li><strong>URL:</strong> /products/:id</li>
    <li><strong>Method:</strong> DELETE</li>
    <li><strong>Response:</strong></li>
  </ul>
  <pre><code>
    {
      "data": {
        "message": "Product deleted"
      }
    }
  </code></pre>

  <h3>Update Quantity of a Product</h3>

  <ul>
    <li><strong>URL:</strong> /products/:id/update_quantity/?number=10</li>
    <li><strong>Method:</strong> POST</li>
    <li><strong>Response:</strong></li>
  </ul>
  <pre><code>
    {
      "data": {
        "product": {
          "_id": "product_id",
          "name": "Product Name",
          "quantity": 20,
          "__v": 0
        },
        "message": "Updated successfully"
      }
    }
  </code></pre>

  <h2>Contributing</h2>

  <p>Feel free to contribute to this project by opening issues or creating pull requests.</p>

  <h2>License</h2>

  <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
</body>
</html>
