// class User {
//   //   public email: string;
//   //   private name: string;
//   protected _courseCount = 1;

//   readonly city: string = "Kl";
//   constructor(public email: string, public name: string) {
//     this.email = email;
//     this.name = name;
//   }

//   get AppleEmail(): string {
//     return `apple${this.email}`;
//   }

//   get courseCount(): number {
//     return this._courseCount;
//   }

//   set courseCount(courseNum) {
//     if (courseNum <= 1) {
//       throw new Error("Course count should be more than 1");
//     }
//   }

//   private deleteToken() {
//     console.log("Token Deleted");
//   }
// }

// class SubUser extends User {
//   isFamily: boolean = true;
//   changeCourseCount() {
//     this._courseCount = 4;
//   }
// }

// const rashad = new User("h@gmail.com", "rashad");

// // rashad.city = "Kl ";
