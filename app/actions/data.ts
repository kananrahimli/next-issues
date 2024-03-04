import $axios from "../utils/axios";

export const getAllIssues=async (url:string)=>{
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data=await $axios
    .get(url)
    .then((res) => {
      return {
        data: res.data,
      //   headers: {
      //     "content-length": res.headers["content-length"],
      //     "content-type": res.headers["content-type"],
      //   },
      };
    })
    .catch((err) => {
      // return checkForUnauthorizedResponse(err, thunkAPI);
      console.log(err);
      
    });
    return data
}
