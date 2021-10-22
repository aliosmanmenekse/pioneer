export const Types = {
  STARTER: 'starter',
  FLOW: 'flow',
  CONDITION: 'condition',
  CHANNEL: 'product',
  ACTION: 'action',
  SPLIT: 'split',
  NEXT_BEST_CHANNEL: 'next-best-channel',
  ON_SITE_TRIGGER: 'on-site-trigger',
  PRODUCT_ACTION: 'product-action',
  CHECK_REACHABILITY: 'check-reachability',
  CHECK_CONDITIONS: 'check-conditions'
}

export const Names = {
  ON_SITE: 'journey-web',
  SMS: 'sms',
  EMAIL: 'email',
  WEB_PUSH: 'web-push',
  APP_PUSH: 'app-push',
  CALL_API: 'call-api',
  FACEBOOK: 'facebook',
  IN_APP: 'in-app',
  WHATSAPP: 'whatsapp',
  GOOGLE_ADS: 'google-ads'
}

export const Icons = {
  SMS: 'line-architect-sms',
  EMAIL: 'line-architect-email'
}

export const Colors = {
  [Types.CONDITION]: '10',
  [Types.FLOW]: '13',
  [Types.CHANNEL]: '7',
  [Types.STARTER]: '27',
  [Types.ACTION]: '8',
  [Types.SPLIT]: '11',
  [Types.NEXT_BEST_CHANNEL]: '12'
}
