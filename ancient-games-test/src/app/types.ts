export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type BoxConnection = {
  __typename?: "BoxConnection"
  pageInfo: PageInfo
  edges?: Maybe<Array<Maybe<BoxEdge>>>
  total?: Maybe<Scalars["Int"]>
}

export type BoxEdge = {
  __typename?: "BoxEdge"
  node?: Maybe<Box>
  cursor: Scalars["String"]
}

export type PageInfo = {
  __typename?: "PageInfo"
  hasNextPage: Scalars["Boolean"]
  hasPreviousPage: Scalars["Boolean"]
  startCursor?: Maybe<Scalars["String"]>
  endCursor?: Maybe<Scalars["String"]>
}

export type Box = {
  __typename?: "Box"
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  iconUrl?: Maybe<Scalars["String"]>
  cost?: Maybe<Scalars["Float"]>
}

export type OpenBoxInput = {
  boxId: Scalars["ID"]
  amount?: Maybe<Scalars["Int"]>
  multiplierBoxBet?: Maybe<Scalars["Float"]>
}

export type BoxOpeningConnection = {
  __typename?: "BoxOpeningConnection"
  pageInfo: PageInfo
  edges?: Maybe<Array<Maybe<BoxOpeningEdge>>>
  total?: Maybe<Scalars["Int"]>
}

export type BoxOpeningEdge = {
  __typename?: "BoxOpeningEdge"
  node?: Maybe<BoxOpening>
  cursor: Scalars["String"]
}

export type BoxOpening = {
  __typename?: "BoxOpening"
  id: Scalars["ID"]
}

export type ItemVariant = {
  __typename?: "ItemVariant"
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  value: Scalars["Float"]
}

export type Item = {
  id: Scalars["ID"]
}

export type User = {
  __typename?: "User"
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  wallets?: Maybe<Array<Maybe<Wallet>>>
}

export type Wallet = {
  __typename?: "Wallet"
  id: Scalars["ID"]
  amount?: Maybe<Scalars["Float"]>
  currency: Scalars["String"]
}
