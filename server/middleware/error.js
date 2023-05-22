export const errHandling = (err, req, res, next) => {
  const statusCode = err.status || 501;
  const message = err.message || 'Unknown Error';

  res.status(statusCode).json({
    error: true,
    message,
  });
  next();
};
