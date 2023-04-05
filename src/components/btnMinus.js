
function Minus(props) {
    return (
        <div>
            <button onClick={ () => props.setCount(props.count - 1)}>
                -
            </button>
        </div>
    )
}

export default Minus