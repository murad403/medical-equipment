type TUser = {
    name: string;
    role: "user" | "seller";
    phoneNumber: string;
    email: string;
    address: string;
    password: string;
    photo?: string; 
}

export default TUser;