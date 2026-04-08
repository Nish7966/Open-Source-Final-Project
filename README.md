# Open-Source-Final-Project
# Forums Website 

## Project Description

This project is a Reddit-style forum backend where users can create posts, comment, like posts, and interact with other users. It includes authentication, admin controls, and analytics.

### Authentication

* User registration
* User login (JWT-based authentication)
* Protected routes

### Posts

* Create post
* Get all posts
* Edit own post
* Delete own post

### Likes

* Like posts
* Prevent duplicate likes

### Comments

* Add comments to posts
* View comments

### Admin Features

* Admin can edit any post
* Admin can delete any post

### Analytics

* Total users
* Total posts
* Total comments
* Total likes
* Admin-only access

---

## Project Structure

* **domain** → Database models
* **application** → Business logic (services)
* **presentation** → Controllers and routes

---

## Installation & Setup

```bash
npm install
npm run dev
```

---

## Authentication

After login, you will receive a JWT token.

Use it in requests:
Authorization: Bearer <your_token>

## API Endpoints

### Auth

* POST /api/auth/register
* POST /api/auth/login

### Posts

* GET /api/posts
* POST /api/posts
* PUT /api/posts/:id
* DELETE /api/posts/:id

### Likes

* POST /api/posts/:id/like

### Comments

* POST /api/comments/:postId
* GET /api/comments/:postId

### Admin

* GET /api/admin/analytics


##  Testing

All endpoints can be tested using:

* Bruno
* Postman




