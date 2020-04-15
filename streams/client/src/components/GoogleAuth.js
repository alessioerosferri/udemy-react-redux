import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: "1066937536807-aoug58sa05n99a25iard9gdcvssq1e0u.apps.googleusercontent.com",
        scope: "email"
      })
    });
  }

  render() {
    return (
      <div>
        Google Auth
      </div>
    )
  }
}

export default GoogleAuth;