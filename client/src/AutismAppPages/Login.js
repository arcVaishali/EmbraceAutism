import { useState , useEffect } from "react";
import { Link } from "react-router-dom"; 

const Login = () => {
    const [email , setEmail ] = useState("") ;
    const [password , setPassword ] = useState("") ;
    const [errors , setErrors] = useState({});
    const [submitted , setSubmitted ] = useState(false) ;
    const [touched , setTouched] = useState({});
    const [isFormValid , setIsFormValid ] = useState(false) ;

    useEffect(()=>{
        const error = {} ;
        if ( touched.email && email.trim() === "" ) {
            error.email = "Email cannot be empty" ;
        }
        if ( touched.email && !email.trim().includes('@')) {
            error.email = "Invalid email";
        } 
        if ( touched.password && (password.trim().length < 8 || password.trim().length > 8)) {
            error.password = "Password must be minimum of 8 characters" ;
        }

        setErrors( error ) ;

        const isEmailValid = email !== "" && email.includes('@') ;
        const isPasswordValid = password.length >= 8 ;

        setIsFormValid( 
            isEmailValid &&
            isPasswordValid
        )

    } , 
    [
        email , 
        password,
        touched.password ,
        touched.email
    ]);

    const handleSubmit = (e) => {
        e.preventDefault() ;

        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
        const params = new URLSearchParams({ email: email, password: password});
        fetch(`${API_BASE_URL}/users/login?${params}`).then(
            async (res)=>{
                if ( res.ok ) {
                    setSubmitted(true)
                } else {
                    // const errMsg = await res.text() ;
    
                    setErrors({...errors , ["submit"] : "Login Unsuccessful" } ) ;
                }
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        ) ;
    }

    const handleTouch = (field) => {
        setTouched({...errors , [field] : true} ) ;
    }


    return (
        <div className="grid grid-cols-12 justify-center p-5 m-10">
        <span className="col-start-5 col-span-6 text-3xl p-10 mr-10 ml-10">
            User Login
        </span>
            {
                !submitted ? (
                    <form  className="grid grid-rows-1 justify-center col-start-4 col-span-6 p-5 mb-4 border-2 rounded-md" onSubmit={(e) => handleSubmit(e)}>
                        <label className="block m-1 text-sm" for="email">Email</label>
                        <input
                        className="rounded-sm m-1 border-2"
                        id = "email"
                        value = {email} 
                        name = "email"
                        type = "text"
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={(e)=> handleTouch("email")}
                        />
                        {
                            errors.email && (<div className="text-xs text-red-600">{errors.email}</div>)
                        }
                        
                        <label className="block m-1 text-sm"  for="password">Password</label>
                        <input 
                        className="rounded-sm m-1 border-2"
                        id = "password" 
                        type = "text" 
                        value = {password} 
                        name = "password"
                        onChange = {(e)=>setPassword(e.target.value)}
                        onBlur = {(e)=>handleTouch("password")}
                        />
                        {
                            errors.email && (<div className="text-xs text-red-600">{errors.password}</div>)
                        }

                        <input
                        className = {
                            isFormValid
                                ? "bg-green hover:bg-oliveGreen active:bg-green rounded-md border-2 m-2 p-2"
                                : "bg-gray-600 hover:bg-gray-300 rounded-md border-2 m-2 p-2"
                        }
                        type="submit" 
                        disabled = {!isFormValid} 
                        name = "submit" 
                        />
                        {
                            errors.submit && (<div className="text-xs text-red-600">{errors.submit}</div>)
                        }
                    </form>
                ) : (
                    <div>User Login Successful, Pls complete your profile <Link to="/user">here</Link></div>
                )
            }
        </div>
    );
}

export default Login ;