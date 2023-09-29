const discoverCard = (props) => {
    return (
        <>
            <div className="card snap-center shrink-0 lg:w-full">
                <img draggable={false} src={props.img}  className="lg:w-full object-cover object- h-[200px] w-[240px] lg:h-auto" />
                <div className="text-sm mt-2">{props.category}</div>
            </div>
        </>
    )
}
export default discoverCard;