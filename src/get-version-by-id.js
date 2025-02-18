exports.getVersionById = (versions, id) => {
  if (id != null) {
    const version = versions.find(version => version.id === id)

    if (version != null) {
      return version
    }
  }

  return [...versions].shift()
}
