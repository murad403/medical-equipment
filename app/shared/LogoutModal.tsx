"use client";
import Swal from "sweetalert2";
import "../styles/sweetAlertButton.css"
import { TbLogout } from "react-icons/tb";
import { useAppDispatch } from "../redux/hook";
import { useRouter } from "next/navigation";
import { removeUser } from "../redux/features/userSlice";

const LogoutModal = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const handleLogOut = () => {
        Swal.fire({
            title: "Logout",
            text: "Are you sure you want to log out ?",
            showCancelButton: true,
            cancelButtonText: "No",
            confirmButtonText: "Yes",
            customClass: {
                cancelButton: "custom-cancel-button",
                confirmButton: "custom-confirm-button"
            }
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeUser());
                router.push("/");
                Swal.fire("Logout successfully", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        })
    }
    return (
        <button onClick={handleLogOut} className="flex items-center gap-1 w-full bg-normal text-title cursor-pointer justify-center py-2 rounded-xl">
            <TbLogout/>
            <span>Logout</span>
        </button>
    )
}

export default LogoutModal;