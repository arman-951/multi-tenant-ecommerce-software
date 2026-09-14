import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { ShieldIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function LoginPage(){
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    const [isSubmitting,setIsSubmitting]=useState<boolean>(false)
    const [error,setError]=useState<string|null>(null)

    const handleSubmit=(e:any)=>{
        e.preventDefault();

        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
            setPassword("")
            setEmail("")
        }, 2000);
        // try {
            
        // } catch (error) {
            
        // }
    }

    return(
        <div className="w-full max-w-[400px]">
            <h1 className="text-2xl font-bold">Sign In</h1>
            <p className="mt-1.5 text-sm text-muted-foreground">Access the platform admin console.</p>

            <form className="mt-7" onSubmit={handleSubmit}>
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="email">Work Email</FieldLabel>
                        <Input id="email" type="email" placeholder="example@gmail.com" autoCapitalize="username" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        disabled={isSubmitting}
                        className="h-11" required />
                    </Field>

                    <Field>
                        <div className="flex items-center justify-between">
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <Link to={'/forgot-password'} className="text-xs font-medium text-primary hover:underline">Forgot Password?</Link>
                        </div>
                        <Input id="password" type="password" placeholder="*********" autoComplete="current-password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        disabled={isSubmitting} className="h-11" required />
                    </Field>

                    {error && (
                        <p className="mt-2 text-sm text-destructive">{error}</p>
                    )}

                    <Button type="submit" className="h-11 mt-4 w-full disabled:cursor-not-allowed" disabled={isSubmitting}>{isSubmitting?<Spinner/>:"Sign In"}</Button>
                </FieldGroup>
            </form>

            <div className="flex gap-2 mt-4 text-center text-xs text-muted-foreground">
                <ShieldIcon size={16}/>
                Protected by SSO and 2-factor verification
            </div>
        </div>
    )
}