import { Button, Result } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();

  return (
    <div
      style={{
        height: "calc( 100vh - 134px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button onClick={() => history.push("/")} type="primary">
            Back Home
          </Button>
        }
      />
    </div>
  );
}

export default NotFound;
