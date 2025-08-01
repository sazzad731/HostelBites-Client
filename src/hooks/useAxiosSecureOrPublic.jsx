import axios from 'axios';
import useAuth from './useAuth';


const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_PROD_SERVER_URL,
  // baseURL: import.meta.env.VITE_LOCAL_SERVER_URL,
});


const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_PROD_SERVER_URL,
  // baseURL: import.meta.env.VITE_LOCAL_SERVER_URL,
});

const useAxiosSecureOrPublic = () => {
  const { logOut } = useAuth();
  
  axiosSecure.interceptors.request.use(config=>{
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`;
    return config
  })


  axiosSecure.interceptors.response.use(res=>{
    return res;
  }, (error)=>{
    if (error.response?.status === 401 || error.response?.status === 403) {
      logOut()
        .then(() => {
          localStorage.removeItem("token");
        })
        .catch((err) => console.log(err));
    }
    return Promise.reject(error)
  })

  return { axiosSecure, axiosPublic };
};

export default useAxiosSecureOrPublic;