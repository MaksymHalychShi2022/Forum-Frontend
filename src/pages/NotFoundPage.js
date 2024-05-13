import {Link} from "react-router-dom";

export default function NonFoundPage() {
  return (
    <>
      <div>404 Not Found</div>
      <Link to="/">Go home</Link>
    </>

  )
}