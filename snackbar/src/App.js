import React, { useState } from "react";
import "./App.css";

// export default function CustomizedSnackbars() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <div className={classes.root}>
//       <Button variant="outlined" onClick={handleClick}>
//         Open success snackbar
//       </Button>
//       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity="success">
//           This is a success message!
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// }

const App = () => {
  const [inp, setInp] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log(open);
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
      setTimeout(() => setOpen(false), 10000);
    }
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
        className="btn"
      >
        <button onClick={handleClick}>click to open Snackbar</button>
      </div>
      {open ? (
        <div
          style={{
            backgroundColor: "green",
            height: "30px",
            width: "fit-content",
            position: "absolute",
            top: "75%",
            bottom: "0",
            left: "40%",
            right: "0",
            zIndex: "1",
          }}
          className="snack"
        >
          This is a warning <button onClick={handleClick}>close</button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default App;
