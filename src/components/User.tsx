type details = {
    name: string,
    location: string
}
const User = (props: details) => {
    const {name, location} = props
    return (
        <div className="user-details">
            <h1>{name}</h1>
            <h2>Location: {location}</h2>
            <h2>Languages: Hindi, English, Gujarati</h2>
        </div>
    )
}

export default User