const people = [
     { name: 'Wes', year: 1988 }, // 29
     { name: 'Kait', year: 1986 }, // 31
     { name: 'Irv', year: 1970 }, // 47
     { name: 'Lux', year: 2015 } // 2
]
const comments = [
     { text: 'Love this!', id: 523423 },
     { text: 'Super good', id: 823423 },
     { text: 'You are the best', id: 2039842 },
     { text: 'Ramen is my fav food ever', id: 123523 },
     { text: 'Nice Nice Nice!', id: 542328 }
]

// Array.prototype.some()
// is at least one person 20 or older?
const isAdult = people.some(function (person) {
  if (2017 - person.year >= 20) {
    return true
  }
})
console.log(isAdult)

// Array.prototype.every()
// is everyone 20 or older?
const allAdults = people.every(function (person) {
  if (2017 - person.year >= 20) {
    return true
  }
})
console.log(allAdults)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(function (comment) {
  if (comment.id === 823423) {
    return comment
  }
})
console.log(comment, comment.text)

// Array.prototype.findIndex()
// Find the comment with this ID
const index = comments.findIndex(comment => comment.id === 823423)
console.log(index)

// delete the comment with the ID of 823423
const newComments = [
  comments.slice(0, index),
  comments.slice(index + 1)
]
console.log(newComments)
