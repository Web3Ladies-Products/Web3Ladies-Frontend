import { useRouter } from "next/router";
import React from "react";

const Community = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Community</div>;
};

export default Community;
