import Joi from 'joi';

export const SignUpSchema = Joi.object({

  username: Joi.string().required().min(3).max(50),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().pattern(new RegExp('[a-zA-Z0-9]{6,30}$')),
  confirmPassword: Joi.ref('password'),
  type: Joi.string().valid('admin', 'user'),
  phone: Joi.string().pattern(new RegExp('05[9,6]{1}[0-9]{1}[0-9]{6}')),
  img_url: Joi.string(),
});

export const LoginSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().min(6).required(),
});
