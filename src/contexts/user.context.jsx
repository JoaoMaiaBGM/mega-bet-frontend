import { createContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = (props) => {
  const [profile, setProfile] = useState({});
  const [bet, setBet] = useState(false);

  return (
    <ProfileContext.Provider value={{ profile, setProfile, bet, setBet }}>
      {props.children}
    </ProfileContext.Provider>
  );
};
