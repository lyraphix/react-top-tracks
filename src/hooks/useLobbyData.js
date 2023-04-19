import { useState, useEffect, useContext } from "react";
import FirebaseContext from "@/contexts/FirebaseContext"; 


const useLobbyData = (musaicKey) => {
  const { database } = useContext(FirebaseContext);
  const [lobbyData, setLobbyData] = useState(null);

  useEffect(() => {
    console.log("useLobbyData called with Musaic Key:", musaicKey);
    if (musaicKey) {
      const lobbyRef = database.ref("lobbies").orderByChild("musaicKey").equalTo(musaicKey);

      const handleData = (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const id = Object.keys(data)[0];
          const retrievedLobbyData = { ...data[id], id };

          console.log("useLobbyData lobby data:", retrievedLobbyData);
          setLobbyData(retrievedLobbyData);
        } else {
          console.log("useLobbyData no data found");
          setLobbyData(null);
        }
      };

      lobbyRef.on("value", handleData, (error) => {
        console.log("useLobbyData error:", error);
        setLobbyData(null);
      });

      return () => {
        lobbyRef.off("value", handleData);
      };
    }
  }, [musaicKey]);

  return [lobbyData];
};

export default useLobbyData;
