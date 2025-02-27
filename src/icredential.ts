import CredentialModel from './credential_model';
export default interface ICredential {
    getCredential: ()=> Promise<CredentialModel>
}
