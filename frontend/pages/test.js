import { useEffect, useState } from 'react';


export default function test() {
    const [account, setAccount] = useState(null);

    useEffect(() => {
      const loadAccount = async () => {
        if (window.ethereum) {
          try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            setAccount(accounts[0]);
          } catch (error) {
            console.error(error);
          }
        }
      };
  
      loadAccount();
  
      const handleAccountsChanged = (accounts) => {
        setAccount(accounts[0]);
      };
  
      window.ethereum.on('accountsChanged', handleAccountsChanged);
  
      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        setAccount(null); // Set account state to null
      };
    }, []);
  
    const disconnectWallet = () => {
      window.ethereum.disconnect();
      setAccount(null); // Set account state to null
    };
  
    return (
      <div>
        {account ? (
          <div>
            <p>Connected account: {account}</p>
            <button onClick={disconnectWallet}>Disconnect Wallet</button>
          </div>
        ) : (
          <p>Connect your Metamask wallet to see your account</p>
        )}
      </div>
    );
  }





























// import { useWeb3 } from "@3rdweb/hooks";
// import React, { useEffect }  from "react";

// export default function test() {
//   const { address, chainId, connectWallet } = useWeb3();
//   useEffect(() => {
//     const loadWallet = async () => {
//       try {
//         await connectWallet('injected');
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     loadWallet();
//   }, [connectWallet]);
//   if (address) {
//     return (
//       <div>
//         <p>Address: {address}</p>
//         <p>ChainId: {chainId}</p>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <div onClick={() => connectWallet("injected")}>
//           Loading
//         </div>
//       </div>
//     );
//   }
// }
