import axios from "axios";

export class UserService {
  private static URL: string = `https://jsonplaceholder.typicode.com`;

  public static async getAllUsers() {
    const dataURL: string = `${this.URL}/users`;
    return await axios.get(dataURL);
  }
  public static async getUser(id: string) {
    const dataUserURL: string = `${this.URL}/users/${id}`;
    return await axios.get(dataUserURL);
  }
}
