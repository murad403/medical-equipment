
const useGetDateAndTime = (dataAndTime: Date) => {
    const date = new Date(dataAndTime).toDateString();
    const time = new Date(dataAndTime).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    return {date, time};
};

export default useGetDateAndTime;