import React from "react";
import { Card, CardBody } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Card>
        <CardBody>
          <h1 className="text-center bg-info my-2">
            Welcome to  CDAC Elearning Application
          </h1>
        </CardBody>
      </Card>
    </div>
  );
}
