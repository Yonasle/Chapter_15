
class User {
  constructor(name, email) {1
    this.name = name;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.name} has logged in`);
    return this;
  }
  logout() {
    console.log(`${this.name} has logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.name} has a score of ${this.score}`)
    return this;
  }
}

class Admin extends User{
  deleteUser(user){
      users = users.filter((u) => {
      return u.name != user.name;
    })
  }
}

const userOne = new User('John', 'Johndoe@gmail.com');
const userTwo = new User('Jane', 'Janedoe@gmail.com');
const userThree = new Admin('Yonas', 'lemmayonas@gmail.com')


// console.log(userOne, userTwo, userThree);

let users = [userOne, userTwo, userThree];

console.log(users);

userThree.deleteUser(userTwo);
console.log(users);