function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

let david = new User("John", new Date(2002, 13, 1));

console.log(david.birthday);
console.log(david.age);
