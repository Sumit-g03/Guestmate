export interface Guest {
  Sno: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  _id:string;
}

export interface GuestBackend {
  status: string;
  data: {
    guests: [
      Sno: number,
      name: string,
      email: string,
      address: string,
      phone: number,
      _id:string
    ];
  };
}
