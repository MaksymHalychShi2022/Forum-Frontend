import {Outlet} from "react-router-dom";
import PrimaryAppBar from "./PrimaryAppBar";
import {Fragment, useState} from "react";

export default function Layout() {
  const [isOpenCreateCommentDialog, setIsOpenCreateCommentDialog] = useState(false);

  const handleOpenCreateCommentDialog = () => {
    setIsOpenCreateCommentDialog(true);
  };

  const handleCloseCreateCommentDialog = () => {
    setIsOpenCreateCommentDialog(false);
  };


  return (
    <Fragment>
      <PrimaryAppBar onCreateCommentClick={handleOpenCreateCommentDialog}/>
      <Outlet
        context={{
          isOpenCreateCommentDialog,
          handleOpenCreateCommentDialog,
          handleCloseCreateCommentDialog
        }}
      />
    </Fragment>
  )
}
