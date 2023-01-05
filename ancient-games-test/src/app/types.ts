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
