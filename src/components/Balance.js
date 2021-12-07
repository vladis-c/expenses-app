import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

function Balance() {
  const { transactions } = useContext(GlobalContext)

  const totalBalance = transactions.map((transaction) => transaction.amount)
  const totalShownBalance = totalBalance
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 className="balance">{totalShownBalance}€</h1>
    </div>
  )
}

export default Balance
