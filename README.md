# WanderLust
Full-stack Airbnb clone with listings, auth, reviews &amp; maps — built as a learning project, not a 1:1 copy.

# Styling and Basic Setup
### sub topics:
    - EJS templating with ejs-mate
    - Bootstrap for styling
    - Basic CRUD for listings
    - Mongoose schema and models
###### Before error handling, first set up the basic project structure — Node.js and Express server, EJS templating with ejs-mate for layouts, and Bootstrap for styling the pages. Made the basic CRUD (create, read, update, delete) for listings, and Mongoose schema and model for storing listing data in MongoDB.
 

# Added Error handling middlewares 
### Learning 
-Validation of form input by user
###### Client Side and Server Side
- Client Side(bootstrap classes)
- Learnt custom wrapAsync,SchemaValidation through JOI
##### Final Execution :
Added the error handling middleware 
This middleware checks the data input by the user and validate it
If data is out of constraints, then throws error

# Added Reviews Section
### sub topics: 
    - pre/post middlewares
###### After deleting the Whole listing(post) still their reviews were inside the database lying uselessly, so I use post middlewares, so whenever a listing is deleted then using post middleware its related reviews[as all of its review's id is stored in the document] are also deleted, which makes useless data to be removed from the database.

Here now no specific user is involved , anyone who is accessing this can delete or add reviews and same goes for listing.

## EXPRESS-ROUTER
### app.js code was quite bulky and difficult to read so I use Express-router for simplification and readability of the code

## Cookies
### Learned about cookies, signed and unsigned

## EXPRESS-SESSION
### making our session stateful. When a session is created then its ID is stored as a cookie which can be used to get data from the session.

## Connect-flash
### It's a middleware used to display one time message and the same message won't be displayed if we refresh again, can change expiry date of cookies and all.

## In-Project :
#### I have used Connect-flash for displaying one time messages when the user updates , deletes, creates a listing And also for writing and deleting reviews. Additionally, if the id doesn't exist as requested then it redirects to the homepage,too, with a flash message!


# Authentication and Authorization

## Authentication
### sub topics:
    - Hashing the password
    - passport middleware
    - passport-local-mongoose
###### Learnt about hashing the password, using passport middleware, and passport-local-mongoose for the project because mongoose is used for the database.
- Created signup and login for users
- Added isAuthenticated() to check whether the user is logged in or not! to create listing
- Similarly logout is executed
- The navbar is also additioned with signup and login if not logged in, and logout option if logged in already

## In-Project (Authentication) :
#### use of res.locals for ejs template
Used res.locals so that flash messages and current user info are available directly in the ejs templates.

#### Redirecting after login to the requested page
Redirecting after login to the requested page and all for UX — adding a middleware for post login page so that it can check that after login, to go to the page the login request came from.

## Authorization
### sub topics:
    - Listing ownership
    - Review ownership
    - Nested populating
###### For authorization, added listing owners in the schema of listing, and it stores the id of the user logged in.
- Made visibility for edit and delete options of the listing only for the owner, others is visible
- On server side also made a middleware which checks the ownership of the listing and only then it can cause the change
- Same goes for reviews, only its author can delete it but it can be seen and also added new by logged in user
- Learnt about nested populating
- The middleware used for checking if the deleting user is the review's author or not is isReviewAuthor

## In-Project (Authorization) :
#### For all these checks, whether author or owner, is the same as review's or listing's, is compared via id.