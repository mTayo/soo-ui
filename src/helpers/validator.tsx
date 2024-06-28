/* eslint-disable no-return-assign */
/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
import { validateAll, extend } from 'indicative/validator';
import { getValue } from 'indicative-utils';
import validator from 'validator';

extend('isEmail', {
    async: true,
    /**
     * @param {*} args
     * @returns {args} args
     */
    compile(args: any) {
        return args;
    },

    /**
     * @param {*} data data object
     * @param {*} field fields
     * @returns {Boolean} bool
     */
    async validate(data: any, field: any) {
        const fieldValue = getValue(data, field);
        return validator.isEmail(fieldValue);
    }
});

extend('checkForPasswordRegex', {
    async: true,
    /**
     * @param {*} args
     * @returns {args} args
     */
    compile(args: any) {
        return args;
    },

    /**
     * @param {*} data data object
     * @param {*} field fields
     * @returns {Boolean} bool
     */
    async validate(data: any, field: any) {
        const fieldValue = getValue(data, field);
        return validator.matches(fieldValue, /^[a-zA-Z0-9?~`!-@#$%^&*()_+=?]+$/);
    }
});
extend('passwordLength', {
    async: true,
    /**
     * @param {*} args
     * @returns {args} args
     */
    compile(args: any) {
        return args;
    },

    /**
     * @param {*} data data object
     * @param {*} field fields
     * @returns {Boolean} bool
     */
    async validate(data: any, field: any) {
        const fieldValue = getValue(data, field);
        return validator.isLength(fieldValue, {min: 8, max: undefined});
    }
});

extend('3matchingLetters', {
    async: true,
    /**
     * @param {*} args
     * @returns {args} args
     */
    compile(args: any) {
        return args;
    },
   
    /**
     * @param {*} data data object
     * @param {*} field fields
     * @returns {Boolean} bool
     */
    async validate(data: any, field: any) {
        const fieldValue = getValue(data, field);
        let returnValue = 0;
        const alphabetCount = /[a-zA-Z0-9?~`!-@#$%^&*()_+=?]{3}/g
        returnValue = ((fieldValue || '').match(alphabetCount) || []).length;
        return returnValue > 0;
    }
});

extend('noSpecialCharacters', {
    async: true,
    /**
     * @param {*} args
     * @returns {args} args
     */
    compile(args: any) {
        return args;
    },

    /**
     * @param {*} data data object
     * @param {*} field fields
     * @returns {Boolean} bool
     */
    async validate(data: any, field: any) {
        const fieldValue = getValue(data, field);
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return !specialChars.test(fieldValue);
    }
});

extend('confirmPassword', {
    async: true,
    /**
     * @param {*} args
     * @returns {args} args
     */
    compile(args: any) {
        return args;
    },

    /**
     * @param {*} data data object
     * @param {*} field fields
     * @returns {Boolean} bool
     */
    async validate(data: any, field: any) {
       
        const fieldValue = getValue(data, field);
        const passwordValue = getValue(data, 'confirmPassword');
        
        return fieldValue === passwordValue;
    }
});


/**
 * Method to validate form data
 * @param {*} data
 * @param {*} rules
 * @param {*} messages
 * @returns {object} error
 */
// eslint-disable-next-line import/prefer-default-export
export const validateData = async (data: object, rules: any, messages: any, removeAdditional = false) =>
    validateAll(data, rules, messages, { removeAdditional })
        .then(() => ({}))
        .catch((errors) => {
            const formattedErrors: any = {};
            for (const key in errors) {
                if (Object.prototype.hasOwnProperty.call(errors, key)) {
                    const element = errors[key];

                    if(formattedErrors[element.field]){
                        formattedErrors[element.field].push(element.message)
                    }else{
                        formattedErrors[element.field] = [element.message]
                    }
                }
            }

            return formattedErrors;
        });
