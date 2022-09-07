import { useRouter } from "next/router";
import React from "react";

const Mentorship = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Mentorship</div>;
};

export default Mentorship;
