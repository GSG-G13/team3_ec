

export const  errHandling  = (err, req, res, next) => {
    console.error(err.stack);
  
    const statusCode = err.status || 501;
    const message = err.message || 'Unknown Error';
  
    res.status(statusCode).json({
      error: true,
      message: message,
    });
  
    // Call next to properly terminate the middleware chain
    next();
  };
  