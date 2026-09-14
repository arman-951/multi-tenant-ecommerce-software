import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Spinner } from "@/components/ui/spinner"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router"

const VerifyForgotOtp = () => {
    const location=useLocation()
    const email=(location.state as {email?:string})?.email
    const [otp, setOtp] = useState<string>("")
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [resetToken,setResetToken]=useState<string|null>("")
    const navigate=useNavigate()


         const handleSubmit=(e:any)=>{
        e.preventDefault();

        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
            setOtp("")
            navigate('/reset-password',{
                state:{
                    email,
                    resetToken
                }
            })
        }, 2000);
        // try {
            
        // } catch (error) {
            
        // }
    }


    return (
        <div className="w-full max-w-sm">
            <Link to={'/forgot-password'} aria-label="Back to sign in" className="mt-4 inline-flex text-foreground items-center gap-2">
                <ArrowLeft className="size-5" />
                Back
            </Link>
            <h2 className="text-2xl font-bold">Enter Verification Otp</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">{email?(
                <>
                <p className="text-sm">
                    we sent a 6 digit otp to {" "}
                    <span className="font-medium text-foreground">{email}</span>
                </p>
                </>
            ):(
                <p>
                    we sent a 6 digit otp to your email address.
                </p>
            )}</p>

            <form className="mt-6" onSubmit={handleSubmit}>
                <InputOTP maxLength={6} value={otp} onChange={setOtp} disabled={isSubmitting} className="w-full">
                <InputOTPGroup className="w-full">
                <InputOTPSlot index={0} className="w-full h-11 text-lg"/>
                <InputOTPSlot index={1} className="w-full h-11 text-lg"/>
                <InputOTPSlot index={2} className="w-full h-11 text-lg"/>
                <InputOTPSlot index={3} className="w-full h-11 text-lg"/>
                <InputOTPSlot index={4} className="w-full h-11 text-lg"/>
                <InputOTPSlot index={5} className="w-full h-11 text-lg"/>
                </InputOTPGroup>
                </InputOTP>
                {error && (
                    <p className="mt-2 text-sm text-destructive">{error}</p>
                )}

                    <Button type="submit" className="h-11 mt-4 w-full disabled:cursor-not-allowed" disabled={isSubmitting}>{isSubmitting?<Spinner/>:"Verify OTP"}</Button>

            </form>
        </div>
    )
}

export default VerifyForgotOtp
