import type { EnlightenerInfo } from "@/types.ts";

import ViMasterDb from "@/data/masters/vi/AllMasterViDb.tsx";

import InMasterDb from "@/data/masters/InMasterDb.tsx";

import JpMasters from "@/data/masters/jp/AllMasterJpDb.tsx";

import KoMasterDb from "@/data/masters/KoMasterDb.tsx";

import CnMasters from "@/data/masters/cn/AllMasterCnDb.tsx";


export const InMasters: EnlightenerInfo[] = InMasterDb;
export const ViMasters: EnlightenerInfo[] = ViMasterDb;
export const KoMasters: EnlightenerInfo[] = KoMasterDb;

const AllMasters: EnlightenerInfo[] = [
  ...InMasters,
  ...CnMasters.flat(),
  ...JpMasters.flat(),
  ...ViMasters.flat(),
  ...KoMasters,
];

export default AllMasters
