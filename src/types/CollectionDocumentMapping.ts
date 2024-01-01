import Inwentarz from "../models/Inwentarz";
import { PracownikAdministracji } from "../models/PracownikAdministracji";
import mongoDB from "mongodb";

export interface DatabaseCollections {
  inwentarz?: mongoDB.Collection;
  pracownicyAdministracji?: mongoDB.Collection;
}

export interface CollectionMappedTypes {
  inwentarz: Inwentarz;
  pracownicyAdministracji: PracownikAdministracji;
}

// export type CollectionType = {
//   [key in keyof DatabaseCollections]: DatabaseCollections[key];
// };

// export type CollectionType = DatabaseCollections[keyof DatabaseCollections];

// export type DocumentType<T extends keyof CollectionType> =
//   CollectionMappedTypes[T];

// const col: CollectionType = "inwentarz";
