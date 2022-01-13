export default interface IUser {
  id_user: number;
  firstname: string;
  lastname: string;
  city: string;
  email: string;
  password: string;
  zip_code: string;
  profile_pic: unknown;
  id_surf_skill: number;
  favorite_spot: string;
  created_date: Date;
  id_departement: number;
  id_surf_style: number;
  wahine: boolean;
  desc: string;
  phone: number;
}
