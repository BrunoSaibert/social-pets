import React from "react";

import UserHeader from "../../components/UserHeader";
import Feed from "../../components/Feed";

const Conta: React.FC = () => {
  return (
    <section className="container">
      <UserHeader />
      <Feed />
    </section>
  );
};

export default Conta;
