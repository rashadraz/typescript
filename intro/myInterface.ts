interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail: () => string;
  getCoupon(couponname: string): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hitesh: Admin = {
  dbId: 22,
  email: "123",
  userId: 2211,
  role: "admin",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "123213") => {
    return 10;
  },
  githubToken: "github",
};
