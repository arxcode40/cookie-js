'use strict'

const cookie = {
    get: function(name) {
        const cookies = decodeURIComponent(document.cookie).split('; ')
                        .filter(cookie => cookie.includes(`${name}=`))
                        .map(cookie => cookie.trim().split('='))
        return cookies.length ? Object.fromEntries(cookies) : null
    },
    set: function(name, value, options = {}) {
        const domain = options.domain ? `; Domain=${options.domain}` : ''
        const expires = `; Expires=${new Date(Date.now() + (options.expires || 0)).toUTCString()}`
        const httpOnly = options.httpOnly ? '; HttpOnly' : ''
        const maxAge = options.maxAge ? `; Max-Age=${options.maxAge}` : ''
        const partitioned = options.partitioned ? '; Partitioned' : ''
        const path = `; Path=${options.path || '/'}`
        const secure = options.secure ? '; Secure' : ''
        const sameSite = options.sameSite ? `; SameSite=${options.sameSite}` : ''
        
        document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}${domain}${expires}${httpOnly}${maxAge}${partitioned}${path}${secure}${sameSite}`
    },
    has: function(name, value = null) {
        return this.get(name) !== null && (value === null || this.get(name) === value)
    },
    'delete': function(name, options = {}) {
        this.set(name, '', {
            domain: options.domain,
            expires: -Date.now(),
            path: options.path
        })
    }
}