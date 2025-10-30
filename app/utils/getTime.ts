
const getTime = (productCreateTime: any) => {
    const currentTime = new Date();
    let timeDifferent = currentTime.getTime() - productCreateTime.getTime();
    const days = Math.floor(timeDifferent / (1000 * 60 * 60 * 24));
    timeDifferent -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(timeDifferent / (1000 * 60 * 60));
    timeDifferent -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(timeDifferent / (1000 * 60));
    const time = `${days ? `${days} days` : ""} ${days ? `${hours} hours` : ""} ${minutes} minutes`;
    return time;
};

export default getTime;