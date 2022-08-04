import { useFormik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router";
import useFetch from "use-http";
import * as yup from 'yup';
import { MainContext } from "../provider/MainProvider";




const validationSchema = yup.object({
    username: yup.string().required(" username is required").min(3, "username must be more than 3 character")
    ,
    password: yup.string().required(" password is required").min(6, "username must be more than 6 character")//.matches("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$","This password is not strong!")
})





const initialValues = {
    username: "",
    password: ""
}




const Login = () => {

const {post, response}=useFetch()
const navigate = useNavigate();
const {setToken}=useContext(MainContext);


    const onSubmit = async(values) => {
       await post("/api/user/login",values)
       if (response.ok){
           localStorage.setItem(response.data.accessToken)
           setToken(response.data.accessToken)
           navigate("/",{replace:true})
       }
    

        console.log(response)
    }



    const formik = useFormik({
        initialValues, onSubmit, validationSchema, validateOnMount: true
    })




    return (<div >

        <form className="flex flex-col border shadow-sm max-w-md mx-auto mt-36 p-4" onSubmit={formik.handleSubmit}>
            <h1 className="font-bold text-center my-10 text-xl text-gray-500">Login to admin panel</h1>
            <div className="flex  flex-col my-2">
                <label className="font-bold" htmlFor="username-login">User name</label>
                <input id="username-login" value={formik.values.username} onChange={formik.handleChange} placeholder="username" type="text" name="username" className=" border border-gray-50 mt-2 rounded" onBlur={formik.handleBlur} />
                {formik.errors.username && formik.touched.username && <p className="text-rose-500 mt-2 text-sm"> {formik.errors.username}</p>}
            </div>
            <div className="flex  flex-col my-2 ">
                <label className="font-bold" htmlFor="password-login">Password</label>

                <input id="password-login" value={formik.values.password} onChange={formik.handleChange} placeholder="password " type="password" name="password" className=" border border-gray-50 mt-2 rounded" onBlur={formik.handleBlur} />
                {formik.errors.password && formik.touched.password && <p className="text-rose-500 mt-2 text-sm" > {formik.errors.password}</p>}
            </div>

            <button disabled={!formik.isValid} type="submit" className=" bottom-1 text-blue-100 rounded bg-slate-900 mt-5 disabled:bg-gray-400 "  >Log in</button>
        </form>





    </div>);
}

export default Login;