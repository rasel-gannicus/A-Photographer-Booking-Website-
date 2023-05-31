import { toast } from "react-toastify";


export const errorMessage = (msg, close) => {
    return toast.error(msg || 'There was an error doing the operation !', {
        position: "bottom-center",
        autoClose: close || 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

export const successMessage = (msg, close) => {
    return toast.success(msg, {
        position: "bottom-center",
        autoClose: close || 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}