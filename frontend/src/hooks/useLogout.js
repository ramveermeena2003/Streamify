import {useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import {logout } from '../lib/api';
import toast from 'react-hot-toast';

const useLogout = () => {
    const queryClient = useQueryClient();
    const {mutate:logoutMutation, isPending, error} = useMutation({
        mutationFn : logout,
        onSuccess: ()=>{
            toast.success("Successfully Logout !");
            queryClient.invalidateQueries({queryKey : ["authUser"]});
        },
        onError : (error) =>{
            toast.error(error.response.data.message);
        }

    });

    return {logoutMutation,isPending,error};
}

export default useLogout
