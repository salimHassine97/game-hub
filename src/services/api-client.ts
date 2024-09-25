import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "383a197e76b942b2971ba94e2aabfe1e",
  },
});
