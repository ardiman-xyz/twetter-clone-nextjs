import React, { useCallback, useState } from 'react'
import Input from '../input';
import Modal from '../Modal';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';

const RegisterModal = () => {
    const loginModal        = useLoginModal();
    const  registerModal    = useRegisterModal();

    const[email, setEmail]          = useState("");
    const[password, setPassword]    = useState("");
    const[name, setName]            = useState("");
    const[username, setUsername]    = useState("");
    const[isLoading, setIsLoading]  = useState(false);

    const onToggle = useCallback(() => {
        if (isLoading) return;

        registerModal.onClose();
        loginModal.onOpen()

    }, [registerModal, isLoading, loginModal])

    const onSubmit = useCallback( async () => {
        try{
            setIsLoading(true)

            // todo register and login

            registerModal.onClose();

        }catch(err) {
            console.info(err)
        }finally{
            setIsLoading(false)
        }
    }, [registerModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}  
            />
            <Input 
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}  
            />
            <Input 
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
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

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
          <p>Already have an account?
            <span 
              onClick={onToggle} 
              className="
                text-white 
                cursor-pointer 
                hover:underline
              "
              > Sign in</span>
          </p>
        </div>
      )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title='Create an account'
            actionLabel='Register'
            onclose={registerModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal