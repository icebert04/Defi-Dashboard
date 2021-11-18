import NativeBalance from "./NativeBalance";
import Account from "./Account";

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
      <h1 style={styles.title}>💰Wallet Balances</h1>
    <div className="walletBalance" >
        <table style={{ width: "65vw", padding: "15px" }}>
        <tr><th>Account</th><th>Amount</th></tr>
        <tr><td><Account/></td><td><NativeBalance/></td></tr>
        </table>
    </div>
  </div>
  </>
  );
}
export default WalletBalance;
