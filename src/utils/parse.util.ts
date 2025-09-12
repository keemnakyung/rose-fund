// 공통
export const parseStr = (str: string | null | undefined): string => str ?? "";

export const parseNum = (num: number | null | undefined): number => num ?? 0;

export const parseBool = (bool: boolean | null | undefined): boolean => bool ?? false;

export const parseObj = <T extends object>(obj: T | null | undefined): T => obj ?? ({} as T);

export const parseArr = <T>(arr: T[] | null | undefined): T[] => arr ?? [];

export const parseIdx = (str: string | null | undefined): string => str ?? "00000000-0000-0000-0000-000000000000";

export const filterData = (data: any) => {
  const filterData = Object.fromEntries(
    Object.entries(data).filter(([key, value]) => value !== undefined && value !== null)
  )

  return filterData;
}