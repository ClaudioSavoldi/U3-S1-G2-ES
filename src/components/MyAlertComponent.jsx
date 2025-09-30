import { Alert } from "react-bootstrap";

function MyAlertComponent() {
  return (
    <div className="text-center mt-4 transparent-alert">
      <Alert className="transparent-alert">
        <h2>Benvenuto nel nostro Bookshop!</h2>
        <p>Trova i tuoi libri preferiti e scoprine di nuovi</p>
      </Alert>
    </div>
  );
}

export default MyAlertComponent;
