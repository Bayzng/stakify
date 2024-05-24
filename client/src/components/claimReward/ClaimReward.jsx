import { useState, useRef, useContext } from "react";
import Web3Context from "../../context/Web3Context";
import WebButton from "../button/Button";
import toast from "react-hot-toast";

const ClaimReward = () => {
  const { stakingContract } = useContext(Web3Context);
  const withdrawStakeRef = useRef();
  const [transactionStatus, setTransactionStatus] = useState("");
  const claimReward = async () => {
    try {
      const transaction = await stakingContract.getReward();
      await toast.promise(transaction.wait(), {
        loading: "Transaction is pending...",
        success: "Reward Claimed!!!!!",
        error: "Transaction failed",
      });
    } catch (error) {
      console.error("Claim Rewar  failed", error.message);
    }
  };
  return (
    <div>
      <WebButton
        onClick={claimReward}
        type="submit"
        label="Claim your Reward"
      />
    </div>
  );
};

export default ClaimReward;
