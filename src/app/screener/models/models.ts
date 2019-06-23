export interface ScreenerProfile {
  name: string;
  description: string;
  _id: string;
  items: ScreenerDetail [];
}

export interface ScreenerDetail {
  name: string;
  detailId: string;
  profileId: string;
  maxValue: number;
  minValue: number;
}

export interface ScreenerQResult  {
  companyCode: string;
  industry: string;
  items: ScreenerQProperty[];
}
export interface ScreenerQProperty {
  id: string;
  name: string;
  value: number;
  type: string;
}
