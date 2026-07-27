export enum ApiMessageType {
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
}

export type ApiMessage = {
  readonly message: string;
  readonly type: ApiMessageType;
};

export type ApiMessagesResponse = {
  readonly messages: readonly ApiMessage[];
};
