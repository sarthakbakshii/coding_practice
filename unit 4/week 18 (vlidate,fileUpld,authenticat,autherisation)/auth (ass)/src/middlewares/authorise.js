const authorise = (permittedRoles) => {
  
  return (req, res, next) => {
    const user = req.user
    let isAllowed = false
    for (let i = 0; i < user.role.length; i++) {
      if (permittedRoles.includes(user.role[i])) {
        isAllowed = true
        break
      }
    }

    if (isAllowed) {
      next()
    } else {
      return res.status(403).send({ message: "Permission Denied" })
    }
  }
}

module.exports = authorise
