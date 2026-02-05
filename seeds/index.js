const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");
const Review = require("../models/review");

mongoose.connect("mongodb://localhost:27017/jcamp");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  await Review.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "697d8d7841b15c4f80bafd88",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      // image: `https://picsum.photos/400?random=${Math.random()}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!",
      price,
      geometry: {
        type: "Point",
        coordinates: [
            cities[random1000].longitude,
            cities[random1000].latitude,
        ]
    },
      images: [
        {
          url: "https://res.cloudinary.com/jcamp/image/upload/v1770105599/JCamp/ogjas7ywgwrd2faidi8w.png",
          filename: "JCamp/ogjas7ywgwrd2faidi8w",
        },
        {
          url: "https://res.cloudinary.com/jcamp/image/upload/v1770105603/JCamp/q734ibffegz8jcawmkpx.png",
          filename: "JCamp/q734ibffegz8jcawmkpx",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
