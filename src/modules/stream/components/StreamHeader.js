import {Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const StreamHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand me-auto mb-sm-0" to="/streams">Streams</Link>
      <div className="d-flex">
        <GoogleAuth />
      </div>
    </nav>
  )
}

export default StreamHeader