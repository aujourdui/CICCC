import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../model/IUser";
import { UserService } from "../services/UserService";
import { Link } from "react-router-dom";

interface IState {
  loading: boolean;
  user: IUser;
  errorMessage: string;
}

// interface URLparams

interface URLParams {
  id: string;
}

const UserDetail: FC = () => {
  // let { userId } = useParams<string | any>();
  let { userId } = useParams<URLParams | any>();

  const [detailState, setDetailState] = useState<IState>({
    loading: false,
    user: {} as IUser,
    errorMessage: "",
  });

  useEffect(() => {
    if (userId) {
      setDetailState((prev) => ({ ...prev, loading: !prev.loading }));

      UserService.getUser(userId)
        .then((response) => {
          setDetailState((prev) => ({
            ...prev,
            loading: false,
            user: response.data,
          }));
        })
        .catch((error) => {
          setDetailState((prev) => ({
            ...prev,
            loading: false,
            errorMessage: error.message,
          }));
        });
    }
  }, [userId]);

  if (detailState.loading) {
    return <div>LOADING......</div>;
  }

  return (
    <div>
      <h3>UserDetail{userId}</h3>
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
                <th>City</th>
                <th>Street</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(detailState.user).length > 0 && (
                <tr key={detailState.user.id}>
                  <td>{detailState.user.id}</td>
                  <td>
                    <Link to="/">{detailState.user.name}</Link>
                  </td>
                  <td>{detailState.user.email}</td>
                  <td>{detailState.user.phone}</td>
                  <td>{detailState.user.name}</td>
                  <td>{detailState.user.website}</td>
                  <td>{detailState.user.address.city}</td>
                  <td>{detailState.user.address.street}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

// {detailState.users.length > 0 &&
//   detailState.users.map((user) => (
//     <tr key={user.id}>
//       <td>{user.id}</td>
//       <td>
//         <Link to="/">{user.name}</Link>
//       </td>
//       <td>{user.email}</td>
//       <td>{user.phone}</td>
//       <td>{user.company.name}</td>
//       <td>{user.website}</td>
//     </tr>
//   ))}
