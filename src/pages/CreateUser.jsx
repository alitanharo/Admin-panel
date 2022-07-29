
import { useFormik } from 'formik';
import TextField from '../components/TextField';


const initialValues = {
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    mobileNumber: "",
    birthDate: new Date().getTime()
}

const CreateUser = () => {
    const formik = useFormik({
        initialValues
    })

    return (
        <div>
            
            <form className='grid grid-cols-2 gap-8 max-w-[500px] border rounded shadow mx-auto mt-20 p-2'>
                <h1 className='col-span-2 text-center p-3 text-2xl font-bold'>Add New User</h1>
                <TextField
                    formik={formik}
                    name={"username"}
                    label={"User name"}
                    placeholder={"user name"}
                />
                <TextField
                    formik={formik}
                    name={"password"}
                    label={"Password"}
                    placeholder={"password"}
                    type={"password"}
                />
                <TextField
                    formik={formik}
                    name={"firstName"}
                    label={"Name"}
                    placeholder={"name"}
                />
                <TextField
                    formik={formik}
                    name={"lastName"}
                    label={"Last Name"}
                    placeholder={"last name"}
                />
                <TextField
                    formik={formik}
                    name={"email"}
                    label={"Email"}
                    placeholder={"email"}
                />
                <TextField
                    formik={formik}
                    name={"mobileNumber"}
                    label={"Mobile"}
                    placeholder={"mobile"}
                />
                <button type='submit' className='border-b-2 border border-b-gray-300 bg-gray-100 w-full p-1 col-span-2 '>Add User </button>
            </form>
        </div>
    );
}

export default CreateUser;