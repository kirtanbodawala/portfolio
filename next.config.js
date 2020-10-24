const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} = require('next/constants')

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // when `next build` or `npm run build` is used
    const isStaging =
        phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

    const env = {
        SENDGRID_API_KEY: (() => {
            if (isDev) return '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'
            if (isProd) {
                return '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'
            }
            if (isStaging) return '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'
            return 'SENDGRID_API_KEY:not (isDev,isProd && !isStaging,isProd && isStaging)'
        })()
    }

    // next.config.js object
    return {
        env,
    }
}