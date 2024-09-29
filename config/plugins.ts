import {env} from "@strapi/utils";

export default () => ({
    email: {
        config: {
            provider: 'mailgun',
            providerOptions: {
                key: env('MAILGUN_API_KEY'),
                domain: env('MAILGUN_DOMAIN'),
            },
            settings: {
                defaultFrom: env('EMAIL_DEFAULT_FROM', 'defaultemail@example.com'),
                defaultReplyTo: env('EMAIL_DEFAULT_REPLY_TO', 'defaultemail@example.com'),
            },
        },
    },
});
