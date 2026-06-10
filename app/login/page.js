"use client"
import { useState } from "react"
import { useRouter } from "next/router"

export default function Signup(){
    const router=useRouter()
    const[ name,setName]=useState("")
      const[email,setEmail]=useState("")
        const[ password,setPassword]=useState("")

        const handleSubmit=async(e)=>{
            e.preventDefault()
            //collect all input values into one object
            cont FormData={
                name,
                email,
                password,

            }
            //send data tothe backend api
            const res=await fetch("/api/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)

            })
            //.waits for response from the backend
            const data=await res.json()
            console.log(data)
            setName("")
            setEmail("")
            setPassword("")
            //redirects user to login page
            router.push(".login")
        }

    return(
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-excell p-10 border rounded-lg shadow-sm">
                <h1 className="text-3xl font-bold text-green-700 text-center">Create Account </h1>
                <form className="mt-6 flex flex-col gap-4" onSubmit={(handlesubmit)}>
                    <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    className="border p-3 rounded-md placeholder-gray-500  text-black"/>

                      <input
                    type="email"
                    placeholder="Email Address"
                    onChange={(e)=>setEmail(e.target.value)}
                    className="border p-3 rounded-md placeholder-gray-500 text-black"/>

                      <input
                    type="password"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                    className="border p-3 rounded-md placeholder-gray-500 text-black"/>
                    <button className="bg-green-600 text-white py-3 rounded-md"> signup</button>

                </form>
                <p className="text-center text-gray-600 mg-4">
                    Alredy have an account?
                    <a href=".login " className="text-green-600 ml-1">Login</a>
                </p>
                
            </div>

        </div>
    )
}