import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "393e47dae2974e8ba57887480e1c6f18",
  },
});
