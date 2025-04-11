import ServerSideFunction from "../utils/server-utils";
import ImageSlider from "../utils/image-slider";

const ServerRoutePage = () =>  {
    const result = ServerSideFunction();
      return (
        <div>
          <h1>Server Route Page</h1>
          <p>{result}</p>
           <ImageSlider />
          </div>
      )
    }
export default ServerRoutePage;