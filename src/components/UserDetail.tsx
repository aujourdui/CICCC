import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../model/IUser";
import { UserService } from "../services/UserService";
import { Link } from "react-router-dom";

interface IState {
  loading: boolean;
  users: IUser[];
  errorMessage: string;
}

const UserDetail: FC = () => {
  let { userId } = useParams() as any;

  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as IUser[],
    errorMessage: "",
  });

  useEffect(() => {
    setState((prev) => ({ ...prev, loading: !prev.loading }));

    UserService.getUser(userId)
      .then((response) => {
        setState({
          ...state,
          loading: false,
          users: response.data,
        });
        console.log(state);
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message,
        });
      });
  }, []);

  if (state.loading) {
    return <div>LOADING......</div>;
  }

  return (
    <div>
      <h3>UserDetail + {userId}</h3>
      <div className="row">
        <div className="col">
          <table className="table text-center table-striped">
            <thead className="bg-success text-white">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {state.users.length > 0 &&
                state.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      <Link to="/">{user.name}</Link>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.company.name}</td>
                    <td>{user.website}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
