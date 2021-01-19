const Footer = ({ numOfRemaining, handleClearDone }) => {
  return (
    <footer>
      <p>剩餘項目: {numOfRemaining}</p>
      <button className={"btn-reset btn-clear "} onClick={handleClearDone}>清除項目已完成</button>
    </footer>
  )
}



export default Footer;