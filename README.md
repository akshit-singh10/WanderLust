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

# MVC Pattern
### sub topics:
    - Separation of routes, controllers, models
###### Refactored the project into MVC structure. Moved all logic (creating listings, rendering, etc.) out of routes and into separate controller files. Routes now only map a path + method to a controller function.

## In-Project (MVC) :
#### routes/ only calls controllers/
Learnt that requiring a model in one file doesn't make it available in another file — each file needs its own require, since every JS file has its own scope.

# router.route()
###### Grouped routes sharing the same path using router.route("/").get(...).post(...) instead of writing them as separate lines. Did the same for "/:id" (GET/PATCH/DELETE). Just for readability, no behavior change.

# Star Rating
###### Changed the review rating input from a plain number/range field to a clickable star rating. Only the UI changed — still saves as a Number in the schema.

# Image Upload
### sub topics:
    - Multer
    - Cloudinary
    - multer-storage-cloudinary
###### Earlier, listing images were just a pasted URL. Switched to real file upload from the user's device.
- Form uses enctype="multipart/form-data" to send the file
- Added multer to parse the file and form fields (without it, req.body stays empty on file uploads)
- Set up a Cloudinary account, added cloud_name, api_key, api_secret to .env
- Used multer-storage-cloudinary so multer uploads straight to Cloudinary instead of local disk
- image field in the schema changed from a String to { url, filename } — url is shown on the page, filename (Cloudinary's id) is kept for deleting the image later

## In-Project (Image Upload) :
#### Middleware order matters
multer has to run before form validation, since validation reads req.body, which only exists after multer parses the file upload.

#### Deleting images too
When a listing is deleted, its image is also deleted from Cloudinary using the saved filename, so old images don't just pile up there unused.

## Maps and Geocoding

- Added a Mapbox map to each listing's show page to display its location.
- Used Mapbox Geocoding API to convert the location into coordinates.
- Stored the coordinates using GeoJSON and added markers, controls, and popups.
- Coordinates are generated when the listing is created and saved in the database.

## Filter Bar

- Added a horizontally scrollable filter bar with different listing categories.
- Added arrows for easier scrolling.
- Filtering functionality will be added later.

## GST Toggle

- Added a "Display Total after Taxes" toggle near the filter bar.
- Shows or hides the `+18% GST` information next to listing prices.
- Currently works only as a display feature.

## Search UI

- Added a search bar to the navbar with an input field and button.
- Used Bootstrap 5 classes for layout and spacing.
- Actual search functionality will be added later.

## Category Field

- Added a `category` field to the listing schema (Trending, Rooms, Iconic, Mountains, Castles, Swimming, Camping, Farms, Arctic, Domes, Boats, Others).
- Restricted values using Mongoose `enum`.
- Added a category dropdown to the new/edit listing forms.
- Had to separately add `category` to the Joi schema — Joi doesn't validate a field just because Mongoose knows about it, was throwing "not allowed" error until added.
- Made it required on both Mongoose and the HTML form.

## Filter Bar

- Filter bar is now fully functional — clicking a category filters listings by it.
- Added route `/listing/filter/:category`, queries `Listing.find({ category })`.
- "All" resets back to `/listing`.
- Active filter is detected from the URL and highlighted (scale + opacity).

## Search

- Search bar is now functional.
- Added route `/listing/searchfilter`, reads `req.query.search`.
- Used MongoDB `$or` to match against title, location, country, category.
- Used `$regex` for partial match, `$options: "i"` for case-insensitive.
- Empty search redirects back to `/listing` with a flash message.


## Deployment

Wanderlust is deployed using MongoDB Atlas (cloud database) and Render (hosting), with session data persisted via connect-mongo.

### 1. MongoDB Atlas Setup

1. Create a free cluster at MongoDB Atlas (https://www.mongodb.com/cloud/atlas).
2. Under Database Access, create a database user with a username/password.
3. Under Network Access, allow access from anywhere (0.0.0.0/0) so Render can connect.
4. Get your connection string from Connect > Drivers, it looks like: