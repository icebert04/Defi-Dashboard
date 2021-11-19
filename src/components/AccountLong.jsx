import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useMoralis } from "react-moralis";
import Blockie from "./Blockie";

const styles = {
account: {
    height: "42px",
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    borderRadius: "12px",
    backgroundColor: "rgb(244, 244, 244)",
    cursor: "pointer",
},
text: {
    color: "#21BF96",
},
};

function AccountLong() {
const { logout } = useMoralis();
const { walletAddress } = useMoralisDapp();

return (
    <div style={styles.account}>
    <p style={{ marginRight: "5px", ...styles.text }}>{(walletAddress)}</p>
    <Blockie currentWallet scale={3} />
    </div>
);
}

export default AccountLong