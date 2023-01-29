import { useRouter } from "next/router";
import React from "react";

const Events = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Events</div>;
};

export default Events;
