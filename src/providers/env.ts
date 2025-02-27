import Credentials from '../credentials';
import CredentialsProvider from '../credentials_provider';
import { Config } from '../configure/config';

export default class EnvironmentVariableCredentialsProvider implements CredentialsProvider {
  static builder() {
    return new EnvironmentVariableCredentialsProviderBuilder();
  }

  async getCredentials(): Promise<Credentials> {
    const accessKeyId = process.env[Config.ENV_PREFIX + 'ACCESS_KEY_ID'];
    if (!accessKeyId) {
      throw new Error(`unable to get credentials from enviroment variables, Access key ID must be specified via environment variable (${Config.ENV_PREFIX}ACCESS_KEY_ID)`)
    }

    const accessKeySecret = process.env[Config.ENV_PREFIX + 'ACCESS_KEY_SECRET'];
    if (!accessKeySecret) {
      throw new Error(`unable to get credentials from enviroment variables, Access key secret must be specified via environment variable (${Config.ENV_PREFIX}ACCESS_KEY_SECRET)`)
    }

    const securityToken = process.env[Config.ENV_PREFIX + 'SECURITY_TOKEN'];

    return Credentials.builder()
      .withAccessKeyId(accessKeyId)
      .withAccessKeySecret(accessKeySecret)
      .withSecurityToken(securityToken)
      .withProviderName(this.getProviderName())
      .build();
  }


  getProviderName(): string {
    return 'env';
  }

  constructor(builder: EnvironmentVariableCredentialsProviderBuilder) {

  }
}

class EnvironmentVariableCredentialsProviderBuilder {
  build() {
    return new EnvironmentVariableCredentialsProvider(this);
  }
}
