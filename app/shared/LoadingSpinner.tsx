import {ClipLoader} from "react-spinners"

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <ClipLoader color="#48B1DB" />
        </div>
    );
};

export default LoadingSpinner;