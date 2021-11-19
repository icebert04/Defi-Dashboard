import NativeBalance from "./NativeBalance";
import AccountLong from "./AccountLong";
import { BsBank2 } from "react-icons/bs"

const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "700",
  },
};
function WalletBalance() {
  return (
  <>
  <div>
      <h1 style={styles.title}><BsBank2/> Wallet Balances</h1>
    <div className="walletBalance" >
        <table style={{ width: "65vw", padding: "15px" }}>
        <tr><th>Account</th><th>Amount</th></tr>
        <tr><td><AccountLong/></td><td><NativeBalance/></td></tr>
        </table>
    </div>
  </div>
  </>
  );
}
export default WalletBalance;
