import { useEffect, useState } from "react";

import { useWallet } from "@/wallets/wallet-selector";

export const Navigation = () => {
  const { signedAccountId, logOut, logIn } = useWallet();
  const [action, setAction] = useState(() => {});
  const [label, setLabel] = useState("Loading...");

  useEffect(() => {
    if (signedAccountId) {
      setAction(() => logOut);
      setLabel(`Logout ${signedAccountId}`);
    } else {
      setAction(() => logIn);
      setLabel("Login");
    }
  }, [signedAccountId, logOut, logIn, setAction, setLabel]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-nav pt-1">
          <button className="btn btn-secondary" onClick={action}>
            {" "}
            {label}{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};
