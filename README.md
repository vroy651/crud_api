# Books CRUD API

This is a RESTful API built with Node.js and Express that allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books. The books data is stored in a MongoDB database, and the API also supports search and sorting functionalities.



# Features

Create: Add new books to the collection.
Read: Retrieve a list of all books or details of a specific book.
Update: Modify details of an existing book.
Delete: Remove a book from the collection.
Search: Filter books by title or author.
Sorting: Sort the list of books by title, author, or published date.


# Technologies Used

Node.js
Express.js
MongoDB
Mongoose (MongoDB object modeling)
dotenv (for environment variable management)
nodemon



# Getting Started

    ##Prerequisites

    Node.js and npm installed on your machine.
    MongoDB installed or use MongoDB Atlas for a cloud-based database.
    A text editor or IDE (e.g., VS Code).

    ## INSTALLATIONS
    
    1. Clone repository:
       git clone https://github.com/your-username/books-crud-api.git
    
    2. Install dependencies:
       npm install epxpress mongodb bodyparser nodemon nodejs

       npm install init -y
    
    3. Setup Environment variables:
        Create a .env file in the root directory of the project.
        Add the following variables (replace <your-mongo-db-connection-string> with your actual MongoDB connection string):

    4. Start Server:
       set "dev": " node src/app.js" in scripts
       npm run dev
       The server will start on http://localhost:3000 or PORT.

# EndPoints
    
    1. Create a New Book
        Endpoint: POST /api/books
        Description: Adds a new book to the database.
        Request Body:

        {
        "title": "gully boy",
        "author": "rohan",
        "isbn": "vd",
        "publishedDate": "1997-06-26"
        }
    
        Response:
            Status 200: Book successfully created.
            Status 400: Validation error (e.g., missing required fields).

    2. Retrieve All Books
        Endpoint: GET /api/books
        Description: Retrieves a list of all books in the database.
        Query Parameters (Optional):
            title (string): Filter by book title.
            author (string): Filter by author name.
            sortBy (string): Sort the results by title, author, or publishedDate.
        Response:
            Status 200: A list of books.
            Status 500: Server error.   

    3. Retrieve a Book by ID
        Endpoint: GET /api/books/:id
        Description: Retrieves the details of a specific book by its ID.
        Response:
            Status 200: Book details.
            Status 404: Book not found.
            Status 500: Server error 
    
    4. Update a Book
        Endpoint: PUT /api/books/:id
        Description: Updates the details of a specific book by its ID.
        Request Body:
            {
            "title": "Updated Book Title",
            "author": "Updated Author Name"
            }

        Response:
            Status 200: Book successfully updated.
            Status 404: Book not found.
            Status 400: Validation error.
            Status 500: Server error.
    
    5. Delete a Book
        Endpoint: DELETE /api/books/:id
        Description: Deletes a specific book by its ID.
        Response:
            Status 200: Book successfully deleted.
            Status 404: Book not found.
            Status 500: Server error.

# Testing the API
    
    You can use tools like Postman or cURL to test the API endpoints. Here’s how you can do it with Postman:

    Create a New Book:

    Method: POST
    URL: http://localhost:3000/api/books
    Body: Select raw and JSON and enter the JSON object as shown above.
    Retrieve All Books:

    Method: GET
    URL: http://localhost:3000/api/books
    (Optional) Add query parameters for filtering and sorting.
    Retrieve a Book by ID:

    Method: GET
    URL: http://localhost:3000/api/books/<book-id>
    Update a Book:

    Method: PUT
    URL: http://localhost:3000/api/books/<book-id>
    Body: Select raw and JSON and enter the JSON object with updated fields.
    Delete a Book:

    Method: DELETE
    URL: http://localhost:3000/api/books/<book-id>

License
This project is licensed under the MIT License. See the LICENSE file for details.

Conclusion
This project demonstrates a basic CRUD application using Node.js, Express, and MongoDB. It serves as a foundation for building more complex RESTful APIs and can be extended with additional features like user authentication, advanced filtering, and pagination.
