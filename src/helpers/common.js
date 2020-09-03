export const getUser = () => {
    const userId = localStorage.getItem('id');
    if (userId) return userId;
    else return null;
};

export const removeUserSession = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
};


