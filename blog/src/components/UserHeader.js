import React from "react";
import {connect} from "react-redux";

class UserHeader extends React.Component {

  render() {
    const {user} = this.props;
    if (!user) {
      return null;
    }
    return (
      <div className="header">{user.name}</div>
    );
  }
}

const mapStateToProps = ({users}, ownProps) => {
  return {
    user: users.find((user) => {
      return user.id === ownProps.userId;
    })
  }
}
export default connect(mapStateToProps)(UserHeader);