import useLoginModal from '@/hooks/useLoginModal'
import React, { useCallback, useState } from 'react'
import Input from '../input';
import Modal from '../Modal';

const LoginModal = () => {

    const loginModal = useLoginModal();

    const[email, setEmail]          = useState("");
    const[password, setPassword]    = useState("");
    const[isLoading, setIsLoading]  = useState(false);

    const onSubmit = useCallback( async () => {
        try{
            setIsLoading(true)

            // todo login

            loginModal.onClose();

        }catch(err) {
            console.info(err)
        }finally{
            setIsLoading(false)
        }
    }, [loginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}  
            />
            <Input 
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading} 
            />
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title='Login'
            actionLabel='Sign In'
            onclose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
        />
    )
}

export default LoginModal