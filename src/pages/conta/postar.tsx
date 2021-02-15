import React from "react";

import UserHeader from "../../components/UserHeader";
import Feed from "../../components/Feed";

const Postar: React.FC = () => {
  return (
    <section className="container">
      <UserHeader />
      <Feed />
    </section>
  );
};

export default Postar;
