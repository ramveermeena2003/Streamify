import { useMutation, useQueryClient } from "@tanstack/react-query"
import { signup } from "../lib/api";

const useSignUp = () => {

    const queryClient = useQueryClient();

    const {mutate, isPending, erorr} = useMutation({
        mutationFn : signup,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["authUser"]}),
    });

    return {signupMutation :mutate, isPending, erorr};
}

export default useSignUp
