'use strict'

const {
  CRON_TIME_ZONE = 'Asia/Kolkata',
  CRON_TIME_EMAIL_NOTIFICATION='',
  CRON_TIME_RETRY_NOTIFICATION='',
} = process.env

const REQUIRED_CONFIG = [
  'CRON_TIME_ZONE',
  'CRON_TIME_EMAIL_NOTIFICATION',
  'CRON_TIME_RETRY_NOTIFICATION'
]

REQUIRED_CONFIG.forEach(key => {
  if (!process.env[key]) {
    console.error('[Error] Micro-service Cron Config Missing:', key)
    return process.exit(1)
  }
})

const CRON_CONFIG = {
  TIME_ZONE: CRON_TIME_ZONE,
  CRON_TIME_EMAIL_NOTIFICATION,
  CRON_TIME_RETRY_NOTIFICATION
}

export default CRON_CONFIG
