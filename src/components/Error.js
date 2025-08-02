import { useRouteError } from "react-router";

const Error=()=>{
  const err=useRouteError();
  console.log(err);
  return (
    <>
    <h1>OOps!!</h1>
    <h2>{err.status}:{err.statusText}</h2>
    </>
  )
}
export default Error;