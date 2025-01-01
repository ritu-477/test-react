const Heading = ({ text, classStyle }) => {
    return (
        <h2 className={`main-heading fw-semibold mb-0 text-white ${classStyle}`}>{text}</h2>
    )
}
export default Heading