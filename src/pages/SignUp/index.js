import React from "react";

import Form from "./Form";
import Logo from "../../components/Logo";
import Quote from "../../components/Quote";
import Back from "../../components/Back";

function SingUp() {
  return (
    <div>
      <aside>
        <Logo size="small" />
        <Quote type="fill" />
      </aside>
      <section>
        <Back />
        <Form />
      </section>
    </div>
  );
}

export default SingUp;
