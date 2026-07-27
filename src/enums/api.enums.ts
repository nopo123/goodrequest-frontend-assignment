export enum ApiMessageType {
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
}

export enum ApiEndpoint {
  SHELTERS = '/api/v1/shelters/',
  SHELTERS_RESULTS = '/api/v1/shelters/results',
  SHELTERS_CONTRIBUTE = '/api/v1/shelters/contribute',
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
}
