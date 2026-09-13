# WanderLust
Full-stack Airbnb clone with listings, auth, reviews &amp; maps — built as a learning project, not a 1:1 copy.

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

# EXPRESS-ROUTER
### app.js code was quite bulky and difficult to read so I use Express-router for simplification and readability of the code

# Cookies
### Learned about cookies, signed and unsigned

# EXPRESS-SESSION
### making our session stateful. When a session is created then its ID is stored as a cookie which can be used to get data from the session.

# Connect-flash
### It's a middleware used to display one time message and the same message won't be displayed if we refresh again, can change expiry date of cookies and all.

## In-Project :
#### I have used Connect-flash for displaying one time messages when the user updates , deletes, creates a listing And also for writing and deleting reviews. Additionally, if the id doesn't exist as requested then it redirects to the homepage,too, with a flash message!



    

