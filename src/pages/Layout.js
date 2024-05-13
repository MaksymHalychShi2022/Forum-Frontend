import {Outlet} from "react-router-dom";
import PrimaryAppBar from "../components/AppBar";

export default function Layout() {
  return (
    <>
      <PrimaryAppBar/>
      <Outlet/>
    </>
  )
}