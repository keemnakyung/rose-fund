export interface CommonIdxProps {
  idx: string;
}

export interface CommonStatsProps {
  date: number;
  opt_idx?: string;
  stats_idx: string;
  target_idx?: string;
  value: number;
}

export interface CommonFileProps {
  date_active: string;
  date_delete: string;
  file_ext: string;
  file_name_origin: string;
  file_name_real: string;
  file_path: string;
  file_size: number;
  file_type: number;
  file_url: string;
  idx: string;
  is_active: number;
  member_idx: string;
  permit_level: number;
}