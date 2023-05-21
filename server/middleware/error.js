/* eslint-disable no-console */
// eslint-disable-next-line import/prefer-default-export
export const errHandling = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.status || 501;
  const message = err.message || 'Unknown Error';

  res.status(statusCode).json({
    error: true,
    message,
  });

  // Call next to properly terminate the middleware chain
  next();
};
