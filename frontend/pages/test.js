import React, { useState, useEffect } from 'react';

function App() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectClick = async () => {
    try {
      // Request MetaMask connection
      await ethereum.request({ method: 'eth_requestAccounts' });
      setIsConnected(true)
      
    } catch (error) {
      console.error('Error connecting to MetaMask', error);
    }
  };

  const handleDisconnectClick = async () => {
    try {
      // Request MetaMask disconnection and remove permission
      await ethereum.request({ method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] });
      setIsConnected(false)

      
      
    } catch (error) {
      console.error('Error disconnecting from MetaMask', error);
    }
  };

  return (
    <div>
      {isConnected ? (
        <button onClick={handleDisconnectClick}>Disconnect MetaMask</button>
      ) : (
        <button onClick={handleConnectClick}>Connect MetaMask</button>
      )}
    </div>
  );
}

export default App;
