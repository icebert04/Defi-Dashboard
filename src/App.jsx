import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Menu, Layout } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    marginTop: "100px",
    color: "#ffffff",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#a30000",
    color: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <Menu
            theme="dark"
            mode="inline"
            style={{
              display: "flex",
              fontSize: "18.5px",
              fontWeight: "500",
              width: "100%",
              justifyContent: "center",
              background: "#a30000",
              color: "#fffff",
            }}
            defaultSelectedKeys={["quickstart"]}
          >
            <Menu.Item key="wallet">
              <NavLink to="/wallet">👛 Wallet</NavLink>
            </Menu.Item>
            <Menu.Item key="balances">
              <NavLink to="/erc20balance">💰 Balances</NavLink>
            </Menu.Item>
            <Menu.Item key="transfers">
              <NavLink to="/erc20transfers">💸 Transfers</NavLink>
            </Menu.Item>
            <Menu.Item key="nft">
              <NavLink to="/nftBalance">🖼 NFTs</NavLink>
            </Menu.Item>
            <Menu.Item key="contract">
              <NavLink to="/contract">📄 Contract</NavLink>
            </Menu.Item>
          </Menu>
          <div style={styles.headerRight}>
            <Chains />
            {/* <TokenPrice
              address="0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
              chain="eth"
              image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"
              size="40px"
            /> */}
            <NativeBalance />
            <Account />
          </div>
        </Header>
        <div style={styles.content}>
          <Switch>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
          <Redirect to="/wallet" />
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>

        <Text style={{ display: "block" }}>
          🙋 You have questions? Ask them on the {""}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/29"
          >
            Moralis forum
          </a>
        </Text>

        <Text style={{ display: "block" }}>
          📖 Read more about{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat"
          >
            Moralis
          </a>
        </Text>
      </Footer>
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>
  <svg
    width="80"
    height="50"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    {/* <path
      d="M0 10C0 4.47715 4.47715 0 10 0H20C25.5228 0 30 4.47715 30 10V20C30 25.5228 25.5228 30 20 30H10C4.47715 30 0 25.5228 0 20V10Z"
      fill="#E84142"
    />
    <path
      d="M20.2914 15.3898C20.8111 14.4921 21.6497 14.4921 22.1693 15.3898L25.4056 21.0709C25.9252 21.9685 25.5 22.7008 24.4607 22.7008H17.941C16.9134 22.7008 16.4882 21.9685 16.9961 21.0709L20.2914 15.3898ZM14.0315 4.45277C14.5512 3.55513 15.378 3.55513 15.8977 4.45277L16.6182 5.75198L18.3189 8.74017C18.7323 9.59056 18.7323 10.5945 18.3189 11.4449L12.6142 21.3307C12.0945 22.1339 11.2323 22.6417 10.2756 22.7008H5.53942C4.50005 22.7008 4.07485 21.9803 4.59454 21.0709L14.0315 4.45277Z"
      fill="white"
    /> */}
  </svg>
  </div>
);

export default App;
