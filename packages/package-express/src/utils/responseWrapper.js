module.exports = (res, data, status = 200) => {
  const success = status >= 200 && status < 300
  res.status(status).json({ success, data })
}
