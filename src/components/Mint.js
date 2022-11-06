import React from 'react'

import Utils from './Utils';

import './Mint.css';

import myEpicNft from '../utils/MyEpicNFT.json';

import { ethers } from 'ethers';

function Mint() {
    const [isMining, setIsMining] = React.useState(false);

    async function mintNFT() {
        const { ethereum } = window;

        try {
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const connectedContract = new ethers.Contract(Utils.contract_address, myEpicNft.abi, signer);

                console.log("Going to pop wallet now to pay gas...")
                let nftTxn = await connectedContract.makeNFT({gasLimit: 300000});
                setIsMining(true);

                console.log("Mining...please wait.")
                await nftTxn.wait();
                
                console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`);
            } else {
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            console.log(error)
        }
        setIsMining(false)
    }

  return (
    <div id="App-mint" className="App-mint">
        <div onClick={isMining ? null : mintNFT} className="Button-mint">{isMining ? "WAIT..." : "MINT"}</div> 
    </div>
  )
}

export default Mint