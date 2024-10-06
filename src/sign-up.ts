import { gql } from '@apollo/client';

// Define the mutation
export const SIGNUP_MUTATION = gql`
  mutation SignUp($createUserInput: CreateUserInput!) {
    signUp(createUserInput: $createUserInput) {
      email
      password
    }
  }
`;
