import { useState } from "react"

type details = {
    name: string,
    location: string
}
const User = (props: details) => {
    const [count] = useState(0)
    const {name, location} = props
    return (
        <div className="user-details">
            <h1>count: {count}</h1>
            <h1>{name}</h1>
            <h2>Location: {location}</h2>
            <h2>Languages: Hindi, English, Gujarati</h2>
        </div>
    )
}

export default User