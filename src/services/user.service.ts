<<<<<<< HEAD
import { number, string } from "yup";
=======
>>>>>>> 7f769e92e6f75f59c66cc5c98bd9a854ecb27a54
import { UserFormValues, UserModel } from "../models/user.model";
import request, { Methods } from "../util/request";

class UserService {
  async getUsers() {
    return request<UserModel[]>({ method: Methods.GET, resource: "users" });
  }

<<<<<<< HEAD
async getUser(id: string | number){
  return request<UserModel>({method:Methods.GET,resource:`users/${id}`});

}
async updateUser(id:string|number,data:UserFormValues)
{
  return request<UserModel>({method:Methods.PATCH, resource:`users${id}`,data});
=======
  async geUser(id: string | number){
    return request<UserModel>({ method: Methods.GET, resource: `users/${id}` });
  }

  async updateUser(id: string | number, data: UserFormValues) {
    return request<UserModel>({ method: Methods.PATCH, resource: `users/${id}`, data });
  }

  async createUser(data: UserFormValues) {
    return request<UserModel>({ method: Methods.POST, resource: "users", data });
  }

  async deleteUser(id: string | number) {
    return request<UserModel>({ method: Methods.DELETE, resource: `users/${id}` });
  }
>>>>>>> 7f769e92e6f75f59c66cc5c98bd9a854ecb27a54
}

async createUser(data:UserFormValues)
{
return request<UserModel>({method:Methods.POST, resource:"user",data})
}
async deleteUser(id:string|number)
{
  return request<UserModel>({method:Methods.DELETE, resource="user"})
}
}
export const userService = new UserService();
