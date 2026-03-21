import { useRouteError } from "react-router"
interface ErrorInfo{
    internal: boolean;
    status: number;
    statusText: string;
}
const Error = () => {
    const err = useRouteError() as ErrorInfo
    console.log(err)
    return (
        <div>
            <h1>Oops</h1>
            <h2>Something is wrong</h2>
            <h2>{err.statusText}</h2>
        </div>
    )
}

export default Error