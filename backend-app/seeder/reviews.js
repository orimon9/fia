const ObjectId = require("mongodb").ObjectId

const reviews = [
    {
    comment: "Review. The company itself is a very successful company. I will explain to the great chief architect that the accusers are nothing but an exercise.",
    rating: 5,
    user: { _id: ObjectId(), name: "John Doe" },
  },
  {
    comment: "Review. The company itself is a very successful company. I will explain to the great chief architect that the accusers are nothing but an exercise.",
    rating: 5,
    user: { _id: ObjectId(), name: "John Doe" },
  },
  {
    comment: "Review. The company itself is a very successful company. I will explain to the great chief architect that the accusers are nothing but an exercise.",
    rating: 5,
    user: { _id: ObjectId(), name: "John Doe" },
  },
  {
    comment: "Review. The company itself is a very successful company. I will explain to the great chief architect that the accusers are nothing but an exercise.",
    rating: 4,
    user: { _id: ObjectId(), name: "John Doe" },
  },
  {
    comment: "Review. The company itself is a very successful company. I will explain to the great chief architect that the accusers are nothing but an exercise.",
    rating: 3,
    user: { _id: ObjectId(), name: "John Doe" },
  },
]

module.exports = reviews