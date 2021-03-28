'use strict'

const {
  SMTP_HOST = '',
  SMTP_PORT = '',
  SMTP_PASSWORD = '',
  SMTP_USERNAME = '',
  SENDER_EMAIL = '',
  SENDER_SERVICE = '',
  SENDER_NAME = '',
  NODEMAILER_DEBUG = 'false',
  NODEMAILER_LOGGER = 'false'
} = process.env

const REQUIRED_CONFIG = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SENDER_EMAIL',
  'SENDER_SERVICE',
  'SENDER_NAME'
]

REQUIRED_CONFIG.forEach(function (key) {
  if (!process.env[key]) {
    console.error('[Error] Dispatch Config Missing:', key)
    return process.exit(1)
  }
})

const DISPATCH_CONFIG = {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_PASSWORD,
  SMTP_USERNAME,
  SENDER_EMAIL,
  SENDER_SERVICE,
  SENDER_NAME,
  NODEMAILER_DEBUG: NODEMAILER_DEBUG.toLowerCase().trim() === 'true',
  NODEMAILER_LOGGER: NODEMAILER_LOGGER.toLowerCase().trim() === 'true'
}

export default DISPATCH_CONFIG
