export default interface IUser {
  id_user: number;
  firstname: string;
  lastname: string;
  city: string;
  email: string;
  password: string;
  zipCode: string;
  profilePic: unknown;
  idSurfSkill: number;
  favoriteSpot: string;
  createdDate: Date;
  idDepartement: number;
  idSurfStyle: number;
  admin: boolean;
}
