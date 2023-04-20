import { ISocketIoResponse } from '../types'

export const checkResponse = (response: string): ISocketIoResponse => {
  return { type: parseInt(response[0]), code: parseInt(response[1]) }
}

export const getCallbackId = (response: string): number => {
  return parseInt(response.slice(2))
}

export const getArrayFromRequest = (response: string): string[] => {
  const match = /\[.+\]/
  const parsedResponse = response.match(match)
  return parsedResponse ? JSON.parse(parsedResponse[0]) : []
}
