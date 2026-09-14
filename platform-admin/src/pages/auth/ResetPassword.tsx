import PasswordInput from '@/components/PasswordInput'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { CheckCircle2, ShieldIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router'

const ResetPassword = () => {
    const location=useLocation()
    const state=location.state as {email?:string,resetToken?:string}|null
    const {email,resetToken}=state;

    const [password,setPassword]=useState<string>("")
    const [confirmPassword,setConfirmPassword]=useState<string>("")

    const [isSubmitting,setIsSubmitting]=useState<boolean>(false)
    const [isDone,setIsDone]=useState<boolean>(false)
    const [error,setError]=useState<string|null>(null)

    const misMatch=confirmPassword.length>0 && password!==confirmPassword

    // const handleSubmit=(e:any)=>{
    //     e.preventDefault();

    //     if(misMatch) return
    //     // if(!resetToken){
    //     //     setError("Something went wrong")
    //     // }
    //     setIsSubmitting(true)
    //     try {
    //          setTimeout(() => {
    //               setPassword("")
    //         setConfirmPassword("")
    //         setIsDone(true)
    //     }, 2000);
    //     } catch (err) {
    //         setError(typeof err==="string"?err:"Could not reset password")
    //     }finally{
    //         setIsSubmitting(false)
          
    //     }
    // }

     const handleSubmit=(e:any)=>{
        e.preventDefault();
        setIsSubmitting(true)
        setTimeout(() => {
                  setPassword("")
            setConfirmPassword("")
            setIsDone(true)
            setIsSubmitting(false)
        }, 2000);
     }

    if(isDone){
        return(
            <div className="w-full max-w-sm flex flex-col items-center justify-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-accent">
                    <CheckCircle2 className='size-6 text-primary' />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-center">Password Updated</h2>
                <p className="mt-2 text-sm text-muted-foreground text-center">Your password has been reset, You can now sign in with your new password.</p>
                <Button className='mt-8 h-11 w-full'>
                    <Link to={'/login'}>Back sign in</Link>
                </Button>
            </div>
        )
    }
    return(
        <div className="w-full max-w-[400px]">
            <h1 className="text-2xl font-bold">Set a new Password</h1>
            <p className="mt-1.5 text-sm text-muted-foreground">
                {email?(
                    <>
                    <p className="text-sm">New password for {" "} <span className="text-foreground font-semibold">{email}</span></p>
                    </>
                ):(
                    <>
                    <p className="text-sm">Choose a new password for your account.</p>
                    </>
                )}
            </p>

            <form className="mt-7" onSubmit={handleSubmit}>
                <FieldGroup>
                    <Field>
                        <FieldLabel>Password</FieldLabel>
                        <PasswordInput id="password" placeholder="*********" autoComplete="new-password"
                        value={password} onChange={(e)=>setPassword(e.target.value)}
                        disabled={isSubmitting} className="h-11" required />
                    </Field>
                    <Field>
                        <FieldLabel>Confirm Password</FieldLabel>
                        <PasswordInput id="confirm-password" placeholder="*********" autoComplete="confirm-password"
                        value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}
                        disabled={isSubmitting} className="h-11" required />

                        {misMatch && <FieldError>Password dosn't match</FieldError>}
                    </Field>

                    {error && (
                        <p className="mt-2 text-sm text-destructive">{error}</p>
                    )}

                    <Button type="submit" className="h-11 mt-4 w-full disabled:cursor-not-allowed" disabled={isSubmitting}>{isSubmitting?<Spinner/>:"Reset Password"}</Button>
                </FieldGroup>
            </form>
        </div>
    )
}

export default ResetPassword
