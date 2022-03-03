import Navbar from "../navbar/Navbar";
function NewUser() {
  return (
    <div className="middle">
      <Navbar />
      <div className="main">
        <h2 style={{ textAlign: "center" }}>Add new user</h2>
      </div>
    </div>
  );
}

export default NewUser;
