'use strict'

import fs from 'fs'
import _ from 'lodash'
import { NotificationTemplateModel } from '../../api/models/'
import { NotificationService } from '../../api/services/'
import { MONGO_CONFIG } from '../../config'

beforeAll(() => {
    MONGO_CONFIG.mongoConnect()
    console.log('[Info] MongoDB Connected')
})

describe('Notification Template - [ Fetch Template ]', () => {

  test('Fetching Template...', async () => {
    const toFind= {
      templateId: 225,
      isActive: true,
      templateType: 'EMAIL'
  }

  const response = await NotificationTemplateModel.Get(toFind)

  expect(response.isActive).toBe(true)
  })


  test('False check fetching template...', async () => {
    const toFind= {
      templateId: 222,//this id doesn't exists in DB
      isActive: true,
      templateType: 'EMAIL'
  }

  const response = await NotificationTemplateModel.Get(toFind)

  expect(response.statusCode).toBe(404)
  })
})

describe('Notification Service - [ Send Email ]', () => {

  test('Sending Notification...', async () => {
  const expectedOutput = { "n": 1, "nModified": 1, "ok": 1 }

  const response = await NotificationService.sendEmailNotification()
  expect(response).toStrictEqual(expectedOutput)
  })
})
