export const useUserDate = () => {
    const currentHour = new Date().getHours();

    return {
        isNight: currentHour < 18 && currentHour > 6,
    };
};
