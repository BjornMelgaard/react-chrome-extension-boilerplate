function fromEnv(x) {
  return JSON.stringify(process.env[x])
}

export default fromEnv
