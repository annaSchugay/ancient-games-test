import { gql } from 'apollo-angular'

export const GET_USER = gql`
    query {
      currentUser {
        id
        name
        wallets {
          id
          amount
          currency
        }
      }
    }
`;

export const GET_BOXES = gql`
    query {
      boxes(free: false, purchasable: true, openable: true) {
        edges {
          node {
            id
            name
            iconUrl
            cost
          }
        }
      }
    }
`;

export const UPDATE_WALLET_SUBSCRIPTION = gql`
  subscription OnUpdateWallet {
    updateWallet {
      wallet {
        id
        amount
        name
      }
    }
  }
`;

export const OPEN_BOX = gql `
  mutation OpenBox($input: OpenBoxInput!) {
    openBox(input: $input) {
      boxOpenings {
        id
        itemVariant {
          id
          name
          value
        }
      }
    }
  }
`
