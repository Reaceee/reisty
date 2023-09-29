const tab = (props) => {
    return (
        <div onClick={e => {document.querySelector(".guestNum").textContent = e.target.textContent}} className="p-3 px-4 hover:bg-gray-100 min-w-max rounded-md">{props.no} guest{parseInt(props.no) > 1 ? "s" :''}</div>
    )
}

export default tab;