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
    

