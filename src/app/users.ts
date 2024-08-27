export interface Users {
    status: string;
    token: string;
    data: {
      user: {
        _id: string;
        username: string;
        name: string;
        mobilenumber: number;
        email: string;
        guest:string[];
        __v: number;
      };
    };
  }