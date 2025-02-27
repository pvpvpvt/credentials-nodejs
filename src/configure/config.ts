
export class Config {
  static readonly ENV_PREFIX: string = "{{env_prefix}}";
  static readonly USER_AGENT_PREFIX: string = "{{user_agent_prefix}}";
  static readonly CREDENTIAL_FILE_PATH: string = "{{credential_file_path}}";
  static readonly CLI_CONFIG_DIR: string = "{{config_path}}";
  static readonly STS_DEFAULT_ENDPOINT: string = '{{sts_default_endpoint}}';
  static readonly ENDPOINT_SUFFIX: string = '{{endpoint_suffix}}';
  static readonly ECS_METADATA_HOST: string = '{{metadata_host}}';
  static readonly ECS_METADATA_HEADER_PREFIX: string = '{{imds_header_prefix}}';
  static readonly SIGN_PREFIX: string = '{{sign_prefix}}';
  static readonly SIGNATURE_TYPE_PREFIX: string = '{{signature_type_prefix}}';
}