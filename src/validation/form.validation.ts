import Joi from "joi";

export const formValidation = Joi.object({
    model: Joi.string().min(1).max(20).required().messages({
        'string.empty': 'Sorry, but this input cannot empty',
        'string.min': 'Sorry, but the minimum must 1 symbol',
        'string.max': 'Sorry, but the maximum must 20 symbol',
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.empty': 'Sorry, but this input cannot empty',
        'number.min': 'Sorry, but the minimum must 1900 year',
        'number.max': `'Sorry, but the maximum must ${new Date().getFullYear()} year'`,
    }),
    price: Joi.number().min(1).max(1000000).required().messages({
        'number.empty': 'Sorry, but this input cannot empty',
        'number.min': 'Sorry, but the minimum must 1$',
        'number.max': 'Sorry, but the maximum must 1000000$',
    }),
})