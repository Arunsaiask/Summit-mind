const express = require("express");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(cors());
app.use(express.json());

const rawdata = fs.readFileSync("./prize.json");
const { prizes } = JSON.parse(rawdata);


///to get winner with firstname
app.get("/:firstname", (req, res) => {
  res.json(
    prizes.map(
      (prize) =>
        (array = prize["laureates"].map((l) => {
          if (l.firstname === `${req.params.firstname}`) {
             res.json(l)
          }
        }))
    )
  );
});

//to get winners by year
app.post("/:year", (req, res) => {
  var array = []

  prizes.map((prize) => {
    if (prize.year === `${req.params.year}`) {
      array.push(...prize.laureates);
    }
  });
  res.json(array);
});

///to get winner based on category and year

app.get("/:year/:category", (req, res) => {
 

  prizes.map((prize) => {
    if (
      prize.year === `${req.params.year}` &&
      prize.category === `${req.params.category}`
    ) {
      res.json(prize.laureates);
    }
  });
 
});

///get all names against year and category

app.get("/", (req, res) => {
  var array = [];
  function compare_lname(a, b) {
    if (a.firstname.toLowerCase() < b.firstname.toLowerCase()) {
      return -1;
    }
    if (a.firstname.toLowerCase() > b.firstname.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  prizes.map((prize) => {
    const { year, category } = prize;
    prize.laureates.map((person) => {
      array.push({
        firstname: person.firstname,
        surname: person.surname,
        year: year,
        category: category,
      });
    });
  });
  res.json(array.sort(compare_lname));
});

app.listen(PORT, (req, res) => {
  console.log(`Server is live at http://localhost:${PORT}`);
});
