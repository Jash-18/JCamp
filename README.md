# JCamp 🏕️

A full-stack web application for discovering and sharing campgrounds. Users can create, review, and explore campgrounds with interactive maps and image uploads.

**Live Demo:** [https://jcamp.vercel.app/](https://jcamp.vercel.app/)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

## Features

- 🗺️ **Interactive Maps** - View campgrounds on a cluster map powered by MapTiler
- 📸 **Image Uploads** - Upload multiple campground images via Cloudinary
- ⭐ **Reviews & Ratings** - Leave star ratings and reviews for campgrounds
- 🔐 **User Authentication** - Register, login, and manage your account with Passport.js
- 🛡️ **Security** - Protected against XSS, NoSQL injection, and other vulnerabilities
- 📍 **Geocoding** - Automatic location geocoding for campground addresses
- 📱 **Responsive Design** - Works on desktop and mobile devices

## Tech Stack

### Backend
| Package | Description |
|---------|-------------|
| **[Express](https://expressjs.com/)** (v5) | Fast, minimalist web framework for Node.js |
| **[Mongoose](https://mongoosejs.com/)** (v9) | MongoDB object modeling for Node.js |
| **[Passport](http://www.passportjs.org/)** | Authentication middleware with local strategy |
| **[passport-local-mongoose](https://github.com/saintedlama/passport-local-mongoose)** | Simplifies username/password authentication with Mongoose |
| **[express-session](https://github.com/expressjs/session)** | Session middleware for Express |
| **[connect-mongo](https://github.com/jdesboeufs/connect-mongo)** | MongoDB session store for Express |
| **[connect-flash](https://github.com/jaredhanson/connect-flash)** | Flash messages for Express |

### Templating & Views
| Package | Description |
|---------|-------------|
| **[EJS](https://ejs.co/)** | Embedded JavaScript templating |
| **[ejs-mate](https://github.com/JacksonTian/ejs-mate)** | Layout support for EJS templates |

### File Upload & Storage
| Package | Description |
|---------|-------------|
| **[Cloudinary](https://cloudinary.com/)** | Cloud-based image storage and management |
| **[Multer](https://github.com/expressjs/multer)** | Middleware for handling multipart/form-data |
| **[multer-storage-cloudinary](https://github.com/affanshahid/multer-storage-cloudinary)** | Multer storage engine for Cloudinary |

### Maps & Geocoding
| Package | Description |
|---------|-------------|
| **[@maptiler/client](https://www.maptiler.com/)** | MapTiler SDK for geocoding and map services |

### Security
| Package | Description |
|---------|-------------|
| **[Helmet](https://helmetjs.github.io/)** | Secure HTTP headers middleware |
| **[express-mongo-sanitize](https://github.com/fiznool/express-mongo-sanitize)** | Prevents NoSQL injection attacks |
| **[sanitize-html](https://github.com/apostrophecms/sanitize-html)** | HTML sanitization to prevent XSS attacks |
| **[Joi](https://joi.dev/)** | Schema validation for user inputs |

### Utilities
| Package | Description |
|---------|-------------|
| **[dotenv](https://github.com/motdotla/dotenv)** | Environment variable management |
| **[method-override](https://github.com/expressjs/method-override)** | HTTP verb support (PUT, DELETE) in forms |
| **[compression](https://github.com/expressjs/compression)** | Response compression middleware |

## Project Structure

```
JCamp/
├── app.js                 # Main application entry point
├── middleware.js          # Custom middleware (auth, validation)
├── schemas.js             # Joi validation schemas
├── cloudinary/            # Cloudinary configuration
├── controllers/           # Route controllers
│   ├── campgrounds.js
│   ├── reviews.js
│   └── users.js
├── models/                # Mongoose models
│   ├── campground.js
│   ├── review.js
│   └── user.js
├── routes/                # Express routes
│   ├── campgrounds.js
│   ├── reviews.js
│   └── users.js
├── utils/                 # Utility functions
│   ├── catchAsync.js
│   ├── ExpressError.js
│   └── mongoSanitizeV5.js
├── views/                 # EJS templates
│   ├── campgrounds/
│   ├── layouts/
│   ├── partials/
│   └── users/
├── public/                # Static assets
│   ├── javascripts/
│   └── stylesheets/
└── seeds/                 # Database seeding scripts
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret
MAPTILER_API_KEY=your_maptiler_api_key
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/jcamp.git
   cd jcamp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file based on the template above
   - Get your API keys from MongoDB Atlas, Cloudinary, and MapTiler

4. **Seed the database (optional)**
   ```bash
   node seeds/index.js
   ```

5. **Start the application**
   ```bash
   node app.js
   ```

6. **Visit** `http://localhost:3000` in your browser

## Deployment

This project is deployed on **Vercel** with a MongoDB Atlas database. The `vercel.json` file contains the deployment configuration.

## API Routes

### Campgrounds
- `GET /campgrounds` - View all campgrounds
- `GET /campgrounds/new` - Render new campground form
- `POST /campgrounds` - Create a new campground
- `GET /campgrounds/:id` - View a specific campground
- `GET /campgrounds/:id/edit` - Render edit form
- `PUT /campgrounds/:id` - Update a campground
- `DELETE /campgrounds/:id` - Delete a campground

### Reviews
- `POST /campgrounds/:id/reviews` - Create a review
- `DELETE /campgrounds/:id/reviews/:reviewId` - Delete a review

### Users
- `GET /register` - Render registration form
- `POST /register` - Register a new user
- `GET /login` - Render login form
- `POST /login` - Login user
- `GET /logout` - Logout user

## Security Features

- **Helmet.js** - Sets various HTTP headers for security
- **Content Security Policy** - Restricts resource loading
- **NoSQL Injection Prevention** - Sanitizes MongoDB queries
- **XSS Protection** - Sanitizes user input with sanitize-html
- **Session Security** - HTTP-only cookies with secure settings
- **Input Validation** - Joi schemas validate all user inputs
- **Authorization** - Only authors can edit/delete their content

## License

ISC

---

Made with ❤️ by [Your Name]
