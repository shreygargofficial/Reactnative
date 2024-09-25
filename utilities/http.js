import  Axios  from "axios";

export let common= async(email,password,mode)=>{
   return await Axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=AIzaSyAr3uVag9zzuh_kUoa64zTE1IlNQIccNXc`,{
        email: email,
        password: password,
        returnSecureToken : true
    })

}

export let signUP= async(email,password)=>{
    return common(email,password,'signUp')

}
export let login = (email,password)=>{
    return common(email,password,'signInWithPassword')

}


