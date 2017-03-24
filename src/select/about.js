import { createStructuredSelector } from 'reselect'
import { getDb } from './'

export const aboutSelector = createStructuredSelector({
  aboutText: getDb('about'),
  aboutImgSrc: getDb('aboutImgSrc'),
  serviceText: getDb('service'),
  distributedText: getDb('distributed'),
})
