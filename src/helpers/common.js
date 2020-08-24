export const getUser = () => {
    const userStr = localStorage.getItem('id');
    const usernameStr = localStorage.getItem('username');
    if (userStr || usernameStr) return userStr ? userStr : usernameStr;
    else return null;
};

export const getUserName = () => {
    let userName = localStorage.getItem('id');
    if(userName) return userName;
    else {
        userName = 'Unknown';
        return  userName;
    }
};

export const removeUserSession = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
};

export const setUserSession = ( user, password ) => {
    localStorage.setItem('username', user);
    localStorage.setItem('password', password);
};

