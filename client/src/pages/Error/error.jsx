import { useRouteError } from "react-router-dom";
import "./error.css"
export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div id="error-page">

            <h1>Eeeeeeeebla3</h1>
            <h2 className="errorrrr">404</h2>
        </div>
    );
}