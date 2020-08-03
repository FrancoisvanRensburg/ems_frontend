export const userLogo = (userName) => {
  //   const userName = user.name;

  const usrLast = userName.slice(userName.lastIndexOf(' ') + 1).charAt(0);
  const usrFirst = userName.split(' ')[0].charAt(0);
  return usrFirst.concat(usrLast);
};

export const usrTpe = (userType) => {
  if (userType === 'Pm') {
    return 'Project Manager';
  } else if (userType === 'Adm') {
    return 'Admin';
  } else if (userType === 'Hr') {
    return 'Human Resources';
  } else if (userType === 'Tl') {
    return 'Team Leader';
  } else if (userType === 'Res') {
    return 'Resource';
  } else {
    return 'No role defined';
  }
};
