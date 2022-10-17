const getUserInitiales = (userName) => {
  const spaceIndex = userName.indexOf(" ")
  return `${userName.at(0)}${userName.at(spaceIndex + 1)}`
}

export default getUserInitiales