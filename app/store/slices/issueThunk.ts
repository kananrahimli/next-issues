import $axios from "@/app/utils/axios";

export const getAllIssueThnuk = (url:string, thunkAPI:Object) => {
    return $axios
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
  };