// const User = {
//   name: "rashad",
//   email: "akyrashad@gmail.com",
//   isActive: true,
// };

// function createUser(user: User): User {
//   return {
//     name: "",
//     email: "",
//     isActive: true,
//   };
// }

// // createUser({ name: "rashad" });

// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 100 };
// }

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
};

type cardNumber = {
  cardnumber: string;
};

type CardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  CardDate & {
    cvv: number; 
  };

let myUser: User = {
  _id: "234234",
  name: "r",
  email: "r@gmail.com",
  isActive: true,
};

myUser.email = "rashad@gmail.com";
// myUser._id = "asd";

export {};
