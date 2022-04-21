import React from "react";
import { connect } from "react-redux";

import Snack from "../components/Snack";
import { snackUpdate } from "../redux/actions/action";

const SnackDept = ({ anything, something }) => {

  const handleQuantity = (operator, id) => {
    //dispatch to redux store
    something(operator, id)
  };

  return (
    <div className="card-group">
      {anything.map((snack) => (
        <Snack key={snack.id} snack={snack} handleQuantity={handleQuantity} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    anything: state.snackData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    something: (operator, id) => dispatch(snackUpdate(operator, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackDept);
