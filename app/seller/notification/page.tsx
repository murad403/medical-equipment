import ProtectedRoute from "@/app/hooks/ProtectedRoute";
import Notification from "@/app/shared/Notification";

const page = () => {
    return (
        <ProtectedRoute>
            <Notification></Notification>
        </ProtectedRoute>
    );
};

export default page;