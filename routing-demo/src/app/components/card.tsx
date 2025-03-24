const Card = ({children}: {children: React.ReactNode}) => {
    const cardStyle = {
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    return (
        <div style={cardStyle}>
            {children}
        </div>
    )
}
export default Card;