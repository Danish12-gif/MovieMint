import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { ethers } from "ethers";

function Layout() {
  const [wallet, setWallet] = useState({});
  // Connect Wallet
    // const handleConnectWallet = async () => {
    //   if (typeof window.ethereum !== "undefined") {
    //     try {
    //       await window.ethereum.enable();
    //       const accounts = await window.ethereum.send("eth_requestAccounts");
    //       const get_signer = new ethers.providers.Web3Provider(window.ethereum);
    //       setWallet({
    //         ...wallet,
    //         address: accounts?.result[0],
    //         signer: get_signer.getSigner(),
    //         network: await get_signer.getNetwork(),
    //       });
    //     } catch (error) {
    //       console.log("Error:", error.message);
    //     }
    //   } else alert("Please install MetaMask");
    // };
    const handleConnectWallet = async () => {
      if (typeof window.ethereum !== "undefined") {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
    
          if (accounts.length === 0) {
            const requestedAccounts = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
    
            const getSigner = new ethers.providers.Web3Provider(window.ethereum);
            setWallet({
              ...wallet,
              address: requestedAccounts[0],
              signer: getSigner.getSigner(),
              network: await getSigner.getNetwork(),
            });
          } else {
            const getSigner = new ethers.providers.Web3Provider(window.ethereum);
            setWallet({
              ...wallet,
              address: accounts[0],
              signer: getSigner.getSigner(),
              network: await getSigner.getNetwork(),
            });
          }
        } catch (error) {
          console.log("Error:", error.message);
        }
      } else {
        alert("Please install MetaMask");
      }
    };  
  
  console.log("Wallet:", wallet);
  return (
    <>
      <Header wallet={wallet} connectWallet={handleConnectWallet} />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
