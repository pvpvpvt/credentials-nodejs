import CredentialModel from './credential_model';
import ICredential from './icredential';

export default class BearerTokenCredential implements ICredential {
  bearerToken?: string
  constructor(bearerToken: string) {
    if (!bearerToken) {
      throw new Error('Missing required bearerToken option in config for bearer');
    }
    this.bearerToken = bearerToken;
  }

  async getCredential(): Promise<CredentialModel> {
    return new CredentialModel({
      bearerToken: this.bearerToken,
      type: 'bearer',
    });
  }
}