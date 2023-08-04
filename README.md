# mid-term-gigih (Tokopedia Play Clone)

**Tokopedia Play** is a video streaming platform that allows sellers to promote their products to potential buyers. Tokopedia Play offers various features, including live streaming, short videos, and video tutorials. The platform helps sellers increase product visibility, sales, and brand awareness.

**Note: This project is a part of the mid-term assignment in Generasi GIGIH 3.0 Full Stack Track.**

## Installation
1. Make sure you have Node.js and MongoDB installed on your computer.
2. Clone this repository.
3. Navigate to the project directory.
4. Install all dependencies with npm: npm install

## Usage
1. Ensure MongoDB is running on localhost:27017.
2. Start the server: node server.js
3. Access Tokopedia Play Clone through your browser at: http://localhost:3000

## Features
- "Home" Page: Displays a list of videos with thumbnails from YouTube.
- "Video Detail" Page: Shows embedded YouTube video, list of products, list of comments, and comment submission form.
- Click on a video thumbnail to view video details.
- Users can submit comments with their name and comment content.
  
## API Endpoints
- GET /videos: Get a list of videos with thumbnails from YouTube.
- GET /products: Get a list of products based on VideoID.
- GET /comments: Get a list of comments based on VideoID.
- POST /comments: Submit a new comment to the server.

## Database Structure
The database for the Tokopedia Play Clone project uses MongoDB to store various data related to videos, products, and comments. Below is the structure of the collections in the MongoDB database:
### Videos Collection
The **videos** collection stores information about the videos available on Tokopedia Play Clone. Each document in this collection represents a video and contains the following fields:
- _id: The unique identifier for the video document.
- videoID: A unique identifier for the video (can be an ObjectId or a custom identifier).
- thumbnailURL: The URL of the thumbnail image for the video on YouTube.
### Products Collection
The **products** collection stores information about the products associated with each video on Tokopedia Play Clone. Each document in this collection represents a product and contains the following fields:
- _id: The unique identifier for the product document.
- videoID: The reference to the video with which this product is associated.
- linkProduct: The link to the product on the Tokopedia website.
- title: The title or name of the product.
- price: The price of the product.
### Comments Collection
The **comments** collection stores comments submitted by users for each video on Tokopedia Play Clone. Each document in this collection represents a comment and contains the following fields:
- _id: The unique identifier for the comment document.
- videoID: The reference to the video to which this comment belongs.
- username: The name of the user who submitted the comment.
- comment: The content of the comment.
- timestamp: The timestamp when the comment was submitted (automatically generated).
