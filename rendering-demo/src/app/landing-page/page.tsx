import Navbar from "../components/navbar";
import ClientComponentOne from "../components/client-component-one";
import ServerComponentOne from "../components/server-component-one";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Landing Page</h1>
      <ClientComponentOne>
<ServerComponentOne />
      </ClientComponentOne>
    </div>
  );
};
export default LandingPage;